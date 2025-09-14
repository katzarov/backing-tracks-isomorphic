import { z } from "zod";
import { TrackInstrumentEnum, TrackTypeEnum } from "../enums";
import { ENTITY_CONSTRAINTS } from "./constraints";
import { anyHttpsUrlValidator } from "./utils";

const SingleAlbumArtSchema = z
  .object({
    url: anyHttpsUrlValidator,
    width: z.number(),
    height: z.number(),
  })
  .strict()
  .or(z.null());

const AlbumArtSchema = z
  .object({
    small: SingleAlbumArtSchema,
    medium: SingleAlbumArtSchema,
    large: SingleAlbumArtSchema,
  })
  .strict();

const ArtistSchema = z
  .object({
    spotifyUri: z.string().min(1),
    artistName: z.string(),
    createdDate: z.date().or(z.string().datetime()),
    updatedDate: z.date().or(z.string().datetime()),
  })
  .strict();

const TrackMetaSchema = z
  .object({
    spotifyUri: z.string().min(1),
    trackName: z.string(),
    createdDate: z.date().or(z.string().datetime()),
    updatedDate: z.date().or(z.string().datetime()),
  })
  .strict();

const TrackRegion = z
  .object({
    id: z.string().uuid(),
    start: z.number().nonnegative(),
    end: z.number().positive(),
    name: z.string().min(ENTITY_CONSTRAINTS.trackRegionNameMinLength),
  })
  .strict()
  .refine((data) => data.start < data.end, {
    message: "Start time must be lower than end time.",
    path: ["end"],
  });

export const TrackSchema = z
  .object({
    id: z.number(),
    resourceId: z.string().uuid(),
    duration: z.number(),
    trackType: z.nativeEnum(TrackTypeEnum),
    trackInstrument: z.nativeEnum(TrackInstrumentEnum),
    regions: z
      .array(TrackRegion)
      .refine(
        (regions) =>
          new Set(regions.map((r) => r.name)).size === regions.length,
        {
          message: "Region names must be unique.",
          path: ["regions"],
        }
      ),
    meta: TrackMetaSchema.extend({
      artist: ArtistSchema,
      albumArt: AlbumArtSchema,
    }).strict(),
    createdDate: z.date().or(z.string().datetime()),
    updatedDate: z.date().or(z.string().datetime()),
  })
  .strict();

export type ITrack = z.infer<typeof TrackSchema>;

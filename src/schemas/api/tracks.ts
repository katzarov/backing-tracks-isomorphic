import { z } from "zod";
import { TrackSchema } from "../entities";

export const UpdateTrackRequestSchema = TrackSchema.pick({
  trackType: true,
  trackInstrument: true,
  regions: true,
})
  .partial()
  .strict();


export type IUpdateTrackRequest = z.infer<typeof UpdateTrackRequestSchema>;

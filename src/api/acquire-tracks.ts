import { z } from "zod";
import isUrl, { type IsURLOptions } from "validator/lib/isURL";

const youTubeUrlValidationOptions: IsURLOptions = {
  protocols: ["https"],
  host_whitelist: ["www.youtube.com", "youtube.com", "youtu.be"],
};

const youTubeUrlValidator = z
  .string()
  .min(1)
  .refine((val) => isUrl(val, youTubeUrlValidationOptions), {
    message: "Not a valid YouTube URL",
  });

export const GetYoutubeVideoInfoRequestSchema = z.object({
  url: youTubeUrlValidator,
});

export type IGetYoutubeVideoInfoRequest = z.infer<
  typeof GetYoutubeVideoInfoRequestSchema
>;

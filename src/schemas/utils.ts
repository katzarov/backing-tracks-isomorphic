import { z } from "zod";
import isUrl, { type IsURLOptions } from "validator/lib/isURL";

// throw error if undefined prop
// .superRefine((obj, ctx) => {
//   for (const [key, val] of Object.entries(obj)) {
//     if (val === undefined) {
//       ctx.addIssue({
//         code: z.ZodIssueCode.custom,
//         path: [key],
//         message: `cannot be undefined; either omit "${key}" or supply a valid value`,
//       });
//     }
//   }
// });

type RemoveUndefined<T> = {
  [K in keyof T]: Exclude<T[K], undefined>;
};

// use with a transform
export const removeUndefinedProps = <T extends object>(obj: T) => {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (value !== undefined) acc[key as keyof T] = value;
    return acc;
  }, {} as RemoveUndefined<T>);
};

const anyHttpsUrl: IsURLOptions = {
  protocols: ["https"],
};

// TODO actuyally make sure what domain it it coming form as our clients will load this !
export const anyHttpsUrlValidator = z
  .string()
  .min(1)
  .refine((val) => isUrl(val, anyHttpsUrl), {
    message: "Not a valid HTTPS url.",
  });

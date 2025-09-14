export const TrackTypeEnum = {
  BACKING: "BACKING",
  JAM: "JAM",
} as const;

export type ITrackType = (typeof TrackTypeEnum)[keyof typeof TrackTypeEnum];

export const TrackInstrumentEnum = {
  GUITAR: "GUITAR",
  BASS: "BASS",
} as const;

export type ITrackInstrument =
  (typeof TrackInstrumentEnum)[keyof typeof TrackInstrumentEnum];

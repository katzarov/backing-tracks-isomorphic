// Usually such constraints are at the DB level, but we might move to DynamoDB where we cannot enforce such constraints at the database level.
// We will be enforcing this at the app level level. While we are using Postgres now, enforcing such constratins at the DB level for now will be optional.
// If for some reason later on, we decide to update the constraints when we alredy have some records in DB, the contorller output validation might throw.. need to think of how to handle it:
// - at output, either just don't valiadate such things like lenght of strings.
// - or just have two schemas - one for the DTO input validation and one for output.
export const ENTITY_CONSTRAINTS = {
  //   artistNameMinLength: 3, this is coming from spotify.. so we actally don't know, we can assume name could be one character... also when user is able to create arits themselves we will need to factor that in.
  playlistNameMinLength: 4,
  trackRegionNameMinLength: 1,
} as const;

// but know we might want to run whatever the spotify output is throught these schemas as well since we are skipping constraints at hte database level...
// cause we want both flows of acquieing a track to be well validated: both user creating a nwe one (new track namae and artis name) himself or spotify doing it themselves on the server.

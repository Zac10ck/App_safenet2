import { Safenet as TSafenet } from "../api/safenet/Safenet";

export const SAFENET_TITLE_FIELD = "username";

export const SafenetTitle = (record: TSafenet): string => {
  return record.username || record.id;
};

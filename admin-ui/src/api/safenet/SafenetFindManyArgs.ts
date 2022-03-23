import { SafenetWhereInput } from "./SafenetWhereInput";
import { SafenetOrderByInput } from "./SafenetOrderByInput";

export type SafenetFindManyArgs = {
  where?: SafenetWhereInput;
  orderBy?: Array<SafenetOrderByInput>;
  skip?: number;
  take?: number;
};

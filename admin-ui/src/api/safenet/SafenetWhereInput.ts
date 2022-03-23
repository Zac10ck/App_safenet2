import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type SafenetWhereInput = {
  id?: StringFilter;
  key?: StringNullableFilter;
  password?: StringNullableFilter;
  remarks?: IntNullableFilter;
  userId?: IntNullableFilter;
  username?: StringNullableFilter;
};

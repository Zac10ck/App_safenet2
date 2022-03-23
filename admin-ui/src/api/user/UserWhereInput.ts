import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  key?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
};

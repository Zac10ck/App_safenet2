import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  firstName?: SortOrder;
  id?: SortOrder;
  key?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
  username?: SortOrder;
};

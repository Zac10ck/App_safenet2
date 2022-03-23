export type UserUpdateInput = {
  firstName?: string | null;
  key?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: Array<string>;
  username?: string;
};

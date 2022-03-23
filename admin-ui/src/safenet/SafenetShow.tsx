import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const SafenetShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="key" source="key" />
        <TextField label="password" source="password" />
        <TextField label="remarks" source="remarks" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="user_id" source="userId" />
        <TextField label="username" source="username" />
      </SimpleShowLayout>
    </Show>
  );
};

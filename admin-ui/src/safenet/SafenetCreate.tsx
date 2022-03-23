import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const SafenetCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="key" source="key" />
        <TextInput label="password" source="password" />
        <NumberInput step={1} label="remarks" source="remarks" />
        <NumberInput step={1} label="user_id" source="userId" />
        <TextInput label="username" source="username" />
      </SimpleForm>
    </Create>
  );
};

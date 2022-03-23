import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const SafenetEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="key" source="key" />
        <TextInput label="password" source="password" />
        <NumberInput step={1} label="remarks" source="remarks" />
        <NumberInput step={1} label="user_id" source="userId" />
        <TextInput label="username" source="username" />
      </SimpleForm>
    </Edit>
  );
};

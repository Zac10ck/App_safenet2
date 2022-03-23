import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const SafenetList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"safenets"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="key" source="key" />
        <TextField label="password" source="password" />
        <TextField label="remarks" source="remarks" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="user_id" source="userId" />
        <TextField label="username" source="username" />
      </Datagrid>
    </List>
  );
};

import React from "react";
import { Table } from "reactstrap";

const TableShow = ({ children }) => {
  return (
    <>
      <Table responsive hover size="sm">
        {children}
      </Table>
    </>
  );
};

export default TableShow;

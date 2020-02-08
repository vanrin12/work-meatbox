// @flow
import React, { memo } from 'react';
import { Table } from 'react-bootstrap';
import TableHead from './TableHead';
import TableRow from './TableRow';

type Props = {
  tableHeads: Array<{ id: number, name: string }>,
  tableBody: Array<{ id: number }>,
  onClickRow?: Function
};

const TableData = ({ tableHeads, tableBody, onClickRow, rowActive }: Props) => {
  const renderBodyTable = () => {
    return (
      tableBody &&
      tableBody.map(item => (
        <TableRow onClickTableRow={onClickRow} rowItem={item} key={item.id} />
      ))
    );
  };
  const renderBody = () => {
    if (renderBodyTable() && renderBodyTable().length > 0) {
      return renderBodyTable();
    }
    return (
      <tr className="p-3 text-center table-no-data w-100">
        <td colSpan={tableHeads && tableHeads.length} />
      </tr>
    );
  };
  return (
    <Table striped bordered hover responsive>
      <thead>
        <TableHead listItems={tableHeads} />
      </thead>
      <tbody>{renderBody()}</tbody>
    </Table>
  );
};

export default memo<Props>(TableData);

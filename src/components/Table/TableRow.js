// @flow
import React, { memo } from 'react';

type Props = {
  rowItem: Object,
  onClickTableRow?: Function,
  rowActive?: Object
};

const TableRow = ({ rowItem, onClickTableRow, rowActive }: Props) => {
  return (
    <tr
      className={`${onClickTableRow ? 'row-cursor-pointer' : ''} ${
        rowActive && rowActive.id === rowItem.id ? 'row-active' : ''
      }`}
    >
      {Object.keys(rowItem).map(item =>
        item === 'avatar' ? (
          <td key={item}>
            <img src={rowItem[item]} alt="alt" />
          </td>
        ) : (
          <td key={item}>{rowItem[item]}</td>
        )
      )}
    </tr>
  );
};

export default memo<Props>(TableRow);

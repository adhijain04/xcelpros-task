import React, { useState } from 'react';
import styled from 'styled-components';
import tableData from './TableData';

const { columns, data } = tableData(5);

const Table = () => {
  const [cols, setCols] = useState(columns);
  const [rows, setRows] = useState(data);
  const [dragOver, setDragOver] = useState('');

  const handleDragStart = (e, rId) => {
    const { id } = e.target;
    const idx = rId ? rows.map(row => row.price).indexOf(rows[rId].price) : cols.indexOf(id);
    e.dataTransfer.setData(rId ? 'rowIdx' : 'colIdx', idx);
  };

  const handleDragOver = e => e.preventDefault();
  const handleDragEnter = (e, rId) => {
    const { id } = e.target;
    setDragOver(rId ? rId : id);
  };

  const handleOnDrop = (e, rId) => {
    const { id } = e.target;
    const droppedColIdx = rId ? rows.map(row => row.price).indexOf(rows[rId].price) : cols.indexOf(id);
    const draggedColIdx = (e.dataTransfer.getData(rId ? 'rowIdx' : 'colIdx'));
    const tempCols = [...cols];
    const tempRows = [...rows];

    if (rId) {
      if (draggedColIdx) {
        tempRows[draggedColIdx] = rows[droppedColIdx];
        tempRows[droppedColIdx] = rows[draggedColIdx];
        setRows(tempRows);
      } else {
        alert(`couldn't drag the row`)
      }
    } else {
      tempCols[draggedColIdx] = cols[droppedColIdx];
      tempCols[droppedColIdx] = cols[draggedColIdx];
      setCols(tempCols);
    }

    setDragOver('');
  };

  return (
    <div className="table">
      <i class="fas fa-sort-down table-toggler" />
      <TableStyles>
        <thead>
          <tr>
            {cols.map((col, i) => (
              <StyledTh
                id={col}
                key={col}
                draggable
                style={i === 0 ? { paddingLeft: 0, color: "#009AFF" } : null}
                onDragStart={handleDragStart}
                onDragOver={handleDragOver}
                onDrop={handleOnDrop}
                onDragEnter={handleDragEnter}
                dragOver={col === dragOver}
              >
                {col}
              </StyledTh>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <StyledTr
              id={i}
              key={i}
              draggable
              onDragStart={(e) => handleDragStart(e, i)}
              onDragOver={handleDragOver}
              onDrop={(e) => handleOnDrop(e, i)}
              onDragEnter={(e) => handleDragEnter(e, i)}
              dragOver={i === dragOver}
            >
              {Object.entries(row).map(([k, v], idx) => (
                <Cell key={v} dragOver={cols[idx] === dragOver}>
                  {row[cols[idx]]}
                </Cell>
              ))}
            </StyledTr>
          ))}
          <div className="add-row">
            + Add Row
          </div>
        </tbody>
      </TableStyles>
      <i className="fas fa-plus-circle add-column" />
    </div>
  );
};

export default Table;

const TableStyles = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Cell = styled.td`
  background: #ddd;
  font-size: 14px;
  text-align: left;
  vertical-align: center;
  padding: 20px;
  border-bottom: 2px solid #eef0f5;
  text-transform: lowercase;
  border-left: ${({ dragOver }) => dragOver && '5px solid red'};
`;

const StyledTh = styled.th`
  white-space: nowrap;
  color: #716f88;
  letter-spacing: 1.5px;
  font-weight: bold;
  font-size: 14px;
  text-align: left;
  vertical-align: middle;
  padding: 20px;
  border-bottom: 2px solid #eef0f5;
  text-transform: uppercase;
  cursor: grab;
  border-left: ${({ dragOver }) => dragOver && '5px solid red'};
`;

const StyledTr = styled.tr`
  cursor: grab;
  white-space: nowrap;
  color: #716f88;
  letter-spacing: 1.5px;
  font-weight: 600;
  font-size: 14px;
  text-align: left;
  vertical-align: middle;
  padding: 20px;
  border-bottom: 2px solid #eef0f5;
  text-transform: uppercase;
  border-top: ${({ dragOver }) => dragOver && 'solid red'};
`;

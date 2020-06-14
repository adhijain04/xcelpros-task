import { commerce } from 'faker';

const tableData = (totalRows = 5) => {
  let rows = [];
  for (let i = 0; i < totalRows; i++) {
    rows.push({
      'Product name': commerce.productName(),
      'Department': commerce.department(),
      'price': commerce.price(),
      'Material': commerce.productMaterial(),
      'Color': commerce.color()
    });
  }

  return {
    data: rows,
    columns: Object.keys(rows[0])
  };
};

export default tableData;
import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';

//nested data is ok, see accessorKeys in ColumnDef below
const data = [
  {
    category:'Grocery',
    date: '16/03/2023',
    amount: '100',
    currency: 'rupee',
  },
  {
    category:'Home',
    date: '12/02/2022',
    amount: '150',
    currency: 'rupee',
  },
  {
    category:'Personal',
    date: '15/02/2022',
    amount: '1661',
    currency: 'dollar',
  },
  {
    category:'Wash',
    date: '06/03/2023',
    amount: '100',
    currency: 'rupee',
  },
  {
    category:'Dairy',
    date: '16/01/2023',
    amount: '560',
    currency: 'pound',
  },
  {
    category:'Kitchen',
    date: '16/03/2021',
    amount: '20',
    currency: 'euro',
  },
  {
    category:'Travel',
    date: '12/02/2022',
    amount: '50',
    currency: 'rupee',
  },
  {
    category:'Food',
    date: '15/02/2022',
    amount: '5461',
    currency: 'dollar',
  },
  {
    category:'Sports',
    date: '16/03/2023',
    amount: '650',
    currency: 'rupee',
  },
  {
    category:'Hair',
    date: '16/01/2023',
    amount: '970',
    currency: 'pound',
  },
  {
    category:'Grocery',
    date: '16/03/2023',
    amount: '1650',
    currency: 'rupee',
  },
  {
    category:'Home',
    date: '12/02/2022',
    amount: '9874',
    currency: 'euro',
  },
  {
    category:'Games',
    date: '15/02/2022',
    amount: '6561',
    currency: 'dollar',
  },
  {
    category:'Grocery',
    date: '01/03/2023',
    amount: '8780',
    currency: 'rupee',
  },
  {
    category:'Dairy',
    date: '16/01/2023',
    amount: '5560',
    currency: 'pound',
  },
  {
    category:'Medicine',
    date: '16/03/2023',
    amount: '1002',
    currency: 'rupee',
  },
  {
    category:'Home',
    date: '12/02/2022',
    amount: '15074',
    currency: 'rupee',
  },
  {
    category:'gg',
    date: '15/02/2022',
    amount: '16641',
    currency: 'dollar',
  },
  {
    category:'Car',
    date: '16/03/2023',
    amount: '101',
    currency: 'rupee',
  },
  {
    category:'Drinks',
    date: '16/01/2023',
    amount: '550',
    currency: 'pound',
  },
];

const Example = () => {
  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: 'category', //access nested data with dot notation
        header: 'Category',
      },
      {
        accessorKey: 'date',
        header: 'Date',
      },
      {
        accessorKey: 'amount', //normal accessorKey
        header: 'Amount',
      },
      {
        accessorKey: 'currency',
        header: 'Currency',
      }
    ],
    [],
  );

  return <MaterialReactTable columns={columns} data={data} />;
};

export default Example;

import { useEffect, useState } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

function User() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((res) => setData(res.entries));
  }, []);

  const columns: GridColDef[] = [
    { field: 'API', headerName: 'API', width: 100, sortable: true },
    {
      field: 'Description',
      headerName: 'Description',
      width: 200,
      sortable: false,
    },
    { field: 'Cors', headerName: 'Cors', width: 80, sortable: false },
    { field: 'Link',headerName: 'Links', sortable: false,renderCell:((params)=><a href={params.value} target='_blank'>Link</a>) },
  ];
  return (
    <>
      <div style={{ height: '90vh', width: '100%' }}>
        {
          <DataGrid
            rows={data}
            columns={columns}
            getRowId={(row: any) => row.API + row.Description}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 50 },
              },
            }}
          />
        }
      </div>
    </>
  );
}

export default User;

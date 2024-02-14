import { useEffect, useState } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Box } from '@mui/material';

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
    { field: 'Link', headerName: 'Links', sortable: false, renderCell: ((params) => <a href={params.value} target='_blank'>Link</a>) },
  ];
  return (
    <Box flex={6} p={2}>
      <div style={{ height: '110vh', width: '100%' }}>
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
    </Box>
  );
}

export default User;

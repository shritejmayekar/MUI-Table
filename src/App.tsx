import { FC, useState } from 'react';
import User from './component/User';

import './style.css';
import Home from './component/Home';
import { Box } from '@mui/material';
import SideBar from './component/SideBar';
import { Stack } from '@mui/system';

export const App: FC<{ name: string }> = ({ name }) => {
  const [currentTab, setCurrentTab] = useState<string>("home")
  return (
   <Box>
    <Stack direction="row" spacing={2} justifyContent="space-between">
    <SideBar setCurrentTab={setCurrentTab} currentTab={currentTab}/>
      { currentTab === "home" ? <Home/> : <User/> }
    </Stack>
   </Box>
  );
};

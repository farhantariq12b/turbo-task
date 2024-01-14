import { Box, Drawer, Typography } from '@mui/material';
import React from 'react';
import UserProfile from '../UserProfile';
import templateSVG from '../../assets/svg/template.svg'
import { SIDEBAR_WIDTH } from '../../constants';

const Sidebar: React.FC = () => {
  return (
    <Drawer
      sx={{
        width: SIDEBAR_WIDTH,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: SIDEBAR_WIDTH,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box display='flex' justifyContent={'space-between'} flexDirection='column' height={'100%'}>
        <Box>
          <Box padding='32px 40px'>
            <Typography variant='h2' color='#2B579A' fontStyle='italic' fontWeight='500'>
              µDocx
            </Typography>
          </Box>
          <Box padding='8px 48px' display='flex' alignItems='center'>
            <img src={templateSVG} alt='template-svg' />
            <Typography variant='body1' color='#2B579A' marginLeft='12px'>
              Template
            </Typography>
          </Box>
        </Box>
        <UserProfile />
      </Box>

    </Drawer>
  );
};

export default Sidebar;

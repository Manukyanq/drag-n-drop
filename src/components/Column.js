import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const Column = ({ title, children, onDrop }) => {
  return (
    <Box flex='1'>
      <Typography textAlign='center' variant='h3' color='white'>
        {title}
      </Typography>
      <Box
        bgcolor='info.light'
        p='12px 16px'
        borderRadius='4px'
        minHeight='720px'
        onDragOver={e => {
          e.preventDefault();
        }}
        onDrop={onDrop}
      >
        {children}
      </Box>
    </Box>
  );
};

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const Ticket = ({ title, isHidden, description, user, ...rest }) => {
  return (
    <Box
      display='flex'
      m='12px'
      p='16px'
      color='white'
      borderRadius='4px'
      sx={{ flexDirection: 'column', opacity: isHidden ? '0' : '1' }}
      bgcolor='primary.main'
      draggable='true'
      {...rest}
    >
      <Typography variant='h3'>{title}</Typography>
      <Typography>{description}</Typography>
      <Typography
        mt='8px'
        borderRadius='16px'
        bgcolor='info.dark'
        p='4px 8px'
        width='fit-content'
        alignSelf='flex-end'
      >
        {user.name}
      </Typography>
    </Box>
  );
};

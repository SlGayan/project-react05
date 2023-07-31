import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href='https://nextjs.org/'>HOME</Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href='./about'>About</Link>
          </Typography>   
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href='./blog'>Blogs</Link>
          </Typography>   
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href='./contact'>Contact</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
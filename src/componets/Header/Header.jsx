import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Dialog from '../Dialog/Dialog';

export default function Header() {
  return (
    <div>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6">Todo List</Typography>
          <Dialog />
        </Toolbar>
      </AppBar>
    </div>
  );
}

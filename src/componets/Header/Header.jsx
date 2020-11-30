import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import AddTaskForm from '../AddTaskForm/AddTaskForm';

export default function Header() {
  return (
    <div>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6">Todo List</Typography>
          <AddTaskForm />
        </Toolbar>
      </AppBar>
    </div>
  );
}

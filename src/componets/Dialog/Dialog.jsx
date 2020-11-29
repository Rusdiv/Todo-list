import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import { addTaskAC } from '../../Store/reducers/tasksReducer';
import { connect } from 'react-redux';

function AppDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [taskName, setTaskName] = React.useState('');
  const [taskText, setTaskText] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleChangeName = (e) => {
    setTaskName(e.target.value);
  };

  const handleChangeText = (e) => {
    setTaskText(e.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = () => {
    props.addTaskAC(taskName, taskText);
    setOpen(false);
  };

  return (
    <div>
      <IconButton onClick={handleClickOpen} aria-label="delete">
        <AddIcon color="inherit" />
      </IconButton>
      <Dialog
        fullWidth={true}
        maxWidth="lg"
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Task</DialogTitle>
        <DialogContent>
          <TextField
            onChange={handleChangeName}
            autoFocus
            value={taskName}
            color="secondary"
            label="Task name"
            type="text"
            fullWidth
          />
          <TextField
            onChange={handleChangeText}
            value={taskText}
            color="secondary"
            label="Task text"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleAdd} color="secondary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default connect(null, { addTaskAC })(AppDialog);

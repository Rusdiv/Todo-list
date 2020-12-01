import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import {
  addTaskAC,
  addToLocalStateAC,
} from '../../store/reducers/tasksReducer';
import { connect } from 'react-redux';

function AppDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [taskName, setTaskName] = React.useState('');
  const [taskText, setTaskText] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const ChangingName = (e) => {
    setTaskName(e.target.value);
  };

  const ChangingText = (e) => {
    setTaskText(e.target.value);
  };

  const addTask = () => {
    props.addTaskAC(taskName, taskText);
    props.addToLocalStateAC();
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
            onChange={ChangingName}
            autoFocus
            value={taskName}
            color="secondary"
            label="Task name"
            type="text"
            fullWidth
          />
          <TextField
            onChange={ChangingText}
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
          <Button onClick={addTask} color="secondary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasksReducer.tasks,
  };
};

export default connect(mapStateToProps, { addToLocalStateAC, addTaskAC })(
  AppDialog
);

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { connect } from 'react-redux';
import {
  addToLocalStateAC,
  toggleCheckAC,
  removeTaskAC,
} from '../../store/reducers/tasksReducer';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

function ListItem(props) {
  const classes = useStyles();

  const changeCheck = () => {
    props.toggleCheckAC(props.id);
    props.addToLocalStateAC();
  };

  const removeTask = () => {
    props.removeTaskAC(props.id);
    props.addToLocalStateAC();
  };

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions1-content"
          id="additional-actions1-header"
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<Checkbox onClick={changeCheck} checked={props.checked} />}
            label={props.name}
          />
          <Button onClick={removeTask} variant="contained" color="secondary">
            Remove
          </Button>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="textSecondary">{props.text}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasksReducer.tasks,
  };
};

export default connect(mapStateToProps, {
  removeTaskAC,
  addToLocalStateAC,
  toggleCheckAC,
})(ListItem);

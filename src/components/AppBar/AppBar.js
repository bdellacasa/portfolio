import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: '100vw'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  text: {
    fontSize: '0.7em'
  },
}));

const ButtonAppBar = (props) => {
  const classes = useStyles();

  const handleClick = (color, text) => {
    props.update(color, text)
  };

  const colors = ["#BF0ECB", "#9C1AFF", "#3080A8", "#30A898", "#29C78D"];

  return (
    <div className={classes.root}>
      <AppBar position="static" color={'inherit'}>
        <Toolbar>
            {['About', 'Education', 'Experience', 'Skills', 'Contact'].map((text, index) => (
                <Button className={classes.text} color="inherit" onClick={() => handleClick(colors[index], text)}>{text}</Button>
            ))}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default ButtonAppBar;
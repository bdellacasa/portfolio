import React from 'react';
import Zoom from '@material-ui/core/Zoom';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Close from '@material-ui/icons/Close';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import MailIcon from '@material-ui/icons/Mail';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    height: 180,
  },
  container: {
    display: 'flex',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    marginLeft: '10px',
    marginTop: '10px',
    height: '50px',
    backgroundColor: 'white'
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    height: '100vh',
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  listItem: {
    marginLeft: drawerWidth * 0.1,
    display: 'flex',
    "&:hover": {
      transition: 'all .3s ease',
      transform:'scale(1.2)',
      marginLeft: '32px'
    }
  },
  listIcon: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40px',
    height: '40px'
  },
  listText: {
    flexDirection: 'column',
    width: '200px',
    height: '20px',
    marginTop: '10px'
  },
}));

const Menu = (props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [showMenuButton, setShowMenuButton] = React.useState(true);
    const [loadMenuItems, setLoadMenuItems] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
        setShowMenuButton(false)
        setLoadMenuItems(true)
        props.open(true);
      };
    
    const handleDrawerClose = () => {
        setLoadMenuItems(false);
        setTimeout(() => {
          setOpen(false);
        }, 1000)
        
        setTimeout(() => {
          props.open(false);
        }, 2000)
    };

    const timeout = () => {
        setTimeout(() => {
          setShowMenuButton(true)
        }, 600)
    };

    const handleClick = (color, text) => {
      props.update(color, text)
    };

    const colors = ["#BF0ECB", "#9C1AFF", "#3080A8", "#30A898", "#29C78D"];
    const icons = [<AccountCircleIcon fontSize={"large"}/>, <SchoolIcon fontSize={"large"}/>, <WorkIcon fontSize={"large"}/>, <EmojiObjectsIcon fontSize={"large"}/>, <MailIcon fontSize={"large"}/> ];

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                { showMenuButton && <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, open && classes.hide)}
                >
                     <MenuIcon />
                </IconButton> }
                <Zoom in={open} timeout={700} onExit={() => timeout()} style={{ transformOrigin: "12% 3%" }}>
                    <Paper
                        className={classes.drawer}
                        open={open}
                    >
                        <div className={classes.drawerHeader}>
                            <IconButton onClick={handleDrawerClose}>
                                {loadMenuItems ? <Close /> : <MenuIcon />}
                            </IconButton>
                        </div>
                        <List>
                        {['About', 'Education', 'Experience', 'Skills', 'Contact'].map((text, index) => (
                          <Slide
                            key={index} 
                            direction="up"
                            in={loadMenuItems}
                            timeout={index * 500}
                            mountOnEnter
                          >
                            <ListItem button key={index} style={{ paddingBottom: '5vh' }}>
                              <div className={classes.listItem} onClick={() => handleClick(colors[index], text)}>
                                <ListItemIcon className={classes.listIcon}>
                                  {icons[index]}
                                </ListItemIcon>
                                <ListItemText className={classes.listText} primary={text} />
                              </div>
                            </ListItem>
                          </Slide>
                        ))}
                        </List>
                    </Paper>
                </Zoom>
            </div>
        </div>
    );
}

export default Menu;
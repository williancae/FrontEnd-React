import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import Link from 'next/link';


const drawerWidth = 290;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    fontSize: 23,
    // necessary for content to be below app bar
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
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));

export default function Menu(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    
    <div>
      <section className={props.className}  id="nav-menu" position="fixed" >

        <Grid container justify="center">

          <div className="logo-menu">
            <img src="/images/Desktop/001_navbar/logo_thip_navbar.png" />
          </div>

          <div className="pontinhos">
            <img src="/images/Desktop/001_navbar/pontinhos.png" />
          </div>

          <div className="nav-desktop">
            <ul>
              <li> 
                
              <Link href="/">
              <a>INÍCIO</a>
              </Link>
              
              </li>
              <li> 
                
                <Link href="/#minimal-bootstrap-carousel">
                <a>PROJETOS</a>
                </Link>
                
                </li>
                <li> 
                
                <Link href="/#contact">
                <a>CONTATO</a>
                </Link>
                
                </li>
            </ul>
          </div>

          <div className="pontinhos">
            <img src="/images/Desktop/001_navbar/pontinhos.png" />
          </div>

          <a href="https://admin.thip.com.br" className="button" target="_blank">
            <img src="/images/Desktop/001_navbar/botao-acesso.png" />
          </a>

          <div className="icone-mobile">
            <img aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              className={clsx(open && classes.hide)}
              src="/images/Mobile/001_navbar/icone-menu-hamburger.png">
            </img>
          </div>

          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="right"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            </div>
            <Divider />
            <List>
              <ListItem>
                <ListItemIcon><HomeIcon/></ListItemIcon>
                <ListItemText>

                <Link href="/">
              <a className="sizelist">INÍCIO</a>
                </Link>

                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><AccountTreeIcon/></ListItemIcon>
                <ListItemText>
                  
                <Link href="/#minimal-bootstrap-carousel">
              <a className="sizelist">PROJETOS</a>
                </Link>
                  
              </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><ContactMailIcon/></ListItemIcon>
                <ListItemText>
                  
                <Link href="/#contact">
                  <a  className="sizelist" >CONTATO</a>
                </Link>
              </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon><ContactMailIcon/></ListItemIcon>
                <ListItemText><a href="https://admin.thip.com.br" target="_blank" className="sizelist" >ACESSO</a></ListItemText>
              </ListItem>
            </List>
          </Drawer>

        </Grid>

      </section>
    </div>
  );
}

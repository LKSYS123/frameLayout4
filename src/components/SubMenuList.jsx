import { Button, Container, makeStyles, Typography} from "@material-ui/core";


import { Bookmark, ExitToApp, Home, Person, PhotoCamera, PlayCircleOutline, Settings, Storefront, TabletMac, List, Map, OpenInBrowser, } from "@material-ui/icons";
import { Link } from 'react-router-dom';
import { Outlet } from "react-router";
import Post from "./Post";

const useStyles = makeStyles((theme) => ({
    container:{
        paddingTop: theme.spacing(10),
    },
    button: {
        // display: "flex",
        // color: "success",
        // variant:"outlined",
        right: 12,
        bottom: 5,
        // alignItems: "center",        
        // marginBottom: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            marginBottom: theme.spacing(1),
            cursor: "pointer",
            
        },
    },
    icon: {
        marginRight: theme.spacing(1),
        paddingLeft: "25px",
        // [theme.breakpoints.down("sm")]: {
        //     fontSize: "18px",
        //     color: "white",
        //     marginRight: theme.spacing(3),
        // },
    },
    text: {
        fontWeight: 500,
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    }    
}));

const SubMeunList = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
        <div>
            <Button className={classes.button} omponent={Link} to='/' >
                <Home className={classes.icon} />                                                                
                <Typography className={classes.text}>Homepage</Typography>
            </Button>                            
        </div>
        <div>
            <Button className={classes.button} component={Link} to='/DataGridList' >
                <List className={classes.icon} />
                <Typography className={classes.text} >Cargo List</Typography>
            </Button>
        </div>
    </Container>
    
  );
};

export default SubMeunList;
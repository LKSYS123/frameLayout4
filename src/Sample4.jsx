import React from "react";
import { Container, makeStyles} from "@material-ui/core";
import { Routes, Route, Outlet } from "react-router-dom";
// import Post from "./Post";


const useStyles = makeStyles((theme) => ({
    container:{
        paddingTop: theme.spacing(10),
    }
}));

const Sample4 = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
    <div>

Sample 4444444<br/>
Sample 44444<br/>
Sample 44444444<br/>
Sample 4444444<br/>

    </div>

    
    </Container>
  );
};

export default Sample4;
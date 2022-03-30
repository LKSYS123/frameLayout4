import React from "react";
import { Container, makeStyles} from "@material-ui/core";
import { Routes, Route, Outlet } from "react-router-dom";
// import Post from "./Post";
// import PopRouter from "./PopRouter";

const useStyles = makeStyles((theme) => ({
    container:{
        paddingTop: theme.spacing(10),
    }
}));

const Sample3 = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
    <div>
      
Sample 33333333333<br/>
Sample 333333333<br/>
Sample 33333333<br/>
Sample 3333333<br/>
Sample 333333<br/>
Sample 333<br/>
Sample 333<br/>
Sample 3333<br/>
Sample 33<br/>
Sample 33<br/>
Sample 33444


    </div>

    
    </Container>
  );
};

export default Sample3;
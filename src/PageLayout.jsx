import React from "react";
import { Grid, makeStyles} from "@material-ui/core";
import Add from "./components/Add";
import Feed from "./components/Feed";
import Leftbar from "./components/Leftbar";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Abcd from "./components/Abcd";
import Sample1 from "./pages/Sample1";
import Sample2 from "./pages/Sample2";

import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Sample3 from "./Sample3";
import Rutas from "./Rutas";
import { Box } from "@mui/system";


const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const PageLayout = () => {
  const classes = useStyles();
  return (

      <div>

          <Navbar/>
          
          {/* <Router exact path="/" component={ Feed } /> */}
          {/* <Router path="/abcd" component={Abcd} /> */}

          <Grid container="container">
              <Grid item style={{width:'100px'}}>
                  <Leftbar/>
              </Grid>
              
              <Grid item xs>

              
                <Rutas />
              
                <Outlet />      
              </Grid>
              
              {/* <Grid item="item" sm={3} className={classes.right}>
                  <Rightbar/>
              </Grid> */}
          </Grid>
          
          {/* <Grid container="container">
              <Grid item="item" xs={1}>
                  <Leftbar/>
              </Grid>
              
              <Grid item="item" xs={11}>

              
                <Rutas />
              
                <Outlet />      
              </Grid> */}
              
              {/* <Grid item="item" sm={3} className={classes.right}>
                  <Rightbar/>
              </Grid> */}
          {/* </Grid> */}
          {/* <Add/> */}
          
      </div>

  );
};

export default PageLayout;
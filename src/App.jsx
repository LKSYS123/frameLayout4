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

import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Sample3 from "./Sample3";
// import Rutas from "./Rutas";
import PageLayout from "./PageLayout";
import Sample4 from "./Sample4";
import DataGridList from "./pages/DataGridList";
import Openlayer1 from "./pages/Openlayer1";
import OpenlayerPop from "./pages/OpenlayerPop";
import PopupLayer from "./pages/PopupLayer";
import Rutas from "./Rutas";


const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    // <Router>
      <Routes>
        {/* <Route path="/" element={<Sample3 />} /> */}
        <Route path="/" element={<PageLayout />} >          
          <Route path="/sample1" element={<Sample1 />} />
          <Route path="/DataGridList" element={<DataGridList />} />
          <Route path="/Openlayer1" element={<Openlayer1 />} />
          <Route path="/OpenlayerPop" element={<OpenlayerPop />} />
        </Route>        
        <Route path="/PopupLayer" element={<PopupLayer />} />
      </Routes>
    // </Router>
      // <Rutas />

      // <div>

      //     <Navbar/>
          
      //     {/* <Router exact path="/" component={ Feed } /> */}
      //     {/* <Router path="/abcd" component={Abcd} /> */}
      //     <Grid container="container">
      //         <Grid item="item" sm={2} xs={2}>
      //             <Leftbar/>
      //         </Grid>
              
      //         <Grid item="item" sm={10} xs={10}>

              
      //           <Rutas />
              

      //         </Grid>
              
      //         {/* <Grid item="item" sm={3} className={classes.right}>
      //             <Rightbar/>
      //         </Grid> */}
      //     </Grid>
      //     <Add/>

      // </div>

  );
};

export default App;
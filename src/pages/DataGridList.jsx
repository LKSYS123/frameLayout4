import React, { Component, useState, useEffect, } from "react";
import { retrieveTutorials, findTutorialsByTitle, deleteAllTutorials } from "../actions/tutorials";
import * as actions from "../actions/tutorials";

import { Button, Container, Typography, Fab, FormControlLabel, FormLabel, MenuItem, Modal, Radio, RadioGroup, Snackbar, TextField, Tooltip} from "@material-ui/core";

import { withStyles, makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from "@material-ui/data-grid";

import store from "../store";

const useStyles = makeStyles((theme) => ({
    card: {
        marginBottom: theme.spacing(5),
    },
    media: {
        height: 450,
        [theme.breakpoints.down("sm")]: {
            height: 170,
        },
    },
    container:{
        paddingTop: theme.spacing(10),
    },
    text: {
        fontWeight: 500,
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
    title:{
        fontSize:20,
        fontWeight:500,        
        color:"secondary",
        paddingBottom: theme.spacing(2),
    },    
    form: {
        padding: theme.spacing(2),
    },
    item: {
        marginBottom: theme.spacing(3),
    },
}));

const columns = [
    { field: 'cd_cargo_rep', headerName: 'cd_cargo_rep', width: 200, align: 'center', headerAlign: 'center'},
    { field: 'cd_cust', headerName: 'cd_cust', width: 200, align: 'center', headerAlign: 'center'},
    { field: 'cd_cargo_vest', headerName: 'cd_cargo_vest', width: 200, align: 'center', headerAlign: 'center'},
    { field: 'nm_cargo1', headerName: 'nm_cargo1', width: 200, align: 'center', headerAlign: 'center'}
];

const DataGridList = () => {
const classes = useStyles();

const [open, setOpen] = useState(false);
const [openAlert, setOpenAlert] = useState(false);
const handleClose = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }

  setOpenAlert(false);
};

//   const [cargos, setCargos] = useState(null);
//   const cargos = useSelector((state) => state.CargoTutorial);
const dispatch = useDispatch();
const cargos = useSelector((store) => store.CargoTutorial);

//   const profile = useSelector((state) => state.CargoTutorial);
//   const profile = useSelector((state) => state.tutorialList)
// const profile = useSelector(tutorials) => tutorials.);

  useEffect(() => {
    console.log("=====useEffect===cargosList=call==");            
    // cargosList();
    console.log("=====useEffect===cargosList=0000000==");            
    // actions.getTutorials().then(function(result) {
    //     dispatch(result)
    // });

    // dispatch(actions.retrieveTutorials());   
    dispatch(actions.getTutorials());   

    //  const profile = useSelector((state) => state.CargoTutorial);
     
    // const response = useSelector((store) => store.tutorialList);
    //  const response = this.props.actions.retrieveTutorials();
    //  actions.retrieveTutorialsTT();
    // const profile = useSelector((store) => store.dispatch(actions.retrieveTutorials()));
    // console.log("=====useEffect===cargosList=111111=response="+response.length);
     console.log("=====useEffect===cargosList=111111=cargos="+cargos.cargoData);
    // setCargos(response.data);      


  },[]);

  const rowDatas = cargos.cargoData?.map((record) => {
    return {
        cd_cargo_rep: record?.cd_cargo_rep,
        cd_cust: record?.cd_cust,
        cd_cargo_vest: record?.cd_cargo_vest,
        nm_cargo1: record?.nm_cargo1,   
        id: record?.nm_cargo1,   
    };
  });
//   if (!cargos) retrun null;
  return (      
    <Container className={classes.container}>
      <div>
            <Typography className={classes.title}> Cargo List </Typography>
            <DataGrid rows={ rowDatas } columns={ columns } pageSize={ 5 } checkboxSelection autoHeight disableColumnMenu />
      </div>
      <div>
      <form className={classes.form} autoComplete="off">
        <div className={classes.item}>
            <TextField 
                id="standard-basic" 
                label="Title" 
                variant="standard" 
                size="small" 
                style={{width:"100%"}}
            />
        </div>
        <div className={classes.item}>
            <TextField 
                id="standard-multiline-static"
                label="Description"
                multiline
                rows={4}
                defaultValue="Tell your stroy..."
                variant="outlined" 
                size="small" 
                style={{width:"100%"}}
            />
        </div>
        <div className={classes.item}>
            <TextField select label="Visibility" value="Public">
                <MenuItem value="Public">Public</MenuItem>
                <MenuItem value="Private">Private</MenuItem>
                <MenuItem value="Unlisted">Unlisted</MenuItem>
            </TextField>
        </div>
        <div className={classes.item}>
            <FormLabel component="legend">who can comment..?</FormLabel>
            <RadioGroup>
                <FormControlLabel value="Everybody" control={<Radio size="small"/>} label="Everybody"/>
                <FormControlLabel value="My Friends" control={<Radio size="small"/>} label="My Friends"/>
                <FormControlLabel value="Nobody" control={<Radio size="small"/>} label="Nobody"/>
                <FormControlLabel
                    value="Custom"
                    disabled="disabled"
                    control={<Radio size="small"/>}
                    label="Custom (Premium)"/>
            </RadioGroup>
        </div>
        <div className={classes.item}>
            <Button variant="outlined" color="primary" style={{marginRight:20}} onClick={() => setOpenAlert(true)}>Create</Button>
            <Button variant="outlined" color="secondary" onClick={() => setOpen(false)}>Cancel</Button>
        </div>
    </form>          
      </div>
    </Container>
  );
};

// const mapStateToProps = (state) => {
//     console.log("================mapStateToProps================"+state.tutorials);
//     return {
//         tutorials: state.tutorials,
//     };
// };

// export default connect(mapStateToProps, { retrieveTutorials, findTutorialsByTitle, deleteAllTutorials })(withStyles(useStyles)(Post));
export default DataGridList;

// class Post extends Component {
//     constructor(props) {
//         console.log('====constructor=====');
//         super(props);
//         this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
//         this.refreshData = this.refreshData.bind(this);
//         this.setActiveTutorial = this.setActiveTutorial.bind(this);
//         this.findByTitle = this.findByTitle.bind(this);
//         this.removeAllTutorials = this.removeAllTutorials.bind(this);

//         this.state = {
//             currentTutorial: null,
//             currentIndex: -1,
//             searchTitle: "",
//         };
//     }

//     componentDidMount() {
//         console.log("post => componentDidMount =========");
//         this.props.retrieveTutorials();
//     }

//     onChangeSearchTitle(e) {
//         const searchTitle = e.target.value;

//         this.setState({
//             searchTitle: searchTitle,
//         });
//     }

//     refreshData() {
//         this.setState({
//             currentTutorial: null,
//             currentIndex: -1,
//         });
//     }

//     setActiveTutorial(tutorial, index) {
//         this.setState({
//             currentTutorial: tutorial,
//             currentIndex: index,
//         });
//     }

//     removeAllTutorials() {
//         this.props
//             .deleteAllTutorials()
//             .then((response) => {
//                 console.log(response);
//                 this.refreshData();
//             })
//             .catch((e) => {
//                 console.log(e);
//             });
//     }

//     findByTitle() {
//         this.refreshData();

//         this.props.findTutorialsByTitle(this.state.searchTitle);
//     }

//     render() {
//         const { searchTitle, currentTutorial, currentIndex } = this.state;
//         const { cargoData } = this.state;
//         const { tutorials } = this.props;
//         // const classes = useStyles();
//         const { classes } = this.props;
//         // console.log('=====post render ===='+tutorials.length);
//         return (
//             // <div>
                
//             // </div>
//             <Card className={classes.card}>
//                 <CardActionArea>
//                     <CardMedia
//                         className={classes.media}
//                         image="https://cdn.cashfeed.co.kr/attachments/af1f08621f.jpg"
//                         title="My Post"
//                     />
//                     <CardContent>
//                         <Typography gutterBottom variant="h5">My First Post</Typography>
//                         <Typography variant="body2">
//                             hello hello hello hello hello hello hello hello
//                             hahahahah hahahah ahahah ahahah ahahah
//                             dfjdka;f;dl adkfeidk adkf
//                             hello hello hello hello hello hello hello hello
//                             hahahahah hahahah ahahah ahahah ahahah
//                             dfjdka;f;dl adkfeidk adkf
//                         </Typography>
//                     </CardContent>
//                 </CardActionArea>
//                 <CardActions>
//                     <Button size="small" color="primary">Share</Button>
//                     <Button size="small" color="primary">Learn More</Button>
//                 </CardActions>
//             </Card>
//         );
//     }
// }



// const mapStateToProps = (state) => {
//     console.log("================mapStateToProps================"+state.tutorials);
//     return {
//         tutorials: state.tutorials,
//     };
// };

// export default connect(mapStateToProps, { retrieveTutorials, findTutorialsByTitle, deleteAllTutorials })(withStyles(useStyles)(Post));
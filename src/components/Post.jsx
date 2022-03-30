import React, { Component, useState, useEffect, } from "react";
import { retrieveTutorials, findTutorialsByTitle, deleteAllTutorials } from "../actions/tutorials";
import * as actions from "../actions/tutorials";

import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, } from "@material-ui/core";

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
    }
}));

const columns = [
    { field: 'cd_cargo_rep', headerName: 'cd_cargo_rep', width: 200, align: 'center', headerAlign: 'center'},
    { field: 'cd_cust', headerName: 'cd_cust', width: 200, align: 'center', headerAlign: 'center'},
    { field: 'cd_cargo_vest', headerName: 'cd_cargo_vest', width: 200, align: 'center', headerAlign: 'center'},
    { field: 'nm_cargo1', headerName: 'nm_cargo1', width: 200, align: 'center', headerAlign: 'center'}
];

const Post = () => {
const classes = useStyles();

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
    //   <div style={{ width: "100%", height: "70vh"}}>
      <div>
            <DataGrid rows={ rowDatas } columns={ columns } pageSize={ 10 } checkboxSelection autoHeight disableColumnMenu />
      </div>
//           <div>
//               {cargos.cargoData.map((record) => (          
//                   <div key={record.cargoData}>
//     <Card className={classes.card} >
//         <CardActionArea>
//             <CardContent>
//                 <Typography gutterBottom variant="h5">{record.nm_cargo1}</Typography>
//                 <Typography variant="body2">
//                     {record.cd_cargo_rep}                    
//                 </Typography>
//             </CardContent>
//         </CardActionArea>
//     </Card>
//   </div>
//       ))}
//   </div>
  );
};

// const mapStateToProps = (state) => {
//     console.log("================mapStateToProps================"+state.tutorials);
//     return {
//         tutorials: state.tutorials,
//     };
// };

// export default connect(mapStateToProps, { retrieveTutorials, findTutorialsByTitle, deleteAllTutorials })(withStyles(useStyles)(Post));
export default Post;

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
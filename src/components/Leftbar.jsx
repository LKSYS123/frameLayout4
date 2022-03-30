import { Button, Container, makeStyles, Typography } from "@material-ui/core";
import { Bookmark, ExitToApp, Home, Person, PhotoCamera, PlayCircleOutline, Settings, Storefront, TabletMac, List, Map, OpenInBrowser, } from "@material-ui/icons";

/* Router */
import { button, NavLink, Link } from 'react-router-dom';


import { useEffect, useState } from 'react';
// import { Routes, Route, Link } from 'react-router-dom';
// import { Button, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Divider, } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import { ArrowBackIosNew, ArrowForwardIos, HomeMaxOutlined, HomeOutlined, ListOutlined, MapOutlined, OpenInBrowserOutlined, } from '@mui/icons-material';
import { styled, useTheme } from '@mui/material/styles';
// import Clock from 'react-live-clock';

// import MailList from './MailList';
// import CenterContent from './CenterContent';

import '../Main.css';
import subMeunListView from "./SubMenuList";
// import ListHome from './ListHome';

const openedMixin = (theme) => ({
    width: 200,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    position: 'relative',
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    position: 'relative',
    width: 0,
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);


const useStyles = makeStyles((theme) => ({
    container: {
        height: "100vh",
        color: "white",
        paddingTop: theme.spacing(10),
        backgroundColor: theme.palette.primary.main,
        position: "sticky",
        top: 0,
        [theme.breakpoints.up("sm")]: {
            backgroundColor: "white",
            color: "#555",
            border: "1px solid #ece7e7"
        },
    },
    item: {
        display: "flex",
        alignItems: "center",
        marginBottom: theme.spacing(4),
        [theme.breakpoints.up("sm")]: {
            marginBottom: theme.spacing(3),
            cursor: "pointer",
        },
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

// const RenderInSubMenu = () => (
//     // useEffect(() => {
//     //     return 'abbbbcccccc';
//     // });
//     // <subMeunListView />
//     <div>
//         <div>
//             <Button className={classes.button} omponent={Link} to='/' >
//                 <Home className={classes.icon} />                                                                
//                 <Typography className={classes.text}>Homepage</Typography>
//             </Button>                            
//         </div>
//         <div>
//             <Button className={classes.button} component={Link} to='/DataGridList' >
//                 <List className={classes.icon} />
//                 <Typography className={classes.text} >Cargo List</Typography>
//             </Button>
//         </div>
//     </div>
    
// );

const Leftbar = () => {
    const classes = useStyles();

    const [leftOpen, setLeftOpen] = useState(false);
    const [rightOpen, setRightOpen] = useState(false);
    const [subMemuHome, setSubMenuHome] = useState(false);
    const [subMemuList, setSubMenuList] = useState(false);

    // const testview = () => RenderInSubMenu;

    const RenderInSubMenu_Home = () => (
        // <subMeunListView />
        <div>
            <div>
                <Button className={classes.button} component={Link} to='/DataGridList' >
                    <List className={classes.icon} />
                    <Typography className={classes.text} >Cargo List</Typography>
                </Button>
            </div>
            <div>
                <Button className={classes.button} component={Link} to='/Openlayer1'>
                    <Map className={classes.icon} />
                    <Typography className={classes.text} >Openlayer Map</Typography>
                </Button>
            </div>
        </div>        
    );

    const RenderInSubMenu_List = () => (
        // <subMeunListView />
        <div>
            <div>
                <Button className={classes.button} component={Link} to='/DataGridList' >
                    <List className={classes.icon} />
                    <Typography className={classes.text} >DATA Grid 1</Typography>
                </Button>
            </div>
            <div>
                <Button className={classes.button} component={Link} to='/Openlayer1'>
                    <Map className={classes.icon} />
                    <Typography className={classes.text} >DATA Grid 2</Typography>
                </Button>
            </div>
        </div>        
    );    


    const leftHandleDrawer = () => {
        if (leftOpen === true) {
            setLeftOpen(false);
        } else {
            setLeftOpen(true)
        }
    };

    // const subMeunList = "";
    const leftSideDrawer = (menuGubun) => {
        console.log('===click===menuGubun='+menuGubun);
        // if (leftOpen === false) {
            setLeftOpen(true);
            if (menuGubun === 'home') {
                setSubMenuHome(true);               
                setSubMenuList(false);               
                RenderInSubMenu_Home();                
            } else if (menuGubun === 'list') {
                setSubMenuList(true);            
                setSubMenuHome(false);                  
                RenderInSubMenu_List();               
            } else if (menuGubun === 'openlayer') {

            } else if (menuGubun === 'layerPop') {

            } else {

            }
        // };
    }    

    const rightHandleDrawer = () => {
        if (rightOpen === true) {
            setRightOpen(false);
        } else {
            setRightOpen(true)
        }
    };

    return (
        // <Container className={classes.container}>
        <div style={{position:'fixed', top: 0, zIndex: 11, }}>
            <div style={{ display: 'flex', float: 'left', }}>
                    <div className='sideMenu'>
                        <div>
                            <Button className={classes.button} omponent={Link} to='/' onClick={() => {leftSideDrawer('home')}}>
                                <HomeOutlined sx={{fontSize:50, color:'#3177d5'}} className={classes.icon} />                                                                
                                {/* <Typography className={classes.text}>Homepage</Typography> */}
                            </Button>                            
                        </div>
                        <div>
                            <Button className={classes.button} component={Link} to='/DataGridList' onClick={() => {leftSideDrawer('list')}}>
                                <ListOutlined sx={{fontSize:50, color:'#3177d5'}} className={classes.icon} />
                                {/* <Typography className={classes.text} >Cargo List</Typography> */}
                            </Button>
                        </div>
                        <div>
                            <Button className={classes.button} component={Link} to='/Openlayer1' onClick={() => {leftSideDrawer('openlayer')}}>
                                <MapOutlined sx={{fontSize:50, color:'#3177d5'}} className={classes.icon} />
                                {/* <Typography className={classes.text} >Openlayer Map</Typography> */}
                            </Button>
                        </div>
                        <div>
                            <Button className={classes.button} component={Link} to='/OpenlayerPop' onClick={() => {leftSideDrawer('layerPop')}}>
                                <OpenInBrowserOutlined sx={{fontSize:50, color:'#3177d5'}} className={classes.icon} />
                                {/* <Typography className={classes.text} >Openlayer Pop</Typography> */}
                            </Button>                
                        </div>
                    </div>
                        {/* 좌측 움직이는 사이드바 */}
                        <div className='leftBar'>
                            <Drawer variant="permanent" open={leftOpen}>
                                { subMemuHome && <RenderInSubMenu_Home />}
                                { subMemuList && <RenderInSubMenu_List />}
                                {/* <Routes>
                                    <Route path='/' element={<ListHome />} exact />
                                    <Route path='/mail/*' element={<MailList />} />
                                </Routes> */}
                            </Drawer>
                        </div>
                    <Button
                        className='sideBarBut'
                        variant="contained"
                        color="default"
                        onClick={leftHandleDrawer}
                    >
                        {leftOpen === true ? <ArrowBackIosNew sx={{color:'#3177d5'}} /> : <ArrowForwardIos sx={{color:'#3177d5'}}/>}
                    </Button>
            </div>
        </div>

        
        // </Container>


                // <div style={{ display: 'flex' }}>
                //     <div style={{ display: 'flex', float: 'left' }}>
                //         {/* 좌측 메뉴버튼 */}
                //         <div className='sideMenu'>
                //             {/* <Divider /> */}
                //             <div>
                //                 <Button component={Link} to='/'>
                //                     <Home color="primary" size="large" /><br/>
                //                     <Typography className={classes.text}>Homepage</Typography>
                //                 </Button>
                //             </div>
                //             <div>
                //                 <Button className={classes.button} component={Link} to='/DataGridList'>
                //                     <List className={classes.icon} />
                //                     <Typography className={classes.text} >Cargo List</Typography>
                //                 </Button>
                //             </div>
                //             <div>
                //                 <Button className={classes.button} component={Link} to='/Openlayer1'>
                //                     <Map className={classes.icon} />
                //                     <Typography className={classes.text} >Openlayer Map</Typography>
                //                 </Button>
                //             </div>
                //             <div>
                //                 <Button className={classes.button} component={Link} to='/OpenlayerPop'>
                //                     <OpenInBrowser className={classes.icon} />
                //                     <Typography className={classes.text} >Openlayer Pop</Typography>
                //                 </Button>                
                //             </div>
                //         </div>
                //         {/* 좌측 움직이는 사이드바 */}
                //         <div className='leftBar'>
                //             <Drawer variant="permanent" open={leftOpen}>
                //                 aaaaa<br/>
                //                 ccccc
                //                 {/* <Routes>
                //                     <Route path='/' element={<ListHome />} exact />
                //                     <Route path='/mail/*' element={<MailList />} />
                //                 </Routes> */}
                //             </Drawer>
                //         </div>
                //     </div>
                //     <Button
                //         className='sideBarBut'
                //         variant="contained"
                //         onClick={leftHandleDrawer}
                //     >
                //         {leftOpen === true ? <ArrowBackIosNew /> : <ArrowForwardIos />}
                //     </Button>
                // </div>
        

        // <Container className={classes.container}>
        //     <div>
        //         <Button className={classes.button} component={Link} to='/'>
        //             <Home className={classes.icon} />
        //             <Typography className={classes.text}>Homepage</Typography>
        //         </Button>
        //     </div>
        //     <div>
        //         <Button className={classes.button} component={Link} to='/DataGridList'>
        //             <List className={classes.icon} />
        //             <Typography className={classes.text} >Cargo List</Typography>
        //         </Button>
        //     </div>
        //     <div>
        //         <Button className={classes.button} component={Link} to='/Openlayer1'>
        //             <Map className={classes.icon} />
        //             <Typography className={classes.text} >Openlayer Map</Typography>
        //         </Button>
        //     </div>
        //     <div>
        //         <Button className={classes.button} component={Link} to='/OpenlayerPop'>
        //             <OpenInBrowser className={classes.icon} />
        //             <Typography className={classes.text} >Openlayer Pop</Typography>
        //         </Button>                
        //     </div>
        //     <div className={classes.item}>
        //         <PlayCircleOutline className={classes.icon} />
        //         <Typography className={classes.text}>Videos</Typography>
        //     </div>
        //     <div className={classes.item}>
        //         <TabletMac className={classes.icon} />
        //         <Typography className={classes.text}>Apps</Typography>
        //     </div>
        //     <div className={classes.item}>
        //         <Bookmark className={classes.icon} />
        //         <Typography className={classes.text}>Collections</Typography>
        //     </div>
        //     <div className={classes.item}>
        //         <Storefront className={classes.icon} />
        //         <Typography className={classes.text}>Market Place</Typography>
        //     </div>
        //     <div className={classes.item}>
        //         <Settings className={classes.icon} />
        //         <Typography className={classes.text}>Settings</Typography>
        //     </div>
        //     <div className={classes.item}>
        //         <ExitToApp className={classes.icon} />
        //         <Typography className={classes.text}>Logout</Typography>
        //     </div>
        // </Container>
    );
};

export default Leftbar;
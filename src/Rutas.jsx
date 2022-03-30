import React from 'react';
import ReactDOM from 'react-dom';
import { useRoutes } from 'react-router-dom';
import Feed from './components/Feed';
import Sample1 from './pages/Sample1';
import DataGridList from './pages/DataGridList';
import Openlayer1 from './pages/Openlayer1';
import OpenlayerPop from './pages/OpenlayerPop';
import Sample3 from './Sample3';
import Sample4 from './Sample4';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PageLayout from './PageLayout';

const Rutas = () => {
    // const elemtent = useRoutes([
    //     {
    //         path:'/*', 
    //         element:<PageLayout />,
    //         children: [
    //             // {path:'/', element:<Feed/>},
    //             {path:'/sample1', element:<Sample1/>},
    //             {path:'/DataGridList', element:<DataGridList/>},
    //             {path:'/Openlayer1', element:<Openlayer1/>},
    //             {path:'/OpenlayerPop', element:<OpenlayerPop/>},
    //         ],
    //     },        
    // ])    

    const elemtent = useRoutes([
        {path:'/', element:<Feed/>},
        {path:'/sample1', element:<Sample1/>},
        // {path:'/DataGridList', element:<DataGridList/>},
        // {path:'/Openlayer1', element:<Openlayer1/>},
        // {path:'/OpenlayerPop', element:<OpenlayerPop/>},
    ])    
    return elemtent;
  };
  
  export default Rutas;
import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from './components/Error';
import RestaurentMenu from './components/RestaurentMenu';
/*
<div id="parent">
<div id="child1">
<h1>I'm an h1 Element</h1>
<h2>I'm an h2 Element</h2>
</div>
<div id="child2">
<h1>I'm an h1 Element</h1>
<h2>I'm an h2 Element</h2>
</div>
</div>
*/ 
// const parent = React.createElement("div",{id:"parent"},[React.createElement("div",{id:"child1"},[
//     React.createElement("h1",{},"I'm an h1 Element"),
//     React.createElement("h2",{},"I'm an h2 Element")
// ]),
// React.createElement("div",{id:"child2"},[
//     React.createElement("h1",{},"I'm an h1 Element"),
//     React.createElement("h2",{},"I'm an h2 Element")
// ])
// ]);
    // const root = ReactDOM.createRoot(document.getElementById("root"));
    // root.render(parent)

//  const TitleComponent = ()=>(<div>
//     <h1 className="titleElement">Hello from TitleComponent</h1>
//  </div>)

const About = lazy(()=>import("./components/About"))

const AppLayout = () =>{
   return(
   <div className="app">
    <Header/>
    <Outlet/>
   </div>)
 }
 
 const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
    {
     path:"/",
     element:<Body/>
    },
    {
     path:"/about",
     element: <Suspense fallback={<h1>Loading......</h1>}><About/></Suspense>
    },
    {
     path:"/contact",
     element:<Contact/>
    },
    {
      path:"restaurents/:resId",
      element:<RestaurentMenu/>
    }
    ],
    errorElement:<Error/>
  }
 ])
 const root = ReactDOM.createRoot(document.getElementById("root"));

 root.render(<RouterProvider router={appRouter}/>);
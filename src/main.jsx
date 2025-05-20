import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './Layouts/MainLayout.jsx';
import Home from './Components/Home.jsx';
import AddTasks from './Components/AddTasks.jsx';
import BrouseTasks from './Components/BrouseTasks.jsx';
import MyPostedTasks from './Components/MyPostedTasks.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children:[
      {
        index:true,
        Component:Home
      },
      {
        path:'addTasks',
        Component:AddTasks
      },
      {
        path:'brouseTasks',
        Component:BrouseTasks
      },
      {
        path:'myPostedTasks',
        Component:MyPostedTasks
      },
      {
        
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)

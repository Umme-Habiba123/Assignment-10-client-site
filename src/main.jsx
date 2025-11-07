import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './Layouts/MainLayout.jsx';
import Home from './Components/Home.jsx';
import AddTasks from './Components/AddTasks.jsx';
import BrouseTasks from './Components/BrouseTasks.jsx'
import MyPostedTasks from './Components/MyPostedTasks.jsx'
import Login from './Components/Login.jsx';
import SignUp from './Components/SignUp.jsx';
import ErrorPage from './Components/ErrorPage.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import PrivateRoute from './Routes/PrivateRoute.jsx';
import TaskDetails from './Components/TaskDetails.jsx';
import UpdateTasks from './Components/UpdateTasks.jsx';
import FeatureTask from './Components/FeatureTask.jsx';
import MyDetails from './Components/MyDetails.jsx';
import Services from './Components/Services.jsx';
import JobSearch from './Components/JobSearch/JobSearch.jsx';
import BlogSection from './Components/BlogSection.jsx';
import ContactUs from './Components/ContactUs.jsx';
import DigitalMarketing from './Components/DigitalMarketing.jsx';
import ContentWriting from './Components/ContentWriting.jsx';
import WebDevelopment from './Components/WebDevelopment.jsx';

// import ForgotPass from './Components/ForgotPass.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        index:true,
        Component:Home
      },
      {
        path:'addTasks',
         element: <PrivateRoute><AddTasks></AddTasks></PrivateRoute>
      },
      {
        path:'brouseTasks',
        loader: ()=>fetch('http://localhost:5000/tasks'),
        element:<PrivateRoute><BrouseTasks></BrouseTasks></PrivateRoute>
      },
      {
        path:'myPostedTasks',
        element: <PrivateRoute><MyPostedTasks></MyPostedTasks></PrivateRoute>
      },
      {
       path: 'logIn',
       Component:Login 
      },
      {
        path:'signUp',
        Component: SignUp
      },
      // {
      //   path:'forgotPass',
      //   Component: ForgotPass
      // },
      {
        path:'taskDetails/:id',
        loader:({params})=>fetch(`http://localhost:5000/tasks/${params.id}`),
        Component:TaskDetails
      },
      {
        path:'/updateTask/:id',
        loader: ({ params }) => fetch(`http://localhost:5000/tasks/${params.id}`),
        element:<PrivateRoute><UpdateTasks></UpdateTasks></PrivateRoute>
      },
      {
        path:'/featureTask',
        Component: FeatureTask
      },
      {
        path:'/myDetails',
        Component: MyDetails
      },
      {
        path:'/jobs',
        Component: JobSearch
      },
      {
        path:'/blogs',
        Component: BlogSection
      },
      {
        path:'/contact',
        Component: ContactUs
      },
      {
        path:'/services',
        Component: Services
      },
      {
        path:'/services/marketing',
        Component: DigitalMarketing
      },
      {
        path:'/services/design',
        Component: ContentWriting
      },
      {
        path:'/services/web-development',
        Component: WebDevelopment
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
      <RouterProvider router={router} />
     </AuthProvider>
  </StrictMode>,
)

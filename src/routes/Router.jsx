import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllGroups from "../pages/AllGroups";
import CreateGroup from "../pages/CreateGroup";
import MyGroups from "../pages/MyGroups";
import UpdateGroups from "../pages/UpdateGroups";
import GroupDetails from "../pages/GroupDetails"; 
import PrivateRoute from "./PrivateRout";
import UrbanSketchingDetails from "../components/blogs/UrbanSketchingDetails";
import RunningDetails from "../components/blogs/RunningDetails";
import FishingDetails from "../components/blogs/FishingDetails";
import PhotographyDetails from "../components/blogs/PhotographyDetails";
import About from "../components/About";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch("./feature.json"),
        Component: Home,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "allGroups",
        loader: () => fetch("https://hobby-hub-server-theta.vercel.app/hobby"),
        Component: AllGroups,
      },
       
      {
        path: "createGroup",
        element: (
          <PrivateRoute>
            <CreateGroup />
          </PrivateRoute>
        ),
      },
      {
        path: "myGroups",
        loader: () => fetch("https://hobby-hub-server-theta.vercel.app/hobby"),
        element: (
          <PrivateRoute>
            <MyGroups />
          </PrivateRoute>
        ),
      },
       {
        path: "updateGroup/:id",
        element: (
          <PrivateRoute>
            <UpdateGroups />
          </PrivateRoute>
        ),
      },
       {
        path: "groupDetails/:id",
        loader: ({ params }) =>
          fetch(`https://hobby-hub-server-theta.vercel.app/allGroups/${params.id}`),
        element: (
          <PrivateRoute>
            <GroupDetails />
          </PrivateRoute>
        ),
      },
      {
        path:"/urbanSketchingDetails",
        Component:UrbanSketchingDetails
      },
      {
        path:"/runningDetails",
        Component:RunningDetails
      },
      {
        path:"/fishingDetails",
        Component:FishingDetails
      },
      {
        path:"/photographyDetails",
        Component:PhotographyDetails
      }, 
      {
        path:"/about",
        Component:About
      }
    ],
  },
]);

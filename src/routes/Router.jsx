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
import ContactPage from "../pages/ContactPage";
import SupportPage from "../pages/SupportPage";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardOverview from "../pages/DashboardOverview";
import AllItems from "../pages/Dashboard/AllItems";
import MyItems from "../pages/Dashboard/MyItems";
import AddItems from "../pages/Dashboard/AddItems";
import Profile from "../pages/Dashboard/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, 
    errorElement: <ErrorPage />, 
    children: [
      {
        index: true,
        loader: () => fetch("./feature.json"),
        element: <Home />, 
      },
      {
        path: "login",
        element: <Login />, 
      },
      {
        path: "register",
        element: <Register />, 
      },
      {
        path: "supportPage",
        element: <SupportPage />, 
      },
      {
        path: "contactPage",
        element: <ContactPage />, 
      },
      {
        path: "allGroups",
        loader: () => fetch("https://hobby-hub-server-theta.vercel.app/hobby"),
        element: <AllGroups />, 
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
        path: "urbanSketchingDetails",
        element: <UrbanSketchingDetails />,
      },
      {
        path: "runningDetails",
        element: <RunningDetails />,
      },
      {
        path: "fishingDetails",
        element: <FishingDetails />,
      },
      {
        path: "photographyDetails",
        element: <PhotographyDetails />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardOverview />,
      },
      {
        path: "allItems",
        loader: () => fetch("https://hobby-hub-server-theta.vercel.app/hobby"),
        element: <AllItems />, 
      },
      {
        path: "myItems",
        element: <MyItems />, 
      },
      {
        path: "addItem",
        element: <AddItems />, 
      },
      {
        path: "profile",
        element: <Profile />, 
      }, 
    ],
  },
]);

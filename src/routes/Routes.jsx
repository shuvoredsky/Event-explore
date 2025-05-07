import { createBrowserRouter } from "react-router";
import MainLayOut from "../MainLayout/MainLayOut";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ShowEvents from "../Pages/ShowEvents";
import EventsDetails from "../Pages/EventsDetails";
import PrivetRoute from "../Components/PrivetRoute";
import ErrorPage from "../Pages/ErrorPage";
import Profile from "../Components/Profile";
import Home from "../Components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,

    children: [
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "",
        loader: () => fetch("../data.json"),
        Component: ShowEvents,
      },
      {
        path: "/update-profile",
        element: (
          <PrivetRoute>
            <Profile></Profile>
          </PrivetRoute>
        ),
      },
    ],
  },
  {
    path: "/home",
    element: <Home></Home>,
  },
  {
    path: "/event-details/:id",
    element: (
      <PrivetRoute>
        <EventsDetails></EventsDetails>
      </PrivetRoute>
    ),
    loader: () => fetch("../data.json"),
  },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;

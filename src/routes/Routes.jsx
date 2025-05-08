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
import GuidelinesTips from "../Pages/GuideLine";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: () => fetch("../data.json"),
        element: <ShowEvents />,
      },
      {
        path: "home",
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
        path: "event-details/:id",
        loader: () => fetch("../data.json"),
        element: (
          <PrivetRoute>
            <EventsDetails />
          </PrivetRoute>
        ),
      },
      {
        path: "update-profile",
        element: (
          <PrivetRoute>
            <Profile />
          </PrivetRoute>
        ),
      },
      {
        path: "guide-line",
        element: (
          <PrivetRoute>
            <GuidelinesTips />
          </PrivetRoute>
        ),
      },
    ],
  },
]);

export default router;

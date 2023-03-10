import React from "react";
import AddCarPage from "../pages/AddCarPage";
import DashboardPage from "../pages/DashboardPage";
import EditCarPage from "../pages/EditCarPage";
import ListCarsPage from "../pages/ListCarsPage";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";
import SignInPage from "../pages/SignInPage";
import PrivateRoute from "./PrivateRoute";
import ProtectedRoute from "./ProtectedRoute";

const SetupRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute />}>
        <Route index element={<DashboardPage />} />
        <Route path="/add-car" element={<AddCarPage />} />
        <Route path="/edit-car" element={<EditCarPage />} />
        <Route path="/list-car" element={<ListCarsPage />} />
      </Route>
      <Route path="/" element={<ProtectedRoute />}>
        <Route path="sign-in" element={<SignInPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default SetupRouter;

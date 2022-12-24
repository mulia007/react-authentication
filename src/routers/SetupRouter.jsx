import AddCarPage from "../pages/AddCarPage";
import DashboardPage from "../pages/DashboardPage";
import EditCarPage from "../pages/EditCarPage";
import ListCarsPage from "../pages/ListCarsPage";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";
import SignInPage from "../pages/SignInPage";

const SetupRouter = () => {
  return (
    <Routes>
      <Route path="/addcar" element={<AddCarPage />} />
      <Route path="/" element={<DashboardPage />} />
      <Route path="/editcar" element={<EditCarPage />} />
      <Route path="/listcar" element={<ListCarsPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/signin" element={<SignInPage />} />
    </Routes>
  );
};

export default SetupRouter;

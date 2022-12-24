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
      <Route path="/" element={<DashboardPage />} />
      <Route path="/addcar" element={<AddCarPage />} />      
      <Route path="/editcar" element={<EditCarPage />} />
      <Route path="/listcar" element={<ListCarsPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default SetupRouter;

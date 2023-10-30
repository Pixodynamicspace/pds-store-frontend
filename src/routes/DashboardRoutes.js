import { Route, Routes } from "react-router-dom";
import { ProtectedRoutes } from "./protectedRoutes";
import { DashboardPage } from "../components/pages/DashboardPage";
import NotFoundPage from "../components/pages/NotFoundPage";
import { SellProductPage } from "../components/sell/SellProductPage";

const DashBoardRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<ProtectedRoutes/>}>
                <Route path='/' element={<DashboardPage/>}>
                    <Route path='sell' element={<SellProductPage/>} />
                    {/* any unimplemented routes would render Overview component for now hence the "*" */}
                    <Route path='*' element={<NotFoundPage/>} />
                </Route>
            </Route>
        </Routes>
    )
}

export default DashBoardRoutes;
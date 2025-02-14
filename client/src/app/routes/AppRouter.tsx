import { Route, Routes } from "react-router-dom"
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage"
import PageLayout from "../lyaouts/LayoutPage"
import ListPage from "../../pages/ListPage/ListPage"
import FormPage from "../../pages/FormPage/FormPage"
import ItemDetailsPage from "../../pages/ItemDetailsPage/ItemDetailsPage"
import RegisterPage from "../../pages/RegisterPage/RegisterPage"
import LoginPage from "../../pages/LoginPage/LoginPage"
import { ProtectedRoute } from "./ProtectedRoute"

const AppRouter = () => {
    return (
          <Routes>
            <Route element={<PageLayout />}>
              <Route path='/' element={<ProtectedRoute><ListPage /></ProtectedRoute>} />
              <Route path='/list' element={<ProtectedRoute><ListPage /></ProtectedRoute>} />
              <Route path='/form' element={<ProtectedRoute><FormPage /></ProtectedRoute>} />
              <Route path='/items/:id' element={<ProtectedRoute><ItemDetailsPage /></ProtectedRoute>} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/register' element={<RegisterPage />} />
              <Route path='*' element={<NotFoundPage />} />
            </Route>
          </Routes>
    )
  }
  
  export default AppRouter
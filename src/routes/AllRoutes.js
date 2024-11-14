import { Route, Routes } from "react-router-dom"
import {HomePage, Login, ProductDetail, ProductsList, Register} from "../pages";

export const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsList />} />
            <Route path="/products/:id" element={<ProductDetail />} />

            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
        </Routes>
    </>
  )
}

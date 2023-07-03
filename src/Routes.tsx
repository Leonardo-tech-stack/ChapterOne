import { Routes as RouterRoutes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductPage from "../src/pages/ProductPage/index";
import Cart from "./pages/Cart/index";
import Login from "../src/pages/Login";
import Register from "./pages/Register";
import UserData from "./pages/UserData";
import HomeAdmin from "./pages/administrativo/Products";
import UserList from "./pages/administrativo/UserList";
import RegisterAdm from "./pages/administrativo/AdmRegister";
import RegisterProduct from "./pages/administrativo/ProductRegister/index";
import EditProduct from "./pages/administrativo/EditProductPage/index";

export default function Routes() {
  return (
    <RouterRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/lista-de-produtos" element={<ProductList />} /> 
      <Route path="/homeadm" element={<HomeAdmin />} />
      <Route path="/product/:productId" element={<ProductPage />} />
      <Route path="/carrinho" element={<Cart />} />
      <Route path="/dados-de-usuarios" element={<UserList />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Register />} />
      <Route path="/usuario/" element={<UserData />} />
      <Route path="/cadastroadm" element={<RegisterAdm />} />
      <Route path="/cadastro-de-produto" element={<RegisterProduct />} />
      {/* <Route path="/edit-product/:id" element={<EditProduct />} /> */}
      <Route path="/lista-de-usuarios" element={<UserList />} />
    </RouterRoutes>
  );
}

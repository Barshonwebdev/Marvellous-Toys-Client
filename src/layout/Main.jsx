
import Header from "../Pages/Shared/Header/Header";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <hr />
      <Outlet></Outlet>
      <Footer></Footer>
      <ScrollRestoration></ScrollRestoration>
    </div>
  );
};

export default Main;

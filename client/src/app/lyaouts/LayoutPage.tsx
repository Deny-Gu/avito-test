import { Outlet } from "react-router-dom";
import Header from "../../widgets/Header/ui/Header";
import { useAuth } from "../context/AuthContex";

function PageLayout() {
  const { isAuth } = useAuth();

  return (
    <>
      {isAuth && <Header />}
      <Outlet />
    </>
  );
}

export default PageLayout;

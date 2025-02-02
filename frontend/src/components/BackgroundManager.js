import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BackgroundManager = () => {
  const location = useLocation();

  useEffect(() => {
    const loginOrRegister = location.pathname === "/" || location.pathname === "/register";
    document.body.style.backgroundImage = loginOrRegister
      ? "url('/images/background_login.png')"
      : "url('/images/background_home.png')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";

    return () => {
      document.body.style.backgroundImage = "";
    };
  }, [location.pathname]);

  return null;
};

export default BackgroundManager;

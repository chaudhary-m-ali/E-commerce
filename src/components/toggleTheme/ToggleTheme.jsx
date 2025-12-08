import React, { useEffect } from "react";
import "./ToggleTheme.css";
import moon from "../../assets/moon_icon.svg";
import sun from "../../assets/sun_icon.svg";
import { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext";
const ToggleTheme = () => {
  const { theme, setTheme } = useContext(ThemeDataContext);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div>
      <button className="theme">
        {theme === "dark" ? (
          <img
            style={{
              backgroundColor: "black",
              width: "100%",
            }}
            src={sun}
            alt=""
            onClick={() => {
              setTheme("light");
            }}
          />
        ) : (
          <img
            src={moon}
            alt=""
            onClick={() => {
              setTheme("dark");
            }}
          />
        )}
      </button>
    </div>
  );
};

export default ToggleTheme;

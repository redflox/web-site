import React, { useState, useEffect } from "react";
import "./style.css";

export default function ToggleTheme() {
  const [theme, setTheme] = useState("dark");
  const [isMounted, setIsMounted] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
      setIsMounted(true);
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
    if (localStorage) {
      setIsMounted(true);
    }
  }, [theme]);

  if (isMounted) {
    return (
      <button className="switch" onClick={toggleTheme}>
        <input
          className="switch__input"
          type="checkbox"
          role="switch"
          name="dark"
          checked={theme === "dark"}
          onChange={toggleTheme}
        />
        <svg
          className="switch__icon"
          width="24px"
          height="24px"
          aria-hidden="true"
        >
          <use href="#light" />
        </svg>
        <svg
          className="switch__icon"
          width="24px"
          height="24px"
          aria-hidden="true"
        >
          <use href="#dark" />
        </svg>
        <span className="switch__inner"></span>
        <span className="switch__inner-icons">
          <svg
            className="switch__icon"
            width="24px"
            height="24px"
            aria-hidden="true"
          >
            <use href="#light" />
          </svg>
          <svg
            className="switch__icon"
            width="24px"
            height="24px"
            aria-hidden="true"
          >
            <use href="#dark" />
          </svg>
        </span>
        <span className="switch__sr">Dark Mode</span>
      </button>
    );
  } else {
    return <></>;
  }
}

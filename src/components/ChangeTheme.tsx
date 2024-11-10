import { useEffect, useState } from "react";
import Light from "@assets/icons/sun.svg";
import Dark from "@assets/icons/moon.svg";

const themeInitial = localStorage.getItem("theme") || "light";

const ChangeTheme = () => {
  const [theme, setTheme] = useState<Theme>(themeInitial as Theme);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handlerChangeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }
  
  return (
    <div className="flex items-center justify-center gap-1">
      <img src={Light} alt="Light"/>
      <div
        className="m-1 relative inline-block w-16 h-8"
        onClick={handlerChangeTheme}
      >
        <span className={`slider ${theme === "light" ? "bg-zinc-500" : "bg-orange-500 before:left-9"} `} ></span>
      </div>
      <img src={Dark} alt="Dark" />
    </div>
  )
}

export default ChangeTheme;
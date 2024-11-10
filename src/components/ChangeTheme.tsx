import { useEffect, useState } from "react";
import Light from "@assets/icons/sun.svg";
import Dark from "@assets/icons/moon.svg";
import Dark2 from "@assets/icons/moon_2.svg";

import { THEME, LIGHT, DARK } from "@utils/const";

const themeInitial = localStorage.getItem(THEME) || LIGHT;

const ChangeTheme = () => {
  const [theme, setTheme] = useState<Theme>(themeInitial as Theme);

  useEffect(() => {
    document.documentElement.classList.remove(LIGHT, DARK);
    document.documentElement.classList.add(theme);
    localStorage.setItem(THEME, theme);
  }, [theme]);

  const handlerChangeTheme = () => {
    setTheme(theme === LIGHT ? DARK : LIGHT);
  }
  
  return (
    <div className="flex items-center justify-center gap-1">
      <img src={Light} alt={LIGHT}/>
      <div
        className="m-1 relative inline-block w-16 h-8"
        onClick={handlerChangeTheme}
      >
        <span className={`slider ${theme === LIGHT? "bg-zinc-500" : "bg-orange-500 before:left-9"} `} ></span>
      </div>
      {
        theme === DARK ?
          <img src={Dark} alt={DARK} />
        :
          <img src={Dark2} alt={DARK} />
      }
    </div>
  )
}

export default ChangeTheme;
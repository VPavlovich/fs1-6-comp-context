//before 25:18  UseState - помилка в відлачику в файлі field-form/index.js на строчці 47 
import { useState, useMemo, createContext } from "react";
import Page from "./component/page";
import PostList from "./container/post-list";

export const THEME_TYPE = {
  LIGHT: "light",
  DARK: "dark",
};

export const ThemeContext = createContext(null);

function App() {
  const [currentTheme, setTheme] = useState(THEME_TYPE.DARK);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => {
      if(prevTheme === THEME_TYPE.DARK) {
        return THEME_TYPE.LIGHT;
      }else{
        return THEME_TYPE.DARK;
      }
    });
  };

  const theme = useMemo(
    () => ({
      value: currentTheme,
      toggle: handleChangeTheme,
    }),
    [currentTheme]
  );

  return (
    <Page>
      <ThemeContext.Provider value={theme}>
        <PostList />      
      </ThemeContext.Provider>
    </Page>    
  );
}

export default App;

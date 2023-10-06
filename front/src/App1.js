import { useState, useMemo, createContext } from "react";
import Page from "./component/page";
import PostList from "./container/post-list";

const THEME_TYPE = {
  LIGHT: "light",
  DARK: "dark",
};

export const ThemeContext = createContext(null);

function App() {
  const [currentTheme, setTheme] = useState(THEME_TYPE.DARK);

  const theme = useMemo(
    () => ({
      currentTheme,
      setTheme,
      THEME_TYPE,
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

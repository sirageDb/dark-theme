
import React, { createContext, useReducer } from "react";

import { ThemeProvider } from 'styled-components';
import { themeReducer, initialThemeState } from "./themeReducer";
import { GlobalStyles } from "./globalStyles"
import './App.css';
import SwitcherButton from './components/SwitcherButton/SwitcherButton';
import Parent from "./components/Parent/Parent"



export const AppContext = createContext();

function App() {

  const [themeState, dispatch] = useReducer(themeReducer, initialThemeState);
  const { currentTheme } = themeState;


  return (
    <ThemeProvider theme={currentTheme}>
      <AppContext.Provider value={{ ...themeState, dispatch }}>
        <GlobalStyles />
        <div className="App">
          <SwitcherButton />
          <Parent />
        </div>
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export default App;

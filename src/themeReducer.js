import { theme } from './themes'

export const initialThemeState = {
    currentTheme: theme.lightTheme
}


export function themeReducer(themeState, action) {


    switch (action.type) {
        case "toggleTheme": {
            const newTheme = themeState.currentTheme.id === "dark" ? "lightTheme" : "darkTheme";


            return {
                currentTheme: theme[newTheme],
            };
        }


        default:
            throw new Error("ERROR IN THEME :'(");
    }
}
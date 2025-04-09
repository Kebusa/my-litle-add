import { createContext, useState } from "react";
import Theme from "./Theme";

export const ThemeContext = createContext()

function App(){

    return(<>
      <ThemeContext.Provider value={ThemeContext}>
        <Theme/>
      </ThemeContext.Provider>

      </>
    )
}
export default App;
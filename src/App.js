import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import Main from "./pages/Main";
import Aside from "./components/Aside";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import Nav from "./pages/Nav";
import store from "./store";
import { Provider, useSelector } from "react-redux";
import Member from "./pages/Member";
import Login from "./pages/Login";


function App() {
  console.log(process.env)
  const light = {
    colors: {
      Primary : "orange",
      Secondary : "orangered",
      BgColor : "#e9f1f6",
      Color: "#000",
      ContentBg:"#fff"
    }
  }
  const dark = {
    colors : {
      Primary : "#272929",
      Secondary : "#e9e9e9",
      BgColor: "#333",
      Color: "#e9e9e9",
      ContentBg:"#272729"
    }
  }

  const [themeConfig, setThemeConfig] = useState("light")
  const DarkMode = themeConfig === 'light' ? light : dark;
  const ThemeSelect = ()=>{
    setThemeConfig(themeConfig === 'light' ? 'dark' : 'light')
  }

  return (
    <>
    <Provider store={store}>
      <Inner />
    </Provider>
    </>
  );
}
function Inner(){
  const light = {
    colors: {
      Primary : "orange",
      Secondary : "orangered",
      BgColor : "#e9f1f6",
      Color: "#000",
      ContentBg:"#fff"
    }
  }
  const dark = {
    colors : {
      Primary : "#272929",
      Secondary : "#e9e9e9",
      BgColor: "#333",
      Color: "#e9e9e9",
      ContentBg:"#272729"
    }
  }

  const theme = useSelector(state => state.dark);
  const DarkMode = theme === 'light' ? light : dark;
  
  return(
  <ThemeProvider theme={DarkMode} >
    
  <GlobalStyle />
  <Nav />

  <Aside />
    <Routes>
      <Route path="/" element={<Main/>}></Route>
      <Route path="/member" element={<Member/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
    </Routes>
    </ThemeProvider>
  )
}

export default App;

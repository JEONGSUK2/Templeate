import { Route, Routes, useNavigate } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import Aside from "./components/Aside";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import Nav from "./pages/Nav";
import store, { logIn, loggedIn } from "./store";
import { Provider, useDispatch, useSelector } from "react-redux";
import Member from "./pages/Member";
import Login from "./pages/Login";
import Example from "./example/Example";
import Logout from "./pages/Logout";
import { useEffect } from "react";
import { collection, doc, getDoc, getFirestore } from "firebase/firestore";
import Modify from "./pages/Modify";
import FindEmail from "./pages/FindEmail";
import Write from "./pages/Write";
import Service from "./pages/Service";
import Notice from "./pages/service/Notice";
import Gallery from "./pages/service/Gallery";
import Qna from "./pages/service/Qna";
import Oline from "./pages/service/Oline";
import Main from "./pages/Main";
import View from "./pages/View";
import Modal from "./components/Modal";


function App() {
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
  const [isModal, setIsModal] = useState(true);
  const navigate = useNavigate();
  
  const dispatch = useDispatch();
  const uid = sessionStorage.getItem("users");
  console.log(uid)
  if(uid){
    dispatch(logIn(uid));
  }

  useEffect(()=>{

    const fetchUser = async () =>{
      if(!uid) return;

      const userDoc = doc(collection(getFirestore(), "users"),uid);
      console.log(userDoc)

      try{
        const docSnapshot = await getDoc(userDoc);
        console.log(docSnapshot)
        if(docSnapshot.exists()){
          const userData = docSnapshot.data();
          dispatch(loggedIn(userData));
        }
        
      }catch(error){
        console.log(error)
      }
    }
    fetchUser();
  },[dispatch, uid])

//[]를 넣으면 한번만 실행 , useEffect는 로딩될때 실행(여러번 실행) 
//, state값을 넣어야함

  

  return(
    
  <ThemeProvider theme={DarkMode} >
  <GlobalStyle />
  <Nav/>
  <Aside />
    <Routes>
      <Route path="/" element={<Main/>}></Route>
      <Route path="/ex" element={<Example/>}></Route>
      <Route path="/member" element={<Member />}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/logout" element={<Logout/>}></Route>
      <Route path="/modify" element={<Modify/>}></Route>
      <Route path="/findemail" element={<FindEmail/>}></Route>
      <Route path="/write/:board"  element={<Write/>}></Route>
      <Route path="/view/:board/:view"  element={<View/>}></Route>
      <Route path="/view/:board" element={isModal && <Modal error="유효하지 않은 경로입니다." onClose={()=>{navigator('/')}} /> }></Route>
      <Route path="/service" element={<Service/>}>
        <Route path="notice" element={<Notice/>}></Route>
        <Route path="online" element={<Oline />}></Route>
        <Route path="qna" element={<Qna/>}></Route>
        <Route path="gallery" element={<Gallery/>}></Route>
      </Route>
    </Routes>
    </ThemeProvider>
  )
}
export default App;

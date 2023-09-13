import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState : "홍길동",
  reducers: {
    changeName(state){
        return "테스트" + state
    } 
  }
})

let dark = createSlice({
    name : "dark",
    initialState : "light",
    reducers : {
        toggleTheme : (state) => state === "light" ? "dark" : "light"
    }
})


let state = createSlice({
    name: "id",
    initialState : "100살"
})
export const {changeName} = user.actions
export const {toggleTheme} = dark.actions


export default configureStore({
    reducer :{
        user : user.reducer,
        state : state.reducer,
        dark : dark.reducer
    }
})
//Redux 기본 세팅
// 복잡할 구조일 경우 사용 , 그외 간단한 단계는 props 이용 가능

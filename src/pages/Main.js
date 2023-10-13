import React, { useEffect, useState } from 'react'
import Product from './Product';
import { useMemo } from 'react';
import Banner from '../components/home/Banner';



const Test = () =>{
  return (
    console.log("계속 실행됨")
  )  
}
function Main() {

const result = useMemo(()=>{
  return Test()
},[])


useEffect(()=>{
  console.log("완료"); 

  return () => {
    console.log("완료가 되기전 실행됨")
  }
// useEffect에서 return을 실행을 시켰을 경우 언마운트일 때만 실행된다.

},[])

// ,[] 을 추가할 경우 useEffect가 딱 한번만 실행한다.
//마운트 , 업데이트 되었을때 실행 - 기본적인 경우
// timer를 사용할 때 자주 사용된다.

// useMemo는 마운트 되기직전에 실행된다.
// 언마운트 = 페이지가 넘어갈때



let [count, setCount] = useState(0)

  return (
    <>
      <Banner/>
    </>
  )
}

export default Main

//마운트 로딩이 되었을때 (요소가 생겨날때) / 화면이 완전히 로딩되었을때 
// 언마운트는 콘솔창에서 무엇인가 사라졌을때
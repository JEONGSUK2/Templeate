import React,{ memo } from 'react'



const Product = memo(function(){

  console.log("Product 실행");


  return (
    <div>Product</div>
  )
})

export default Product

//memo는 재 랜더링을 방지해주는 기능 (성능개선) 예를들어, 실행 했을 때 console창에 하나의 데이터만 출력  
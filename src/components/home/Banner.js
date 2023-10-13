import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styled from 'styled-components';

const StyleSlide = styled(SwiperSlide)`
    img{width: 100%; height: auto;}
    position: relative;
`

const DescContent = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    
    h3{
        font-size: 48px;
        text-align: center;
        @media screen and (max-width: 768px) {
            font-size: 16px;
        }
        @media screen and (max-width: 1280px) {
            font-size: 30px;
        }
    }
    p{
        font-size: 24px;
        text-align: center;
        font-weight: bold;
        @media screen and (max-width: 768px) {
            font-size: 15px;
        }
        @media screen and (max-width: 1280px) {
            font-size: 20px;
        }
    }
`

function Banner() {
  return (
    <>
    <Swiper
    autoplay={{
        delay : 3000,
        disableOnInteraction: false
    }}
    loop={true}
    slidesPerView={1}
    navigation = {{clickable: true}}
    pagination = {{clickable: true}}
    modules={[Autoplay, Navigation, Pagination]}
    >
        {
            Array(5).fill().map((_,i)=>{
                return(
                   <StyleSlide key={i}>
                    <img src={`./images/img${i+1}.jpg`} alt="slide" />
                    <DescContent>
                        <h3>강조하는 제목 {i}</h3>
                    </DescContent>
                   </StyleSlide>
                )
            })
        }
    </Swiper>
    </>
  )
}

export default Banner
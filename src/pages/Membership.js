
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'




function Membership() {
  return (
    <div className="bg-[#f9fcfc] pt-[60px] pb-[140px] ">
        <div className="relative mx-auto w-[500px]">
            <div className="text-center text-[25px] font-semibold text-[#333] mb-9">회원가입</div>
            <div className="p-[30px] text-[14px] bg-white rounded-xl shadow-[0_5px_14px_rgba(127,138,140,0.09)]">
              <div className="text-[13px] flex justify-end"><p className='text-[orange] mr-1'>*</p>필수입력사항</div> 
              <div className="flex items-center">
                <p className='font-bold mr-2'>아이디</p>
                <p className='text-[orange] mr-2'>*</p> 
              </div>
              <div className="flex mt-2">
                <input type="text" placeholder='아이디를 입력해주세요.' className='outline-none py-0 px-[15px] w-[80%] h-[40px] border-[1px] border-solid-[#e4e4e4] rounded-md text-ellipsis'/>
                <p className=" text-[#2ed090] bg-gray-50 font-bold rounded-lg border-[1px] border-solid-[#B2FFA4] ml-3 p-2 cursor-pointer">중복확인</p>
              </div>
              {/* 입력안하면 아이디를 입력해주세요. 라고 뜨게 해야함  -> 로컬스테이지 에 내가 입력한 아이디 값을 value로 넣어서 해보기*/}
              <div className="mt-2 flex items-center">
                <p className='font-bold mr-2'>비밀번호</p>
                <p className='text-[orange] mr-2'>*</p>
              </div>
                <input type="text" placeholder='비밀번호를 입력해주세요.' className='outline-none mt-2 py-0 px-[15px] w-full h-[40px] border-[1px] border-solid-[#e4e4e4] rounded-md text-ellipsis'/>
              <div className="flex items-center mt-2">
                <p className='font-bold mr-2'>비밀번호 확인</p>
                <p className='text-[orange] mr-2'>*</p>
              </div>
              <input type="text" placeholder='비밀번호를 다시 한번 입력해주세요.' className='outline-none mt-2 py-0 px-[15px] w-full  h-[40px] border-[1px] border-solid-[#e4e4e4] rounded-md text-ellipsis'/>
              <div className="flex items-center mt-2">
                <p className='font-bold mr-2'>이름</p>
                <p className='text-[orange] mr-2'>*</p>
              </div>
              <input type="text" placeholder='이름을 입력해주세요.' className='outline-none mt-2 py-0 px-[15px] w-full h-[40px] border-[1px] border-solid-[#e4e4e4] rounded-md text-ellipsis'/>
              <div className="flex items-center mt-2">
                <p className='font-bold mr-2'>생년월일</p>
                <p className='text-[orange] mr-2'>*</p>
              </div>
              <div className="mt-2 border-[1px] border-solid-[#e4e4e4] rounded-md">
                <div className="h-10 w-full flex items-center">
                    <div className="relative h-10 w-30">
                      <input type="text" placeholder='YYYY' className='w-full h-10 text-center border-0 outline-none pr-[11px] pl-[15px] leading-[38px] '/>
                      <span className='absolute z-10 top-3'>/</span>
                    </div>
                    <div className="relative h-10 w-30">
                      <input type="text" placeholder='MM' className='w-full h-10 text-center border-0 outline-none pr-[11px] pl-[15px] leading-[38px] '/>
                      <span className='absolute z-10 top-3'>/</span>
                    </div>
                    <div className="relative h-10 w-30">
                      <input type="text" placeholder='DD' className='w-full h-10 text-center border-0 outline-none pr-[11px] pl-[15px] leading-[38px] '/>
                    </div>
                  </div>
              </div>
              <div className="flex items-center mt-2">
                <p className='font-bold mr-2'>전화번호</p>
                <p className='text-[orange] mr-2'>*</p>
              </div>
              <div className="mt-2 flex items-center">
                
                <input type="text"  className='outline-none ml-3 py-0 px-[15px] w-[33%] h-[40px] border-[1px] border-solid-[#e4e4e4] rounded-md text-ellipsis'/>
                <input type="text" className='outline-none ml-3 py-0 px-[15px] w-[33%] h-[40px] border-[1px] border-solid-[#e4e4e4] rounded-md text-ellipsis'/>
              </div>
              <div className="flex items-center mt-2">
                <p className='font-bold mr-2'>이메일</p>
                <p className='text-[orange] mr-2'>*</p>
              </div>
              <input type="text" className='mt-2 outline-none py-0 px-[15px] w-full h-[40px] border-[1px] border-solid-[#e4e4e4] rounded-md text-ellipsis'/>
            </div>
        </div>
    </div>
  )
  // 수정완료
}

export default Membership
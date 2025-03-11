import React from "react"

export const Login = () => {
  return (
    <div className='min-w-[260px] max-w-md max-h-screen bg-black'>
      <div className=" h-[50%]">
        <div className="w-[100px] h-[200px] p-[20px] border">

        </div>
      </div>
      <div className="bg-white rounded-t-xl border max-h-[50%] p-5 flex flex-col ">
        <div className="">
          <h1 className="text-[40px] font-bold w-[50px]">Manage your</h1>
          <h1 className="text-gray text-[40px] font-bold w-[50px]">tasks</h1>
        </div>
        
        <div className="flex gap-4">
          <h1 className="font-bold text-lg">Get started</h1>
          <button className="w-[30px] h-[30px] rounded-2xl bg-black text-white">
          <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

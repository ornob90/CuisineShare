import React from "react";
import Container from "../../components/Shared/Container";
import Button from "../../components/Shared/Button";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { AiFillTwitterCircle } from "react-icons/ai";

const Login = () => {
  return (
    <Container>
      <div className="bg-login relative min-w-screen h-screen min-h-[200px] flex justify-center items-center">
        {/* <img
          src="https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1467&q=80"
          alt=""
          className="w-full h-full object-cover"
        /> 
        bg-gray-200 p-4 absolute flex flex-col gap-4 rounded-xl top-[20%]  left-[20%] lg:left-[40%] w-[60%] sm:w-[50%] md:w-[40%] lg:w-[26%]*/}
        <div className="bg-gray-200 p-4  flex flex-col gap-4 rounded-xl   w-[70%] sm:w-[50%] md:w-[40%] lg:w-[26%]">
          <p className="text-center text-3xl font-[900]">Login</p>
          <input
            className=" pl-5 py-3 rounded-lg text-[10px] md:text-sm focus:outline-none"
            type="text"
            placeholder="Enter Email"
          />
          <input
            className=" pl-5 py-3 rounded-lg text-[10px] md:text-sm focus:outline-none"
            type="text"
            placeholder="Enter Password"
          />
          <p className="w-max text-[12px] border border-b-gray-400">
            Forget Password
          </p>
          <Button classes="bg-black text-white py-2 shadow-sm rounded-lg active:scale-95 duration-300 font-bold text-sm md:text-base">
            Sign In
          </Button>
          <div className="flex gap-2 w-full items-center justify-between">
            <hr className="border border-gray-400 w-[35%]" />
            <p className="text-[8px] md:text-sm">Login With</p>
            <hr className="border border-gray-400 w-[35%]" />
          </div>
          {/* <div className="flex flex-wrap justify-end  mx-auto items-center">
            <div className="w-[33%] flex justify-center items-center">
              <img
                src="https://o.remove.bg/downloads/30ff15fc-1b5b-40e3-92bf-4fa5bc87d93b/image-removebg-preview.png"
                alt=""
                className="w-[30%]"
              />
            </div>
            <div className="w-[33%] flex justify-center items-center">
              <img
                src="https://o.remove.bg/downloads/2e63b664-0ad7-446b-b6c5-3fd155669003/imgbin-google-logo-business-google-gvCpbbZMHDpKcnh1Lkig8TYbK-removebg-preview.png"
                alt=""
                className="w-[70%]"
              />
            </div>
            <div className="w-[33%] flex justify-center items-center">
              <img
                src="https://o.remove.bg/downloads/2ec0fd1d-e61b-4b43-8f01-c4404998117c/-51614117232aso9q2exl5-removebg-preview.png"
                alt=""
                className="w-[45%]"
              />
            </div>
          </div> */}
          <div className="flex justify-evenly items-center  text-3xl">
            <BsFacebook className="text-blue-600 " />
            <FcGoogle className="" />
            <AiFillTwitterCircle className="text-blue-600 text-4xl" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;

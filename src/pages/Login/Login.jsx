import React, { useState } from "react";
import Container from "../../components/Shared/Container";
import Button from "../../components/Shared/Button";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { AiFillTwitterCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const { user, signInMethod } = useAuth();
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    try {
      e.preventDefault();

      const email = e.target.email.value;
      const password = e.target.password.value;

      await signInMethod(email, password);

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const handleDemo = async (e) => {
    try {
      e.preventDefault();

      const email = "oornob49@gmail.com";
      const password = "12345678";

      await signInMethod(email, password);

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container auth>
      <div className="bg-login relative min-w-screen h-screen min-h-[200px] flex justify-center items-center">
        {/* <img
          src="https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1467&q=80"
          alt=""
          className="w-full h-full object-cover"
        /> 
        bg-gray-200 p-4 absolute flex flex-col gap-4 rounded-xl top-[20%]  left-[20%] lg:left-[40%] w-[60%] sm:w-[50%] md:w-[40%] lg:w-[26%]*/}
        <div className="bg-gray-200 p-4  flex flex-col gap-4 rounded-xl   w-[70%] sm:w-[50%] md:w-[40%] lg:w-[26%]">
          <p className="text-center text-3xl font-[900]">Login</p>
          <form className="flex flex-col gap-4" onSubmit={handleSignIn}>
            <input
              required
              className=" pl-5 py-3 rounded-lg text-[10px] md:text-sm focus:outline-none"
              type="email"
              placeholder="Enter Email"
              name="email"
            />
            <input
              required
              className=" pl-5 py-3 rounded-lg text-[10px] md:text-sm focus:outline-none"
              type="password"
              placeholder="Enter Password"
              name="password"
            />
            <p className="w-max text-[12px] border border-b-gray-400 active:scale-95 duration-300 cursor-pointer">
              Forget Password
            </p>
            <Button classes="bg-black text-white py-2 shadow-sm rounded-lg active:scale-95 duration-300 font-bold text-sm md:text-base">
              Sign In
            </Button>
            <Button
              onClick={handleDemo}
              type="button"
              classes="bg-gray-600 text-white py-2 shadow-sm rounded-lg active:scale-95 duration-300 font-bold text-sm md:text-base"
            >
              Demo
            </Button>
          </form>
          <div className="flex justify-left gap-2 items-center text-[12px] ">
            <p>New Here?</p>
            <Link
              className="border border-b-gray-400 active:scale-95 duration-300 cursor-pointer font-bold"
              onClick={() => navigate("/signup")}
            >
              Register
            </Link>
          </div>
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
            <BsFacebook className=" cursor-pointer text-blue-600 " />
            <FcGoogle className=" cursor-pointer " />
            <AiFillTwitterCircle className="text-blue-600 text-4xl cursor-pointer " />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;

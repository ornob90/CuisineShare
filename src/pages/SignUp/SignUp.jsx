import React from "react";
import Container from "../../components/Shared/Container";
import Button from "../../components/Shared/Button";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { AiFillTwitterCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const SignUp = () => {
  const { createUser } = useAuth();

  const handleSignUp = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const user = await createUser(email, password);
  };

  const navigate = useNavigate();
  return (
    <Container auth>
      <div className="bg-login relative min-w-screen h-screen min-h-[200px] flex justify-center items-center">
        <div className="bg-gray-200 p-4  flex flex-col gap-4 rounded-xl   w-[70%] sm:w-[50%] md:w-[40%] lg:w-[26%]">
          <p className="text-center text-3xl font-[900]">Sign Up</p>
          <form className="flex flex-col gap-4" onSubmit={handleSignUp}>
            <input
              required
              className=" pl-5 py-3 rounded-lg text-[10px] md:text-sm focus:outline-none"
              type="text"
              placeholder="User Name"
              name="name"
            />
            <input
              required
              className=" pl-5 py-3 rounded-lg text-[10px] md:text-sm focus:outline-none"
              type="email"
              placeholder="Email"
              name="email"
            />
            <input
              required
              className=" pl-5 py-3 rounded-lg text-[10px] md:text-sm focus:outline-none"
              type="password"
              placeholder="Password"
              name="password"
            />

            <Button classes="bg-black text-white py-2 shadow-sm rounded-lg active:scale-95 duration-300 font-bold text-sm md:text-base">
              Sign Up
            </Button>
          </form>
          <div className="flex justify-left gap-2 items-center text-[12px] ">
            <p>Already have an account?</p>
            <Link
              className="border border-b-gray-400 active:scale-95 duration-300 cursor-pointer font-bold"
              onClick={() => navigate("/login")}
            >
              Sign In
            </Link>
          </div>
          <div className="flex gap-2 w-full items-center justify-between">
            <hr className="border border-gray-400 w-[30%]" />
            <p className="text-[11px] md:text-sm">Sign Up With</p>
            <hr className="border border-gray-400 w-[30%]" />
          </div>

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

export default SignUp;

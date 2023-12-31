import React, { useState } from "react";
import Container from "../../components/Shared/Container";
import Button from "../../components/Shared/Button";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { AiFillTwitterCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useDb from "../../hooks/useDb";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../FireStore/firestore.config";

const Login = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const { user, signInMethod, googleSignInMethod, updateUser } = useAuth();
  const { users } = useDb();
  const navigate = useNavigate();
  const userDbRef = collection(db, "users");

  const handleAddUserData = async (name, email, photoUrl) => {
    const imagePath = photoUrl || "";
    try {
      await addDoc(userDbRef, {
        userName: name,
        email: email,
        imagePath,
        bio: "",
        address: "",
        phone: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  const checkDuplicateEmail = (values, email) => {
    return Object.values(values).some((value) => value.email === email);
  };

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

  const handleGoogleSignIn = async () => {
    try {
      const result = await googleSignInMethod();
      updateUser(result.user);
      console.log(result);
      const emailExist = checkDuplicateEmail(users, result.user.email);

      if (emailExist) {
        navigate("/");
        return;
      }

      await handleAddUserData(
        result.user.displayName,
        result.user.email,
        result.user.photoURL
      );

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const handleDemo = async (e) => {
    try {
      e.preventDefault();

      const email = "demo@gmail.com";
      const password = "demo123";

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

          {/* <div className="flex justify-evenly items-center  text-3xl">
            <BsFacebook className=" cursor-pointer text-blue-600 " />
            <FcGoogle className=" cursor-pointer " />
            <AiFillTwitterCircle className="text-blue-600 text-4xl cursor-pointer " />
          </div> */}
          <div
            onClick={handleGoogleSignIn}
            className="flex items-center bg-blue-600 text-white rounded-lg justify-center text-sm md:text-base cursor-pointer active:scale-95 duration-[.35s]"
          >
            <div className="h-full py-1 px-2 rounded-l-lg flex justify-center items-center gap-4">
              <FcGoogle className=" cursor-pointer text-3xl" />
              <p className="font-sans font-semibold">Sign In With Google</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;

import React, { useEffect, useState } from "react";
import Container from "../../components/Shared/Container";
import Button from "../../components/Shared/Button";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { AiFillTwitterCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../FireStore/firestore.config";
import useDb from "../../hooks/useDb";

const SignUp = () => {
  const { createUser, googleSignInMethod, updateUser, err } = useAuth();
  const { users } = useDb();
  const [errorMsg, setErrorMsg] = useState(err);
  const navigate = useNavigate();
  const userDbRef = collection(db, "users");

  useEffect(() => {
    if (errorMsg) navigate("/signup");
  }, [errorMsg]);

  const handleErr = (error) => {
    setErrorMsg(error);
    navigate("/signup");
  };

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

  const handleSignUp = async (e) => {
    try {
      e.preventDefault();

      const name = e.target.name.value;
      const email = e.target.email.value;
      const password = e.target.password.value;

      const emailExist = checkDuplicateEmail(users, email);

      if (emailExist) {
        setErrorMsg("Email Already Exist");
        navigate("/signup");
        return;
      }

      await createUser(name, email, password);
      navigate("/");
      await handleAddUserData(name, email);
    } catch (error) {
      handleErr(error.message);
      console.error(error);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      const result = await googleSignInMethod();
      updateUser(result.user);

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
      handleErr(error.message);
      console.error(error);
    }
  };

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
          <p className="text-red-600 text-sm">{errorMsg}</p>
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

          <div
            onClick={handleGoogleSignUp}
            className="flex items-center bg-blue-600 text-white rounded-lg justify-center  cursor-pointer active:scale-95 duration-[.35s]"
          >
            <div className="h-full py-1 px-2 rounded-l-lg flex justify-center items-center gap-4">
              <FcGoogle className=" cursor-pointer text-3xl" />
              <p className="font-sans font-semibold">Sign Up With Google</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SignUp;

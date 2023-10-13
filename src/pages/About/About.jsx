import React from "react";
import Container from "../../components/Shared/Container";
import myPic from "../../assets/myPic.png";

const About = () => {
  return (
    <Container>
      <div className="flex flex-col md:flex-row justify-evenly items-center gap-4 mt-24">
        <div className="w-max">
          <img src={myPic} alt="" />
        </div>
        <div className="w-[40%]">
          <h1 className="text-3xl font-bold mb-6">Kazi Towfiq</h1>
          <p className="mb-2">
            Hello, I'm Kazi Towfiq. This project is like a playground for me to
            show case my skills in React and Firebase. It's a journey filled
            with coding, and endless learning. I've built something cool, and
            I'm excited to share it with you.
          </p>
          <p className=" ">
            As we dive into this project together, you'll see the magic of
            technology in action. We'll explore how I've used React and Firebase
            to create a user-friendly, dynamic website. So, come on board, click
            around, and hope you have a good experience.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default About;

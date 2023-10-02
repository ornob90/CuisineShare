import React from "react";
import Container from "../../components/Shared/Container";
import { Rating } from "@mui/material";

const RecipeDetail = () => {
  return (
    <Container>
      <div className="w-[90%] mx-auto">
        <h1 className="mb-10 text-4xl font-bold mt-28">Burger</h1>
        <div className="w-full h-[500px] ">
          <img
            src="https://static.onecms.io/wp-content/uploads/sites/19/2019/03/04/creamy-four-cheese-pasta-with-spinach-1812-p24-2000.jpg"
            alt=""
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-5">
          <Rating className="pt-4 -z-1" name="read-only" value={3.5} readOnly />
          <div className="flex items-center gap-4">
            <div className="badge badge-outline">Italian</div>
            <div className="badge badge-outline">Sea Food</div>
            <div className="badge badge-outline">Indian</div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quam
            voluptatum autem facere incidunt mollitia officiis beatae qui
            assumenda voluptas labore aliquam explicabo, quia natus, porro
            accusantium deleniti, voluptatibus amet deserunt expedita eaque.
            Veritatis placeat voluptate quisquam minima quis officia quidem
            perferendis porro amet culpa ea, provident nisi labore inventore!
          </p>
          <p>
            <span className="font-bold">Cooking Time: </span> 1:20 Hour
          </p>
          <p>
            <span className="font-bold">Ingredients </span> soy sauce, water,
            brown sugar, ground ginger, minced garlic, cornsarch, chicken garlic
          </p>
        </div>
      </div>
    </Container>
  );
};

export default RecipeDetail;

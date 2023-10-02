import React from "react";
import Container from "../../components/Shared/Container";
import { Rating } from "@mui/material";
import Button from "../../components/Shared/Button";

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
        <div className="z-[1] relative w-[90%] sm:w-[55%] pt-4 flex">
          <input
            className="w-full py-3 pl-5 border rounded-l-lg focus:outline-none text-md"
            type="text"
            placeholder="Comment"
          />
          <Button classes="bg-black py-3 px-8 text-sm rounded-r-lg text-white ">
            Comment
          </Button>
        </div>
        <div className="mt-20 space-y-10">
          {[1, 2, 3, 4, 5].map((e) => (
            <div key={e}>
              <div className="flex items-center gap-4">
                <div className="h-[40px] w-[40px] rounded-full border-black border-2"></div>
                <p>Ornob</p>
              </div>
              <p className="w-[60%] mt-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
                mollitia, amet rerum natus reiciendis suscipit officiis ea unde
                neque ipsum!
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default RecipeDetail;

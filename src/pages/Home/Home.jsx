import React from "react";
import Container from "../../components/Shared/Container";
import Banner from "../../components/Banner";
import RecipeHighlight from "../../components/Shared/RecipeHighlight";
import Button from "../../components/Shared/Button";
import PrivateRoute from "../../routes/PrivateRoute";

const Home = () => {
  const recipes = [
    {
      id: 1,
      image:
        "https://static.onecms.io/wp-content/uploads/sites/19/2019/03/04/creamy-four-cheese-pasta-with-spinach-1812-p24-2000.jpg",
      title: "spinesh and cheese pasta",
    },
    {
      id: 2,
      image:
        "https://www.errenskitchen.com/wp-content/uploads/2020/01/Baked-Vanilla-Donuts-1-4-1024x683.jpg",
      title: "Fancy Glazed Donuts",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww&w=1000&q=80",
      title: "Mighty Cheesy Breakfast burger",
    },
  ];

  const sweets = [
    {
      id: 1,
      image:
        "https://www.nourishnutritionblog.com/wp-content/uploads/2022/04/Square-milkshake-with-caramel.jpg",
      title: "Caramel Strawberry Milkshake",
    },
    {
      id: 2,
      image:
        "https://cdn.igp.com/f_auto,q_auto,t_pnopt19prodlp/products/p-chocolate-jar-cake-set-of-2--179998-1.jpg",
      title: "Chocolate and Banana Jar Cake",
    },
    {
      id: 3,
      image:
        "https://bakingthegoods.com/wp-content/uploads/2019/12/Cherry-Pistachio-and-White-Chocolate-Shortbread-Cookies-49.jpg",
      title: "Berry Madness Biscuits",
    },
  ];

  return (
    <PrivateRoute>
      <Container>
        <Banner />
        <RecipeHighlight title="Super Delicious" recipes={recipes} />
        <RecipeHighlight title="Sweet Tooth" recipes={sweets} />
        <div className="my-10 bg-yellow-300 py-28 w-[90%] mx-auto flex flex-col justify-center items-center text-center">
          <h1 className="mb-2 text-2xl font-semibold md:text-4xl">
            Deliciousness To Your Inbox
          </h1>
          <p className="mb-4 text-sm font-medium text-gray-600 md:text-base">
            Enjoy weekly hand picked recipes and recommendations
          </p>
          <div className="z-[1] relative w-[90%] sm:w-[55%] pt-4 flex">
            <input
              className="w-full py-3 pl-5 border rounded-l-lg focus:outline-none text-md"
              type="text"
              placeholder="Join Here"
            />
            <Button classes="bg-black py-3 px-8 text-sm rounded-r-lg text-white ">
              join
            </Button>
          </div>
          <p className="text-[10px] pt-4">
            By joining our website you agree to our Terms and Conditions
          </p>
        </div>
      </Container>
    </PrivateRoute>
  );
};

export default Home;

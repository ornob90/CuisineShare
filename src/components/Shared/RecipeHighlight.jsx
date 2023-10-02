import React from "react";
import Container from "./Container";
import RecipeCard from "./RecipeCard";

const RecipeHighlight = ({ title }) => {
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

  return (
    <Container>
      <div className="w-[90%] mx-auto">
        <h1 className="font-bold text-3xl mb-8">{title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recipes.map(({ id, image, title }) => (
            <RecipeCard key={id} image={image} title={title} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default RecipeHighlight;

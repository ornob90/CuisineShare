import React from "react";
import Container from "./Container";
import RecipeCard from "./RecipeCard";

const RecipeHighlight = ({ title, recipes }) => {
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

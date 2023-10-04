import React from "react";
import Container from "../../components/Shared/Container";
import RecipeCard from "../../components/Shared/RecipeCard";
import PrivateRoute from "../../routes/PrivateRoute";

const Favorites = () => {
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
        <div className="w-[90%] mx-auto">
          <h1 className="text-3xl font-bold mt-28 mb-2">Favorites</h1>
          <hr className="border border-black" />

          <div className="my-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sweets.map(({ id, image, title }) => (
              <RecipeCard key={id} image={image} title={title} />
            ))}
          </div>
        </div>
      </Container>
    </PrivateRoute>
  );
};

export default Favorites;

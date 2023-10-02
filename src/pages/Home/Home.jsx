import React from "react";
import Container from "../../components/Shared/Container";
import Banner from "../../components/Banner";
import RecipeHighlight from "../../components/Shared/RecipeHighlight";

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
    <Container>
      <Banner />
      <RecipeHighlight title="Super Delicious" recipes={recipes} />
      <RecipeHighlight title="Sweet Tooth" recipes={sweets} />
    </Container>
  );
};

export default Home;

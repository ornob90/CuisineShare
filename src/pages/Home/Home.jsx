import React from "react";
import Container from "../../components/Shared/Container";
import Banner from "../../components/Banner";
import RecipeHighlight from "../../components/Shared/RecipeHighlight";

const Home = () => {
  return (
    <Container>
      <Banner />
      <RecipeHighlight title="Super Delicious" />
    </Container>
  );
};

export default Home;

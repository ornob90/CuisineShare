import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import Button from "../../components/Shared/Button";
import Select from "../../components/Shared/Select";
import RecipePost from "../../components/Shared/RecipePost";
import PrivateRoute from "../../routes/PrivateRoute";
import useDb from "../../hooks/useDb";

const RecipeFeed = () => {
  const { posts, favorites } = useDb();

  const [allPosts, setAllPosts] = useState([]);
  const [sortedPosts, setSortedPosts] = useState([]);
  const [query, setQuery] = useState([]);
  const [categories, setCategories] = useState([]);

  const [category, setCategory] = useState(null);

  const handleSelectedCategory = (e) => {
    setCategory(e.target.value);
  };

  useEffect(() => {
    // console.log(allPosts);
    setSortedPosts(
      allPosts.sort((a, b) => b[1].createdAt.seconds - a[1].createdAt.seconds)
    );

    const allCategory = allPosts.map((post) => post[1].category);

    setCategories([...new Set(allCategory)]);

    // setSortedPosts(toArray);
    // console.log(toArray);
  }, [allPosts]);

  useEffect(() => {
    setAllPosts(Object.entries(posts));
  }, []);

  const handleSearch = () => {
    console.log(query);
    if (!query) {
      setAllPosts(Object.entries(posts));
      return;
    }

    setSortedPosts(
      allPosts.filter((post) => {
        return post[1].title.toLowerCase().includes(query.toLowerCase());
      })
    );
    setQuery("");
  };

  return (
    <PrivateRoute>
      <Container>
        <div className=" bg-white sticky top-[8%] sm:top-[15%] md:top-[11%] grid grid-cols-1 md:grid-cols-2 w-full place-content-center pb-2 sm:pb-4 pt-9 md:pt-6 lg:py-4">
          <div className="relative pt-4 flex z-[1]">
            <input
              onChange={(e) => setQuery(e.target.value)}
              className="w-full py-2 pl-4 text-sm border rounded-l-lg focus:outline-none sm:py-3 sm:pl-5 sm:text-md"
              type="text"
              placeholder="Search Your Food"
              value={query}
            />
            <Button
              onClick={handleSearch}
              classes="bg-black py-3 px-8 text-sm rounded-r-lg text-white "
            >
              Search
            </Button>
          </div>

          <div className="flex justify-end w-full gap-2 ">
            <Select name="Sort By" options={["Latest Post"]} />
            <Select
              category={category}
              handleSelectedCategory={handleSelectedCategory}
              name="Category"
              options={categories || []}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-10">
          {sortedPosts?.map((post) => (
            <RecipePost key={post[1].id} post={post[1]} />
          ))}
        </div>
      </Container>
    </PrivateRoute>
  );
};

export default RecipeFeed;

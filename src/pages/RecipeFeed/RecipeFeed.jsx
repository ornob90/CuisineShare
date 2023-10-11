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

  const [filteredPosts, setFilteredPosts] = useState([]);
  const [query, setQuery] = useState("");
  const [categories, setCategories] = useState([]);

  const [sortBy, setSortBy] = useState("Sort By");

  const [category, setCategory] = useState("Category");

  const handleSelectedOptionCatg = (e) => {
    setCategory(e.target.value);
  };

  const handleSelectedOptionSort = (e) => {
    setSortBy(e.target.value);
  };

  // console.log(filteredPosts);

  useEffect(() => {
    if (sortBy === "Sort By") {
      if (category === "Category") {
        setFilteredPosts(allPosts);
      } else {
        setFilteredPosts((prevPosts) =>
          prevPosts?.filter((post) => post[1].category === category)
        );
      }
    }

    if (category === "Category") {
      if (sortBy === "Latest Posts") {
        setFilteredPosts(
          allPosts?.sort(
            (a, b) => b[1].createdAt.seconds - a[1].createdAt.seconds
          )
        );
      }
    } else if (category !== "Category") {
      if (sortBy === "Latest Posts") {
        setFilteredPosts(
          allPosts
            ?.filter((post) => post[1].category === category)
            ?.sort((a, b) => b[1].createdAt.seconds - a[1].createdAt.seconds)
        );
      } else {
        setFilteredPosts(
          allPosts?.filter((post) => post[1].category === category)
        );
      }
    }
  }, [category]);

  useEffect(() => {
    // console.log(allPosts);
    // setSortedPosts(
    //   allPosts.sort((a, b) => b[1].createdAt.seconds - a[1].createdAt.seconds)
    // );

    const allCategory = allPosts.map((post) => post[1].category);

    setCategories([...new Set(allCategory)]);

    // setSortedPosts(toArray);
    // console.log(toArray);
    setFilteredPosts(allPosts);
  }, [allPosts]);

  useEffect(() => {
    setAllPosts(Object.entries(posts));
  }, []);

  const handleSearch = () => {
    console.log(query);
    if (!query) {
      return;
    }

    setFilteredPosts((prevPosts) =>
      prevPosts.filter((post) => {
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
            <Select
              name="Sort By"
              options={["Latest Posts"]}
              handleSelectedOption={handleSelectedOptionSort}
              value={sortBy}
            />
            <Select
              value={category}
              handleSelectedOption={handleSelectedOptionCatg}
              name="Category"
              options={categories || []}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-10">
          {filteredPosts?.map((post) => (
            <RecipePost key={post[1].id} post={post[1]} />
          ))}
        </div>
      </Container>
    </PrivateRoute>
  );
};

export default RecipeFeed;

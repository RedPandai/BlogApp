import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { getFeaturedPosts } from "../services";
import FeaturedPostCard from "../components/FeaturedPostCard";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const FeaturedPost = () => {
  const [featuredPost, setFeaturedPost] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  useEffect(() => {
    getFeaturedPosts().then((result) => {
      setFeaturedPost(result);
      setDataLoaded(true);
    });
  }, []);

  return (
    <div>
      <Carousel
        infinite
        responsive={responsive}
        itemClass="px-4"
      >
        {dataLoaded &&
          featuredPost.map((post, index) => (
            <FeaturedPostCard key={index} post={post} />
          ))}
      </Carousel>
      ;
    </div>
  );
};

export default FeaturedPost;

import React from "react";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

const FeaturedPostCard = ({ post }) => {
  return (
    <div className="relative h-72">
      <div
        className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72 brightness-50"
        style={{ backgroundImage: `url('${post.featuredImage.url}')` }}
      />
      <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
        <p className="text-white mb-4 text-shadow font-semibold text-xs">
          {moment(post.createdAt).format("MMM DD YYYY")}
        </p>
        <p className="text-white mb-4 text-shadow font-semibold text-md">
          {post.title}
        </p>
        <div className="flex items-center absolute bottom-5 w-full justify-center">
          <Image
            unoptimized
            alt={post.author.name}
            height="30"
            width="30"
            src={post.author.photo.url}
            className="rounded-full drop-shadow-lg align-middle"
          />
          <p className="text-white ml-2 text-shadow font-medium text-xs inline align-middle">
            {post.author.name}
          </p>
        </div>
      </div>
      <Link href={`/post/${post.slug}`}>
        <span className="cursor-pointer absolute w-full h-full" />
      </Link>
    </div>
  );
};

export default FeaturedPostCard;

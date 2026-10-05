import Image from "next/image";
import React from "react";
import { News } from "./MainNews";
import Link from "next/link";

const CategoryNewsCard = ({ navNews }: {navNews: News}) => {
  return (
    <Link  href={`/news/${navNews.id}`}>
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <Image
            src={navNews.imageUrl}
            alt="Shoes" width={500} height={400}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{navNews.title}</h2>
          <p>
            {navNews.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryNewsCard;

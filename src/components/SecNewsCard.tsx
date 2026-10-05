import Image from "next/image";
import React from "react";
import { News } from "./MainNews";
import Link from "next/link";



const SecNewsCard = ({news}: {news : News}) => {
  return (
    <Link href={`/news/${news.id}`}>
      <div>
        <figure className="rounded-2xl">
          <Image
            className="rounded-xl max-h-46 object-cover"
            width={500}
            height={200}
            src={news.imageUrl}
            alt={news.imageAlt}
          />
        </figure>
        <div className="p-4">
          <p className="text-red-600 text-lg font-semibold">
            {news.category}
          </p>
          <h2 className="card-title mb-4">{news.title}</h2>
          <p>{news.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default SecNewsCard;

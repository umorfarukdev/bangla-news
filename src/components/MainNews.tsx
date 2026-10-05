import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface News {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  imageAlt: string;
}

const MainNews = ({ mainNews }: { mainNews: News[] }) => {
  // const firstNews = mainNews[0]

  const [firstNews, ...otherNews] = mainNews;

  // const otherNews = mainNews.slice(1)

  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Link href={`/news/${firstNews.id}`}>
          <figure className="rounded-2xl">
            <Image
              className="rounded-xl"
              width={500}
              height={300}
              src={firstNews.imageUrl}
              alt={firstNews.imageAlt}
            />
          </figure>
          <div className="p-3">
            <p className="text-red-600 text-lg font-semibold">
              {firstNews.category}
            </p>
            <h2 className="card-title mb-4">{firstNews.title}</h2>
            <p>{firstNews.description}</p>
          </div>
        </Link>
        <div className="grid gap-5">
          {otherNews.slice(0, 4).map((news) => (
            <Link
              href={`/news/${news.id}`}
              key={news.id}
              className="p-2 border-2 rounded-lg"
            >
              <p className="text-red-600 text-lg font-semibold">
                {news.category}
              </p>
              <h1 className="text-2xl">{news.title}</h1>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainNews;

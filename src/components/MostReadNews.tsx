import Link from "next/link";
import { News } from "./MainNews";

const MostReadNews = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read");
  const data = await res.json();
  const mostReadNews: News[] = data.data;
  console.log(mostReadNews);
  return (
    <div className="">
      <div className="border p-4 rounded-2xl">
        <h1 className="text-red-600 text-lg font-semibold">
          সর্বাধিক পঠিত
        </h1>
        {mostReadNews.map((readNews, i) => (
          <Link href={`/news/${readNews.id}`} key={readNews.id} className="p-3 flex gap-3">
            <h2 className=" text-red-600 text-3xl font-bold flex items-start gap-3">{i + 1}</h2>
            <h1 className="text-2xl">{readNews.title}</h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MostReadNews;

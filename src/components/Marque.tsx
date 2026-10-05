import Link from "next/link";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

interface Headlines {
  id: string;
  title: string;
}

const Marque = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10");
  const data = await res.json();
  const headlines: Headlines[] = data.data;
  return (
    <div className="bg-rose-700 text-white mb-6">
      <div className="flex container mx-auto">
        <h1 className="bg-red-800 py-2 px-4">সর্বশেষ</h1>
        <MarqueeText direction="right" duration={10} className="py-2">
          {headlines.map((headline) => (
            <Link href={`/news/${headline.id}`} className="hover:underline" key={headline.id}>
              <span>{headline.title}</span>
              <span className="mx-5">•</span>
            </Link>
          ))}
        </MarqueeText>
      </div>
    </div>
  );
};

export default Marque;

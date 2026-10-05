// import { News } from "@/components/MainNews";
import NewsDetails from "@/type/newsDetails";
import Image from "next/image";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    newsId: string;
  }>;
}

const NewsDetailsPage = async ({ params }: PageProps) => {
  const date = new Date().toLocaleDateString("bn-bd", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
  const { newsId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${newsId}`,
  );
  const data = await res.json();
  const news: NewsDetails = data.data;

  if (!news) {
    notFound();
  }
  return (
    <div className="max-w-5xl mx-auto mt-10">
      <h1 className="text-xl font-bold">{news?.title}</h1>
      <div>
        {news?.description.blocks.map((block, index) =>
          block.model.blocks.map((paragraph, paragraphIndex) => (
            <p key={`${index}-${paragraphIndex}`} className="text-lg leading-8">
              {paragraph.model.text}
            </p>
          )),
        )}
      </div>
      <div className="divider"></div>
      <p>
        {date} <span>{news?.wordCount} শব্দ</span>
      </p>
      <div className="divider"></div>
      <article className="mx-auto max-w-5xl px-4">
        {news?.body.map((item, index) => {
          // TEXT
          if (item.type === "text") {
            return (
              <p
                key={index}
                className="mb-6 text-[17px] leading-8 text-gray-800"
              >
                {item.text}
              </p>
            );
          }

          // SUBHEADING
          if (item.type === "subheading") {
            return (
              <h2
                key={index}
                className="mb-5 mt-10 text-2xl font-bold text-gray-900"
              >
                {item.text}
              </h2>
            );
          }

          // IMAGE
          if (item.type === "image") {
            return (
              <figure key={index} className="my-8">
                <Image
                  src={item.url}
                  alt={item.altText}
                  width={600}
                  height={400}
                  className="h-auto w-full rounded-md object-cover"
                />

                {item.caption && (
                  <figcaption className="mt-2 text-sm leading-6 text-gray-500">
                    {item.caption}
                  </figcaption>
                )}
              </figure>
            );
          }

          return null;
        })}
      </article>

      <div>
        {news?.tags.map((t, i) => (
          <span className="mr-10 badge mb-4" key={i}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};

export default NewsDetailsPage;

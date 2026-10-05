import CategoryNewsCard from "@/components/CategoryNewsCard";
import { News } from "@/components/MainNews";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    categoryId: string;
  }>;
}

const CategoryNews = async ({ params }: PageProps) => {
  const { categoryId } = await params;
  console.log(categoryId);
  const res = await fetch(
    `https://news-api-v2.vercel.app/api/category/${categoryId}`,
  );
  const data = await res.json();
  const categoriNews: News[] = data.data;

  if (!categoriNews) {
    notFound();
  }
  return (
    <div className="container mx-auto my-10">
      <h1 className="text-2xl font-bold mb-4">{data.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoriNews.map((navNews) => (
          <CategoryNewsCard
            key={navNews.id}
            navNews={navNews}
          ></CategoryNewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;

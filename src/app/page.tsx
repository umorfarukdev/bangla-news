import MainNews from "@/components/MainNews";
import MostReadNews from "@/components/MostReadNews";
import SecNewsCard from "@/components/SecNewsCard";

interface IOtherSection{
  curationId: string
  title: string
  articles: {
    id: string
    title: string
    description: string
    category: string
    imageUrl: string
    imageAlt: string
  }[]

}

export default async function Home() {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections")
  const data = await res.json()
  const sections = data.data
  const mainNews = sections[0].articles
  const otherSection: IOtherSection[] = sections.slice(1)
  return (
    <div className="">

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-6 mt-10">
        <section className="md:col-span-2">
          <MainNews mainNews={mainNews}></MainNews>
          <div className="grid ">
            {
              otherSection.map(otherNews => <div key={otherNews.curationId} >
                <h1 className="my-4 mb-4 text-2xl font-bold border-b-4 border-red-700">{otherNews.title}</h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  {
                    otherNews.articles.map(news => <SecNewsCard key={news.id} news={news}></SecNewsCard>)
                  }
                </div>
              </div>)
            }
          </div>
        </section>
        <section className="col-span-1">
          <MostReadNews></MostReadNews>
        </section>
      </main>
    </div>
  );
}

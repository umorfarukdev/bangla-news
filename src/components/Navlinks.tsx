import Link from 'next/link';
import React from 'react';

interface INav {
  slug: string;
  title: string;
  topicId: string | null;
  url: string;
  scrapable: boolean;
}

const Navlinks = async () => {
    const res = await fetch("https://news-api-v2.vercel.app/api/categories")
    const data = await res.json()
    const navsData: INav[] = data.data
    const filterNavs: INav[] = navsData.filter(n => n.scrapable)
    return (
        <div className='flex justify-center gap-5'>
            <Link href={"/"}>হোম</Link>
            {
                filterNavs.map((n, index) => <Link key={index} href={`/category/${n.slug}`}>{n.title}</Link>)
            }
        </div>
    );
};

export default Navlinks;
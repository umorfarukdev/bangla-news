import Image from "next/image";
import React from "react";
import Navlinks from "./Navlinks";
import UserInfo from "./UserInfo";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-bd", {
    dateStyle: "full",
  });
  return (
    <header>
      <div className="container mx-auto my-6 relative flex items-center justify-end px-4">
        <div
          className="flex items-center gap-3
    md:absolute md:left-1/2 md:-translate-x-1/2"
        >
          <Image src={"/logo.webp"} alt="" width={50} height={50} />
          <div>
            <h1>Bangla News</h1>
            <p>{date}</p>
          </div>
        </div>

        <div>
          <UserInfo></UserInfo>
        </div>
      </div>

      <div className="mb-4">
        <Navlinks></Navlinks>
      </div>
    </header>
  );
};

export default Header;

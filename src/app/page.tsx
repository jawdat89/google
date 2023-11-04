import HomeHeader from "@/app/components/HomeHeader";
import Image from "next/image";
import HomeSearch from "@/app/components/HomeSearch";

export default function Home() {
  return (
    <>
      {/* Header */}
      <HomeHeader />

      {/* Body */}
      <div className="flex flex-col items-center mt-24">
        <Image
          width={300}
          height={100}
          src={
            "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          }
          alt={"Google"}
        />

        <HomeSearch />
      </div>
    </>
  );
}

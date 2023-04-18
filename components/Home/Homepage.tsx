import { Plus_Jakarta_Sans } from "next/font/google";
import { data } from "./contentData";
import Content from "./Content";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-pjs",
  weight: ["400", "700"]
});

const Homepage = () => {
  return (
    <section className="flex flex-col items-center gap-y-4 overflow-hidden min-h-screen lg:flex-row">
      <header className="flex flex-col items-center justify-center bg-white px-8 py-4 sm:w-3/5 lg:w-1/2">
        <h1
          className={`${plusJakartaSans.variable} font-sans mb-2 text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold max-w-xl`}
        >
          Explore the World Through Your Screens
        </h1>
        <p
          className={`${plusJakartaSans.variable} font-sans leading-6 text-justify lg:text-xl max-w-xl`}
        >
          aTe Movie Database presents you hundreds of movies and TV series. Join
          our platform and discover the world through your windows. Sit back and
          enjoy watching.
        </p>
        <button className="bg-blue-700 text-white mt-4 py-2 px-8 rounded-2xl font-bold shadow hover:bg-blue-900">
          Dive In
        </button>
      </header>

      <div className="flex flex-col justify-center bg-gray-100 p-4 w-full lg:w-1/2 min-h-screen">
        {data.map((item) => (
          <Content
            key={item.id}
            item={item}
            plusJakartaSans={plusJakartaSans}
          />
        ))}
      </div>
    </section>
  );
};

export default Homepage;

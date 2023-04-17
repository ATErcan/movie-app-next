import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-pjs",
  weight: ["400", "700"]
});

const Home = () => {
  return (
    <section className="flex flex-col gap-y-4 overflow-hidden min-h-screen md:flex-row">
      <header className="flex flex-col items-center justify-center bg-white px-8 py-4 sm:w-3/5 lg:w-1/2">
        <h1
          className={`${plusJakartaSans.variable} font-sans mb-2  md:text-3xl lg:text-2xl xl:text-4xl`}
        >
          Explore the World Through Your Screens
        </h1>
        <p className={`${plusJakartaSans.variable} leading-6 text-justify lg:text-xl`}>
          aTe Movie Database presents you hundreds of movies and TV series. Join
          our platform and discover the world through your windows. Sit back and
          enjoy watching.
        </p>
        <button className="bg-blue-700 text-white mt-4 py-2 px-8 rounded-2xl font-bold shadow hover:bg-blue-900"> Dive In </button>
      </header>

      <div>
        <div>
          {/* <Image /> */}
          <p>
            Can't find a movie to watch? Well, get ready to can not to decide
            which movie you want to watch. You can access hundreds of movies
            with aTe MDB. Goodbye to the nights without movies, hello to the
            nights where it takes 2 hours to decide on the movie to watch.
          </p>
        </div>
        <div>
          <p>
            Everybody wants a tv series they can watch weekly. Wants to feel the
            excitement and the tension of the story progress. If you feel the
            same, you can join aTe MDB and find the tv series that can make you
            feel this way.
          </p>
          {/* <Image /> */}
        </div>
        <div>
          {/* <Image /> */}
          <p>
            You may find amazing to have access to lots of movies and tv series
            on aTe MDB. But this is not the best feature of us. aTe MDB updates
            itself everyday, thus you can watch latest movies and series as soon
            as they released. Also, you can get information about what is coming
            and when is coming.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;

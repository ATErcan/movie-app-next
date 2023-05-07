import { baseUrl } from "@/assets/tmdb"
import { getData } from "@/assets/tmdb"
import { Roboto } from "next/font/google"
import { notFound } from "next/navigation"
import { AiFillStar } from "react-icons/ai"
import { HiOutlineTrendingUp } from "react-icons/hi";
import Trailer from "./Trailer"
import Genres from "./Genres"

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "700"]
});

const Details = async ({ id }: { id: string }) => {
  const data: MovieDetails = await getData(`${baseUrl}movie/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}`)
  
  // console.log(data)

  if(!data) {
    return notFound();
  }
  return (
    <section className="bg-neutral-900 text-white pb-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-y-4 py-4 px-8 md:flex-row md:justify-between md:items-center xl:py-8">
          <div className="flex flex-col gap-y-1">
            <h1 className="text-3xl font-bold mb-1.5 lg:text-4xl"> {data.title} </h1>
            <h3 className="text-sm font-normal text-white/70 md:text-sm"> {data.original_title}</h3>
            <h3 className="text-sm font-normal text-white/70 md:text-sm"> {data.release_date}</h3>
          </div>
          <div className="flex gap-x-4 mb-2">
            <div className={`${roboto.className} flex flex-col items-center`}>
              <h3 className= "text-sm text-white/70 mb-1.5 md:text-base"> Rating Title </h3>              
              <div className="flex items-center text-base md:text-lg">
                <AiFillStar className="text-yellow-500" />
                <h3 className="text-white text-lg font-bold md:text-xl"> {data.vote_average.toFixed(1)} <span className="text-sm text-white/70 md:text-base">/10</span> </h3>
              </div>
              <h3 className= "self-start m-0 text-sm text-white/70 md:text-base"> {data.vote_count} </h3>
            </div>
            <div className="flex flex-col items-center gap-y-1.5">
              <h3 className="text-sm text-white/70 md:text-base"> Popularity </h3>
              <div className="flex items-center gap-x-1.5 text-base md:text-lg">
                <HiOutlineTrendingUp className="text-red-600" />
                <h3> {data.popularity} </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Trailer */}
        {/* @ts-expect-error Server Component */}
        <Trailer movie={data} />

        {/* Details */}
        <div className="flex flex-col p-4 md:py-4 md:px-8 xl:py-8 xl:px-0">
          <Genres genres={data.genres} containerStyle="my-1 gap-x-2" itemStyle="border border-white/50 text-sm p-1.5 rounded-lg lg:text-base" />
          <p className="text-xl mb-4 italic font-semibold lg:text-2xl"> {data.tagline} </p>
          <p className="text-base/5"> {data.overview} </p>
          <div className="flex flex-wrap justify-center text-center gap-x-4 my-4 lg:my-8">
            Companies Goes Here Brrrrr
          </div>
        </div>

        {/* Cast */}
        <div className="px-4 mb-8 xl:p-0">
          <h3 className="text-2xl underline sm:text-3xl"> Cast {`>`}</h3>
          <div className="flex gap-x-4 overflow-y-hidden overflow-x-auto py-4">
            Casts Goes Here
          </div>
        </div>

        {/* Similar */}
        <div className="px-4 mb-8 xl:p-0">
          <h3 className="text-2xl underline sm:text-3xl"> Cast {`>`}</h3>
          <div className="flex gap-x-4 overflow-y-hidden overflow-x-auto py-4">
            Similar Movies Goes Here
          </div>
        </div>

        {/* GoBackBtn */}
        <div>
          <button className="bg-transparent border-[0.5px] border-gray-500 py-2 px-4 rounded-md text-white text-xl cursor-pointer hover:opacity-70"></button>
        </div>
      </div>
    </section>
  )
}

export default Details;
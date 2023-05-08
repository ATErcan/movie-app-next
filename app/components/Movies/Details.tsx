import { baseImgUrl, baseUrl } from "@/assets/tmdb"
import { getData } from "@/assets/tmdb"
import { Roboto } from "next/font/google"
import { notFound } from "next/navigation"
import { AiFillStar } from "react-icons/ai"
import { HiOutlineTrendingUp } from "react-icons/hi";
import Trailer from "./Trailer"
import Genres from "./Genres"
import Image from "next/image"
import MovieCast from "./MovieCast"
import SimilarMoviesCard from "./SimilarMoviesCard"
import GoBackBtn from "./GoBackBtn"

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "700"]
});

const Details = async ({ id }: { id: string }) => {
  const details = getData(`${baseUrl}movie/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}`);
  const similar = getData(`${baseUrl}movie/${id}/similar?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&language=en-US`);
  const [data, results]: [data: MovieDetails, results: MovieResponse] = await Promise.all([details, similar]).catch(error => notFound());

  const companies = data.production_companies.map((company) => {
    return (
      <div key={company.id} className="grow-0 shrink-0 basis-36 flex flex-col items-center gap-y-2">
        <div className="flex justify-center items-center w-12 h-12 rounded-full bg-white overflow-hidden">
          <Image 
            src={company.logo_path
              ? `${baseImgUrl}${company.logo_path}`
              : "https://img.freepik.com/free-vector/illustration-camera-icon_53876-5563.jpg?w=826&t=st=1669206703~exp=1669207303~hmac=e0ba54cf4b5f844ef289b9c724bff39926c0c8dc2edd8b2738308d66d89f7733"
            }
            alt={company.name}
            width={50}
            height={50}
            className="w-full" 
            />
        </div>
        <p className="text-xs md:text-sm font-bold"> {company.name} </p>
      </div>
    )
  })

  const similarMovies = results.results.map((similar) => {
    return <SimilarMoviesCard key={similar.id} movie={similar} />
  })

  if(!data) {
    return notFound();
  }
  return (
    <section className="bg-neutral-900 text-white pb-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-y-4 py-4 px-8 md:flex-row md:justify-between md:items-center xl:py-8">
          <div className="flex flex-col gap-y-1">
            <h1 className="text-3xl font-bold mb-1.5 lg:text-4xl"> {data.title} </h1>
            <h3 className="text-sm font-normal text-white/70 md:text-sm"> {data.original_title} </h3>
            <h3 className="text-sm font-normal text-white/70 md:text-sm"> {data.release_date} - {data.runtime} min. </h3>
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
            {companies}
          </div>
        </div>

        {/* Cast */}
        <div className="px-4 mb-8 xl:p-0">
          <h3 className="text-2xl underline sm:text-3xl"> Cast {`>`}</h3>
          {/* @ts-expect-error Server Component */}
          <MovieCast id={data.id} />
        </div>

        {/* Similar */}
        {results.results.length > 0 && <div className="px-4 mb-8 xl:p-0">
          <h3 className="text-2xl underline sm:text-3xl"> Similar Movies {`>`}</h3>
          <div className="flex gap-x-4 overflow-y-hidden overflow-x-auto py-4">
            {similarMovies}
          </div>
        </div>}

        {/* GoBackBtn */}
        <div className="px-4 xl:p-0">
          <GoBackBtn />
        </div>
      </div>
    </section>
  )
}

export default Details;
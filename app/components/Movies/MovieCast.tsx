import { baseImgUrl, baseUrl, getData } from "@/assets/tmdb";
import Image from "next/image";

const MovieCast = async ({ id }: { id: number }) => {
  const { cast }: { cast: MovieCast[]} = await getData(`${baseUrl}movie/${id}/credits?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&language=en-US`)

  return (
    <div className="flex gap-x-4 overflow-y-hidden overflow-x-auto py-4">
      {cast?.map((person) => {
        return (
          <div key={person.cast_id} className="flex flex-col items-center text-center grow-0 shrink-0 basis-auto h-auto gap-y1.5">
            <Image
              src={person.profile_path
                ? `${baseImgUrl}${person.profile_path}`
                : "/images/avatar.png"
              }
              alt={person.original_name}
              width={100}
              height={100}
              className="w-24 h-24 rounded-full object-cover sm:w-28 sm:h-28 md:w-36 md:h-36"
            />
            <h4 className="text-base font-bold"> {person.name} </h4>
            <h5 className="text-sm font-bold text-white/60"> {person.character} </h5>
          </div>
        )
      })}
    </div>
  )
}

export default MovieCast;
import { Dispatch, SetStateAction, useEffect } from "react";

const NavigationBtns = ({
  page,
  setPage,
  group,
}: {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  group: string;
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth"});
  },[page])

  return (
    <div className="flex justify-center gap-x-4 mt-8 mb-4">
      <button
        className="bg-none border-4 border-gray-700 rounded-md text-white text-base py-2 px-3 w-36 cursor-pointer enabled:hover:opacity-70 disabled:opacity-50 sm:py-3 sm:px-4 sm:w-40 sm:text-xl"
        onClick={() => {
          setPage((prevPage) => (prevPage -= 1))
        }}
        disabled={page === 1}
      >
        {`<<`} Previous
      </button>
      <button
        className="bg-none border-4 border-gray-700 rounded-md text-white text-base py-2 px-3 w-36 cursor-pointer enabled:hover:opacity-70 disabled:opacity-50 sm:py-3 sm:px-4 sm:w-40 sm:text-xl"
        onClick={() => {
          setPage((prevPage) => (prevPage += 1))
        }}
        disabled={
          (group === "upcoming" && page === 19) ||
          (group !== "upcoming" && page === 500)
        }
      >
        Next {`>>`}
      </button>
    </div>
  );
};

export default NavigationBtns;

'use client';

import { useRouter } from "next/navigation";

const GoBackBtn = () => {
  const router = useRouter();
  const handleClick = () => {
    router.back();
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  
  return (
    <button className="bg-transparent border-[0.5px] border-gray-500 py-2 px-4 rounded-md text-white text-xl cursor-pointer hover:opacity-70" onClick={handleClick}> {`<<`} Go Back </button>
  )
}

export default GoBackBtn;
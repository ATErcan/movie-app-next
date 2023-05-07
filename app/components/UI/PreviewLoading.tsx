'use client';

import { MoonLoader } from "react-spinners";

const PreviewLoading = () => {
  return (
    <div className={`flex items-center justify-center w-full h-full duration-200`}>
      <MoonLoader color="#fff" />
    </div>
  )
}

export default PreviewLoading;
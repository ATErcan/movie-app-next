'use client';

import { RingLoader } from "react-spinners";

const AuthLoading = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <RingLoader color="#000" />
    </div>
  )
}

export default AuthLoading;
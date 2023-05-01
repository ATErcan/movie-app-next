import { AiOutlineHome } from "react-icons/ai";
import { BiMoviePlay } from "react-icons/bi";
import { BiLogIn } from "react-icons/bi";
import { GiArchiveRegister } from "react-icons/gi";

export const data: Drawer[] = [
  {
    id: 1,
    name: "Home",
    path: "/",
    icon: AiOutlineHome,
  },
  {
    id: 2,
    name: "Movies",
    path: "/movies",
    icon: BiMoviePlay,
  },
  {
    id: 3,
    name: "Login",
    path: "/login",
    icon: BiLogIn,
  },
  {
    id: 4,
    name: "Register",
    path: "/register",
    icon: GiArchiveRegister,
  },
];
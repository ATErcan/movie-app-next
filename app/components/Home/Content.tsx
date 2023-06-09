import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import Image from "next/image";

interface IContent {
  item: Content;
  plusJakartaSans: NextFontWithVariable;
}

const Content = ({ item, plusJakartaSans }: IContent) => {
  return (
    <div className="flex flex-col sm:flex-row items-center px-2 py-4 gap-4 sm:w-3/4 m-auto">
      <Image
        src={item.url}
        alt={item.alt}
        width={150}
        height={60}
        className="w-2/4 sm:w-2/5 md:w-1/3 h-auto"
      />
      <p
        className={`${plusJakartaSans.variable} font-sans text-justify max-w-sm text-xs sm:text-base lg:text-sm xl:text-base`}
      >
        {item.desc}
      </p>
    </div>
  );
};

export default Content;

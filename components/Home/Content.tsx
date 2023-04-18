import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import { imageOptimizer } from "next/dist/server/image-optimizer";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import Image from "next/image";

interface Props {
  item: Content;
  plusJakartaSans: NextFontWithVariable;
}

const Content = ({ item, plusJakartaSans }: Props) => {
  return (
    <div className="flex flex-col sm:flex-row items-center px-2 py-4 gap-4 sm:w-3/4 m-auto">
      <Image
        src={item.url}
        alt={item.alt}
        width={150}
        height={60}
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

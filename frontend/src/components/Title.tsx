import React from "react";

interface TitleProps {
  text1: string;
  text2?: string;
}

const Title: React.FC<TitleProps> = ({ text1, text2 }) => {
  return (
    <div
      className="  flex  gap-2 items-center 
    mb-3 font-semibold font-serif  "
    >
      <p
        className=" title 
      text-[#364331] text-[1.3rem]"
      >
        {text1}
        <span className="text-gray-800  ml-3 ">{text2}</span>

      </p>
    </div>
  );
};

export default Title;

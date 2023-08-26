import React from "react";

export const TitleDescription = ({
  header,
  description,
}: {
  header: string;
  description: string;
}) => {
  return (
    <div>
      <h1 className=" text-[#222328] text-[2rem] mb-1">{header}</h1>

      <h3 className="text-gray-400 font-light">{description}</h3>
    </div>
  );
};

export default TitleDescription;

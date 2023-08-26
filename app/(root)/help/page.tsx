import TitleDescription from "@/components/shared/TitleDescription";
import React from "react";

const Page = () => {
  return (
    <div className="card">
      <TitleDescription
        header="Documentation"
        description="The project contains three levels of documentation. User documentation covers the use cases of the everday user,
         where as administrator documentation helps you with the management of the platform.
         On top of that developer documentation is the place to start when you want to improve or build upon the platform."
      />
    </div>
  );
};

export default Page;

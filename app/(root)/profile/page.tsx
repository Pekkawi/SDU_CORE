import TitleDescription from "@/components/shared/TitleDescription";
import React from "react";

const Page = () => {
  return (
    <div className="card">
      <TitleDescription header="Profile" description="Your user information" />

      <div className="flex flex-row  mt-8">
        <div className="flex flex-1 flex-col">
          <h6>Display Name</h6>
          <h6 className="text-gray-400">
            {/* Information from DB */}Eduard Liehn
          </h6>
        </div>
        <div className="flex flex-1 flex-col">
          <h6>Email</h6>
          <h6 className="text-gray-400">
            {/* Information from DB */}edlie22@student.sdu.dk
          </h6>
        </div>
        <div className="flex flex-1 flex-col">
          <h6>Role</h6>
          <h6 className="text-gray-400">{/* Information from DB */}Admin</h6>
        </div>
        <div className="flex flex-1 flex-col">
          <h6>Card Number</h6>
          <h6 className="text-gray-400">{/* Information from DB */}442479</h6>
        </div>
      </div>

      <div className="mt-10">Machine Permissions</div>
    </div>
  );
};

export default Page;

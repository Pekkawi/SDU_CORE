import TitleDescription from "@/components/shared/TitleDescription";

const Page = () => {
  return (
    <div className="card">
      <TitleDescription
        header="About this page"
        description="This is the official webpage of the student workshop at SDU Sønderborg.
         It offersa booking system for all manufacturing devices available.
         To be able to use this system, you need to log in with your SDU user account."
      />
    </div>
  );
};

export default Page;

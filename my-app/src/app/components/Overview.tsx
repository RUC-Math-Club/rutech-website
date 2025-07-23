import About from "./About";
import Events from "./Events";

function Overview () {
  return (
    <>
      <div className="">
        <div className="flex flex-col items-center justify-center m-5 sm:m-20 lg:m-60">
          <h2>Brief Overview</h2>
          <h5>Important Links</h5>
          
          <div className="flex flex-col md:flex-row  items-center justify-between">
            <span className="m-5 text-2xl font-bold hover:text-red-400 bg-gradient-to-r from-red-800 via-red-400 to-purple-400 bg-[length:200%_100%] bg-clip-text text-transparent">
              Mailing List
            </span>

            <span className="m-5 text-2xl font-bold hover:text-red-400 bg-gradient-to-r from-blue-400 via-green-400 to-blue-400 bg-[length:200%_100%] bg-clip-text text-transparent">
              Socials  
            </span>

            <span className="m-5 text-2xl font-bold bg-gradient-to-r hover:text-red-400 from-green-400 via-green-200 to-yellow-200 bg-[length:200%_100%] bg-clip-text text-transparent">
              Contact  
            </span>

          </div>
          
          <Events />
          <About />

        </div>
      </div>
    </>
  );
};

export default Overview;
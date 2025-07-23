
import Image from 'next/image';


function Main () {
  return (
    <>
    <div>
    <div className="h-screen w-full flex items-center justify-center fade-in">
      <div className="">
        <div className="">
          <Image
          src="/RuTech.png" // path in the /public folder
          alt="RuTech Image"
          width={700}
          height={1200}
          />
          <h3>The Leading Tech Student Organization at Rutgers</h3>
          <h5>More info coming soon</h5>
        </div>
      </div>
    </div>
    </div>

    </>
  );
};


export default Main;
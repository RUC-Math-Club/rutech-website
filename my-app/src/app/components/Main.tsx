import Head from 'next/head';
import VantaBackground from './VantaBackground';
import VantaCloudbackground from './VantaCloudBackground';

function Main() {
  return (
    <>
      <div className="relative h-screen w-full">
        <VantaBackground />
        
        {/* Possibly use this for white mode */}
       {/*  <div className='absolute inset-0 z-0'>
          <VantaCloudbackground />
        </div>
 */}

        <div
          className="
            absolute inset-0
            flex flex-row items-center sm:justify-center lg:justify-start lg:m-20
            text-white
            z-20
            text-center
          "
        >
          <div className='z-20'>

            <Head>
              <link
                href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap"
                rel="stylesheet"
              />
              <style>{`
                body {
                  font-family: 'Poppins', sans-serif;
                }
              `}</style>
            </Head>

            <h1
              className="
                font-poppins
                text-[4rem]
                xl:text-[8rem]
                font-extrabold
                text-red-600
                uppercase
                tracking-widest
                select-none
                m-0
              "
            >
              {/* Need Responsive Logo */}
              RuTech
            </h1>
            <h3>The Leading Tech Student Organization at Rutgers</h3>

          </div>
        </div>
      </div>
    </>
  );
}

export default Main;

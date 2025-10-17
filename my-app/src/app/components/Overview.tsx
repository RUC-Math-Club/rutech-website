import About from "./About";
import EventCard from "./EventsCard";
import Initiatives from "./Initiatives";


function Overview () {

  const events = [
  // Partner Events – Past
  {
    title: "Machine Learning Seminar: Dr. Benoit from Google DeepMind",
    description: "Benoit presented his recent work on implicit regularization in Deep Neural Networks.",
    date: "03/10/25",
    time: "12:45 PM",
    isDone: true
  },
  {
    title: "Math Competition for Research Mentorship",
    description: "A friendly problem-solving competition designed to pair students with mentors for research opportunities.",
    date: "04/03/25",
    time: "12:45 PM",
    isDone: true
  },

  // Partner Events – Future
  {
    title: "Math Club Datathon",
    description: "A weekend-long event where teams analyze real-world datasets. Prizes for most impactful insights.",
    date: "TBD",
    time: "",
    isDone: false
  },
  ];


  return (
    <>
      <div className="relative z-20 w-screen">
        <div className="flex flex-col items-center justify-center m-5 sm:m-35">
          <h2>Brief Overview</h2>
          <h5>Important Links</h5>
          
          <div className="flex flex-col md:flex-row  items-center justify-between">
            <span className="m-5 text-2xl font-bold hover:text-red-400 
                             bg-gradient-to-r from-red-800 
                             via-red-400 to-purple-400 bg-[length:200%_100%] bg-clip-text text-transparent">
              Mailing List
            </span>

            <span className="m-5 text-2xl font-bold hover:text-red-400 bg-gradient-to-r from-blue-400 via-green-400 to-blue-400 bg-[length:200%_100%] bg-clip-text text-transparent">
              Socials  
            </span>

            <span className="m-5 text-2xl font-bold bg-gradient-to-r hover:text-red-400 from-green-400 via-green-200 to-yellow-200 bg-[length:200%_100%] bg-clip-text text-transparent">
              Contact  
            </span>

          </div>
          
          {/* Events Section */}
          <div id="events">
            <h2 className="text-muted-foreground text-lg text-center mb-8">Upcoming Events</h2>
            <div className="border p-5  rounded-2xl border-gray-400 space-y-4">
              {events.map((event, index) => (
                <EventCard
                  key={index}
                  title={event.title}
                  description={event.description}
                  date={event.date}
                  time={event.time}
                  isDone={event.isDone}
                />
              ))}
            </div>
          </div>
        </div>
        <About />
        <Initiatives />
      </div>
    </>
  );
};

export default Overview;
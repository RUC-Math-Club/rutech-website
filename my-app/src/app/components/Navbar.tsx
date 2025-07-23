
function Navbar () {
  return (
  <div className="relative">
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full sm:w-[90%] bg-white/1 backdrop-blur-sm px-4 py-3 shadow-lg rounded-full flex flex-wrap items-center justify-center sm:justify-between font-semibold text-red-600 hover:text-red-500 text-base sm:text-lg">
      <span className="mr-5"><a href="#">RuTech</a></span>
      <ul className="flex flex-wrap sm:justify-end items-center gap-4 sm:gap-6 overflow-x-auto">
        <li><a href="#events">Events</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#Initiatives">Initiatives</a></li>
        <li><a href="#exec">Execs</a></li>
      </ul>
    </nav>
  </div>


  );
};

export default Navbar;

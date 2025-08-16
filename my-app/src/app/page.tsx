import Navbar from './components/Navbar';
import Main from './components/Main'
import Overview from './components/Overview';

export default function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <div className="h-px bg-white" />
      <Overview />
    </>
 );
}

import "./App.css";
import Banner from "./Components/Banner/Banner";
import Gift from "./Components/Gift/Gift";
import Guests from "./Components/Guests/Guests";
import Insurance from "./Components/Insurance/Insurance";
import Mentor from "./Components/Mentor/Mentor";
import Support from "./Components/Support/Support";
import Warning from "./Components/Warning/Warning";
import Testimonial from "./Components/Testimonial/Testimonial";
import Home from "./Components/Home/Home";
import Dancing from "./Components/Dancing/Dancing";
import Questions from "./Components/Questions/Questions";
import Details from "./Components/Details/Details";
import Road from "./Components/Road/Road";

function App() {
  return (
    <div>
      <Home />
      <Banner />
      <Dancing />
      <Road />
      <Gift />
      <Guests />
      <Testimonial />
      <Insurance />
      <Details />
      <Mentor />
      <Support />
      <Questions />
      <Warning />
    </div>
  );
}

export default App;

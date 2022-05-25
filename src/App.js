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

function App() {
  return (
    <div className="App">
      <Home />
      <Banner />
      <Dancing />
      <Mentor />
      <Support />
      <Gift />
      <Guests />
      <Testimonial />
      <Insurance />
      <Warning />
    </div>
  );
}

export default App;

import "./App.css";
import Banner from "./Components/Banner/Banner";
import Guests from "./Components/Guests/Guests";
import Insurance from "./Components/Insurance/Insurance";
import Mentor from "./Components/Mentor/Mentor";
import Support from "./Components/Support/Support";
import Warning from "./Components/Warning/Warning";

function App() {
  return (
    <div className="App">
      <Banner />
      <Mentor />
      <Support />
      <Guests />
      <Insurance />
      <Warning />
    </div>
  );
}

export default App;

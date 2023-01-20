import "./App.css";
import AllRoutes from "./Components/AllRoutes";
import CarsPage from "./Pages/CarsPage";
import Signuppage from "./Components/Signuppage";
import Loginpage from "./Components/Loginpage";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Signuppage />
      <AllRoutes />
      <Loginpage />
    </div>
  );
}

export default App;

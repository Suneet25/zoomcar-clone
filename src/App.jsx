import "./App.css";
import AllRoutes from "./Components/AllRoutes";
import CarsPage from "./Pages/CarsPage";
import Signuppage from "./Components/Signuppage";
function App() {
  return (
    <div className="App">
      <Signuppage />
      <AllRoutes />
    </div>
  );
}

export default App;

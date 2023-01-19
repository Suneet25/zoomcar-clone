import "./App.css";
import Payment from "./Pages/Payment/Payment";
import Banking from "./Pages/Payment/Banking";
import Credit from "./Pages/Payment/Credit";

import Wallet from "./Pages/Payment/Wallet";

function App() {
  return <div className="App">
    <Payment />
    <Wallet/>
    <Banking/>
    <Credit/>
  </div>;
}

export default App;

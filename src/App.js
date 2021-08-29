import React, {useState, useEffect} from "react";
import EarningsForm from "./components/EarningsForm";
import EarningsList from "./components/EarningsList";
import Header from './components/Header';
function App() {

  const [earnings, setEarnings] = useState([]);
  const [totalEarnings, setTotalEarnings] = useState(0);

  useEffect(() =>{
    let temp = 0;
    for(let i=0; i<earnings.length; i++){
      temp += parseInt(earnings[i].price);
    }
    setTotalEarnings(temp);
  }, [earnings])

  return (
    <div className="App">
     <Header totalEarnings={totalEarnings}></Header>
     <EarningsForm earnings={earnings} setEarnings={setEarnings}></EarningsForm>
     <EarningsList earnings={earnings} setEarnings={setEarnings}></EarningsList>
    
    </div>
  );
}

export default App;

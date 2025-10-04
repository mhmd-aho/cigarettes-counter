import Counter from "./Counter"
import Goal from "./goal"
import {  useEffect, useState } from "react";
function App() {
    const [count, setCount] = useState(() => {
        const saved = localStorage.getItem("count");
        const initialValue = JSON.parse(saved);
        return initialValue || 0;
    } );      
    const [packsCount, setPacksCount] = useState(() => {
        const saved = localStorage.getItem("packsCount");
        const initialValue = JSON.parse(saved);
        return initialValue || 0;
    }); 
    const [yesterdayCount, setYesterdayCount] = useState(() => {
        const saved = localStorage.getItem("yesterdayCount");
        const initialValue = JSON.parse(saved);
        return initialValue || 0;
    }); 
    useEffect(() => {
        localStorage.setItem("count", JSON.stringify(count));
    }, [count]);
    useEffect(() => {
        localStorage.setItem("packsCount", JSON.stringify(packsCount));
    }, [packsCount]);
    useEffect(() => {
        localStorage.setItem("yesterdayCount", JSON.stringify(yesterdayCount));
    }, [yesterdayCount]);
    useEffect(() => {
        if(count === 20) {
            setPacksCount(prev=>prev + 1);
            setCount(0);
        }
    }, [count]);
useEffect(() => {
  const now = new Date();
  const savedDate = localStorage.getItem("date");
  if (savedDate) {
    const previousDate = new Date(savedDate);
    if (now.getDate() !== previousDate.getDate()) {
      setYesterdayCount(count + packsCount * 20);
      setCount(0);
      setPacksCount(0);
    }
  }
  localStorage.setItem("date", now.toISOString());
  const interval = setInterval(() => {
    const current = new Date();
    if (current.getDate() !== new Date(localStorage.getItem("date")).getDate()) {
      window.location.reload();
    }
  }, 30 * 60 * 1000);

  return () => clearInterval(interval);
}, []);

  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-start gap-12 p-5">
      <h1 className="text-5xl font-bold text-center">Cigarettes tracker</h1>
      <Counter setCount={setCount} count={count} packsCount={packsCount} yesterdayCount={yesterdayCount} />
      <Goal count={count} yesterdayCount={yesterdayCount} packsCount={packsCount} />
    </div>
  )
}

export default App

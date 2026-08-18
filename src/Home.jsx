import { useState, useEffect } from "react";

const Home = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('count changed:', count);
  }, [count]);
 
  return (
    <div>
      <h2>{count}</h2>
      
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
 };
export default Home;
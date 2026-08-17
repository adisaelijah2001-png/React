import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("mario");
  const [age, setAge] = useState(24);

  const handclick = () => {
    setName("Alonge");
    setAge(30);
  };

  return (
    <div>
      <h2>Homepage</h2>
      <p>{name} is {age} years old</p>
      <button onClick={handclick}>Click me</button>
    </div>
  );
};

export default Home;
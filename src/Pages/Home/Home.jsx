import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Home = () => {
  const { bulbul } = useContext(AuthContext);

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;

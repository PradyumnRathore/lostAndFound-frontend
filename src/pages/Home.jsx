import { Link } from "react-router";

function Home() {
  return (
    <div>
    <Link to="/login">go to login</Link>
      <h1>Home Page</h1>
    </div>
  );
}

export default Home;

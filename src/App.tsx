import { useState } from "react";
import Nav from "./components/nav";
import Home from "./pages/home";
import SignUp from "./pages/signup";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  // const [user, setUser] = useState({});

  return (
    <main>
      <Nav loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      {loggedIn ? <Home /> : <SignUp setLoggedIn={setLoggedIn} />}
    </main>
  );
}

export default App;

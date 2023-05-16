import { useState, useEffect } from "react";
import Nav from "./components/nav";
import Home from "./pages/home";
import SignUp from "./pages/signup";
import { getItemFromStorage } from "./lib/storage";
import { getAllFile } from "./services/apiCalls";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  useEffect(() => {
    if (!getItemFromStorage("token")) {
      setLoggedIn(false);
    }
    getAllFile();
  }, []);
  return (
    <main>
      <Nav loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      {loggedIn ? <Home /> : <SignUp setLoggedIn={setLoggedIn} />}
    </main>
  );
}

export default App;

import { useEffect, useState } from "react";
import Nav from "./components/nav";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import SignUp from "./pages/signup";

function App() {
  const [count, setCount] = useState(0);

  const handleCallbackResponse = (response: any) => {
    console.log("Encoded JWT ID token:" + response.credential);
    document.getElementById("signInDiv").hidden = true;
  };

  const handleSignOut = (e: any) => {};
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "658166146383-8449ulcllgjhkmike3ih1tusead3jbtt.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "filled_blue",
      size: "large",
    });
  }, []);

  return (
    <main>
      <div id="signInDiv"></div>
      <button onClick={(e: any) => handleSignOut(e)}>Sign Out</button>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;

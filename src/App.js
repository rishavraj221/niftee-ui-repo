import React from "react";
import "./App.css";

import HomeRenew from "./pages/homeRenew";
import LoginPage from "./pages/login";

const session_id = "demo_session_" + Math.floor(Math.random() * 100000);

function App() {
  return (
    <div className="App">
      {localStorage.getItem("x-auth-token") ? (
        <HomeRenew session_id={session_id} />
      ) : (
        <LoginPage />
      )}
    </div>
  );
}

export default App;

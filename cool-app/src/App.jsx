import React, { useEffect, useState } from "react";
import Router from "./routes/Routes";

function App() {

  return (
    <div className="App grid overflow-x-hidden h-screen min-h-screen bg-slate-500">
      <Router />
    </div>
  );
}

export default App;

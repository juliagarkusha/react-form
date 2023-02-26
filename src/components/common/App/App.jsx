import React, { useEffect } from "react";
import './App.scss';

function App() {
  useEffect(() => {
    document.title = 'react-form';
  }, []);

  return (
    <main className="app">

    </main>
  );
}

export default App;

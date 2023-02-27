import React, { useEffect } from "react";
import ContactForm from "../ContactForm";
import './App.scss';

function App() {
  useEffect(() => {
    document.title = 'react-form';
  }, []);

  return (
    <main className="app">
      <ContactForm />
    </main>
  );
}

export default App;

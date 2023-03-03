import React from "react";
import Bottom from "./Components/Bottom/Bottom";
import Helps from "./Components/Helps/Helps";
import Navbar from "./Components/Navbar/Navbar";
import Plant from "./Components/Plant/Plant";
import Footer from "./pages/Footer/Footer";
import Header from "./pages/Header/Header";
import Main from "./pages/Main/Main";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Main />
      <Plant />
      <Helps />
      <Bottom />
      <Footer />
    </div>
  );
}

export default App;

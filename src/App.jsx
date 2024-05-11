import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Manager from "./components/Manager";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <div className="[background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#6c9_100%)]">
        <Manager />
      </div>

      <Footer />
    </>
  );
}

export default App;

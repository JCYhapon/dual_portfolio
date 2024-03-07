import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Projects from "./components/proiects/Projects";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
      <Sidebar />
      <main className="">
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;

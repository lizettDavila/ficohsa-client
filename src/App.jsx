//Components
import Landing from "./pages/Landing";
import Logo from "./components/Logo/Logo";
//UI
import "./App.css";

function App() {
  return (
    <div className="sm:p-10 p-5 lg:h-screen">
      <Logo />
      <Landing />
    </div>
  );
}

export default App;

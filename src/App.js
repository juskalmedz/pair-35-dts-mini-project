import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DashboardPage from "./containers/Dashboard";

function App() {
  return (
    <div className="App">
      <Header />
      <DashboardPage />
      <Footer />
    </div>
  );
}

export default App;

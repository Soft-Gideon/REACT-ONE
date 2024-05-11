import "./App.css";
import Profile from "./component/profile";
import Info from "./component/Info";
import Footer from "./component/footer";

function App() {
  return (
    <div className="container">
      <div className="box">
        <Profile />
        <Info />
        <Footer />
      </div>
    </div>
  );
}

export default App;

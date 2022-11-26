import "./App.css";
import Adress from "./component/Adress";
import FullName from "./component/FullName";
import ProfilePhoto from "./component/ProfilePhoto";

function App() {
  return (
    <div className="App">
      <ProfilePhoto />
      <FullName />
      <Adress />
    </div>
  );
}

export default App;

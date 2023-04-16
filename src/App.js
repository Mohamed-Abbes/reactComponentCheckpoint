import FullName from "./component/profile/FullName";
import ProfilePhoto from "./component/profile/ProfilePhoto";
import "./App.css"
import Address from "./component/profile/Address";

function App() {
  return (
    <div className="App">
      <ProfilePhoto/>
      <FullName/>
      <Address/>
    </div>
  );
}

export default App;

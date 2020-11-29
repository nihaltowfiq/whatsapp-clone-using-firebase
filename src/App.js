import "./App.scss";
import SideBar from "./components/SideBar/SideBar";
import ChatBar from "./components/ChatBar/ChatBar";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        {/* sidebar */}
        <SideBar />
        {/* chatbar */}
        <ChatBar />

        {/* nothing */}
      </div>
    </div>
  );
}

export default App;

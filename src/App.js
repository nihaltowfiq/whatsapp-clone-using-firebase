import "./App.scss";
import ChatBar from "./components/ChatBar/ChatBar";

function App() {
  return (
    <div className="app">
      <h1>This is Whatsapp Clone</h1>
      <div className="app__body">
        {/* sidebar */}

        {/* chatbar */}
        <ChatBar />

        {/* nothing */}
      </div>
    </div>
  );
}

export default App;

import './App.css';
import Header from "./components/Header";
import TinderCards from './components/TinderCards';
import SwipeButtons from "./components/SwipeButtons";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* Tinder Cards */}
      <TinderCards />
      {/* Swipe Buttons */}
      <SwipeButtons />
    </div>
  );
}

export default App;

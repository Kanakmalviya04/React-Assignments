import logo from './logo.svg';
import './App.css';
import myimg from './image/img1.jpg';

function App() {
  return (
    <div className="App">
      <h1>The Evolution of Airbnb's Frontend</h1>
      <p>@spikebrehm</p>
      <img src={myimg} height="70px" width="70px"  alt="airBnB"/>
    </div>
  );
}

export default App;

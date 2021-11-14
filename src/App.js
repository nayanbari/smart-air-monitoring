import logo from './logo.svg';
import './App.css';
import NavigationBar from './Components/NavigationBar';
import Banner from './Components/Banner';
import Banner_2 from './Components/Banner_2';
import GetYourApp from './Components/GetYourApp';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Banner />
      <Banner_2 />
      <GetYourApp />
    </div>
  );
}

export default App;


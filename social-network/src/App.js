import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app_container">
        <Nav />
        <div className="app_content">
          <Profile />
        </div>
      </div>
    </div>
  );
}

export default App;

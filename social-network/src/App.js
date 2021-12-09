import './App.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Profile from './components/profile/Profile';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app_container">
        <Nav />
        <div className="app_content">
          <Profile />
        </div>
        <Sidebar />
      </div>
    </div>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Profile from './components/profile/Profile';
import Sidebar from './components/sidebar/Sidebar';
import Messages from './components/messages/Messages';

function App() {
  return (    
      <div className="App">
        <Header />
        <div className="app_container">
          <Nav />
          <div className="app_content">
            <Routes>
              <Route path="/" element={<Profile />} />
              <Route path="/messages" element={<Messages />} />
            </Routes>
          </div>
          <Sidebar />
        </div>
      </div>
  );
}

export default App;

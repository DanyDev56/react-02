import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import logo from './assets/logo.svg';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header logo={logo} />
        <Routes>
          <Route path='/' element={<Profile userName="DanyDev83" />} />
          <Route path='/projects' element={<Projects userName="DanyDev83" />} />
          <Route path='/projects/:name' element={<ProjectDetail userName="DanyDev83" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Header from './Header';
import CreateProfile from './Lens/CreateProfileModal';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import CreateQuestion from './Lens/CreateQuestion'
import QuestionDetails from './Lens/QuestionDetails';
import Home from './Home';
function App() {
  
  return (
    <div className="App">
      <Header />
      <LandingPage />
      <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/question" element={<CreateQuestion />} />
        <Route path="Create-lens-profile" element={<CreateProfile />} />
        <Route path="/questionDetail/:id" element={<QuestionDetails />} />

        </Routes>
    
    </div>
  );
}

export default App;

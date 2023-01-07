import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import LetterMapping from './components/letter_mapping/LetterMapping';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/letter-mapping" element={<LetterMapping />} />
    </Routes>
  );
}

export default App;

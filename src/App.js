import AddNew from "./pages/AddNew";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-new" element={<AddNew />} />
    </Routes>
  </Router>
  );
}

export default App;

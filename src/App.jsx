import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./MyComponents/LandingPage";
import Navbar from "./MyComponents/Navbar";
import Footer from "./MyComponents/Footer";
import PricingPage from "./MyComponents/PricingPage";
import CriteriaPage from "./MyComponents/CriteriaPage";
import CandidateLeaderboard from "./MyComponents/RankingPage";


function App() {

  return (
    <>
        <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/criteria" element={<CriteriaPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/leaderboard" element={<CandidateLeaderboard />} />
            </Routes>
            <Footer />
        </Router>
    </>
  )
}

export default App;

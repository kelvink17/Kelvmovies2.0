import { Link } from "react-router-dom";
import "./landing-page.css";

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1 className="landing-title animate-in">KelvMovies 2.0</h1>
        <p className="landing-description animate-in-delay">
          Your ultimate destination for the best movie experience
        </p>
        <div className="landing-buttons animate-in-delay-longer">
          <Link to="/login" className="landing-button pulse-effect">
            Get Started
          </Link>
        </div>
      </div>

      <div className="background-elements">
        <div className="floating-circle circle1"></div>
        <div className="floating-circle circle2"></div>
        <div className="floating-circle circle3"></div>
      </div>

      <footer className="landing-footer animate-in-delay-longest">
        <p>© {new Date().getFullYear()} KelvMovies 2.0. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;

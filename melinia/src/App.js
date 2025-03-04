import './App.css';
import React, { useState, useEffect } from "react";
import Preloader from "./Components/Pre";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home/Home";
import Board from "./Components/Board/Board";
import MainDescription from './Components/Events/MainDescription';
import Footer from "./Components/Footer";
import Contact from "./Components/Contact/Contact"
import EventsPage from "./Components/EventPage/Events";
import LeaderBoard from './Components/LeaderBoard';
import { ThemeProvider } from "@material-tailwind/react";
import EventDetails from './Components/EventPage/Event';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Developers from './Components/Developers/Developers';
import mixpanel from 'mixpanel-browser';
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import Gallery from './Components/Gallery/Gallery';
import Gforms from './Components/Registration/Registeration';
import ReactGA from "react-ga4";

mixpanel.init("80b2a21992bf5ce950bb5dbd06b144a7", {
  debug: true
})

ReactGA.initialize([
  { trackingId: "G-24DYX82CNK" },  // First GA4 ID
  { trackingId: "G-6JNR0LNQNR" }   // Second GA4 ID (Replace with your second ID)
]);
ReactGA.send("pageview"); // Track page views

function App() {
  const [load, upadateLoad] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <Preloader load={load} />
        <SpeedInsights />
        <Analytics />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Navbar style={{ display: 'flex', justifyContent: 'end' }} />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/board" element={<Board />} />
            <Route path="/events/:id" element={<MainDescription />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/register" element={<Gforms />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/developers" element={<Developers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/leaderboard" element={<LeaderBoard />} />
            <Route path="/event/:id" element={<EventDetails />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );

}


export default App;




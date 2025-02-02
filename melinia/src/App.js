// //    import logo from './logo.svg';
// import './App.css';
// import React, { useState, useEffect } from "react";
// import Preloader from "./Components/Pre";
// import Navbar from "./Components/Navbar";
// import Home from "./Components/Home/Home";
// import Board from "./Components/Board/Board";
// import MainDescription from './Components/Events/MainDescription';
// import Footer from "./Components/Footer";
// import Contact from "./Components/Contact/Contact"
// import EventsPage from "./Components/Events";
// import { ThemeProvider } from "@material-tailwind/react";
// import EventDetails from './Components/Event';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from "react-router-dom";
// import ScrollToTop from "./Components/ScrollToTop";
// import "./style.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Developers from './Components/Developers/Developers';
// import mixpanel from 'mixpanel-browser';
// // import Achievements from "./Components/Achievements/Achievements";

// mixpanel.init("80b2a21992bf5ce950bb5dbd06b144a7", {
//   debug: true
// })

// function App() {
//   const [load, upadateLoad] = useState(true);
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       upadateLoad(false);
//     }, 1200);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <ThemeProvider>
//       <Router>
//         <Preloader load={load} />
//         <div className="App" id={load ? "no-scroll" : "scroll"}>
//           <Navbar style={{ display: 'flex', justifyContent: 'end' }} />
//           <ScrollToTop />
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/board" element={<Board />} />
//             <Route path="/events/:id" element={<MainDescription />} />
//             <Route path="/events" element={<EventsPage />} />
//             <Route path="/developers" element={<Developers />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/event/:id" element={<EventDetails />} />
//           </Routes>
//           <Footer />
//         </div>
//       </Router>
//     </ThemeProvider>
//   );

// }


// export default App;

// import React from 'react';
// import HoverButton from './Components/dsubscribe';

// const App = () => {
//   return (
//     <div>
//       <h1>Hover Over the Button</h1>
//       <HoverButton />
//     </div>
//   );
// };

// export default App;


// import React from 'react';
// import ScatterButton from './Components/SquidEffectButton';
// import HoverButton from './Components/dsubscribe';
// import Bgbutton from './Components/button';
// import image from "../src/Assets/tech.png";
// const App = () => {
//   return (
//     <div>
//       <h1>Hover Over the Button</h1>
//       <ScatterButton image={image} onclick={alert("Yes")} />
//       <br></br>
//       <Bgbutton image={image} />
//       <br>
//       </br>
//       <br></br>
//       <HoverButton />
//     </div>
//   );
// };

// export default App;


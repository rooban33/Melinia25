import React, { useState,useEffect } from "react";
import { Particle } from "./ParticlesBackground";
import HoverButton from "./EventPage/HoverButton";

function LeaderBoard() {
  const [activeCategory, setActiveCategory] = useState("Student");
  const [studentData, setStudentData] = useState([]);
  const [collegeData, setCollegeData] = useState([]);

  useEffect(() => {
    async function fetchLeaderboard() {
      try {
        const response = await fetch("https://payment-r2hu.onrender.com/leaderboard");
        const data = await response.json();

        // Assign position numbers dynamically
        const students = data.students

        const colleges = data.colleges

        setStudentData(students);
        setCollegeData(colleges);
      } catch (error) {
        console.error("Error fetching leaderboard:", error);
      }
    }

    fetchLeaderboard();
  }, []);
  return (
    <>
      <Particle />
      <header className="w-full py-8 sm:py-12 lg:py-16 flex justify-center" style={{marginTop:"5rem"}}>
        <nav className="flex flex-wrap gap-4">
          {["Student", "College"].map((category) => (
            <HoverButton
              key={category}
              text={category}
              onClick={() => setActiveCategory(category)}
              isActive={activeCategory === category}
            />
          ))}
        </nav>
      </header>

      <div className="flex justify-center px-4">
        <div className="w-full max-w-5xl bg-white/10 backdrop-blur-lg shadow-2xl rounded-2xl overflow-hidden border border-white/30 p-4">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm sm:text-base text-white">
              <thead>
                <tr className="text-white text-left text-lg" style={{backgroundColor:"darkgray"}}>
                  {activeCategory === "Student" ? (
                    <>
                      <th className="p-4">Position</th>
                      <th className="p-4">ID</th>
                      <th className="p-4">Student Name</th>
                      <th className="p-4">College</th>
                      <th className="p-4">Points</th>
                    </>
                  ) : (
                    <>
                      <th className="p-4">Position</th>
                      <th className="p-4">College Name</th>
                      <th className="p-4">Points</th>
                    </>
                  )}
                </tr>
              </thead>
              <tbody>
                {(activeCategory === "Student" ? studentData : collegeData).map((entry, index) => (
                  <tr
                    key={index}
                    className={`transition-all duration-300 hover:bg-purple-500/30 ${
                      index % 2 === 0 ? "bg-white/10" : "bg-white/5"
                    }`}
                  >
                    {activeCategory === "Student" ? (
                      <>
                        <td className="p-4 font-semibold text-center">{index+1}</td>
                        <td className="p-4 text-center">{entry.id}</td>
                        <td className="p-4 font-medium">{entry.name}</td>
                        <td className="p-4 text-center">{entry.college}</td>
                        <td className="p-4 font-bold text-indigo-400 text-center">{entry.points}</td>
                      </>
                    ) : (
                      <>
                        <td className="p-4 font-semibold text-center">{index+1}</td>
                        <td className="p-4 font-medium">{entry.name}</td>
                        <td className="p-4 font-bold text-purple-400 text-center">{entry.points}</td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeaderBoard;

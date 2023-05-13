import React, { useState } from "react";

const WetProcessDropdown = ({ onScoreChange }) => {
  const wetProcesses = [
    { label: "Silicon wash", score: 6.1 },
    { label: "aqua tech", score: 0.9 },
    { label: "garment wash normal wash", score: 1.7 },
    { label: "enzyme wash", score: 7.2 },
    { label: "curring", score: 6.4 },
    { label: "Garment Dye REACTIVE DYE", score: 16.4815 },
    { label: "Garment Wash GARMENT DIPPING NORMAL", score: 16.4 },
    { label: "Garment Dye PIGMENT DYE", score: 18.836 },
  ];

  const [selectedProcess, setSelectedProcess] = useState("");
  const [score, setScore] = useState("");

  const handleProcessSelect = (event) => {
    const selectedValue = event.target.value;
    setSelectedProcess(selectedValue);

    const wetProcess = wetProcesses.find((wp) => wp.label === selectedValue);
    if (wetProcess) {
      const selectedScore = wetProcess.score;
      setScore(selectedScore);
      onScoreChange(selectedScore, "five");
    } else {
      setScore(0);
      onScoreChange(0, "one");
    }
  };

  return (
    <div className="dropdown">
      <select value={selectedProcess} onChange={handleProcessSelect}>
        <option value="">Select WetProcess</option>
        {wetProcesses.map((wp) => (
          <option key={wp.label} value={wp.label}>
            {wp.label}
          </option>
        ))}
      </select>
      <br />

      <input placeholder="Score" type="text" value={score} readOnly />
    </div>
  );
};

export default WetProcessDropdown;

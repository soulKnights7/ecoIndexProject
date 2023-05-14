import React, { useState } from "react";

const TrimsDropdown = ({ onScoreChange }) => {
  const trims = [
    { label: "snap button - 0.1", score: 0.1 },
    { label: "recycled button - 2.73", score: 2.73 },
    { label: "recycled thread - 2.73", score: 2.73 },
    { label: "dracord - 0.07", score: 0.07 },
    { label: "zipper - 0.04", score: 0.04 },
    { label: "button - 0.01", score: 0.01 },
    { label: "thread - 2.73", score: 2.73 },
    { label: "interlining - 3.7", score: 3.7 },
  ];

  const [selectedTrim, setSelectedTrim] = useState("");
  const [score, setScore] = useState("");

  const handleTrimSelect = (event) => {
    const selectedValue = event.target.value;
    setSelectedTrim(selectedValue);

    const trim = trims.find((t) => t.label === selectedValue);
    if (trim) {
      const selectedScore = trim.score;
      setScore(selectedScore);
      onScoreChange(selectedScore, "four");
    } else {
      setScore(0);
      onScoreChange(0, "one");
    }
  };

  return (
    <div className="dropdown">
      <select value={selectedTrim} onChange={handleTrimSelect}>
        <option value="">Select Trim</option>
        {trims.map((trim) => (
          <option key={trim.label} value={trim.label}>
            {trim.label}
          </option>
        ))}
      </select>
      <br />

      <input placeholder="Score" type="text" value={score} readOnly />
    </div>
  );
};

export default TrimsDropdown;

import React, { useState } from "react";
import "./style.css";

const MaterialDropdown = ({ onScoreChange }) => {
  const materials = [
    { label: "cotton recycled - 1.8", score: 1.8 },
    { label: "cotton organic - 8.7", score: 8.7 },
    { label: "cotton BCI - 16.4", score: 16.4 },
    { label: "nylon recycled - 19.7", score: 19.7 },
    { label: "linen european - 14.1", score: 14.1 },
    { label: "wool rws - 8", score: 8 },
    { label: "viscose - 10.6", score: 10.6 },
    { label: "modal - 7.78", score: 7.78 },
    { label: "cotton conventional - 54.8", score: 54.8 },
  ];

  const [selectedMaterial, setSelectedMaterial] = useState("");
  const [score, setScore] = useState("");

  // Function to handle material selection
  const handleMaterialSelect = (event) => {
    const selectedValue = event.target.value;
    setSelectedMaterial(selectedValue);

    // Find the corresponding score for the selected material
    const material = materials.find((m) => m.label === selectedValue);
    if (material) {
      const selectedScore = material.score;
      setScore(selectedScore);

      onScoreChange(selectedScore, "three");
    } else {
      setScore(0);
      onScoreChange(0, "one");
    }
  };

  return (
    <div className="dropdown">
      <select value={selectedMaterial} onChange={handleMaterialSelect}>
        <option value="">Select Material</option>
        {materials.map((material) => (
          <option key={material.label} value={material.label}>
            {material.label}
          </option>
        ))}
      </select>
      <br />

      <input type="text" placeholder="Score" value={score} readOnly />
    </div>
  );
};

export default MaterialDropdown;

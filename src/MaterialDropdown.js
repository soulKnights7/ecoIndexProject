import React, { useState } from "react";
import "./style.css";

const MaterialDropdown = ({ onScoreChange }) => {
  const materials = [
    { label: "cotton recycled", score: 1.8 },
    { label: "cotton organic", score: 8.7 },
    { label: "cotton BCI", score: 16.4 },
    { label: "nylon recycled", score: 19.7 },
    { label: "linen european", score: 14.1 },
    { label: "wool rws", score: 8 },
    { label: "viscose", score: 10.6 },
    { label: "modal", score: 7.78 },
    { label: "cotton conventional", score: 54.8 },
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

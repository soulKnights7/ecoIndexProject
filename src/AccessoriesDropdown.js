import React, { useState } from "react";

const AccessoriesDropdown = ({ onScoreChange }) => {
  const accessories = [
    { label: "polybag medium recycled - 1.08", score: 1.08 },
    { label: "care label polyester - 0.017", score: 0.017 },
    { label: "care label wowen - 0.024", score: 0.024 },
    { label: "coller band paper - 0.12", score: 0.12 },
    { label: "cord polyester - 0.4", score: 0.4 },
    { label: "tissue paper - 0.11", score: 0.11 },
    {
      label: "Hang Tag Individual hangtag- Small Hangtag - 0.005",
      score: 0.005,
    },
    {
      label: "Main Label Printed Fabric Label (Conventional) - 0.205",
      score: 0.205,
    },
  ];

  const [selectedAccessory, setSelectedAccessory] = useState("");
  const [score, setScore] = useState("");

  const handleAccessorySelect = (event) => {
    const selectedValue = event.target.value;
    setSelectedAccessory(selectedValue);

    const accessory = accessories.find((acc) => acc.label === selectedValue);
    if (accessory) {
      const selectedScore = accessory.score;
      setScore(selectedScore);
      onScoreChange(selectedScore, "one");
    } else {
      setScore(0);
      onScoreChange(0, "one");
    }
  };

  return (
    <div className="dropdown">
      <select value={selectedAccessory} onChange={handleAccessorySelect}>
        <option value="">Select Accessories</option>
        {accessories.map((acc) => (
          <option key={acc.label} value={acc.label}>
            {acc.label}
          </option>
        ))}
      </select>
      <br />
      <input type="text" placeholder="Score" value={score} readOnly />
    </div>
  );
};

export default AccessoriesDropdown;

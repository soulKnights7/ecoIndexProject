import React, { useState } from "react";

const GarmentCertificationDropdown = ({ onScoreChange }) => {
  const garmentCertifications = [
    { label: "GOTS - 0.92", score: 0.92 },
    { label: "OCS - 0.93", score: 0.93 },
    { label: "GRS - 0.93", score: 0.93 },
  ];

  const [selectedCertification, setSelectedCertification] = useState("");
  const [score, setScore] = useState("");

  const handleCertificationSelect = (event) => {
    const selectedValue = event.target.value;
    setSelectedCertification(selectedValue);

    const certification = garmentCertifications.find(
      (cert) => cert.label === selectedValue
    );
    if (certification) {
      const selectedScore = certification.score;
      setScore(selectedScore);
      onScoreChange(selectedScore, "two");
    } else {
      setScore(0);
      onScoreChange(0, "one");
    }
  };

  return (
    <div className="dropdown">
      <select
        value={selectedCertification}
        onChange={handleCertificationSelect}
      >
        <option value="">Select Garment Certification</option>
        {garmentCertifications.map((cert) => (
          <option key={cert.label} value={cert.label}>
            {cert.label}
          </option>
        ))}
      </select>
      <br />

      <input type="text" placeholder="Score" value={score} readOnly />
    </div>
  );
};

export default GarmentCertificationDropdown;

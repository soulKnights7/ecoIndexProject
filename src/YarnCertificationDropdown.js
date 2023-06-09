import React, { useState } from "react";

const YarnCertificationDropdown = ({ onScoreChange }) => {
  const yarnCertifications = [
    { label: "GRS - 0.92", score: 0.92 },
    { label: "RWS - 0.92", score: 0.92 },
    { label: "ZDHC -  0.93", score: 0.93 },
    { label: "GOTS -  0.92", score: 0.92 },
    { label: "OCS - 0.93", score: 0.93 },
    { label: "RCS - 0.93", score: 0.93 },
    { label: "Oeko-Tex Std 100 - 0.92", score: 0.92 },
  ];

  const [selectedCertification, setSelectedCertification] = useState("");
  const [score, setScore] = useState("");

  const handleCertificationSelect = (event) => {
    const selectedValue = event.target.value;
    setSelectedCertification(selectedValue);

    const certification = yarnCertifications.find(
      (cert) => cert.label === selectedValue
    );
    if (certification) {
      const selectedScore = certification.score;
      setScore(selectedScore);
      onScoreChange(selectedScore, "six");
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
        <option value="">Select Yarn Certification</option>
        {yarnCertifications.map((cert) => (
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

export default YarnCertificationDropdown;

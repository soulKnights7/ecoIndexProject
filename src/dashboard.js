import React from "react";
import { header, row1, row2, row3, row4, row5 } from "./data";
import { OutTable, ExcelRenderer } from "react-excel-renderer";
import PieChart from "./pieChart";
import "./style.css";
import MaterialDropdown from "./MaterialDropdown";
import TrimsDropdown from "./TrimDropdown";
import WetProcessDropdown from "./WetProcessDropdown";
import AccessoriesDropdown from "./AccessoriesDropdown";
import YarnCertificationDropdown from "./YarnCertificationDropdown";
import GarmentCertificationDropdown from "./GarmentCertificationDropdown";
export default function Dashboard() {
  const [rows, setRows] = React.useState([]);
  const [curRow, setcurRow] = React.useState();
  const [styleSelected, setStyleSelected] = React.useState();
  const allrows = [[0, "none"], row1, row2, row5];
  const [one, setOne] = React.useState(0);
  const [two, setTwo] = React.useState(0);
  const [three, setThree] = React.useState(0);
  const [four, setFour] = React.useState(0);
  const [five, setFive] = React.useState(0);
  const [six, setSix] = React.useState(0);
  const [total, setTotal] = React.useState(undefined);
  const [color, setColor] = React.useState(undefined);
  const [toggle, setToggle] = React.useState(0);
  const [confirm, setConfirm] = React.useState(0);
  const handleScoreChange = (score, value) => {
    if (value === "one") setOne(score);
    if (value === "two") setTwo(score);
    if (value === "three") setThree(score);
    if (value === "four") setFour(score);
    if (value === "five") setFive(score);
    if (value === "six") setSix(score);
  };
  function handleChange(event) {
    setStyleSelected(event.target.value);
    if (event.target.value === "VINTAGE TWILL RFD") setcurRow(row1);
    else if (event.target.value === "JJOR MULTI STRIPE") setcurRow(row2);
    else if (event.target.value === "CASUAL LINRN BOYFRIEND SHIRT")
      setcurRow(row5);
    else if (event.target.value === "none") setcurRow(undefined);
    setConfirm(true);
  }
  function handleFile(event) {
    const file = event.target.files[0];
    ExcelRenderer(file, (err, response) => {
      if (err) console.log(err);
      setRows(response.rows);
      console.log(response.rows[5]);
    });
  }
  console.log(curRow);
  const handleClick = () => {
    setTotal(one + two + three + four + five + six);
    setToggle(1);
  };
  React.useEffect(() => {
    setToggle(1);
    if (total > 0 && total <= 20) setColor("Green");
    if (total >= 21 && total <= 40) setColor("Yellow");
    if (total >= 41 && total <= 65) setColor("Orange");
    if (total > 66 && total <= 100) setColor("Red");
  }, [total]);
  const reset = () => {
    setTotal(0);
    setColor(undefined);
    setToggle(0);
    setOne(0);
    setTwo(0);
    setThree(0);
    setFour(0);
    setFive(0);
    setSix(0);
  };
  return (
    <div>
      <p className="excelexcel">Eco Index Environmental Indicator</p>
      <br />
      <br />

      <div className="card">
        <article className="leftCard">
          <span
            className={
              confirm ? `border${curRow[99]} selectStyle` : "selectStyle"
            }
          >
            <label className="selectLabelStyle" htmlFor="styleCode">
              Select Style Code &nbsp;&nbsp;&nbsp;{" "}
            </label>
            <select id="styleCode" onChange={handleChange}>
              {allrows.map((row, index) => (
                <option key={index} value={row[1]}>
                  {row[1]}
                </option>
              ))}
            </select>
          </span>
          <br />

          {curRow && (
            <div className="box">
              {" "}
              <article
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "flex-start",
                }}
              >
                <span
                  className={confirm ? `border${curRow[99]} pieGrp` : "pieGrp"}
                >
                  <p>Yarn certifications</p>
                  <PieChart
                    labels={[
                      header[7],
                      header[9],
                      header[11],
                      header[13],
                      header[15],
                    ]}
                    data={[
                      curRow[8],
                      curRow[10],
                      curRow[12],
                      curRow[14],
                      curRow[16],
                    ]}
                  />
                </span>
                <span
                  className={confirm ? `border${curRow[99]} pieGrp` : "pieGrp"}
                >
                  <p>Garment certifications</p>
                  <PieChart
                    labels={[
                      curRow[18],
                      curRow[20],
                      curRow[22],
                      "Garment certifications 4",
                      "Garment certifications 5",
                    ]}
                    data={[
                      curRow[19],
                      curRow[21],
                      curRow[23],
                      curRow[25],
                      curRow[27],
                    ]}
                  />
                </span>
                <span
                  className={confirm ? `border${curRow[99]} pieGrp` : "pieGrp"}
                >
                  <p>Accessories & Packaging</p>
                  <PieChart
                    labels={[
                      curRow[85],
                      curRow[87],
                      curRow[89],
                      "Accessories & Packaging4",
                      "Accessories & Packaging5",
                    ]}
                    data={[
                      curRow[86],
                      curRow[88],
                      curRow[90],
                      curRow[92],
                      curRow[94],
                    ]}
                  />
                </span>
              </article>
              <article
                style={{
                  display: "flex",
                  width: "100%",
                }}
              >
                <span
                  className={confirm ? `border${curRow[99]} pieGrp` : "pieGrp"}
                >
                  <p>Wet Process</p>
                  <PieChart
                    labels={[
                      curRow[76],
                      curRow[78],
                      "Wet Processes3",
                      "Wet Processes4",
                    ]}
                    data={[curRow[77], curRow[79], curRow[81], curRow[83]]}
                  />
                </span>
                <span
                  className={confirm ? `border${curRow[99]} pieGrp` : "pieGrp"}
                >
                  <p>Material</p>
                  <PieChart
                    labels={[
                      curRow[29],
                      "material 2",
                      "material 3",
                      "material 4",
                    ]}
                    data={[curRow[31], curRow[34], curRow[37], curRow[40]]}
                  />
                </span>
                <span
                  className={confirm ? `border${curRow[99]} pieGrp` : "pieGrp"}
                >
                  <p>Trims & Embroidery</p>
                  <PieChart
                    labels={[
                      curRow[52],
                      curRow[54],
                      curRow[56],
                      " Trims & Embroidery 4",
                      " Trims & Embroidery 5",
                      " Trims & Embroidery 6",
                      " Trims & Embroidery 7",
                    ]}
                    data={[
                      curRow[53],
                      curRow[55],
                      curRow[57],
                      curRow[59],
                      curRow[61],
                      curRow[63],
                      curRow[65],
                    ]}
                  />
                </span>
              </article>
              <span
                className={
                  confirm ? `border${curRow[99]} left-stats` : "left-stats"
                }
              >
                <p style={{ padding: "1rem" }}>Overall Score: {curRow[98]}</p>
                <p
                  style={{
                    backgroundColor: `${curRow[99]}`,
                    padding: "1rem",
                    borderRadius: "5px",
                  }}
                >
                  Overall Color Category: {curRow[99]}
                </p>
              </span>
            </div>
          )}
        </article>
        {curRow && (
          <article
            className={
              color ? `border${color} rightCard border` : "rightCard border"
            }
          >
            <span className="styleselected">
              <label htmlFor="styleCode">
                Select Style Code &nbsp;&nbsp;&nbsp;{" "}
              </label>
              <input type="text" className="excel" value={styleSelected} />
            </span>
            <MaterialDropdown onScoreChange={handleScoreChange} />
            <TrimsDropdown onScoreChange={handleScoreChange} />
            <WetProcessDropdown onScoreChange={handleScoreChange} />
            <AccessoriesDropdown onScoreChange={handleScoreChange} />
            <YarnCertificationDropdown onScoreChange={handleScoreChange} />
            <GarmentCertificationDropdown onScoreChange={handleScoreChange} />
            <span
              style={{
                display: "flex",
                width: "85%",
                margin: "auto",
                justifyContent: "center",
              }}
            >
              <input
                type="text"
                className="totalVal"
                placeholder="Total"
                value={total}
              />
              <button onClick={handleClick}>Calculate Total</button>
              <button onClick={reset}>Reset</button>
            </span>
            <div className="reesult">
              {color && (
                <span
                  style={{
                    width: "100%",
                    color: `black `,
                    backgroundColor: `${color}`,
                    borderRadius: "5px",
                  }}
                >
                  {color.toUpperCase()}
                </span>
              )}
            </div>
          </article>
        )}
      </div>
    </div>
  );
}

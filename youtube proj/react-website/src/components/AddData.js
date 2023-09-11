import React, { useState } from "react";
import axios from "axios";
const AddData = () => {
  const [ReminderMsg, setname] = useState("");
  const [ReminderAt, setsalary] = useState("");
  const apiUrl = "http://localhost:9000/addReminder";

  const handleAddData = () => {
    const newEmployee = {
      ReminderMsg,
      ReminderAt,
    };

    axios
      .post(apiUrl, newEmployee, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Employee added:", response.data);
        // Clear input fields after successful addition
        setname("");
        setsalary("");
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="AddData">
      <h2>Add Data</h2>
      <label>
        Name:
        <input
          type="text"
          value={ReminderMsg}
          onChange={(e) => setname(e.target.value)}
        />
      </label>
      <br />
      <label>
        salary:
        <input
          type="text"
          value={ReminderAt}
          onChange={(e) => setsalary(e.target.value)}
        />
      </label>
      <br />
      <div className="addButon">
      <button onClick={handleAddData}>Add Data</button>
      </div>
    </div>
  );
};

export default AddData;

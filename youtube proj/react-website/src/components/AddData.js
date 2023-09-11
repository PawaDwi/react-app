import React from "react";
import axios from "axios";
const AddData = (props) => {
  const { name, salary, setname, setsalary, getdata } = props; // const [name, setname] = useState("");
  const apiUrl = "http://localhost:9000/addReminder";

  const handleAddData = () => {
    const newEmployee = {
      ReminderMsg: name,
      ReminderAt: salary,
    };
    axios
      .post(apiUrl, newEmployee, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Employee added:", response.data);
        // To Clear input fields 
        setname("");
        setsalary("");
        getdata();
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
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
      </label>
      <br />
      <label>
        salary:
        <input
          type="text"
          value={salary}
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

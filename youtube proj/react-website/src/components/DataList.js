import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./Search";

const DataListing = () => {
  const apiUrl = "http://localhost:9000/getAll";
  const [data, setdata] = useState([]);
  const [isAscending, setIsAscending] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(apiUrl);
        const data = response.data;
        setdata(data);
      } catch (error) {
        console.log(error);
      }
    }
  
    fetchData();
  }, []);
  const updateSearchData = (filteredData) => {
    setdata(filteredData);
  };

  const handleSort = (property) => {

    console.log(`Sorting by property: ${property}, Ascending: ${isAscending}`);
    const sortedData = [...data].sort((a, b) => {
      const valueA = a[property];
      const valueB = b[property];

      if (isAscending) {
        return valueA.localeCompare(valueB);
      } else {
        return valueB.localeCompare(valueA);
      }
    });

    setdata(sortedData);
    setIsAscending(!isAscending);
  };

  const fetchingData = async () => {
    try {
      const response = await axios.get(apiUrl);
      const data = response.data;
      setdata(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.post(`http://localhost:9000/${id}`);
      // After successful delete, fetch the updated data
      fetchingData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="data">

        <Search data={data} updateSearchData={updateSearchData} />
    
        <div className="itemdata">

        <button onClick={() => handleSort("ReminderMsg")}>
        {isAscending ? "Sort A-Z" : "Sort Z-A"}
         </button>
        </div>
     <div className="datalist">
    <h2>Data List</h2>
      <ul>
        {data.map((values) => (
          <li key={values.id}>
            <div className="deletebutton">
            {values.ReminderMsg} - {values.ReminderAt}
            <button onClick={() => handleDelete(values.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default DataListing;

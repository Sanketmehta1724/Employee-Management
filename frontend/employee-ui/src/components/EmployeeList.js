// src/components/EmployeeList.js
import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // ✅ reusable fetch function
  const fetchEmployees = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:9090/employee");
      setEmployees(response.data); 
      setLoading(false);
    } catch (err) {
      console.error("Error fetching employees:", err);
      setError("Failed to fetch employees");
      setLoading(false);
    }
  }, []);

  
  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

 
  const deleteEmployee = async (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      try {
        await axios.delete(`http://localhost:9090/employee/${id}`);
        fetchEmployees(); 
      } catch (err) {
        console.error("Error deleting employee:", err);
        alert("Failed to delete employee");
      }
    }
  };

  if (loading) return <p className="text-center mt-4">Loading employees...</p>;
  if (error) return <p className="text-center text-red-500 mt-4">{error}</p>;

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Employee List</h2>
        <button
          onClick={() => navigate("/create")}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          + Create Employee
        </button>
      </div>

      {employees.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Phone</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id}>
                <td className="border px-4 py-2">{emp.id}</td>
                <td className="border px-4 py-2">{emp.name}</td>
                <td className="border px-4 py-2">{emp.email}</td>
                <td className="border px-4 py-2">{emp.phone}</td>
                <td className="border px-4 py-2 flex gap-2">
                  <button
                    onClick={() => navigate(`/update/${emp.id}`)}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => deleteEmployee(emp.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default EmployeeList;

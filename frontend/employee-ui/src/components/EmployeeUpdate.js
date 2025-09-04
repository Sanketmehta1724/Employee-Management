// src/components/UpdateEmployee.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateEmployee = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  
  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(`http://localhost:9090/employee/${id}`);
        setEmployee(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching employee:", err);
        setLoading(false);
      }
    };

    fetchEmployee();
  }, [id]);

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:9090/employee/${id}`, employee);
      alert("Employee updated successfully!");
      navigate("/");
    } catch (err) {
      console.error("Error updating employee:", err);
      alert("Failed to update employee");
    }
  };

  if (loading) return <p className="text-center mt-4">Loading employee...</p>;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Update Employee</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={employee.name}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={employee.email}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium">Phone</label>
          <input
            type="text"
            name="phone"
            value={employee.phone}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateEmployee;

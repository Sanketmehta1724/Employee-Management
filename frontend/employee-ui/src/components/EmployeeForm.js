import React, { useState, useEffect } from "react";

export default function EmployeeForm({ initialValues, onSubmit, buttonText }) {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    phone: "",
  });

  
  useEffect(() => {
    if (initialValues) {
      setEmployee(initialValues);
    }
  }, [initialValues]);

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(employee);
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">
        {buttonText} Employee
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={employee.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={employee.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Enter phone"
          value={employee.phone}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
          required
        />
        <button
          type="submit"
          className="w-full py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
}

import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import EmployeeForm from "./EmployeeForm";

export default function EmployeeCreate() {
  const navigate = useNavigate();

  const handleCreate = async (employee) => {
    await axios.post("http://localhost:9090/employee", employee);
    navigate("/");
  };

  return (
    <EmployeeForm
      initialValues={{ name: "", email: "", phone: "" }}
      onSubmit={handleCreate}
      buttonText="Create"
    />
  );
}

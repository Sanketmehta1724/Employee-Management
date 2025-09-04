package com.myproject2.emp;

import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin("http://localhost:3000")
@RestController
public class EmpController {
    @Autowired
    EmpService EmployeeService;
    // EmpService EmployeeService = new EmpServiceImpl();
    @GetMapping("employee")
    public List<Employee> getAllEmployees() {
        return EmployeeService.readEmployees();
    }

     @GetMapping("employee/{id}")
    public Employee getEmployeeById(@PathVariable Long id) {
        return EmployeeService.readEmployee(id);
    }

    @PostMapping("employee")
    public String createEmployee(@RequestBody Employee employee) {
        // TODO: process POST request
        return EmployeeService.createEmployee(employee);

    }

    @DeleteMapping("employee/{id}")
    public String deleteEmployee(@PathVariable Long id) {
      return EmployeeService.deleteEmployee(id) ? "Employee deleted successfully" : "Not Found";
        
    }

    @PutMapping("employee/{id}")
    public Employee updateEmployee(@PathVariable Long id, @RequestBody Employee employee) {
        return EmployeeService.updateEmployee(id, employee);
    }
}

package com.myproject2.emp;

import java.util.List;

public interface EmpService {
    
    String createEmployee(Employee employee);
    List<Employee> readEmployees();
    boolean deleteEmployee(Long id);
    Employee updateEmployee(Long id, Employee employee);
    Employee readEmployee(Long id);
}

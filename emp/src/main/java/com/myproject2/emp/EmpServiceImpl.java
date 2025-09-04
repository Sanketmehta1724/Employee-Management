package com.myproject2.emp;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

@Service
public class EmpServiceImpl implements EmpService {

    List<Employee> employees = new ArrayList<>();
    @Autowired
    private EmpRepository empRepository;

    @Override
    public String createEmployee(Employee employee) {
        EmpEntity empEntity = new EmpEntity();
        BeanUtils.copyProperties(employee, empEntity);

        empRepository.save(empEntity);
        // employees.add(employee);
        return "Employee created successfully";
    }

    @Override
    public List<Employee> readEmployees() {
        List<Employee> employees = new ArrayList<>();
        // TODO Auto-generated method stub
        empRepository.findAll().forEach(entity -> {
            Employee emp = new Employee();
            BeanUtils.copyProperties(entity, emp);
            employees.add(emp);
        });
        return employees;
    }

    @Override
    public boolean deleteEmployee(Long id) {
        empRepository.deleteById(id);
        return true;
    }

    @Override
    public Employee updateEmployee(Long id, Employee employee) {
        // TODO Auto-generated method stub
        EmpEntity NewEmployee = empRepository.findById(id).get();
        BeanUtils.copyProperties(employee, NewEmployee,"id");
       empRepository.save(NewEmployee)  ;

        return employee;
      }

    @Override
    public Employee readEmployee(Long id) {
        // TODO Auto-generated method stub
        EmpEntity empEntity = empRepository.findById(id).get();
        Employee emp = new Employee();
        BeanUtils.copyProperties(empEntity, emp);
        return emp;
    }
}
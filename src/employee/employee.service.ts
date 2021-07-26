/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmployeeCreateDTO } from './dto/create-employee.input';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) {}
  async findAll(): Promise<Employee[]> {
    const emp: Employee = new Employee();
    emp.id = 1;
    emp.firstName = 'Anubhav';
    emp.lastName = 'Singh';
    emp.designation = 'Student';
    emp.city = 'Gwalior';
    return [emp];
  }
  async create(employee: EmployeeCreateDTO): Promise<Employee> {
    const emp = this.employeeRepository.create(employee);
    this.employeeRepository.save(emp);
    return emp;
  }
}

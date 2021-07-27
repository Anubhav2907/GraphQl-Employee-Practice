/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from 'src/project/entities/project.entity';
import { ProjectService } from 'src/project/project.service';
import { Repository } from 'typeorm';
import { EmployeeCreateDTO } from './dto/create-employee.input';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
    private projectService: ProjectService,
  ) {}
  async findAll(): Promise<Employee[]> {
    return this.employeeRepository.find();
  }
  async create(employee: EmployeeCreateDTO): Promise<Employee> {
    const emp = this.employeeRepository.create(employee);
    this.employeeRepository.save(emp);
    return emp;
  }
  async getProject(id: number): Promise<Project> {
    return this.projectService.findOne(id);
  }
}

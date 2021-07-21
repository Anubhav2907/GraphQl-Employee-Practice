/* eslint-disable prettier/prettier */
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Employee {
  id: string;
  firstName: string;
  lastName: string;
  designation: string;
  city: string;
}

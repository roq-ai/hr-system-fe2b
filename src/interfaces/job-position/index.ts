import { EmployeeInterface } from 'interfaces/employee';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface JobPositionInterface {
  id?: string;
  title: string;
  description?: string;
  recruiter_id?: string;
  created_at?: any;
  updated_at?: any;
  employee?: EmployeeInterface[];
  user?: UserInterface;
  _count?: {
    employee?: number;
  };
}

export interface JobPositionGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  recruiter_id?: string;
}

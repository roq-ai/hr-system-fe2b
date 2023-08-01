import { UserInterface } from 'interfaces/user';
import { JobPositionInterface } from 'interfaces/job-position';
import { GetQueryInterface } from 'interfaces';

export interface EmployeeInterface {
  id?: string;
  user_id?: string;
  job_position_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  job_position?: JobPositionInterface;
  _count?: {};
}

export interface EmployeeGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  job_position_id?: string;
}

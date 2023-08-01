import axios from 'axios';
import queryString from 'query-string';
import { JobPositionInterface, JobPositionGetQueryInterface } from 'interfaces/job-position';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getJobPositions = async (
  query?: JobPositionGetQueryInterface,
): Promise<PaginatedInterface<JobPositionInterface>> => {
  const response = await axios.get('/api/job-positions', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createJobPosition = async (jobPosition: JobPositionInterface) => {
  const response = await axios.post('/api/job-positions', jobPosition);
  return response.data;
};

export const updateJobPositionById = async (id: string, jobPosition: JobPositionInterface) => {
  const response = await axios.put(`/api/job-positions/${id}`, jobPosition);
  return response.data;
};

export const getJobPositionById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/job-positions/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteJobPositionById = async (id: string) => {
  const response = await axios.delete(`/api/job-positions/${id}`);
  return response.data;
};

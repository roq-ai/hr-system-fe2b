import * as yup from 'yup';

export const employeeValidationSchema = yup.object().shape({
  user_id: yup.string().nullable(),
  job_position_id: yup.string().nullable(),
});

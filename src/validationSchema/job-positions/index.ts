import * as yup from 'yup';

export const jobPositionValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().nullable(),
  recruiter_id: yup.string().nullable(),
});

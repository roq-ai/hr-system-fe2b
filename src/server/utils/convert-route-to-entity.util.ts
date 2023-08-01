const mapping: Record<string, string> = {
  employees: 'employee',
  'job-positions': 'job_position',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}

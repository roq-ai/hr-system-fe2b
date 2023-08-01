interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['System Administrator'],
  customerRoles: [],
  tenantRoles: ['System Administrator', 'HR Manager', 'Employee', 'Recruiter'],
  tenantName: 'Organization',
  applicationName: 'HR System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};

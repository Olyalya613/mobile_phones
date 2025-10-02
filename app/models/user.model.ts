export enum UserStatus {
  Active = 'Active',
  Inactive = 'Inactive',
  Pending = 'Pending',
}

export interface User {
  id: number;
  name: string;
  status: UserStatus;
  address: { city: string; street: string; };
  hobbies: string[];
}

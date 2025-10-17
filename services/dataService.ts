
import { User } from '../types';

const mockUsers: User[] = [
  { id: 1, name: 'Jane Doe', email: 'jane.doe@example.com', role: 'Admin', lastLogin: '2023-10-27 10:00 AM' },
  { id: 2, name: 'John Smith', email: 'john.smith@example.com', role: 'Editor', lastLogin: '2023-10-27 09:45 AM' },
  { id: 3, name: 'Alice Johnson', email: 'alice.j@example.com', role: 'User', lastLogin: '2023-10-26 03:12 PM' },
  { id: 4, name: 'Bob Brown', email: 'bob.brown@example.com', role: 'User', lastLogin: '2023-10-27 11:30 AM' },
  { id: 5, name: 'Charlie Davis', email: 'charlie.d@example.com', role: 'Editor', lastLogin: '2023-10-25 08:00 AM' },
];

export const getMockUsers = (): Promise<User[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockUsers);
    }, 500); // Simulate network delay
  });
};

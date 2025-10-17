import React from 'react';
import { User } from '../types';
import { exportToCsv, exportToJson } from '../services/exportService';

interface UsersTableProps {
  users: User[];
}

const UsersTable: React.FC<UsersTableProps> = ({ users }) => {

  const handleCsvExport = () => {
    exportToCsv('users.csv', users);
  };

  const handleJsonExport = () => {
    exportToJson('users.json', users);
  };

  return (
    <div className="bg-theme-bg-primary shadow-lg rounded-xl overflow-hidden">
      <div className="p-4 sm:p-6 flex justify-between items-center border-b border-theme-border">
        <h2 className="text-xl font-semibold text-theme-text-base">All Users</h2>
        <div className="flex space-x-2">
          <button onClick={handleCsvExport} className="px-4 py-2 text-sm font-medium text-white bg-theme-primary hover:bg-theme-primary-hover rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-theme-primary">Export CSV</button>
          <button onClick={handleJsonExport} className="px-4 py-2 text-sm font-medium text-theme-text-base bg-theme-bg-tertiary hover:opacity-90 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-theme-primary">Export JSON</button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-theme-border">
          <thead className="bg-theme-bg-tertiary">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-theme-text-muted uppercase tracking-wider">Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-theme-text-muted uppercase tracking-wider">Email</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-theme-text-muted uppercase tracking-wider">Role</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-theme-text-muted uppercase tracking-wider">Last Login</th>
            </tr>
          </thead>
          <tbody className="bg-theme-bg-primary divide-y divide-theme-border">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-theme-bg-tertiary/50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-theme-text-base">{user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-theme-text-muted">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                   <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        user.role === 'Admin' ? 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300' :
                        user.role === 'Editor' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300' :
                        'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300'
                    }`}>
                        {user.role}
                    </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-theme-text-muted">{user.lastLogin}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersTable;
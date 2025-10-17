import React from 'react';

export enum Theme {
  Light = 'light',
  Dark = 'dark',
  Elegant = 'elegant',
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: 'Admin' | 'User' | 'Editor';
  lastLogin: string;
}

export interface RegionComponent {
  id: string;
  component: React.ComponentType;
}

import { useContext } from 'react';
import { RegionContext } from '../contexts/RegionContext';

export const useRegions = () => {
  const context = useContext(RegionContext);
  if (context === undefined) {
    throw new Error('useRegions must be used within a RegionProvider');
  }
  return context;
};

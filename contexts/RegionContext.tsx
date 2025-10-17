
import React, { createContext, useState, useCallback } from 'react';
import { RegionComponent } from '../types';

type RegionRegistry = Record<string, RegionComponent[]>;

interface RegionContextType {
  regions: RegionRegistry;
  registerComponent: (regionName: string, id: string, component: React.ComponentType) => void;
  unregisterComponent: (regionName: string, id: string) => void;
}

export const RegionContext = createContext<RegionContextType | undefined>(undefined);

export const RegionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [regions, setRegions] = useState<RegionRegistry>({});

  const registerComponent = useCallback((regionName: string, id: string, component: React.ComponentType) => {
    setRegions(prevRegions => {
      const regionComponents = prevRegions[regionName] || [];
      if (regionComponents.some(c => c.id === id)) {
        return prevRegions; // Already registered
      }
      return {
        ...prevRegions,
        [regionName]: [...regionComponents, { id, component }],
      };
    });
  }, []);

  const unregisterComponent = useCallback((regionName: string, id: string) => {
    setRegions(prevRegions => {
      const regionComponents = prevRegions[regionName] || [];
      return {
        ...prevRegions,
        [regionName]: regionComponents.filter(c => c.id !== id),
      };
    });
  }, []);

  return (
    <RegionContext.Provider value={{ regions, registerComponent, unregisterComponent }}>
      {children}
    </RegionContext.Provider>
  );
};

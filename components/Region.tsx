
import React from 'react';
import { useRegions } from '../hooks/useRegions';

interface RegionProps {
  name: string;
}

const Region: React.FC<RegionProps> = ({ name }) => {
  const { regions } = useRegions();
  const componentsToRender = regions[name] || [];

  if (componentsToRender.length === 0) {
    return (
        <div className="px-4 py-2 text-sm text-gray-400 dark:text-gray-500">
            No components registered.
        </div>
    );
  }

  return (
    <>
      {componentsToRender.map(({ id, component: Component }) => (
        <Component key={id} />
      ))}
    </>
  );
};

export default Region;

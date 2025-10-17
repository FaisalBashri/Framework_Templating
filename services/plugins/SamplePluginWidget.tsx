
import React, { useEffect } from 'react';
import { useRegions } from '../hooks/useRegions';

const WidgetContent: React.FC = () => {
    return (
        <div className="p-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg border border-primary-200 dark:border-primary-500/30">
            <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary-100 dark:bg-primary-500/30 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 dark:text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293a1 1 0 010 1.414L11 12l4.293 4.293a1 1 0 01-1.414 1.414L10 13.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 12 4.293 7.707a1 1 0 011.414-1.414L10 10.586 14.293 6.293a1 1 0 011.414 0L17 7.586" />
                    </svg>
                </div>
                <div>
                    <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-100">Sample Plugin</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">This widget was dynamically loaded.</p>
                </div>
            </div>
        </div>
    )
}


const SamplePluginWidget: React.FC = () => {
  const { registerComponent, unregisterComponent } = useRegions();
  const componentId = 'sample-plugin-widget';
  const regionName = 'sidebar';

  useEffect(() => {
    // Register on mount
    registerComponent(regionName, componentId, WidgetContent);

    // Unregister on unmount
    return () => {
      unregisterComponent(regionName, componentId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [registerComponent, unregisterComponent]);

  // This component doesn't render anything itself, it just registers the content.
  return null;
};

export default SamplePluginWidget;

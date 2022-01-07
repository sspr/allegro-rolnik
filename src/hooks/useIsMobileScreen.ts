import { theme } from 'assets/styles/theme.styles';
import { useEffect, useState } from 'react';

export const useIsMobileScreen = (): boolean => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return width <= parseInt(theme.screenResolution.small);
};

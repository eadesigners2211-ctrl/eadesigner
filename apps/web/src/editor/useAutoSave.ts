import { useEffect } from 'react';

export function useAutoSave(callback: () => void, dependencies: unknown[], delay = 2000) {
  useEffect(() => {
    const timer = setTimeout(() => {
      callback();
    }, delay);

    return () => clearTimeout(timer);
  }, dependencies);
}

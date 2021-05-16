import type { MutableRefObject } from 'react';
import { useEffect, useRef, useCallback } from 'react';

const useOnClickOutside = (
  ref: MutableRefObject<HTMLElement>,
  handler: (e: MouseEvent) => any,
): void => {
  const savedHandler = useRef(handler);

  const memoizedCallback = useCallback((e: MouseEvent) => {
    if (ref && ref.current && !ref.current.contains(e.target as Element)) {
      savedHandler.current(e);
    }
  }, []);

  useEffect(() => {
    savedHandler.current = handler;
  });

  useEffect(() => {
    document.addEventListener('click', memoizedCallback);
    document.addEventListener('ontouchstart', memoizedCallback);

    return () => {
      document.removeEventListener('click', memoizedCallback);
      document.removeEventListener('ontouchstart', memoizedCallback);
    };
  }, [ref, handler]);
};

export default useOnClickOutside;

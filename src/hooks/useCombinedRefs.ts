import { useRef, useEffect, MutableRefObject } from 'react';
function useCombinedRefs(...refs): MutableRefObject<HTMLInputElement> {
  const targetRef = useRef<HTMLInputElement>();

  useEffect(() => {
    refs.forEach((ref) => {
      if (!ref) return;

      if (typeof ref === 'function') {
        ref(targetRef.current);
      } else {
        ref.current = targetRef.current;
      }
    });
  }, [refs]);

  return targetRef;
}

export default useCombinedRefs;

import React, { RefObject, useEffect } from 'react';

type BlurHandler = (event: FocusEvent) => void;

function useOnClickOutside(ref: RefObject<HTMLElement>, handler: BlurHandler): void {
  useEffect(() => {
    const listener = (event: Event) => {
      // do nothing if clicking ref's element or child elements
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }

      handler(event as FocusEvent);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

export default useOnClickOutside;

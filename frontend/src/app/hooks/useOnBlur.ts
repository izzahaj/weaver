import React, { RefObject, useEffect } from 'react';

type BlurHandler = (event: FocusEvent) => void;

export default function useOnBlur(ref: RefObject<HTMLElement>, handler: BlurHandler): void {
  useEffect(() => {
    const listener = (event: FocusEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('focusin', listener);

    return () => {
      document.removeEventListener('focusin', listener);
    };
  }, [ref, handler]);
}

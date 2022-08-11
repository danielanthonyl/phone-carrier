import { Dispatch, RefObject, SetStateAction, useEffect } from 'react';

export const useClickOutside =
  <T extends HTMLElement, A>(ref: RefObject<T>) =>
  (action: Dispatch<SetStateAction<A>> | Function, value: A) =>
    useEffect(() => {
      function handleClickOutside(event: MouseEvent): void {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          action(value);
        }
      }
      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside);
      };
    });

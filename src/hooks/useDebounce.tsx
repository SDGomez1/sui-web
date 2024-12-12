import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay: number) {
  const [debouncedValue, setDeboucedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDeboucedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}

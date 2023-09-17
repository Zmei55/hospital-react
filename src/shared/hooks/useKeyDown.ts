import { useEffect, useCallback } from "react";

export const useKeyDown = (key: string, handler: () => void) => {
  const handleKeyDown = useCallback(
    (event: { code: string }) => {
      if (event.code === key && handler) {
        handler();
      }
    },
    [key, handler]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);
};

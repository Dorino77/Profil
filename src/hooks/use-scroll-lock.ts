import { useEffect } from "react";

let lockCount = 0;
let originalOverflow = "";

export function useScrollLock(lock: boolean) {
  useEffect(() => {
    if (!lock) return;

    if (lockCount === 0) {
      originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
    }
    lockCount++;

    return () => {
      lockCount = Math.max(0, lockCount - 1);
      if (lockCount === 0) {
        document.body.style.overflow = originalOverflow;
      }
    };
  }, [lock]);
}

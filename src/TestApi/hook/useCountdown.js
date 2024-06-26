import { useState, useEffect } from "react";

function useCountdown(initialCountdown) {
  const [countdown, setCountdown] = useState(initialCountdown);
  const [isCountingDown, setIsCountingDown] = useState(false);

  useEffect(() => {
    if (isCountingDown && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [countdown, isCountingDown]);

  const startCountdown = () => {
    setIsCountingDown(true);
    setCountdown(initialCountdown);
  };

  const resetCountdown = () => {
    setCountdown(initialCountdown);
    setIsCountingDown(false);
  };

  return { countdown, isCountingDown, startCountdown, resetCountdown };
}

export default useCountdown;

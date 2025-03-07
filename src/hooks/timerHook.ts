import { useState, useEffect } from 'react';

/**
 * Custom hook for managing a countdown timer that starts from a specific value.
 * @param initialTime - The initial time for the countdown (in seconds).
 * @param onTimeOut - Callback function to be invoked when the timer finishes.
 * @returns - An object with the current timer value and a reset function.
 */
export const useCountdownTimer = (initialTime: number, onTimeOut: () => void) => {
  const [timer, setTimer] = useState(initialTime);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer <= 1) {
            clearInterval(interval!); // Stop the timer when it reaches 0
            onTimeOut(); // Invoke the timeout callback
            return 0;
          }
          return prevTimer - 1; // Decrement the timer
        });
      }, 1000); // Update every second
    }

    // Cleanup the interval when the component is unmounted or the timer stops
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [timer, onTimeOut]);

  // Function to reset the timer to the initial value and restart the countdown
  const resetTimer = () => {
    setTimer(initialTime); // Reset to the initial time (60 seconds)
  };

  return {
    timer,
    resetTimer,
  };
};

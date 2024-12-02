import { useState, useEffect } from 'react';

export default function Timer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [countdown, setCountdown] = useState(0);
  const [countdownRunning, setIsCountdownRunning] = useState(false);
  const [intervalIdCount, setIntervalIdC] = useState(null);

  const startTimer = () => {
    setIsRunning(true);
    const id = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    setIntervalId(id);
  };

  const stopTimer = () => {
    setIsRunning(false);
    clearInterval(intervalId);
  };

  const resetTimer = () => {
    setIsRunning(false);
    clearInterval(intervalId);
    setTime(0);
  };

  const startCountdown = () => {
    setIsCountdownRunning(true);
    const id = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(id);
          setIsCountdownRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    setIntervalIdC(id);
  };

  const stopCountdown = () => {
    setIsCountdownRunning(false);
    clearInterval(intervalIdCount);
  };

  const resetCountdown = () => {
    setIsCountdownRunning(false);
    setCountdown(0);
  };

  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
      if (intervalIdCount) {
        clearInterval(intervalIdCount);
      }
    };
  }, [intervalId, intervalIdCount]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 py-8">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 space-y-6">
        {/* Timer Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Elapsed Time: {time}s</h2>
          <div className="flex justify-around space-x-4">
            <button
              className={`px-4 py-2 rounded bg-blue-500 text-white ${isRunning && 'opacity-50'}`}
              disabled={isRunning}
              onClick={startTimer}
            >
              Start Timer
            </button>
            <button
              className={`px-4 py-2 rounded bg-red-500 text-white ${!isRunning && 'opacity-50'}`}
              disabled={!isRunning}
              onClick={stopTimer}
            >
              Stop Timer
            </button>
            <button
              className="px-4 py-2 rounded bg-gray-300 text-gray-800"
              onClick={resetTimer}
            >
              Reset Timer
            </button>
          </div>
        </div>

        {/* Countdown Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Countdown Timer</h2>
          <input
            type="number"
            value={countdown}
            onChange={(e) => setCountdown(Number(e.target.value))}
            className="px-4 py-2 rounded border border-gray-300 w-full mb-4 text-center"
            placeholder="Enter seconds"
          />
          <div className="flex justify-around space-x-4">
            <button
              className={`px-4 py-2 rounded bg-green-500 text-white ${countdownRunning || countdown === 0 ? 'opacity-50' : ''}`}
              disabled={countdownRunning || countdown === 0}
              onClick={startCountdown}
            >
              Start Countdown
            </button>
            <button
              className="px-4 py-2 rounded bg-yellow-500 text-white"
              onClick={stopCountdown}
            >
              Stop Countdown
            </button>
            <button
              className="px-4 py-2 rounded bg-gray-300 text-gray-800"
              onClick={resetCountdown}
            >
              Reset Countdown
            </button>
          </div>
          <h3 className="mt-4 text-xl text-gray-700">
            {countdownRunning ? `Countdown: ${countdown}s` : `Countdown: ${countdown}s`}
          </h3>
        </div>
      </div>
    </div>
  );
}

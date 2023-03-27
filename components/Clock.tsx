import React, { useEffect, useState } from "react";

export default function Clock() {
  const [dateTime, setDateTime] = useState(
    new Date()
      .toLocaleString("en-US", { timeZone: "Europe/Amsterdam", hour12: false })
      .split(",")[1]
  );

  const refreshClock = () => {
    setDateTime(new Date()
    .toLocaleString("en-US", { timeZone: "Europe/Amsterdam", hour12: false })
    .split(",")[1]);
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 999);
    return function cleanup() {
        clearInterval(timerId);
      };
  }, [dateTime]);

  return (
    <>
      <div className="clock">Amsterdam, {dateTime}</div>
    </>
  );
}

import { useEffect, useState } from "react";

/** Live Jaipur (IST) clock, e.g. "10:37 AM". Empty until mounted to avoid hydration mismatch. */
export function useClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const fmt = () =>
      new Date().toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "numeric",
        minute: "2-digit",
      });
    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 15_000);
    return () => clearInterval(id);
  }, []);

  return time;
}

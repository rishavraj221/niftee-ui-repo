const secondsToTime = (secs) => {
  let hours = Math.floor(secs / (60 * 60)).toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });

  let divisor_for_minutes = secs % (60 * 60);
  let minutes = Math.floor(divisor_for_minutes / 60).toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });

  let divisor_for_seconds = divisor_for_minutes % 60;
  let seconds = Math.ceil(divisor_for_seconds).toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });

  let obj = {
    h: hours,
    m: minutes,
    s: seconds,
  };
  return obj;
};

export { secondsToTime };

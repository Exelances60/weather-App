import React, { Fragment, useEffect, useState } from "react";
import "./current-time.styles.scss";

const CurrentTime = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Fragment>
      <span className="current-date-span">{`${currentDate.toLocaleDateString()} | Local Time : ${currentDate.toLocaleTimeString()}`}</span>
    </Fragment>
  );
};

export default CurrentTime;

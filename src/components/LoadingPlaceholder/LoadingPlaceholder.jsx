import React, {useEffect, useState} from 'react';

const getNewDots = (dots) => dots.length >= 3 ? `.` : dots + `.`;

const LoadingPlaceholder = () => {
  const [dots, setDots] = useState(`.`);
  useEffect(() => {
    const interval = setInterval(
        () => setDots((prevDots) => getNewDots(prevDots)), 1000
    );
    return () => clearInterval(interval);
  });

  return (
    <div className="loading-placeholder">
      Loading{dots}
    </div>
  );
};

export default LoadingPlaceholder
;

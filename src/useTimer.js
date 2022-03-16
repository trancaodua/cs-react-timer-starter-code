import { useState, useRef } from "react";

const useTimer = (ini = 0) => {
    const [time, setTime] = useState(ini);
    const [times, setTimes] = useState([]);

    //const isStart = useRef(false);
    const active = useRef({ disabled: false });
    const refInterval = useRef(null);

    const startTimer = () => {
        refInterval.current = setInterval(() => {
            setTime((prev) => prev + 1);
        }, 1000);
        active.current.disabled = true;
    };
    const stopTimer = () => {
        clearInterval(refInterval.current);
        active.current.disabled = false;
    };
    const resetTimer = () => {
        clearInterval(refInterval.current);
        setTime(0);
        active.current.disabled = false;
    };

    const splitTimer = () => {
        setTimes([time, ...times]);
    };

    return { time, startTimer, stopTimer, resetTimer, active, splitTimer, times };
};
export default useTimer;

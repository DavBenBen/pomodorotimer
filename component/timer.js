import { useState, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";

function Timer({ initialTime }) {
    const [timeLeft, setTimeLeft] = useState(initialTime * 60); // Initialize with total time
    const [isRunning, setIsRunning] = useState(false); // Track if the timer is running

    useEffect(() => {
        // Reset the timer when initialTime changes
        setTimeLeft(initialTime * 60);
        setIsRunning(false); // Pause the timer when a new time is selected
    }, [initialTime]);
    

    useEffect(() => {
        let interval; // Declare interval variable

        if (isRunning) {
            interval = setInterval(() => {
                setTimeLeft((prevTimeLeft) => {
                    if (prevTimeLeft <= 1) {
                        clearInterval(interval); // Stop the timer when it reaches 0
                        return 0; // Set timeLeft to 0
                    }
                    return prevTimeLeft - 1; // Decrease time by 1 second
                });
            }, 1000);
        }

        return () => clearInterval(interval); // Cleanup on component unmount or when isRunning changes
    }, [isRunning]);

    const timeToPercent = (timeLeft / (initialTime * 60)) * 100; // Calculate percentage based on remaining time

    const handleButtonClick = () => {
        setIsRunning((prev) => !prev); // Toggle the running state
    };

    return (
        <div className="">
            <div className="text-5xl text-center py-2 mb-8 font-bold text-error-content shadow-md border-2 border-base-200 rounded-full">{(timeLeft === 0 ? "00:00" : (timeLeft < 60 ? "00:" + (timeLeft < 10 ? "0" + timeLeft : timeLeft) : Math.floor(timeLeft / 60) + ":" + (timeLeft % 60 < 10 ? "0" + (timeLeft % 60) : timeLeft % 60)))}</div>
            <div className="flex flex-cols justify-center items-center relative">
                <div
                    className="radial-progress text-error"
                    style={{
                        "--value": timeToPercent,
                        "--size": "15rem",
                        "--thickness": "0.5rem",
                    }}
                    aria-valuenow={timeToPercent}
                    role="progressbar"
                ></div>
                
                <button
                    className="btn btn-circle btn-error group size-54 shadow-lg absolute"
                    onClick={handleButtonClick}
                >
                    {isRunning ? (timeLeft ? <FaPause className="scale-150 fill-content group-hover:scale-200 group-hover:fill-base-100 transition-all duration-200 ease-in-out"/> : <IoNotifications className="animate-ping scale-150 fill-content group-hover:scale-200 group-hover:fill-base-100 transition-all duration-200 ease-in-out"/>) : <FaPlay className="scale-150 fill-content group-hover:scale-200 group-hover:fill-base-100 transition-all duration-200 ease-in-out"/>}
                </button>
            </div>
        </div>
        
    );
}

export default Timer;
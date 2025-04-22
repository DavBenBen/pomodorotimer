import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

function TimeSelector({ timeMax, setTimeMax }) {
    const timeLengths = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];

    const handleDecrease = () => {
        const currentIndex = timeLengths.indexOf(timeMax);
        if (currentIndex > 0) {
            setTimeMax(timeLengths[currentIndex - 1]); // Decrease to the previous time length
        }
    };

    const handleIncrease = () => {
        const currentIndex = timeLengths.indexOf(timeMax);
        if (currentIndex < timeLengths.length - 1) {
            setTimeMax(timeLengths[currentIndex + 1]); // Increase to the next time length
        }
    };

    return (
        <div className="flex justify-center items-center space-x-4 mt-8 bg-error text-error-content rounded-full shadow-md">
            {/* Decrease Button */}
            <button
                className="btn btn-circle group bg-transparent border-none shadow-none disabled:opacity-50"
                onClick={handleDecrease}
                disabled={timeMax === timeLengths[0]} // Disable if at the minimum value
            >
                <FaCaretLeft className="scale-160 fill-error-content hover:fill-base-100 transition-colors duration-200 ease-in-out" />
            </button>

            {/* Display Current Time */}
            {(timeMax === 5 ? <p className="text-xl">{"0" + timeMax + ":00"}</p> : <p className="text-xl">{timeMax + ":00"}</p>)}

            {/* Increase Button */}
            <button
                className="btn btn-circle group bg-transparent border-none shadow-none disabled:opacity-50"
                onClick={handleIncrease}
                disabled={timeMax === timeLengths[timeLengths.length - 1]} // Disable if at the maximum value
            >
                <FaCaretRight className="scale-160 fill-error-content hover:fill-base-100 transition-colors duration-200 ease-in-out" />
            </button>
        </div>
    );
}

export default TimeSelector;
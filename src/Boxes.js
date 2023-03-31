import "./Boxes.css";
import colors from "./colors";
import { useState } from "react";
import { getRandIdx, generateBoxes } from "./boxFunctions";

const Boxes = () => {
    // Initialize boxes and lastChanged variables with useState; boxes will call generateBoxes with # of boxes desired, and lastChanged will indicate the index in boxes that was last changed (see in handleBtnClick).
    const [boxes, setBoxes] = useState(generateBoxes(16));
    const [lastChanged, setLastChanged] = useState(0);

    // "Random" button click handler
    const handleBtnClick = (e) => {
        // Create copy of boxes as "newBoxes". Get random index for newBoxes and for colors array.
        const newBoxes = [...boxes];
        const [randBoxIdx, randColorIdx] = [getRandIdx(newBoxes), getRandIdx(colors)];

        // Remove the "CHANGED" from the lastChanged item in newBoxes. Then setLastChanged to the random index.
        newBoxes[lastChanged].msg = null;
        setLastChanged(randBoxIdx);

        // Change color and msg for new box using randColorIdx. Then setBoxes to the newBoxes array.
        newBoxes[randBoxIdx].color = colors[randColorIdx];
        newBoxes[randBoxIdx].msg = "CHANGED";
        setBoxes(newBoxes);
    }

    // Return React component. Map boxes into individual divs with id, backgroundColor of "color", and the msg in a span; "msg" will be null, except for the lastChanged div. Lastly make a button for Random box to be changed.
    return (
        <div className="Boxes">
            {boxes.map(({ id, color, msg }) => <div className="Boxes-Box" key={id} style={{ backgroundColor: color }}>
                <span className="Boxes-msg">{msg}</span>
            </div>)}
            <button className="Boxes-btn" onClick={handleBtnClick}>RANDOM</button>
        </div>
    )
};

export default Boxes;
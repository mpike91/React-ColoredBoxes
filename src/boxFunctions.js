import colors from "./colors";

// Function to obtain random index of the array passed to it.
const getRandIdx = arr => Math.floor(Math.random() * arr.length);

// Initialize boxes array, and push random colors from "colors" into it, along with unique id and null msg.
const generateBoxes = (numBoxes) => {
    const boxes = [];
    for (let i = 0; i < numBoxes; i++) {
        boxes.push({
            id: i,
            color: colors[getRandIdx(colors)],
            msg: null
        })
    }
    return boxes;
}

export { getRandIdx, generateBoxes };
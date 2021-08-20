/* eslint-disable prettier/prettier */
export default function wait(delay) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}
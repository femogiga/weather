export const windCompass = (degree) => {
    let text = '';
    // Convert the degree to a value between 0 and 360 to handle all possible values
    const normalizedDegree = (degree % 360 + 360) % 360;

    if ((0 <= normalizedDegree && normalizedDegree <= 22.5) || (337.5 < normalizedDegree && normalizedDegree <= 360)) {
        text = 'N';
    } else if (22.5 <= normalizedDegree && normalizedDegree <= 67.4) {
        text = 'NNE';
    } else if (67.5 <= normalizedDegree && normalizedDegree <= 112.4) {
        text = 'NE';
    } else if (112.5 <= normalizedDegree && normalizedDegree <= 157.4) {
        text = 'ENE';
    } else if (157.5 <= normalizedDegree && normalizedDegree <= 202.4) {
        text = 'E';
    } else if (202.5 <= normalizedDegree && normalizedDegree <= 247.4) {
        text = 'ESE';
    } else if (247.5 <= normalizedDegree && normalizedDegree <= 292.4) {
        text = 'SE';
    } else if (292.5 <= normalizedDegree && normalizedDegree <= 337.4) {
        text = 'SSE';
    }

    return text;
};

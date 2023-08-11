export function getPosition() {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                resolve({
                    lon: longitude,
                    lat: latitude
                });
            }, function (error) {
                reject("Error getting geolocation: " + error.message);
            });
        } else {
            reject("Geolocation is not supported by this browser.");
        }
    });
}

// Example usage


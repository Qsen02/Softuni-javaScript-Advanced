function createAssemblyLine() {
    let library = {
        hasClima,
        hasAudio,
        hasParktronic
    }

    function hasClima(object) {
        if (!("temp" in object && "tempSettings" in object)) {
            object.temp = 21;
            object.tempSettings = 21;
        }
        object.adjustTemp = function adjustTemp() {
            if (object.temp < object.tempSettings) {
                object.temp += 1;
            } else if (object.temp > object.tempSettings) {
                object.temp -= 1;
            }
        }
    }

    function hasAudio(object) {
        if (!("currentTrack" in object)) {
            object.currentTrack = null;
        }
        object.nowPlaying = function nowPlaying() {
            console.log(`Now playing '${object.currentTrack.name}' by ${object.currentTrack.artist}`)
        }
    }

    function hasParktronic(object) {
        object.checkDistance = function checkDistance(number) {
            if (number < 0.1) {
                console.log("Beep! Beep! Beep!");
            } else if (number >= 0.1 && number < 0.25) {
                console.log("Beep! Beep!");
            } else {
                console.log("Beep")
            }
        }
    }
    return library;
}
const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};
assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);
assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();
assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);
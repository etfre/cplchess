TrackPlayer = class {

    constructor() {
        this.currentTrack = null;
    }
    

    play(trackPath) {
        let el = this._audioElem();
        el.src = trackPath;
        el.play();
    }

    pause() {

    }

    stop() {

    }

    _audioElem() {
        return document.getElementById('audio-elem');
    }

}

exports.TrackPlayer = TrackPlayer;
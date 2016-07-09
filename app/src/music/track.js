class Track {

    constructor(path) {
        this.path = path;
        this.tags = {};
    }

    get title() {
        return this.tags.title;
    }

    get artist() {
        return this.tags.artist;
    }

    get album() {
        return this.tags.album;
    }

    loadTags(tags) {
        this.tags = tags;
    }

}

module.exports = Track;
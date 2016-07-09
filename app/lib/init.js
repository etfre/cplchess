window.components = {};

require(__dirname + '/app/lib/components/mainview.js');
require(__dirname + '/app/lib/player.js');
const library = require(__dirname + '/app/lib/music/library.js');

window.onload = function () {
    window.trackPlayer = new TrackPlayer();
    let tracks = library.readTracks();
    ReactDOM.render(React.createElement(MainView, { tracks: tracks }), document.getElementById('main-view'));
};
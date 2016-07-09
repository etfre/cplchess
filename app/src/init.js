window.components = {};

require( __dirname + '/app/lib/components/mainview.js');
require( __dirname + '/app/lib/player.js');
const library = require( __dirname + '/app/lib/music/library.js');

function render(tracks) {
    ReactDOM.render(
        <MainView tracks={tracks} />,
        document.getElementById('main-view')
    );
}

window.onload = function() {
    window.trackPlayer = new TrackPlayer();
    library.readTracks(render); 
};
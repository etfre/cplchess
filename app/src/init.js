window.components = {};

require( __dirname + '/app/lib/components/mainview.js');
require( __dirname + '/app/lib/player.js');
const library = require( __dirname + '/app/lib/music/library.js');

window.onload = function() {
    window.trackPlayer = new TrackPlayer();
    console.log(library)
    let tracks = library.readTracks();
    ReactDOM.render(
        <MainView />,
        document.getElementById('main-view')
      );
};
require( __dirname + '/player.js');

MainView = class extends React.Component {

    render() {
         return (
            <MediaPlayer />
        );
    }

}

exports.MainView = MainView;
require( __dirname + '/track-viewer.js');

MainView = class extends React.Component {

    render() {
         return (
            <TrackViewer />
        );
    }

}

exports.MainView = MainView;
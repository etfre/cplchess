require( __dirname + '/track-viewer.js');

MainView = class extends React.Component {

    render() {
         return (
            <TrackViewer tracks={this.props.tracks} />
        );
    }

}

exports.MainView = MainView;
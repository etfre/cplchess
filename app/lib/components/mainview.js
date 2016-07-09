require(__dirname + '/track-viewer.js');

MainView = class extends React.Component {

    render() {
        return React.createElement(TrackViewer, { tracks: this.props.tracks });
    }

};

exports.MainView = MainView;
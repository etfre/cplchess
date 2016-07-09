require(__dirname + '/track-viewer.js');

MainView = class extends React.Component {

    render() {
        return React.createElement(TrackViewer, null);
    }

};

exports.MainView = MainView;
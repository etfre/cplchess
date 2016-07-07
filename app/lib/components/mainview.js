require(__dirname + '/player.js');

MainView = class extends React.Component {

    render() {
        return React.createElement(MediaPlayer, null);
    }

};

exports.MainView = MainView;
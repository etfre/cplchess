window.components = {};

require(__dirname + '/app/lib/components/mainview.js');

window.onload = function () {
    ReactDOM.render(React.createElement(MainView, null), document.getElementById('main-view'));
};
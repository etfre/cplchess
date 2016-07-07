window.components = {};

require( __dirname + '/app/lib/components/mainview.js');

window.onload = function() {
    ReactDOM.render(
        <MainView />,
        document.getElementById('main-view')
      );
};
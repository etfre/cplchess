window.components = {};

require( __dirname + '/app/lib/mainview.js');
console.log(__dirname);

window.onload = function() {
    ReactDOM.render(
        MainView,
        document.getElementById('main-view')
      );
};
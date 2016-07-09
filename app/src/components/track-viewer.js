TrackViewer = class extends React.Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
    componentDidMount() {
        let el = ReactDOM.findDOMNode(this);
        let rows = [];
        for (let track of this.props.tracks) {
            let row = {
                path: track.path,
                title: track.title,
                artist: track.artist,
                album: track.album,
            }
            rows.push(row);
        }
        var grid = webix.ui({
            view:"datatable", 
            height:400,
            columns: [
                {id:"title", header:"Title", sort: 'string', adjust: true},
                {id:"artist", header:"Artist", sort: 'string', adjust: true},
                {id:"album", header:"Album", sort: 'string', adjust: true},
                // { id:"path", header:"Path", sort: true, adjust: true, hidden: true},
            ],
            data: rows,
            select: 'row',
            navigation: true,
        });
        grid.attachEvent("onKeyPress", (code, e) => {
            if (e.key === 'Enter') {
                let row = this.state.grid.getSelectedItem();
                trackPlayer.play(row.path);
            }
        });
        this.setState({grid: grid});
    }
    
}

exports.TrackViewer = TrackViewer;
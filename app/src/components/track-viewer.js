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
            let row = {path: track.path};
            rows.push(row);
        }
        var grid = webix.ui({
            view:"datatable", 
            columns: [
                { id:"path", header:"Path", fillspace: true}
            ],
            data: rows,
            select: 'row',
            navigation: true,
        });
        grid.attachEvent("onKeyPress", (code, e) => {
            console.log(e)
            if (e.key === 'Enter') {
                let row = this.state.grid.getSelectedItem();
                trackPlayer.play(row.path);
            }
        });
        this.setState({grid: grid});
    }
    
}

exports.TrackViewer = TrackViewer;
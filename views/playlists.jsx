var React = require('react');
var DefaultLayout = require('./layouts/default');
var PlaylistRowObject = require('./playlist-row');
var Pagination = require('./layouts/pagination');

class PlaylistTable extends React.Component {
    render() {
        var rows = [];
        for (var i=0; i<this.props.playlists.length; i++) {
            var doc = this.props.playlists[i];
            
            if (this.props.playlists[i].doc) {
                doc = this.props.playlists[i].doc
            }

            if (doc && !doc.indexes) {
                rows.push(<PlaylistRowObject userId={doc.user} type={doc.type} itemId={doc.item_id} externalUrl={doc.external_url} />);
            }
        }

        return (
            <DefaultLayout title={this.props.title}>
                <div className="container">
                    <div className="bs-example">
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Telegram ID</th>
                                    <th>Type</th>
                                    <th>Item</th>
                                </tr>
                            </thead>
                            <tbody>{rows}</tbody>
                        </table>
                    </div>
                    <Pagination baseUri={"/playlists"} totalRows={this.props.totalRows} rowsPerPage={this.props.rowsPerPage} currentPage={this.props.currentPage} />
                </div>
            </DefaultLayout>
        );
    }
}

module.exports = PlaylistTable;
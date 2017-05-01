var React = require('react');
var DefaultLayout = require('./layouts/default');
var DatabaseRowObject = require('./db-row');

class MainPage extends React.Component {
    render() {
        var rows = [];
        for (var i=0; i<this.props.allDbs.length; i++) {
            rows.push(<DatabaseRowObject name={this.props.allDbs[i]} />);
        }

        return (
            <DefaultLayout title={this.props.title}>
                <div className="container">
                    <div className="bs-example">
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>DB</th>
                                </tr>
                            </thead>
                            <tbody>{rows}</tbody>
                        </table>
                    </div>
                </div>
            </DefaultLayout>
        );
    }
}

module.exports = MainPage;
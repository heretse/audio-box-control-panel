var React = require('react');
var DefaultLayout = require('./layouts/default');
var UserRowObject = require('./user-row');
var Pagination = require('./layouts/pagination');

class UserTable extends React.Component {
    render() {
        var rows = [];
        for (var i=0; i<this.props.users.length; i++) {
            var doc = this.props.users[i].doc;
            if (doc && !doc.indexes) {
                rows.push(<UserRowObject userId={doc.id} firstName={doc.first_name} lastName={doc.last_name} fullName={doc.full_name} />);
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
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Full Name</th>
                                </tr>
                            </thead>
                            <tbody>{rows}</tbody>
                        </table>
                    </div>
                    <Pagination baseUri={"/users"} totalRows={this.props.totalRows} rowsPerPage={this.props.rowsPerPage} currentPage={this.props.currentPage} />
                </div>
            </DefaultLayout>
        );
    }
}

module.exports = UserTable;
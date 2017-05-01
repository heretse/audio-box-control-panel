var React = require('react');
var DefaultLayout = require('./layouts/default');
var ConversationRowObject = require('./conversation-row');
var Pagination = require('./layouts/pagination');

class UserTable extends React.Component {
    render() {
        var rows = [];
        for (var i=0; i<this.props.conversations.length; i++) {
            var doc = this.props.conversations[i];
            
            if (this.props.conversations[i].doc) {
                doc = this.props.conversations[i].doc;
            }
            
            var intentNames = "";
            if (doc.intents.length > 0) {
                for (let index in doc.intents) {
                    if (index > 0) {
                        intentNames += ", ";
                    }
                    intentNames += doc.intents[index].intent
                }
            }

            var entityNames = "";
            if (doc.entities.length > 0) {
                for (let index in doc.entities) {
                    if (index > 0) {
                        entityNames += ", ";
                    }
                    entityNames += doc.entities[index].entity
                }
            }

            if (doc && !doc.indexes) {
                rows.push(<ConversationRowObject userName={doc.context.user_name} input={doc.input.text} intents={intentNames} entities={entityNames} nodeVisited={doc.output.nodes_visited[0]} timestamp={doc.creation_date}/>);
            }
        }

        return (
            <DefaultLayout title={this.props.title}>
                <div className="container">
                    <div className="bs-example">
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>User Name</th>
                                    <th>Input</th>
                                    <th>Intents</th>
                                    <th>Entities</th>
                                    <th>Node Visited</th>
                                    <th>Time</th>
                                </tr>
                            </thead>
                            <tbody>{rows}</tbody>
                        </table>
                    </div>
                    <Pagination baseUri={"/conversations"} totalRows={this.props.totalRows} rowsPerPage={this.props.rowsPerPage} currentPage={this.props.currentPage} />
                </div>
            </DefaultLayout>
        );
    }
}

module.exports = UserTable;
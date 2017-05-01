
var React = require('react');

class Pagination extends React.Component {
    render() {

        var totalPages = Math.floor(this.props.totalRows/this.props.rowsPerPage) + 1;

        var startPage = 1;
        var endPage = 10;
        if (totalPages > 10) {
            if (this.props.currentPage > 10) {
                var quotient = Math.floor(this.props.currentPage / 10);
                startPage = quotient*10 + 1;

                endPage = (quotient + 1)*10;
                if (totalPages < endPage) {
                    endPage = totalPages;
                }
            }
        } else {
            endPage = totalPages;
        }

        var rows = [];
        if (startPage != 1) {
            rows.push(
                <li><a href={this.props.baseUri + "?page=" + (startPage - 1)}>Previous page</a></li>
            );
        }

        for (var i=startPage; i<=endPage; i++) {
            let href = this.props.baseUri + "?page=" + i;
            if (i === this.props.currentPage) {
                rows.push(
                    <li className="active"><a href={href}>{"" + i}</a></li>
                );
            } else {
                rows.push(
                   <li><a href={href}>{"" + i}</a></li>
                );
            }
        }

        if (endPage < totalPages) {
            rows.push(
                <li><a href={this.props.baseUri + "?page=" + (endPage + 1)}>Next page</a></li>
            );
        }

        return (
            <div className="bs-example text-center">
                <ul className="pagination">
                    {rows}
                </ul>
            </div>
        );
    }
}

module.exports = Pagination;
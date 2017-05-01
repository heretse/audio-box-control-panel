var React = require('react');

var Header = require('./header');
var Footer = require('./footer');

class DefaultLayout extends React.Component {
    
    render() {
        const bodyStyle = {
            paddingTop: '70px',
            marginBottom: '60px'
        };

        return (
            <html>
                <head
                    ><title>{this.props.title}</title>
                    <link rel="stylesheet" href="/stylesheets/bootstrap.min.css" type="text/css" />
                    <link rel="stylesheet" href="/stylesheets/bootstrap-responsive.min.css" />
                    <link rel="stylesheet" href="/stylesheets/bootstrap-select.min.css" />
                    <link rel="stylesheet" href="/stylesheets/style.css" />
                    <script src="/javascripts/jquery-1.11.1.min.js"></script>
                    <script src="/javascripts/bootstrap.min.js"></script>
                    <script src="/javascripts/bootstrap-select.min.js"></script>
                </head>
                <body style={bodyStyle}>
                    <Header />
                    {this.props.children}
                    <Footer />
                </body>
            </html>
        );
    }
}

module.exports = DefaultLayout;
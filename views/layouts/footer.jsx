var React = require('react');

class Footer extends React.Component {
    render() {

        const footerStyle = {
            height: '60px',
             backgroundColor: '#f5f5f5'
        };

        const divStyle = {
            width: 'auto',
            padding: '0 15px'
        };

        const paragraphStyle = {
            margin: '20px 0',
            textAlign: 'center'
        }

        var currentYear = (new Date()).getFullYear();

        return (
            <footer className="footer navbar navbar-inner navbar-fixed-bottom" style={footerStyle}>
                <div style={divStyle}>
                    <p style={paragraphStyle}>{"Copyright© Gemtek Technology Co., Ltd. 2009-" + currentYear}</p>
                </div>
            </footer>
        );
    }
}

module.exports = Footer;
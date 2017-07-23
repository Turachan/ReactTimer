var React = require('react');
var Navigation = require('Navigation');

var Main = (props) => {
    return (
        <div>
            <Navigation/>
            <div className="grid-x">
                <div className="small-4 cell"></div>
                <div className="auto cell">{props.children}</div>
                <div className="auto cell"></div>
            </div>
        </div>
    );
};

module.exports = Main;

//STATE olmadığı için => kullanılabilir
// var Main = React.createClass({
//   render: function(){
//
// });

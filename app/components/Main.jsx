var React = require('react');
var Navigation = require('Navigation');

var Main = (props) => {
  return (
  <div>
    <div>
      <div>
        <Navigation/>
        <p>Main.jsx Rendered</p>
      </div>
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

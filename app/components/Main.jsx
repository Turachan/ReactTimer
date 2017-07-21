var React = require('react');
var Navigation = require('Navigation');
var Timer = require('Timer');
var Main = (props) => {
  return (
  <div>
    <div>
      <div>
        <Navigation/>
        <p>Main.jsx Rendered</p>
          <div className="column small-centered medium-6 large-4">
            {props.children}
          </div>
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

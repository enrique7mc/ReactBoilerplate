import React from 'react';

const Main = props => (
  <div>
    <div>
      <div>
        Main.jsx rendered
        {props.children}
      </div>
    </div>
  </div>
);

Main.propTypes = {
  children: React.PropTypes.node,
};

module.exports = Main;

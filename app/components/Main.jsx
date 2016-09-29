import React from 'react';

const Main = props => (
  <div>
    <div>
      <div>
        <p>Main.jsx rendered</p>
        {props.children}
      </div>
    </div>
  </div>
);

Main.propTypes = {
  children: React.PropTypes.node,
};

module.exports = Main;

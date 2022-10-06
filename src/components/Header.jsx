import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email } = this.props;

    const exchange = 'BRL';
    const expenses = 0;
    return (
      <div>
        <article>
          <h2 data-testid="email-field">{ email }</h2>
        </article>

        <article>
          <h2 data-testid="header-currency-field">{ exchange }</h2>
          <h2 data-testid="total-field">{ expenses }</h2>
        </article>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);

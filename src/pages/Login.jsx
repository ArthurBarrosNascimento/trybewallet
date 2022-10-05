import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userAction } from '../redux/actions';
import '../CSS/login.css';

const MIN_PASSWORD = 5;

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    btnDisable: true,
  };

  inputChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });

    this.ableDisableBtn();
  };

  testEmail = (email) => (email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,3})$/i));

  dispatchStateToStore = () => {
    const { dispatch } = this.props;
    const { email } = this.state;

    dispatch(userAction(email));

    this.changeToPage();
  };

  changeToPage = () => {
    const { history } = this.props;

    history.push('/carteira');
  };

  ableDisableBtn = () => {
    const { email, password } = this.state;
    if (password.length >= MIN_PASSWORD && this.testEmail(email)) {
      this.setState({ btnDisable: false });
    } else {
      this.setState({ btnDisable: true });
    }
  };

  render() {
    const { email, password, btnDisable } = this.state;
    return (
      <main>
        <div className="box">
          <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--Eg8INSNe--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/5302/26258239-4ac6-4d28-b94c-ba6d3f9eabc2.png" alt="" />
          <h1 className="title">TrybeWallet</h1>

          <label htmlFor="email" className="label">
            <input
              type="text"
              name="email"
              id="email"
              value={ email }
              onChange={ this.inputChange }
              className="input"
              placeholder="Type a Email"
              data-testid="email-input"
            />
          </label>

          <label htmlFor="password" className="label">
            <input
              type="text"
              name="password"
              id="password"
              value={ password }
              onChange={ this.inputChange }
              className="input"
              placeholder="Type a Password"
              data-testid="password-input"
            />
          </label>

          <button
            type="button"
            value="Enviar"
            className="button"
            onClick={ this.dispatchStateToStore }
            disabled={ btnDisable }
          >
            Entrar
          </button>
        </div>
      </main>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    length: PropTypes.number,
    push: PropTypes.func,
  }).isRequired,
};

export default connect()(Login);

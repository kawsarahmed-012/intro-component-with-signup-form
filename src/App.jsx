import { useState } from 'react';
import './App.css';

const isNonEmpty = (name) => name.trim().length > 0;
const isEmail = (email) => email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
const isPassValid = (password) => password.trim().length > 5;

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const signUpHandler = (e) => {
    e.preventDefault();
    if (isNonEmpty(firstName) && isNonEmpty(lastName) && isEmail(email) && isPassValid(password)) {
      setIsSubmitted(true);
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setIsSubmitted(false);
      return;
    }
    setIsSubmitted(true);
  };

  return (
    <main className="signup">
      <div className="signup__heading">
        <h1>Learn to code by watching others</h1>
        <p>See how experianced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
      </div>
      <div className="signup__form" onSubmit={signUpHandler}>
        <p className="signup__fee">
          <span>Try it free 7 days </span>than $20/mo. thereafter
        </p>
        <form>
          <div className="signup__form-base">
            <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            {!isNonEmpty(firstName) && isSubmitted && (
              <>
                <img src="/images/icon-error.svg" alt="error" />
                <em>First Name cannot be empty!</em>
              </>
            )}
          </div>
          <div className="signup__form-base">
            <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            {!isNonEmpty(lastName) && isSubmitted && (
              <>
                <img src="/images/icon-error.svg" alt="error" />
                <em>Last Name cannot be empty!</em>
              </>
            )}
          </div>
          <div className="signup__form-base">
            <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
            {!isEmail(email) && isSubmitted && (
              <>
                <img src="/images/icon-error.svg" alt="error" />
                <em>This does not seem to be an emaill address!</em>
              </>
            )}
          </div>
          <div className="signup__form-base">
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            {!isPassValid(password) && isSubmitted && (
              <>
                <img src="/images/icon-error.svg" alt="error" />
                <em>Password must be least 6 characters long!</em>
              </>
            )}
          </div>
          <div className="signup__form-base">
            <button type="submit">claim your free trial</button>
          </div>
          <small className="signup__tac">
            By clicking the button, you are agreeing to our <a href="#">Terms and Services</a>
          </small>
        </form>
      </div>
    </main>
  );
}

export default App;

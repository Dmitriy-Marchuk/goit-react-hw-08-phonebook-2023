const LoginForm = () => {
  return (
    <form>
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" autoComplete="off" />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};

export default LoginForm;

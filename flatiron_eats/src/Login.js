
function Login() {

    return (
      <div>
      <form>
        <div id="login">
          <h3>Login</h3>
          <input type="text" name="name" placeholder="Name" />
          <label htmlFor="name">Name</label>
        </div>
        <div>
          <input type="email" name="email" placeholder="email" />
          <label htmlFor="email">Email</label>
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
    )
  };

  export default Login
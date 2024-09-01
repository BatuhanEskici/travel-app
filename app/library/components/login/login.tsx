export default function Login() {
  return (
    <div className="flex justify-center flex-col">
      <div>
        <label htmlFor="email">Email</label>
        <br />
        <input type="text" placeholder="username@xyz.com" name="email" />
      </div>

      <div className="mt-4">
        <label htmlFor="password">Password</label>
        <br />
        <input type="password" placeholder="********" name="password" />
      </div>

      <div className="mt-6 flex justify-between">
        <button>Login</button>
        <a href="/register" className="flex items-center">
          Go to register
        </a>
      </div>
    </div>
  );
}

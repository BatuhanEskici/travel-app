export default function Register() {
  return (
    <div className="flex justify-center flex-col">
      <div>
        <label htmlFor="name">Name</label>
        <br />
        <input type="text" placeholder="John Doe" name="name" />
      </div>

      <div className="mt-4">
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
        <button>Register</button>
        <a href="/" className="flex items-center">
          Go to login
        </a>
      </div>
    </div>
  );
}

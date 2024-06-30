import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section>
      <h2>404</h2>
      <p>Not Found</p>
      <Link to="/">Home</Link>
    </section>
  );
};

export default Error;


import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Puslapis nerastas</p>
        <Link to="/" className="btn-primary">
          Grįžti į pradžią
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

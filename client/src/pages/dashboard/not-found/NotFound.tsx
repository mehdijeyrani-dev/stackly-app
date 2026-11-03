const NotFound = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-10">
        404 - Page Not Found
      </h1>
      <p className="text-center mt-4">
        The page you are looking for does not exist.
      </p>
      <p className="text-center mt-4">
        <a href="/" className="text-blue-500 hover:underline">
          Go back home
        </a>
      </p>
    </div>
  );
};

export default NotFound;

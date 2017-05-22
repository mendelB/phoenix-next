const experimentsMiddleware = () => next => action => {
  console.log('experiments middleware');

  next(action);
};

export default experimentsMiddleware;

const Home = () => {
  if (process.env.NODE_ENV !== 'development') {
    location.href = '//light.tt';
  }
  return null;
};

export default Home;

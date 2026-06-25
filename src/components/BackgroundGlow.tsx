const BackgroundGlow = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-96 h-96 bg-blue-600/20 blur-[150px]" />
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-cyan-500/20 blur-[150px]" />
    </>
  );
};

export default BackgroundGlow;
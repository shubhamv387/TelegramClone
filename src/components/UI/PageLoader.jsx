const PageLoader = () => {
  return (
    <div className='absolute z-50 h-[85vh] flex items-center justify-center top-0 left-0 right-0 bottom-0 bg-transparent'>
      <div
        className={`h-fit w-fit rounded-full animate-spin border-solid border-t-transparent p-5 border-[6px] border-accent`}
      />
    </div>
  );
};

export default PageLoader;

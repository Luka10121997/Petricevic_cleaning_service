const Spinner = ({ label }: { label?: string }) => {
  return (
    <div className="flex items-center justify-center gap-2">
      <div
        className="block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-e-transparent text-white"
        role="status"
      />
      {label && <span>{label}</span>}
    </div>
  );
};

export default Spinner
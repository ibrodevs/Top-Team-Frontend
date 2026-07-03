export default function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto w-full max-w-site px-5 md:px-10 ${className}`}>
      {children}
    </div>
  );
}

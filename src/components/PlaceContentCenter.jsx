export default function PlaceHolderCenter({ children }) {
  return (
    <div className="bg-green-500">
      <div className="bg-violet-900/20 text-white min-h-screen flex items-center justify-center antialiased tracking-tight">
        <div className="max-w-lg w-full">{children}</div>
      </div>
    </div>
  );
}

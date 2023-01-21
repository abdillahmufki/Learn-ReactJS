export default function Input({ type = "text", ...props }) {
  return (
    <Input
      {...props}
      className={"border-slate-300 shadow-sm rounded-lg"}
      type={type}
    />
  );
}

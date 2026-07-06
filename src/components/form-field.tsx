export function FormField({
  label,
  type = "text",
  placeholder,
}: {
  label: string;
  type?: string;
  placeholder: string;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium text-slate-700">
      {label}
      <input
        type={type}
        placeholder={placeholder}
        className="min-h-11 rounded-lg border border-slate-300 bg-white px-3 text-slate-950 placeholder:text-slate-400"
      />
    </label>
  );
}

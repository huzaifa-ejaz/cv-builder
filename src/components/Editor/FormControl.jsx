
export default function FormControl ({
  type = 'text',
  label,
  name,
  value,
  onChange,
  error,
}) {
  return (
    <div className="form-control my-2">
      {label && <label htmlFor={name} className="block text-sm font-medium">{label}</label>}
      <div className="mt-2">
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            className="block border-0 w-full ring-1 ring-inset ring-gray-300 py-1.5 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
        />
        {error && <span className="error-message">{error}</span>}
      </div>
    </div>
  );
}


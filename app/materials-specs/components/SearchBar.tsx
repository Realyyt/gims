import type { SearchBarProps } from '../types';

export default function SearchBar({ value, onChange }: SearchBarProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="max-w-lg mx-auto mb-8">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Search materials..."
        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm 
          focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
      />
    </div>
  );
} 
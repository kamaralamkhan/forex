import React from 'react';

interface AccountSizeSelectionProps {
  selectedSize: string;
  program: string;
  programAmounts: Record<string, Array<{ value: string; label: string; price: string }>>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function AccountSizeSelection({ selectedSize, program, programAmounts, onChange }: AccountSizeSelectionProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
      <h4 className="text-lg font-medium text-gray-900 mb-4">Select Account Size</h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {programAmounts[program].map((amount) => (
          <label
            key={amount.value}
            className="cursor-pointer"
          >
            <input
              type="radio"
              name="accountSize"
              value={amount.value}
              checked={selectedSize === amount.value}
              onChange={onChange}
              className="sr-only"
            />
            <div
              className={`w-full p-3 rounded-md border-2 transition-all ${
                selectedSize === amount.value
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200'
              }`}
            >
              <span className="font-medium text-gray-900">{amount.label}</span>
              <span className="ml-2 text-gray-500">(${amount.price})</span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}
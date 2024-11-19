import React from 'react';

interface PlatformSelectionProps {
  selectedPlatform: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function PlatformSelection({ selectedPlatform, onChange }: PlatformSelectionProps) {
  const platforms = [
    { id: 'metatrader', label: 'Meta trader' },
    { id: 'ctrader', label: 'cTrader' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
      <h4 className="text-lg font-medium text-gray-900 mb-4">Select Platform</h4>
      <div className="space-y-2">
        {platforms.map((platform) => (
          <label
            key={platform.id}
            className="flex items-center p-3 cursor-pointer rounded-md hover:bg-gray-50"
          >
            <input
              type="radio"
              name="platform"
              value={platform.id}
              checked={selectedPlatform === platform.id}
              onChange={onChange}
              className="sr-only"
            />
            <div
              className={`w-full p-3 rounded-md border-2 transition-all ${
                selectedPlatform === platform.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200'
              }`}
            >
              <span className="font-medium text-gray-900">{platform.label}</span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}
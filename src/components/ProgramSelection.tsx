import React from 'react';

interface ProgramSelectionProps {
  selectedProgram: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function ProgramSelection({ selectedProgram, onChange }: ProgramSelectionProps) {
  const programs = [
    { id: 'instant', label: 'Instant Funding', popular: true },
    { id: 'one-phase', label: 'One-Phase' },
    { id: 'two-phase', label: 'Two-Phase' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
      <h4 className="text-lg font-medium text-gray-900 mb-4">Select Your Program</h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {programs.map((program) => (
          <label
            key={program.id}
            className="cursor-pointer"
          >
            <input
              type="radio"
              name="program"
              value={program.id}
              checked={selectedProgram === program.id}
              onChange={onChange}
              className="sr-only"
            />
            <div
              className={`relative w-full p-3 rounded-md border-2 transition-all ${
                selectedProgram === program.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200'
              }`}
            >
              {program.popular && (
                <span className="absolute -top-2 right-2 px-1 py-0.5 bg-green-500 text-white text-xs font-medium rounded-full">
                  POPULAR
                </span>
              )}
              <span className="font-medium text-gray-900">{program.label}</span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}
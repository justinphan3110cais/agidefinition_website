"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ExpandableSubcategory } from './ExpandableSubcategory';
import { SimpleImageViewer } from './SimpleImageViewer';

interface Subcategory {
  name: string;
  weight?: string;
  description?: string;
  fullContent?: {
    definition?: string;
    testingNote?: string;
    note?: string;
    examples?: string[];
    tests?: string[];
    subcategories?: Subcategory[];
  };
  subcategories?: Subcategory[];
  examples?: string[];
  test?: string;
}

interface Ability {
  id: string;
  title: string;
  shortLabel: string;
  weight: string;
  description: string;
  mainFigure: string;
  note?: string;
  subcategories: Subcategory[];
}

interface ModelResults {
  name: string;
  abilities: {
    [key: string]: {
      total: string;
      subcategories: { [key: string]: string };
    };
  };
}

interface ResultsData {
  models: ModelResults[];
}

interface AbilityDetailProps {
  ability: Ability;
  index: number;
}

export function AbilityDetail({ ability, index }: AbilityDetailProps) {
  const [results, setResults] = useState<ResultsData | null>(null);

  useEffect(() => {
    const loadResults = async () => {
      try {
        const response = await fetch('/data/results.json');
        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error('Failed to load results:', error);
      }
    };
    loadResults();
  }, []);

  const renderPerformanceTable = () => {
    if (!results) return null;

    const abilityResults = results.models.map(model => ({
      name: model.name,
      data: model.abilities[ability.id]
    })).filter(item => item.data);

    if (abilityResults.length === 0) return null;

    // Get subcategory names from the ability data
    const subcategoryNames = Object.keys(abilityResults[0].data.subcategories || {});
    
    return (
      <div className="mt-8 mb-8">
        <h3 className="text-lg font-semibold mb-4 text-gray-900">Model Performance</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-300 px-2 py-2 sm:px-4 text-left font-semibold text-gray-900 text-xs sm:text-base">Model</th>
                {subcategoryNames.map((name) => (
                  <th key={name} className="border border-gray-300 px-1 py-2 sm:px-4 text-center font-semibold text-gray-900 text-xs sm:text-sm">
                    {name}
                  </th>
                ))}
                <th className="border border-gray-300 px-2 py-2 sm:px-4 text-center font-semibold text-gray-900 text-xs sm:text-base">Total</th>
              </tr>
            </thead>
            <tbody>
              {abilityResults.map((result, idx) => (
                <tr key={result.name} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="border border-gray-300 px-2 py-2 sm:px-4 font-medium text-gray-900 text-xs sm:text-base">{result.name}</td>
                  {subcategoryNames.map((name) => (
                    <td key={name} className="border border-gray-300 px-1 py-2 sm:px-4 text-center text-gray-700 text-xs sm:text-sm">
                      {result.data.subcategories[name] || '0%'}
                    </td>
                  ))}
                  <td className="border border-gray-300 px-2 py-2 sm:px-4 text-center font-semibold text-gray-900 text-xs sm:text-base">
                    {result.data.total}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <section id={ability.id} className="mb-16 scroll-mt-8">
      <div className="mb-12">
        <div className="flex items-baseline gap-4 mb-8">
          <div className="flex items-center gap-3">
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-900 decoration-dashed decoration-2 underline-offset-4" style={{fontWeight: 550}}>
              <span className="font-semibold">
                {index + 1}.
              </span>
              <Image 
                src={`/assets/icons/${ability.id.toLowerCase()}.svg`}
                alt={`${ability.title} icon`}
                width={32}
                height={32}
                className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 inline mx-1 sm:mx-2"
              />
              {ability.title}
            </h2>
          </div>
        </div>
        
        <div className="space-y-8">
          {/* Main Figure */}
          {ability.mainFigure && (
            <div>
              <SimpleImageViewer 
                imagePath={ability.mainFigure} 
                alt={`Examples for ${ability.title}`}
                className="max-w-full" 
              />
            </div>
          )}

          {/* Performance Table */}
          {renderPerformanceTable()}

          {/* Component Breakdown */}
          {ability.subcategories && ability.subcategories.length > 0 && (
            <div className="mt-8">
              
              <ol className="space-y-4 mb-6">
                {ability.subcategories.map((subcategory, index) => (
                  <ExpandableSubcategory 
                    key={index} 
                    subcategory={subcategory} 
                    index={index} 
                    colorIndex={index}
                  />
                ))}
              </ol>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

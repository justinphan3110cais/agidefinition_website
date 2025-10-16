"use client";

import React from 'react';
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

interface AbilityDetailProps {
  ability: Ability;
  index: number;
}

export function AbilityDetail({ ability, index }: AbilityDetailProps) {
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

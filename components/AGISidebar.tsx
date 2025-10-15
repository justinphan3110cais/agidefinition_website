"use client";

import { useState, useEffect } from "react";

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
  subcategories: Subcategory[];
}

interface AGISidebarProps {
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
}

export function AGISidebar({ activeSection, onSectionChange }: AGISidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [abilities, setAbilities] = useState<Ability[]>([]);

  useEffect(() => {
    // Load abilities from JSON
    const loadAbilities = async () => {
      try {
        const response = await fetch('/data/abilities.json');
        const data = await response.json();
        setAbilities([
          { id: "introduction", title: "Introduction", shortLabel: "Intro", weight: "", description: "", mainFigure: "", subcategories: [] },
          ...data.abilities
        ]);
      } catch (error) {
        console.error('Failed to load abilities:', error);
      }
    };

    loadAbilities();
  }, []);

  return (
    <div className={`${isCollapsed ? 'w-12' : 'w-64'} bg-white border-r border-gray-100 flex-shrink-0 transition-all duration-200 ease-in-out sticky top-0 h-screen overflow-y-auto`}>
      <div className={`${isCollapsed ? 'p-2' : 'p-4'}`}>
        <div className="mb-6">
          {!isCollapsed && (
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/assets/agi_definition_logo.svg" 
                alt="AGI Definition Logo" 
                className="w-8 h-8"
              />
              <h2 className="text-sm font-normal text-gray-500 uppercase tracking-wide" style={{fontFamily: 'Arial, sans-serif'}}>
                Contents
              </h2>
            </div>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1 hover:bg-gray-50 transition-colors duration-150 text-gray-400 hover:text-gray-600 float-right"
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <svg
              className={`w-3 h-3 transition-transform duration-200 ${isCollapsed ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </div>
        
        <nav className="space-y-0">
          {abilities.map((ability, index) => {
            const isIntroduction = ability.id === "introduction";
            const abilityNumber = isIntroduction ? null : index; // General Knowledge starts at 1
            
            return (
              <button
                key={ability.id}
                onClick={() => onSectionChange(ability.id)}
                className={`w-full text-left py-1 text-sm transition-all duration-150 ease-in-out ${
                  activeSection === ability.id
                    ? 'text-gray-900 font-medium'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                style={{fontFamily: 'Arial, sans-serif'}}
                title={isCollapsed ? ability.title : undefined}
              >
                {isCollapsed ? (
                  <span className="text-xs text-center block">
                    {isIntroduction ? "★" : abilityNumber}
                  </span>
                ) : (
                  <span className="flex items-start justify-between w-full">
                    <span className="flex items-start gap-2 flex-1">
                      <span className="text-gray-400 font-normal min-w-[1.5rem]">
                        {isIntroduction ? "★" : `${abilityNumber}.`}
                      </span>
                      {!isIntroduction && (
                        <img 
                          src={`/assets/icons/${ability.id.toLowerCase()}.svg`}
                          alt={`${ability.title} icon`}
                          className="w-4 h-4 mt-0.5 flex-shrink-0"
                          onError={(e) => {
                            // Hide icon if it doesn't exist
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      )}
                      <span className="leading-tight">{ability.title}</span>
                    </span>
                    {ability.weight && (
                      <span className="text-xs text-gray-400 ml-2 flex-shrink-0">
                        {ability.weight}
                      </span>
                    )}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

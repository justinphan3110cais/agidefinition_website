"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
// import { AGISidebar } from "@/components/AGISidebar";
// import { DiscussionSection } from "@/components/DiscussionSection";
import { AbilityDetail } from "@/components/AbilityDetail";
import { AuthorsSection } from "@/app/authors-section";
import { BIBTEX_CITATION } from "@/app/constants";

interface FullContent {
  definition?: string;
  testingNote?: string;
  note?: string;
  examples?: string[];
  tests?: string[];
  subcategories?: {
    name: string;
    description?: string;
    testingNote?: string;
    examples?: string[];
    test?: string;
    links?: {
      text: string;
      url: string;
    }[];
  }[];
  links?: {
    text: string;
    url: string;
  }[];
}

interface Subcategory {
  name: string;
  weight?: string;
  description: string;
  fullContent?: FullContent;
  subcategories?: Subcategory[];
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

export default function AGIDefinitionPage() {
  // const [activeSection, setActiveSection] = useState("introduction");
  const [abilities, setAbilities] = useState<Ability[]>([]);
  const [selectedAbility, setSelectedAbility] = useState<Ability | null>(null);

  // Set default selection to General Knowledge when abilities are loaded
  useEffect(() => {
    if (abilities.length > 0 && !selectedAbility) {
      const generalKnowledge = abilities.find(ability => ability.id === 'k');
      if (generalKnowledge) {
        setSelectedAbility(generalKnowledge);
        // setActiveSection('k');
      }
    }
  }, [abilities, selectedAbility]);

  useEffect(() => {
    // Load abilities from JSON
    const loadAbilities = async () => {
      try {
        const response = await fetch('/data/abilities.json');
        const data = await response.json();
        
        // Keep abilities as they are - Discussion is handled separately
        setAbilities(data.abilities);
      } catch (error) {
        console.error('Failed to load abilities:', error);
      }
    };

    loadAbilities();
  }, []);

  // Scroll spy functionality
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["introduction", ...abilities.map(a => a.id)];
      const scrollPosition = window.scrollY + 200; // Offset for better UX

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          // setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [abilities]);


  return (
    <>      
            <main className="flex-1 overflow-y-auto">
              <div className="max-w-4xl mx-auto px-6 py-16">
            {/* Header */}
            <div className="mb-12">
              <div className="flex flex-col items-center justify-center mb-6">
                <Image 
                  src="/assets/agi_definition_logo.svg" 
                  alt="AGI Definition Logo" 
                  width={128}
                  height={128}
                  className="w-50 h-50 mb-4"
                />
                <h1 className="text-4xl font-semibold text-gray-900 leading-tight text-center">
                  A Definition of AGI
        </h1>
              </div>
              
              <AuthorsSection />
        </div>

            {/* Introduction Section */}
            <section id="introduction" className="mb-16 scroll-mt-8">
              <div className="mx-auto max-w-4xl">
                <h2 className="mb-4 text-center text-3xl font-bold">Introduction</h2>
                <div className="mx-auto mb-6 h-0.5 w-16 bg-gradient-to-r from-gray-300 to-gray-100"></div>
                
                <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                  <p>
                    The lack of a concrete definition for Artificial General Intelligence (AGI) obscures the gap between today&rsquo;s specialized AI and human-level cognition. This paper introduces a quantifiable framework to address this, defining AGI as matching the cognitive versatility and proficiency of a well-educated adult. To operationalize this, we ground our methodology in Cattell-Horn-Carroll theory, the most empirically validated model of human cognition.
                  </p>

                  <p>
                    The framework dissects general intelligence into ten core cognitive domains—including reasoning, memory, and perception—and adapts established human psychometric batteries to evaluate AI systems. Application of this framework reveals a highly &ldquo;jagged&rdquo; cognitive profile in contemporary models. While proficient in knowledge-intensive domains, current AI systems have critical deficits in foundational cognitive machinery, particularly long-term memory storage.
                  </p>
                  <p>
                  The resulting AGI scores (e.g., GPT-4 at 27%, GPT-5 at 57%) concretely quantify both rapid progress and the substantial gap remaining before AGI.
                  </p>
        </div>

                {/* GPT Performance Radar Chart */}
                <div className="flex flex-col items-center px-4 mt-8">
                  <div className="w-full max-w-2xl">
                    <Image 
                      src="/assets/radar.png" 
                      alt="GPT-4 and GPT-5 capabilities radar chart"
                      width={600}
                      height={450}
                      className="w-full h-auto mb-4"
                    />
                  </div>
                  <div className="text-center max-w-lg px-4">
                    <p className="text-base sm:text-lg text-gray-600">
                      The capabilities of GPT-4 and GPT-5.
          </p>
        </div>
      </div>
              </div>
            </section>

            {/* Definition Section */}
            <section id="definition" className="mb-16 scroll-mt-8">
              <div className="mx-auto max-w-4xl">
                <h2 className="mb-4 text-center text-3xl font-bold">Definition</h2>
                <div className="mx-auto mb-6 h-0.5 w-16 bg-gradient-to-r from-gray-300 to-gray-100"></div>
                
                <blockquote className="text-xl font-bold text-gray-900 mb-8 mx-12 text-center">
                  &quot;AGI is an AI that can match or exceed the cognitive versatility and proficiency of a well-educated adult.&quot;
                </blockquote>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The framework comprises ten core cognitive components, derived from CHC broad abilities and weighted equally (10%) to prioritize breadth and cover major areas of cognition:
                </p>
                

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                  {/* Column 1: Acquired Knowledge and Perception */}
                  <div className="space-y-4">
                    {/* Acquired Knowledge */}
                    <div>
                      <h3 className="text-sm font-medium text-gray-600 mb-2 uppercase tracking-wide">Acquired Knowledge</h3>
                      <div className="grid grid-cols-1 gap-2">
                        {abilities.slice(0, 3).map((ability, index) => {
                          const getColor = () => '#AACEF2'; // K, RW, M
                          
                          return (
                            <div 
                              key={ability.id}
                              className={`p-2 border-2 rounded cursor-pointer transition-all duration-150 hover:bg-gray-50 ${
                                selectedAbility?.id === ability.id 
                                  ? 'shadow-md transform scale-105 opacity-100' 
                                  : 'opacity-50 hover:opacity-75'
                              }`}
                              style={{
                                borderColor: getColor(),
                                backgroundColor: selectedAbility?.id === ability.id ? getColor() + '20' : 'transparent'
                              }}
                          onClick={() => {
                            setSelectedAbility(ability);
                            // setActiveSection(ability.id);
                          }}
                            >
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-medium text-gray-900">{index + 1}.</span>
                                <Image 
                                  src={`/assets/icons/${ability.id}.svg`}
                                  alt={`${ability.title} icon`}
                                  width={16}
                                  height={16}
                                  className="w-4 h-4 flex-shrink-0"
                                />
                                <h4 className="text-xs sm:text-sm font-medium text-gray-900 flex-1">
                                  {ability.title.replace(/\s*\([^)]*\)$/, '')}
                                </h4>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Perception */}
                    <div>
                      <h3 className="text-sm font-medium text-gray-600 mb-2 uppercase tracking-wide">Perception</h3>
                      <div className="grid grid-cols-1 gap-2">
                        {abilities.slice(7, 9).map((ability, index) => {
                          const getColor = () => '#E28988'; // V, A
                          
                          return (
                            <div 
                              key={ability.id}
                              className={`p-2 border-2 rounded cursor-pointer transition-all duration-150 hover:bg-gray-50 ${
                                selectedAbility?.id === ability.id 
                                  ? 'shadow-md transform scale-105 opacity-100' 
                                  : 'opacity-50 hover:opacity-75'
                              }`}
                              style={{
                                borderColor: getColor(),
                                backgroundColor: selectedAbility?.id === ability.id ? getColor() + '20' : 'transparent'
                              }}
                      onClick={() => {
                        setSelectedAbility(ability);
                        // setActiveSection(ability.id);
                      }}
                            >
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-medium text-gray-900">{index + 8}.</span>
                                <Image 
                                  src={`/assets/icons/${ability.id}.svg`}
                                  alt={`${ability.title} icon`}
                                  width={16}
                                  height={16}
                                  className="w-4 h-4 flex-shrink-0"
                                />
                                <h4 className="text-xs sm:text-sm font-medium text-gray-900 flex-1">
                                  {ability.title}
                                </h4>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Column 2: Central Executive and Output */}
                  <div className="space-y-4">
                    {/* Central Executive */}
                    <div>
                      <h3 className="text-sm font-medium text-gray-600 mb-2 uppercase tracking-wide">Central Executive</h3>
                      <div className="grid grid-cols-1 gap-2">
                        {abilities.slice(3, 7).map((ability, index) => {
                          const getColor = () => '#9ECC75'; // R, WM, MS, MR
                          
                          return (
                            <div 
                              key={ability.id}
                              className={`p-2 border-2 rounded cursor-pointer transition-all duration-150 hover:bg-gray-50 ${
                                selectedAbility?.id === ability.id 
                                  ? 'shadow-md transform scale-105 opacity-100' 
                                  : 'opacity-50 hover:opacity-75'
                              }`}
                              style={{
                                borderColor: getColor(),
                                backgroundColor: selectedAbility?.id === ability.id ? getColor() + '20' : 'transparent'
                              }}
                      onClick={() => {
                        setSelectedAbility(ability);
                        // setActiveSection(ability.id);
                      }}
                            >
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-medium text-gray-900">{index + 4}.</span>
                                <Image 
                                  src={`/assets/icons/${ability.id}.svg`}
                                  alt={`${ability.title} icon`}
                                  width={16}
                                  height={16}
                                  className="w-4 h-4 flex-shrink-0"
                                />
                                <h4 className="text-xs sm:text-sm font-medium text-gray-900 flex-1">
                                  {ability.title.replace(/\s*\([^)]*\)$/, '')}
                                </h4>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                </div>

                    {/* Output */}
                    <div>
                      <h3 className="text-sm font-medium text-gray-600 mb-2 uppercase tracking-wide">Output</h3>
                      <div className="grid grid-cols-1 gap-2">
                        {abilities.slice(9, 10).map((ability) => {
                          const getColor = () => '#EDCC85'; // S
                          
                          return (
                            <div 
                              key={ability.id}
                              className={`p-2 border-2 rounded cursor-pointer transition-all duration-150 hover:bg-gray-50 ${
                                selectedAbility?.id === ability.id 
                                  ? 'shadow-md transform scale-105 opacity-100' 
                                  : 'opacity-50 hover:opacity-75'
                              }`}
                              style={{
                                borderColor: getColor(),
                                backgroundColor: selectedAbility?.id === ability.id ? getColor() + '20' : 'transparent'
                              }}
                      onClick={() => {
                        setSelectedAbility(ability);
                        // setActiveSection(ability.id);
                      }}
                            >
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-medium text-gray-900">10.</span>
                                <Image 
                                  src={`/assets/icons/${ability.id}.svg`}
                                  alt={`${ability.title} icon`}
                                  width={16}
                                  height={16}
                                  className="w-4 h-4 flex-shrink-0"
                                />
                                <h4 className="text-xs sm:text-sm font-medium text-gray-900 flex-1">
                                  {ability.title}
                                </h4>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Selected Ability Detail */}
                {selectedAbility && (
                  <AbilityDetail 
                    ability={selectedAbility} 
                    index={abilities.findIndex(a => a.id === selectedAbility.id)} 
                  />
                )}
              </div>
            </section>

            {/* <DiscussionSection /> */}
            
            {/* Citation Section */}
            <section id="citation" className="mb-12 w-full mt-8 scroll-mt-8">
              <div className="mx-auto max-w-4xl">
                <h2 className="mb-4 text-center text-3xl font-bold">Citation</h2>
                <div className="mx-auto mb-6 h-0.5 w-16 bg-gradient-to-r from-gray-300 to-gray-100"></div>

                <div className="relative">
                  <div className="rounded-lg bg-gray-50 p-4">
                    <pre className="max-h-[200px] overflow-y-scroll whitespace-pre-wrap text-xs scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                      {BIBTEX_CITATION}
                    </pre>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(BIBTEX_CITATION);
                      }}
                      className="absolute right-2 top-2 rounded-md bg-gray-200 p-2 hover:bg-gray-300"
                      title="Copy to clipboard"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                        />
                      </svg>
                    </button>
            </div>
          </div>
        </div>
      </section>
          </div>
    </main>
    </>
  );
}
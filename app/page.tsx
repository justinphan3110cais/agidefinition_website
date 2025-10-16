"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
// import { AGISidebar } from "@/components/AGISidebar";
import { DiscussionSection } from "@/components/DiscussionSection";
import { AbilityDetail } from "@/components/AbilityDetail";

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

  // const scrollToSection = (sectionId: string) => {
  //   setActiveSection(sectionId);
  //   const element = document.getElementById(sectionId);
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

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
      {/* <AGISidebar activeSection={activeSection} onSectionChange={scrollToSection} /> */}
      
            <main className="flex-1 overflow-y-auto bg-white">
              <div className="max-w-4xl mx-auto px-6 py-16">
            <section id="introduction" className="mb-16 scroll-mt-8">
              <div className="mb-12">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <Image 
                    src="/assets/agi_definition_logo.svg" 
                    alt="AGI Definition Logo" 
                    width={128}
                    height={128}
                    className="w-32 h-32"
                  />
                  <h1 className="text-4xl font-semibold text-gray-900 leading-tight">
                    A Definition of AGI
                  </h1>
                </div>
              </div>

              <div className="mb-12">
                <blockquote className="text-xl italic font-bold text-gray-900 mb-8 mx-12 text-center">
                  &ldquo;AGI is an AI that can match or exceed the cognitive versatility and proficiency of a well-educated adult.&rdquo;
                </blockquote>
                
                <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                  <p>
                    The lack of a concrete definition for Artificial General Intelligence (AGI) obscures the gap between today&rsquo;s specialized AI and human-level cognition. This paper introduces a quantifiable framework to address this, defining AGI as matching the cognitive versatility and proficiency of a well-educated adult. To operationalize this, we ground our methodology in Cattell-Horn-Carroll theory, the most empirically validated model of human cognition.
                  </p>
                  <p>
                    The framework dissects general intelligence into ten core cognitive domains—including reasoning, memory, and perception—and adapts established human psychometric batteries to evaluate AI systems. Application of this framework reveals a highly &ldquo;jagged&rdquo; cognitive profile in contemporary models. While proficient in knowledge-intensive domains, current AI systems have critical deficits in foundational cognitive machinery, particularly long-term memory storage.
                  </p>
                </div>
              </div>
            </section>

            {/* GPT Performance Radar Chart */}
            <section className="mb-16">
              <div className="flex flex-col items-center px-4">
                <div className="w-full max-w-2xl">
                  <Image 
                    src="/assets/radar.svg" 
                    alt="GPT-4 and GPT-5 capabilities radar chart"
                    width={600}
                    height={450}
                    className="w-full h-auto mb-4"
                  />
                </div>
                <div className="text-center max-w-lg px-4">
                  <p className="text-base sm:text-lg text-gray-600 italic">
                    The capabilities of GPT-4 and GPT-5.
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 italic">
                    Here GPT-5 answers questions in &apos;Auto&apos; mode.
                  </p>
                </div>
              </div>
            </section>

            {/* Framework Overview */}
            <section className="mb-12">
              <div className="max-w-4xl mx-auto">
                <hr className="border-gray-300 mb-8" />
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The framework comprises ten core cognitive components, derived from CHC broad abilities and weighted equally (10%) to prioritize breadth and cover major areas of cognition:
                </p>
                

                <div className="space-y-3 mb-8">
                  {/* Long-Term Memory Group */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-600 mb-2 uppercase tracking-wide">Long-Term Memory</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
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
                                {ability.title}
                              </h4>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Central Executive Group */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-600 mb-2 uppercase tracking-wide">Central Executive</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
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
                                {ability.title}
                              </h4>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Perception & Output Group */}
                  <div>
                    <div className="flex gap-4">
                      {/* Perception */}
                      <div className="flex-1">
                        <h3 className="text-sm font-medium text-gray-600 mb-2 uppercase tracking-wide">Perception</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
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

                      {/* Output */}
                      <div className="flex-1">
                        <h3 className="text-sm font-medium text-gray-600 mb-2 uppercase tracking-wide">Output</h3>
                        <div className="flex justify-start">
                          {abilities.slice(9, 10).map((ability) => {
                            const getColor = () => '#EDCC85'; // S
                            
                            return (
                              <div 
                                key={ability.id}
                                className={`p-2 border-2 rounded cursor-pointer transition-all duration-150 hover:bg-gray-50 max-w-fit ${
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
                                  <h4 className="text-xs sm:text-sm font-medium text-gray-900">
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
                </div>
              </div>
            </section>

            {/* Selected Ability Detail */}
            {selectedAbility && (
              <AbilityDetail 
                ability={selectedAbility} 
                index={abilities.findIndex(a => a.id === selectedAbility.id)} 
              />
            )}

            <DiscussionSection />
          </div>
        </main>
    </>
  );
}
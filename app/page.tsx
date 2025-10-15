"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AGISidebar } from "@/components/AGISidebar";
import { ExpandableSubcategory } from "@/components/ExpandableSubcategory";
import { DiscussionSection } from "@/components/DiscussionSection";
import { SimpleImageViewer } from "@/components/SimpleImageViewer";

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
  const [activeSection, setActiveSection] = useState("introduction");
  const [abilities, setAbilities] = useState<Ability[]>([]);

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

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Scroll spy functionality
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["introduction", ...abilities.map(a => a.id)];
      const scrollPosition = window.scrollY + 200; // Offset for better UX

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [abilities]);


  return (
    <>
      <AGISidebar activeSection={activeSection} onSectionChange={scrollToSection} />
      
            <main className="flex-1 overflow-y-auto bg-white">
              <div className="max-w-5xl mx-auto px-6 py-16">
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

            {/* Framework Overview */}
            <section className="mb-12">
              <div className="max-w-4xl mx-auto">
                <hr className="border-gray-300 mb-8" />
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The framework comprises ten core cognitive components, derived from CHC broad abilities and weighted equally (10%) to prioritize breadth and cover major areas of cognition:
                </p>
                
              {(() => {
                // Define abilities data structure with 4 color groups
                const frameworkAbilities = [
                  {
                    id: 'k',
                    number: 1,
                    title: 'General Knowledge (K)',
                    description: 'The breadth of factual understanding of the world, encompassing commonsense, culture, science, social science, and history.',
                    color: '#AACEF2' // Group 1: K, RW, M
                  },
                  {
                    id: 'rw',
                    number: 2,
                    title: 'Reading and Writing Ability (RW)',
                    description: 'Proficiency in consuming and producing written language, from basic decoding to complex comprehension, composition, and usage.',
                    color: '#AACEF2' // Group 1: K, RW, M
                  },
                  {
                    id: 'm',
                    number: 3,
                    title: 'Mathematical Ability (M)',
                    description: 'The depth of mathematical knowledge and skills across arithmetic, algebra, geometry, probability, and calculus.',
                    color: '#AACEF2' // Group 1: K, RW, M
                  },
                  {
                    id: 'r',
                    number: 4,
                    title: 'On-the-Spot Reasoning (R)',
                    description: 'The flexible control of attention to solve novel problems without relying exclusively on previously learned schemas, tested via deduction and induction.',
                    color: '#9ECC75' // Group 2: R, WM, MS, MR
                  },
                  {
                    id: 'wm',
                    number: 5,
                    title: 'Working Memory (WM)',
                    description: 'The ability to maintain and manipulate information in active attention across textual, auditory, and visual modalities.',
                    color: '#9ECC75' // Group 2: R, WM, MS, MR
                  },
                  {
                    id: 'ms',
                    number: 6,
                    title: 'Long-Term Memory Storage (MS)',
                    description: 'The capability to continually learn new information (associative, meaningful, and verbatim).',
                    color: '#9ECC75' // Group 2: R, WM, MS, MR
                  },
                  {
                    id: 'mr',
                    number: 7,
                    title: 'Long-Term Memory Retrieval (MR)',
                    description: 'The fluency and precision of accessing stored knowledge, including the critical ability to avoid confabulation (hallucinations).',
                    color: '#9ECC75' // Group 2: R, WM, MS, MR
                  },
                  {
                    id: 'v',
                    number: 8,
                    title: 'Visual Processing (V)',
                    description: 'The ability to perceive, analyze, reason about, generate, and scan visual information.',
                    color: '#E28988' // Group 3: V, A
                  },
                  {
                    id: 'a',
                    number: 9,
                    title: 'Auditory Processing (A)',
                    description: 'The capacity to discriminate, recognize, and work creatively with auditory stimuli, including speech, rhythm, and music.',
                    color: '#E28988' // Group 3: V, A
                  },
                  {
                    id: 's',
                    number: 10,
                    title: 'Speed (S)',
                    description: 'The ability to perform simple cognitive tasks quickly, encompassing perceptual speed, reaction times, and processing fluency.',
                    color: '#EDCC85' // Group 4: S
                  }
                ];

                return (
                  <div className="grid gap-2 mb-8">
                    {frameworkAbilities.map((ability) => (
                      <div 
                        key={ability.id}
                        className="flex items-start gap-4 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors duration-150" 
                        onClick={() => {
                          const element = document.getElementById(ability.id);
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                      >
                        <span className="text-xl font-semibold text-gray-900 min-w-[2rem]">{ability.number}.</span>
                        <Image 
                          src={`/assets/icons/${ability.id}.svg`}
                          alt={`${ability.title} icon`}
                          width={24}
                          height={24}
                          className="w-6 h-6 mt-1 flex-shrink-0"
                        />
                        <div className="flex-1">
                          <h4 
                            className="text-base sm:text-lg font-medium text-gray-900 underline decoration-dashed decoration-4 underline-offset-4 mb-0" 
                            style={{textDecorationColor: ability.color}}
                          >
                            {ability.title}
                          </h4>
                          <p className="text-gray-700 leading-snug">
                            {ability.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                );
              })()}

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  This operationalization provides a holistic and multimodal (text, visual, auditory) assessment, serving as a rigorous diagnostic tool to pinpoint the strengths and profound weaknesses of current AI systems.
                </p>

                {/* AGI Score Summary Table */}
                {(() => {
                  // Define model scores data
                  const abilityColumns = ['K', 'RW', 'M', 'R', 'WM', 'MS', 'MR', 'V', 'A', 'S'];
                  const modelScores = [
                    {
                      name: 'GPT-4',
                      scores: [8, 6, 4, 0, 2, 0, 4, 0, 0, 3],
                      total: 27
                    },
                    {
                      name: 'GPT-5',
                      scores: [9, 10, 10, 7, 5, 0, 4, 4, 6, 3],
                      total: 58
                    }
                  ];

                  return (
                    <div className="overflow-x-auto mb-8">
                      <table className="w-full border-collapse border border-gray-300 bg-white">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-gray-900">Model</th>
                            {abilityColumns.map((column) => (
                              <th key={column} className="border border-gray-300 px-2 py-2 text-center font-semibold text-gray-900">
                                {column}
                              </th>
                            ))}
                            <th className="border border-gray-300 px-3 py-2 text-center font-semibold text-gray-900">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          {modelScores.map((model) => (
                            <tr key={model.name}>
                              <td className="border border-gray-300 px-3 py-2 font-medium text-gray-900">{model.name}</td>
                              {model.scores.map((score, index) => (
                                <td key={index} className="border border-gray-300 px-2 py-2 text-center text-gray-700">
                                  {score}%
                                </td>
                              ))}
                              <td className="border border-gray-300 px-3 py-2 text-center font-semibold text-gray-900">
                                {model.total}%
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <p className="text-sm text-gray-600 text-center mt-2 italic">
                        AGI Score Summary for GPT-4 (2023) and GPT-5 (2025).
                      </p>
                    </div>
                  );
                })()}
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

            {/* Cognitive Components Sections */}
            {abilities.map((ability, index) => (
              <section key={ability.id} id={ability.id} className="mb-16 scroll-mt-8">
                <div className="mb-12">
                  <div className="flex items-baseline gap-4 mb-8">
                    <div className="flex items-center gap-3">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-900 underline decoration-dashed decoration-2 underline-offset-4" style={{fontWeight: 550}}>
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
                    <span className="text-lg sm:text-xl lg:text-3xl text-gray-500">
                      ({ability.weight})
                    </span>
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
                        <p className="text-lg text-gray-700 mb-4">
                          We decompose {ability.title.toLowerCase()} into {ability.subcategories.length === 1 ? 'one area' : `${ability.subcategories.length} distinct areas`}, each contributing to the AGI score:
                        </p>
                        
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
                        
                        <p className="text-lg text-gray-700 mb-4">
                          Each of these components contributes to the AGI score, with the total score for {ability.title.toLowerCase()} being up to {ability.weight}.
                        </p>
                        
                        {ability.note && (
                          <p className="text-sm text-gray-600 italic">
                            Note: {ability.note}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </section>
            ))}

            <DiscussionSection />
          </div>
        </main>
    </>
  );
}
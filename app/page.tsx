"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AGISidebar } from "@/components/AGISidebar";
import { ExpandableSubcategory } from "@/components/ExpandableSubcategory";
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
                
                <div className="grid gap-6 mb-8">
                  {/* Define the 10 ability colors */}
                  {(() => {
                    const abilityColors = [
                      '#AACEF2', // Light blue - General Knowledge
                      '#9ECC75', // Light green - Reading and Writing
                      '#E28988', // Light coral - Mathematical Ability
                      '#BEA4EC', // Light purple - On-the-Spot Reasoning
                      '#EECF7B', // Light yellow - Working Memory
                      '#609ACB', // Medium blue - Long-Term Memory Storage
                      '#7E9D51', // Medium green - Long-Term Memory Retrieval
                      '#D08383', // Medium coral - Visual Processing
                      '#A78DE0', // Medium purple - Auditory Processing
                      '#E4B542'  // Medium yellow - Speed
                    ];
                    return null;
                  })()}
                  <div className="flex items-start gap-4">
                    <span className="text-xl font-semibold text-gray-900 min-w-[2rem]">1.</span>
                    <Image 
                      src="/assets/icons/k.svg"
                      alt="General Knowledge icon"
                      width={24}
                      height={24}
                      className="w-6 h-6 mt-1 flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h4 className="text-lg font-medium text-gray-900 underline decoration-dashed decoration-2 underline-offset-4 mb-2" style={{textDecorationColor: '#AACEF2'}}>
                        General Knowledge (K)
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        The breadth of factual understanding of the world, encompassing commonsense, culture, science, social science, and history.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <span className="text-xl font-semibold text-gray-900 min-w-[2rem]">2.</span>
                    <Image 
                      src="/assets/icons/rw.svg"
                      alt="Reading and Writing icon"
                      width={24}
                      height={24}
                      className="w-6 h-6 mt-1 flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h4 className="text-lg font-medium text-gray-900 underline decoration-dashed decoration-2 underline-offset-4 mb-2" style={{textDecorationColor: '#9ECC75'}}>
                        Reading and Writing Ability (RW)
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Proficiency in consuming and producing written language, from basic decoding to complex comprehension, composition, and usage.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <span className="text-xl font-semibold text-gray-900 min-w-[2rem]">3.</span>
                    <Image 
                      src="/assets/icons/m.svg"
                      alt="Mathematical Ability icon"
                      width={24}
                      height={24}
                      className="w-6 h-6 mt-1 flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h4 className="text-lg font-medium text-gray-900 underline decoration-dashed decoration-2 underline-offset-4 mb-2" style={{textDecorationColor: '#E28988'}}>
                        Mathematical Ability (M)
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        The depth of mathematical knowledge and skills across arithmetic, algebra, geometry, probability, and calculus.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <span className="text-xl font-semibold text-gray-900 min-w-[2rem]">4.</span>
                    <Image 
                      src="/assets/icons/r.svg"
                      alt="On-the-Spot Reasoning icon"
                      width={24}
                      height={24}
                      className="w-6 h-6 mt-1 flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h4 className="text-lg font-medium text-gray-900 underline decoration-dashed decoration-2 underline-offset-4 mb-2" style={{textDecorationColor: '#BEA4EC'}}>
                        On-the-Spot Reasoning (R)
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        The flexible control of attention to solve novel problems without relying exclusively on previously learned schemas, tested via deduction and induction.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <span className="text-xl font-semibold text-gray-900 min-w-[2rem]">5.</span>
                    <Image 
                      src="/assets/icons/wm.svg"
                      alt="Working Memory icon"
                      width={24}
                      height={24}
                      className="w-6 h-6 mt-1 flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h4 className="text-lg font-medium text-gray-900 underline decoration-dashed decoration-2 underline-offset-4 mb-2" style={{textDecorationColor: '#EECF7B'}}>
                        Working Memory (WM)
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        The ability to maintain and manipulate information in active attention across textual, auditory, and visual modalities.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <span className="text-xl font-semibold text-gray-900 min-w-[2rem]">6.</span>
                    <Image 
                      src="/assets/icons/ms.svg"
                      alt="Long-Term Memory Storage icon"
                      width={24}
                      height={24}
                      className="w-6 h-6 mt-1 flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h4 className="text-lg font-medium text-gray-900 underline decoration-dashed decoration-2 underline-offset-4 mb-2" style={{textDecorationColor: '#609ACB'}}>
                        Long-Term Memory Storage (MS)
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        The capability to continually learn new information (associative, meaningful, and verbatim).
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <span className="text-xl font-semibold text-gray-900 min-w-[2rem]">7.</span>
                    <Image 
                      src="/assets/icons/mr.svg"
                      alt="Long-Term Memory Retrieval icon"
                      width={24}
                      height={24}
                      className="w-6 h-6 mt-1 flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h4 className="text-lg font-medium text-gray-900 underline decoration-dashed decoration-2 underline-offset-4 mb-2" style={{textDecorationColor: '#7E9D51'}}>
                        Long-Term Memory Retrieval (MR)
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        The fluency and precision of accessing stored knowledge, including the critical ability to avoid confabulation (hallucinations).
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <span className="text-xl font-semibold text-gray-900 min-w-[2rem]">8.</span>
                    <Image 
                      src="/assets/icons/v.svg"
                      alt="Visual Processing icon"
                      width={24}
                      height={24}
                      className="w-6 h-6 mt-1 flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h4 className="text-lg font-medium text-gray-900 underline decoration-dashed decoration-2 underline-offset-4 mb-2" style={{textDecorationColor: '#D08383'}}>
                        Visual Processing (V)
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        The ability to perceive, analyze, reason about, generate, and scan visual information.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <span className="text-xl font-semibold text-gray-900 min-w-[2rem]">9.</span>
                    <Image 
                      src="/assets/icons/a.svg"
                      alt="Auditory Processing icon"
                      width={24}
                      height={24}
                      className="w-6 h-6 mt-1 flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h4 className="text-lg font-medium text-gray-900 underline decoration-dashed decoration-2 underline-offset-4 mb-2" style={{textDecorationColor: '#A78DE0'}}>
                        Auditory Processing (A)
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        The capacity to discriminate, recognize, and work creatively with auditory stimuli, including speech, rhythm, and music.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <span className="text-xl font-semibold text-gray-900 min-w-[2rem]">10.</span>
                    <Image 
                      src="/assets/icons/s.svg"
                      alt="Speed icon"
                      width={24}
                      height={24}
                      className="w-6 h-6 mt-1 flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h4 className="text-lg font-medium text-gray-900 underline decoration-dashed decoration-2 underline-offset-4 mb-2" style={{textDecorationColor: '#E4B542'}}>
                        Speed (S)
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        The ability to perform simple cognitive tasks quickly, encompassing perceptual speed, reaction times, and processing fluency.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  This operationalization provides a holistic and multimodal (text, visual, auditory) assessment, serving as a rigorous diagnostic tool to pinpoint the strengths and profound weaknesses of current AI systems.
                </p>

                {/* AGI Score Summary Table */}
                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse border border-gray-300 bg-white">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-gray-900">Model</th>
                        <th className="border border-gray-300 px-2 py-2 text-center font-semibold text-gray-900">K</th>
                        <th className="border border-gray-300 px-2 py-2 text-center font-semibold text-gray-900">RW</th>
                        <th className="border border-gray-300 px-2 py-2 text-center font-semibold text-gray-900">M</th>
                        <th className="border border-gray-300 px-2 py-2 text-center font-semibold text-gray-900">R</th>
                        <th className="border border-gray-300 px-2 py-2 text-center font-semibold text-gray-900">WM</th>
                        <th className="border border-gray-300 px-2 py-2 text-center font-semibold text-gray-900">MS</th>
                        <th className="border border-gray-300 px-2 py-2 text-center font-semibold text-gray-900">MR</th>
                        <th className="border border-gray-300 px-2 py-2 text-center font-semibold text-gray-900">V</th>
                        <th className="border border-gray-300 px-2 py-2 text-center font-semibold text-gray-900">A</th>
                        <th className="border border-gray-300 px-2 py-2 text-center font-semibold text-gray-900">S</th>
                        <th className="border border-gray-300 px-3 py-2 text-center font-semibold text-gray-900">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-3 py-2 font-medium text-gray-900">GPT-4</td>
                        <td className="border border-gray-300 px-2 py-2 text-center text-gray-700">8%</td>
                        <td className="border border-gray-300 px-2 py-2 text-center text-gray-700">6%</td>
                        <td className="border border-gray-300 px-2 py-2 text-center text-gray-700">4%</td>
                        <td className="border border-gray-300 px-2 py-2 text-center text-gray-700">0%</td>
                        <td className="border border-gray-300 px-2 py-2 text-center text-gray-700">2%</td>
                        <td className="border border-gray-300 px-2 py-2 text-center text-gray-700">0%</td>
                        <td className="border border-gray-300 px-2 py-2 text-center text-gray-700">4%</td>
                        <td className="border border-gray-300 px-2 py-2 text-center text-gray-700">0%</td>
                        <td className="border border-gray-300 px-2 py-2 text-center text-gray-700">0%</td>
                        <td className="border border-gray-300 px-2 py-2 text-center text-gray-700">3%</td>
                        <td className="border border-gray-300 px-3 py-2 text-center font-semibold text-gray-900">27%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-3 py-2 font-medium text-gray-900">GPT-5</td>
                        <td className="border border-gray-300 px-2 py-2 text-center text-gray-700">9%</td>
                        <td className="border border-gray-300 px-2 py-2 text-center text-gray-700">10%</td>
                        <td className="border border-gray-300 px-2 py-2 text-center text-gray-700">10%</td>
                        <td className="border border-gray-300 px-2 py-2 text-center text-gray-700">7%</td>
                        <td className="border border-gray-300 px-2 py-2 text-center text-gray-700">5%</td>
                        <td className="border border-gray-300 px-2 py-2 text-center text-gray-700">0%</td>
                        <td className="border border-gray-300 px-2 py-2 text-center text-gray-700">4%</td>
                        <td className="border border-gray-300 px-2 py-2 text-center text-gray-700">4%</td>
                        <td className="border border-gray-300 px-2 py-2 text-center text-gray-700">6%</td>
                        <td className="border border-gray-300 px-2 py-2 text-center text-gray-700">3%</td>
                        <td className="border border-gray-300 px-3 py-2 text-center font-semibold text-gray-900">58%</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-sm text-gray-600 text-center mt-2 italic">
                    AGI Score Summary for GPT-4 (2023) and GPT-5 (2025).
                  </p>
                </div>
              </div>
            </section>

            {/* GPT Performance Radar Chart */}
            <section className="mb-16">
              <div className="flex flex-col items-center">
                <Image 
                  src="/assets/radar.svg" 
                  alt="GPT-4 and GPT-5 capabilities radar chart"
                  width={600}
                  height={450}
                  className="max-w-full h-auto mb-4"
                  style={{ maxWidth: '600px' }}
                />
                <div className="text-center max-w-lg">
                  <p className="text-lg text-gray-600 italic">
                    The capabilities of GPT-4 and GPT-5.
                  </p>
                  <p className="text-base text-gray-600 italic">
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
                      <h2 className="text-3xl text-gray-900 underline decoration-dashed decoration-2 underline-offset-4" style={{fontWeight: 550}}>
                        <span className="font-semibold">
                          {index + 1}.
                        </span>
                        <Image 
                          src={`/assets/icons/${ability.id.toLowerCase()}.svg`}
                          alt={`${ability.title} icon`}
                          width={32}
                          height={32}
                          className="w-8 h-8 inline mx-2"
                        />
                        {ability.title}
                      </h2>
                    </div>
                    <span className="text-3xl text-gray-500">
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

            {/* Conclusion Section */}
            <section className="mb-16 mt-12">
              <div className="pt-8 border-t border-gray-200">
                <h2 className="text-2xl font-medium text-gray-900 mb-6" style={{fontFamily: 'Arial, sans-serif'}}>
                  Implications and Future Work
                </h2>
                <div className="prose prose-lg text-gray-700 leading-relaxed space-y-4" style={{fontFamily: 'Arial, sans-serif'}}>
                  <p>
                    This quantifiable framework for AGI provides a concrete methodology for measuring progress toward artificial general intelligence. By grounding the definition in empirically validated cognitive theory and providing specific metrics, we can better understand both the capabilities and limitations of current AI systems.
                  </p>
                  <p>
                    The framework reveals that while current AI models excel in certain cognitive domains, significant work remains to achieve the broad cognitive versatility that characterizes human intelligence. This structured approach to AGI definition enables more targeted research and development efforts toward the ultimate goal of artificial general intelligence.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </main>
    </>
  );
}
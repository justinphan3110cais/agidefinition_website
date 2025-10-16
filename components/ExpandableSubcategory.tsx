"use client";

import { useState } from 'react';
import { ChevronDown, ChevronRight, Play, FileText, ExternalLink } from 'lucide-react';
import { LaTeXRenderer } from './LaTeXRenderer';
import { HTMLContentRenderer } from './HTMLContentRenderer';

interface ExpandableSubcategoryProps {
  subcategory: {
    name: string;
    weight?: string;
    description?: string;
    fullContent?: {
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
        tests?: string[];
        links?: {
          text: string;
          url: string;
        }[];
      }[];
      links?: {
        text: string;
        url: string;
      }[];
    };
  };
  index: number;
  colorIndex: number;
}

const SUBCATEGORY_COLORS = [
  '#AACEF2', // Light blue
  '#9ECC75', // Light green  
  '#E28988', // Light coral
  '#BEA4EC', // Light purple
  '#EECF7B'  // Light yellow
];

const SUBCATEGORY_BACKGROUND_COLORS = [
  '#AACEF220', // Light blue with transparency
  '#9ECC7520', // Light green with transparency
  '#E2898820', // Light coral with transparency
  '#BEA4EC20', // Light purple with transparency
  '#EECF7B20'  // Light yellow with transparency
];

export function ExpandableSubcategory({ subcategory, index, colorIndex }: ExpandableSubcategoryProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const underlineColor = SUBCATEGORY_COLORS[colorIndex % SUBCATEGORY_COLORS.length];
  const backgroundColor = SUBCATEGORY_BACKGROUND_COLORS[colorIndex % SUBCATEGORY_BACKGROUND_COLORS.length];

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  // Helper function to check if content contains LaTeX
  const containsLaTeX = (text: string) => {
    return /\$[^$]+\$/.test(text) || /\$\$[^$]+\$\$/.test(text);
  };

  // Helper function to check if content is a section header
  const isSectionHeader = (content: string) => {
    return content.includes('<strong>') && (
      content.includes('Illustrative Examples:') || 
      content.includes('Illustrative Example:') ||
      content.includes('Examples:')
    );
  };

  // Helper function to render content with or without LaTeX
  const renderContent = (content: string, className: string = "") => {
    return <HTMLContentRenderer content={content} className={className} />;
  };

  return (
    <li className="text-lg text-gray-700">
      <div className="flex items-start gap-3">
        {subcategory.fullContent && (
          <button
            onClick={toggleExpanded}
            className="mt-1 p-1 border border-solid border-gray-800 hover:bg-gray-50 transition-colors duration-150 text-black"
            aria-label={isExpanded ? "Collapse details" : "Expand details"}
          >
            {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
          </button>
        )}
        
        <div className="flex-1">
          <span className="font-semibold">
            {index + 1}. <span 
              className="underline decoration-dashed decoration-2 underline-offset-2"
              style={{ textDecorationColor: underlineColor }}
            >
              {subcategory.name}
            </span>
          </span>
          {subcategory.weight && (
            <span>
              {" "}(<span className="underline decoration-2 underline-offset-2">{subcategory.weight}</span>)
            </span>
          )}
          {subcategory.description && <span>: {subcategory.description}</span>}
        </div>
      </div>

      {isExpanded && subcategory.fullContent && (
        <div 
          className="mt-3 ml-8 pl-4 border-l-2 border-gray-300 py-3 space-y-4"
          style={{ backgroundColor }}
        >
          {subcategory.fullContent.definition && (
            <div>
              <p className="text-gray-700 text-sm">{renderContent(subcategory.fullContent.definition)}</p>
            </div>
          )}

          {subcategory.fullContent.testingNote && (
            <div>
              <p className="text-gray-600 italic text-sm">
                <span className="font-medium">Testing note:</span> {renderContent(subcategory.fullContent.testingNote)}
              </p>
            </div>
          )}

          {subcategory.fullContent.examples && subcategory.fullContent.examples.length > 0 && (
            <div>
              <h4 className="font-semibold text-gray-900 mb-2 text-sm flex items-center gap-2">
                <Play size={14} className="text-gray-600" />
                Illustrative Examples:
              </h4>
              <ul className="space-y-2">
                  {subcategory.fullContent.examples.map((example, idx) => {
                    if (isSectionHeader(example)) {
                      return (
                        <li key={idx} className="text-gray-700 text-sm font-medium mt-4 first:mt-0">
                          {renderContent(example)}
                        </li>
                      );
                    }
                    return (
                      <li key={idx} className="text-gray-700 text-sm flex items-start gap-1">
                        <span className="flex-shrink-0 mt-0.5">•</span>
                        <div className="flex-1">{renderContent(example)}</div>
                      </li>
                    );
                  })}
              </ul>
            </div>
          )}

          {subcategory.fullContent.subcategories && subcategory.fullContent.subcategories.length > 0 && (
            <div>
              <div className="space-y-3">
                {subcategory.fullContent.subcategories.map((subcat, idx) => (
                  <div key={idx} className="ml-4">
                    <h5 className="font-medium text-gray-800 flex items-center gap-2">
                      <ChevronRight size={12} className="text-blue-500" />
                      <span 
                        className="underline decoration-dashed decoration-1 underline-offset-2"
                        style={{ textDecorationColor: 'black' }}
                      >
                        {subcat.name}
                      </span>
                    </h5>
                    {subcat.description && (
                      <p className="text-gray-600 text-sm mt-1 ml-5">{renderContent(subcat.description)}</p>
                    )}
                    {subcat.testingNote && (
                      <p className="text-gray-500 italic text-sm mt-1 ml-5">
                        <span className="font-medium">Testing:</span> {renderContent(subcat.testingNote)}
                      </p>
                    )}
                    {subcat.examples && subcat.examples.length > 0 && (
                      <div className="mt-2 ml-5">
                        <p className="font-semibold text-gray-700 text-sm flex items-center gap-1">
                          <Play size={10} className="text-gray-500" />
                          Examples:
                        </p>
                          <ul className="ml-4 space-y-1">
                            {subcat.examples.map((ex, exIdx) => (
                              <li key={exIdx} className="text-gray-600 text-sm flex items-start gap-1">
                                <span className="flex-shrink-0 mt-0.5">•</span>
                                <div className="flex-1">{renderContent(ex)}</div>
                              </li>
                            ))}
                          </ul>
                      </div>
                    )}
                    {subcat.test && (
                      <div className="mt-2 ml-5">
                        <p className="font-semibold text-gray-700 text-sm flex items-center gap-1">
                          <FileText size={10} className="text-gray-500" />
                          Test:
                        </p>
                        <div className="text-gray-600 text-sm">{renderContent(subcat.test)}</div>
                      </div>
                    )}
                    {subcat.tests && subcat.tests.length > 0 && (
                      <div className="mt-2 ml-5">
                        <p className="font-semibold text-gray-700 text-sm flex items-center gap-1">
                          <FileText size={10} className="text-gray-500" />
                          Tests:
                        </p>
                        <ul className="ml-4 space-y-1">
                          {subcat.tests.map((test, testIdx) => (
                            <li key={testIdx} className="text-gray-600 text-sm flex items-start gap-1">
                              <span className="flex-shrink-0 mt-0.5">•</span>
                              <div className="flex-1">{renderContent(test)}</div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {subcat.links && subcat.links.length > 0 && (
                      <div className="mt-2 ml-5">
                        <p className="font-semibold text-gray-700 text-sm flex items-center gap-1">
                          <ExternalLink size={10} className="text-gray-500" />
                          Links:
                        </p>
                        <ul className="ml-4 space-y-1">
                          {subcat.links.map((link, linkIdx) => (
                            <li key={linkIdx} className="text-sm">
                              • <a 
                                  href={link.url} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-blue-600 hover:text-blue-800 underline"
                                >
                                  {link.text}
                                </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {subcategory.fullContent.tests && subcategory.fullContent.tests.length > 0 && (
            <div>
              <h4 className="font-semibold text-gray-900 mb-2 text-sm flex items-center gap-2">
                <FileText size={14} className="text-gray-600" />
                Tests:
              </h4>
              <ul className="space-y-1">
                  {subcategory.fullContent.tests.map((test, idx) => (
                    <li key={idx} className="text-gray-700 text-sm flex items-start gap-1">
                      <span className="flex-shrink-0 mt-0.5">•</span>
                      <div className="flex-1">{renderContent(test)}</div>
                    </li>
                  ))}
              </ul>
            </div>
          )}

          {subcategory.fullContent.links && subcategory.fullContent.links.length > 0 && (
            <div>
              <h4 className="font-semibold text-gray-900 mb-2 text-sm flex items-center gap-2">
                <ExternalLink size={14} className="text-gray-600" />
                Links:
              </h4>
              <ul className="space-y-1">
                {subcategory.fullContent.links.map((link, idx) => (
                  <li key={idx} className="text-sm">
                    • <a 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        {link.text}
                      </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {subcategory.fullContent.note && (
            <div className="mt-4 pt-3 border-t border-gray-200">
              <p className="text-gray-600 italic text-sm">
                <span className="font-medium">Note:</span> {subcategory.fullContent.note}
              </p>
            </div>
          )}
        </div>
      )}
    </li>
  );
}

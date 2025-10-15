"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { LaTeXRenderer } from './LaTeXRenderer';

interface HTMLContentRendererProps {
  content: string;
  className?: string;
}

export function HTMLContentRenderer({ content, className = "" }: HTMLContentRendererProps) {
  const [parsedContent, setParsedContent] = useState<React.JSX.Element[]>([]);

  // Helper function to check if content contains LaTeX
  const containsLaTeX = (text: string) => {
    return /\$[^$]+\$/.test(text) || /\$\$[^$]+\$\$/.test(text);
  };

  useEffect(() => {
    const parseHTMLContent = () => {
      // If content contains LaTeX, use LaTeX renderer
      if (containsLaTeX(content)) {
        setParsedContent([<LaTeXRenderer key="latex" content={content} className={className} />]);
        return;
      }

      // Split content by img tags to process them separately
      const imgRegex = /<img\s+[^>]*>/gi;
      const parts = content.split(imgRegex);
      const imgMatches = content.match(imgRegex) || [];

      const elements: React.JSX.Element[] = [];
      
      parts.forEach((part, index) => {
        // Clean up excessive br tags before and after images
        let cleanPart = part;
        
        // If this part comes before an image, remove trailing <br> tags
        if (imgMatches[index]) {
          cleanPart = cleanPart.replace(/<br\s*\/?>\s*<br\s*\/?>$/gi, '');
          cleanPart = cleanPart.replace(/<br\s*\/?>$/gi, '');
        }
        
        // If this part comes after an image, remove leading <br> tags
        if (index > 0 && imgMatches[index - 1]) {
          cleanPart = cleanPart.replace(/^<br\s*\/?>\s*<br\s*\/?>/gi, '');
          cleanPart = cleanPart.replace(/^<br\s*\/?>/gi, '');
        }

        // Add text content (with other HTML tags intact)
        if (cleanPart.trim()) {
          elements.push(
            <span 
              key={`text-${index}`}
              dangerouslySetInnerHTML={{ __html: cleanPart }} 
              className={className}
            />
          );
        }

        // Add corresponding image if it exists
        if (imgMatches[index]) {
          const imgTag = imgMatches[index];
          
          // Extract src, alt, and style attributes
          const srcMatch = imgTag.match(/src="([^"]+)"/);
          const altMatch = imgTag.match(/alt="([^"]+)"/);
          const styleMatch = imgTag.match(/style="([^"]+)"/);
          
          if (srcMatch) {
            const src = srcMatch[1];
            const alt = altMatch ? altMatch[1] : '';
            const style = styleMatch ? styleMatch[1] : '';
            
            // Parse style for max-width and margin
            const maxWidthMatch = style.match(/max-width:\s*(\d+)px/);
            const marginMatch = style.match(/margin:\s*([^;]+)/);
            
            const maxWidth = maxWidthMatch ? parseInt(maxWidthMatch[1]) : 200;
            const margin = marginMatch ? marginMatch[1].trim() : '0';

            elements.push(
              <div key={`img-${index}`} style={{ margin, display: 'block', lineHeight: '0' }}>
                <Image
                  src={src}
                  alt={alt}
                  width={maxWidth}
                  height={maxWidth * 0.75} // Reasonable aspect ratio
                  style={{ 
                    maxWidth: `${maxWidth}px`,
                    height: 'auto',
                    margin: '0', // Remove any default margins from Image
                    padding: '0', // Remove any default padding
                    display: 'block',
                    lineHeight: '0'
                  }}
                  unoptimized
                />
              </div>
            );
          }
        }
      });

      setParsedContent(elements);
    };

    parseHTMLContent();
  }, [content, className]);

  return <>{parsedContent}</>;
}

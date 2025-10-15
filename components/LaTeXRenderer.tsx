"use client";

import { useEffect, useRef } from 'react';

interface LaTeXRendererProps {
  content: string;
  className?: string;
}

declare global {
  interface Window {
    MathJax: any;
  }
}

export function LaTeXRenderer({ content, className = "" }: LaTeXRendererProps) {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const renderMath = async () => {
      if (typeof window !== 'undefined' && containerRef.current) {
        try {
          // Load MathJax if not already loaded
          if (!window.MathJax) {
            // Configure MathJax
            window.MathJax = {
              tex: {
                inlineMath: [['$', '$']],
                displayMath: [], // Disable display math to force inline
                processEscapes: true,
                processEnvironments: true
              },
              options: {
                ignoreHtmlClass: 'tex2jax_ignore',
                processHtmlClass: 'tex2jax_process'
              },
              svg: {
                fontCache: 'global',
                scale: 0.85,
                minScale: 0.5,
                matchFontHeight: false
              }
            };

            // Load MathJax script
            const script = document.createElement('script');
            script.src = 'https://polyfill.io/v3/polyfill.min.js?features=es6';
            document.head.appendChild(script);

            const mathJaxScript = document.createElement('script');
            mathJaxScript.id = 'MathJax-script';
            mathJaxScript.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js';
            mathJaxScript.async = true;
            document.head.appendChild(mathJaxScript);

            // Wait for MathJax to load
            await new Promise((resolve) => {
              mathJaxScript.onload = resolve;
            });
          }

          // Convert all display math to inline math to prevent line breaks
          let processedContent = content;
          // Replace $$....$$ with $....$ to force inline rendering
          processedContent = processedContent.replace(/\$\$([^$]+)\$\$/g, '$$1$');
          
          // Set the content
          containerRef.current.innerHTML = processedContent;
          containerRef.current.className = `tex2jax_process ${className}`;

          // Process the math
          if (window.MathJax && window.MathJax.typesetPromise) {
            await window.MathJax.typesetPromise([containerRef.current]);
          }
        } catch (error) {
          console.error('Failed to load MathJax:', error);
          // Fallback to plain text
          if (containerRef.current) {
            containerRef.current.innerHTML = content;
          }
        }
      }
    };

    renderMath();
  }, [content]);

  return <span ref={containerRef} className={`inline ${className}`} style={{ display: 'inline' }} />;
}

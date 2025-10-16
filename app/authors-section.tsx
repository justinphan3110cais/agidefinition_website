"use client";
import Image from "next/image";
import { FileText } from "lucide-react";
import { PAPER_URL, TWEET_URL, AUTHORS, AFFILIATIONS } from "./constants";
import xLogo from "@/assets/x_logo.svg";

export function AuthorsSection() {

  const renderAuthors = (
    authors: { name: string; sup: string; link: string }[]
  ) => {
    return authors.map((author, index) => (
      <span
        key={author.name}
        className="text-sm whitespace-nowrap inline-block"
      >
        {author.link ? (
          <a
            href={author.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 hover:underline"
          >
            {author.name}
          </a>
        ) : (
          author.name
        )}
        <sup>{author.sup}</sup>
        {index < authors.length - 1 ? ", " : ""}
      </span>
    ));
  };

  return (
    <div className="w-full text-base">
      <div className="ml-10 flex items-center justify-center gap-2">
        <a 
          className="flex items-center justify-center border border-gray-400 rounded-md px-4 py-1 hover:bg-gray-100 transition-colors" 
          href={PAPER_URL} 
          target="_blank"
        >
          <FileText className="mr-1.5 h-4 w-4" /> Paper
        </a>
        {TWEET_URL && (
          <a 
            className="flex items-center justify-center bg-black text-white rounded-md w-8 h-8 hover:bg-gray-800 transition-colors" 
            href={TWEET_URL} 
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={xLogo} alt="X Logo" width={18} height={18} />
          </a>
        )}
      </div>
      
      
      <div className="w-full">
        <div className="mx-auto max-w-4xl rounded-lg p-6 text-center">
          <p className="text-base">{renderAuthors(AUTHORS.firstLine)}</p>
          <p className="mt-2 text-base">{renderAuthors(AUTHORS.secondLine)}</p>
          <p className="mt-2 text-base">{renderAuthors(AUTHORS.thirdLine)}</p>
          <p className="mt-2 text-base">{renderAuthors(AUTHORS.fourthLine)}</p>
          <p className="mt-2 text-base">{renderAuthors(AUTHORS.fifthLine)}</p>
          <p className="mt-2 text-base">{renderAuthors(AUTHORS.sixthLine)}</p>
          <p className="mt-2 text-base">{renderAuthors(AUTHORS.seventhLine)}</p>
          
          <div className="mt-4 text-xs font-semibold text-gray-700 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {AFFILIATIONS.map((affiliation) => (
              <p key={affiliation.sup} className="text-left">
                <sup>{affiliation.sup}</sup>{affiliation.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
import React, { useState } from 'react';

interface CollapsibleMenuItem {
  title: string;
  date: string;
  description: string;
  site?: string;
}

interface CollapsibleMenuProps {
  items: CollapsibleMenuItem[];
}

const CollapsibleMenu: React.FC<CollapsibleMenuProps> = ({ items }) => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleItem = (title: string) => {
    setExpandedItem((prevItem) => (prevItem === title ? null : title));
  };

  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div 
          key={item.title} 
          className="rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:border-white/20"
        >
          {/* Header */}
          <button
            className="w-full px-6 py-5 flex justify-between items-center cursor-pointer text-left group"
            onClick={() => toggleItem(item.title)}
          >
            <div>
              <h3 className="text-xl font-medium text-white group-hover:text-amber-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-white/50 mt-1">{item.date}</p>
            </div>
            <div className={`w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-300 ${expandedItem === item.title ? 'rotate-180' : ''}`}>
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>
          
          {/* Content */}
          <div 
            className={`transition-all duration-300 ease-in-out ${
              expandedItem === item.title 
                ? 'max-h-96 opacity-100' 
                : 'max-h-0 opacity-0 overflow-hidden'
            }`}
          >
            <div className="px-6 pb-6 pt-2 border-t border-white/10 text-left">
              <div className="space-y-2">
                {item.description.split('\n').map((str, idx) => (
                  <p key={idx} className="text-white/70 text-sm leading-relaxed">{str}</p>
                ))}
              </div>
              {item.site && (
                <a 
                  href={item.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors"
                >
                  Visit site
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CollapsibleMenu;
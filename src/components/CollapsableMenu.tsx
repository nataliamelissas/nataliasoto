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
    <div className="mx-auto flex-col justify-self-stretch">
      {items.map((item) => (
        <div key={item.title} className="mb-4">
          <div
            className="bg-gray-200/15 border-2 border-gray-200/50 p-2 flex justify-between items-center cursor-pointer"
            onClick={() => toggleItem(item.title)}
          >
            <h3 className="text-3xl text-white m-10">{item.title}</h3>
            <span>{expandedItem === item.title ? '▼' : '▲'}</span>
          </div>
          {expandedItem === item.title && (
            <div className="border border-gray-200/50 p-10">
              <p className='text-2xl pb-5'>{item.date}</p>
              {item.description.split('\n').map((str, idx) => <p key={idx} text-xl>{str}</p>)}
               <button className='mt-5' hidden={item.site == null ? true : false}><a href={item.site}>Visit site</a></button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CollapsibleMenu;
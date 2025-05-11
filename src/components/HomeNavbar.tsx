'use client';

import { SlBell } from "react-icons/sl";
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { useState } from 'react';

interface SearchItem {
  id: number;
  name: string;
}

const HomeNavbar = () => {
  const [items] = useState<SearchItem[]>([
    { id: 1, name: 'Debate on Technology' },
    { id: 2, name: 'AI vs Human Jobs' },
    { id: 3, name: 'Climate Change Policies' },
    { id: 4, name: 'Space Exploration' },
  ]);

  const handleOnSearch = (string: string, results: SearchItem[]) => {
    console.log('Searched:', string, results);
  };

  const handleOnSelect = (item: SearchItem) => {
    console.log('Selected:', item);
    // You can route to the selected item's page here
  };

  return (
    <div className=" w-full  bg-white px-4 py-3 shadow ">
        
      <div className="flex container mx-auto  items-center justify-between">
  {/* Search Bar */}
  <div className="w-full max-lg:ml-16 max-w-md mx-4">
        <ReactSearchAutocomplete
          items={items}
          onSearch={handleOnSearch}
          onSelect={handleOnSelect}
          autoFocus
          styling={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            backgroundColor: 'white',
            height: '40px',
            fontSize: '14px',
            iconColor: '#999',
            lineColor: '#dfe1e5',
            placeholderColor: '#999',
            clearIconMargin: '3px 14px 0 0',
            zIndex: 2,
          }}
          placeholder="Search Debates..."
        />
      </div>

      {/* Notifications */}
      <div className="text-gray-700 hover:text-gray-900 relative cursor-pointer">
        <SlBell size={25} />
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">3</span>
      </div>
      </div>
    
    </div>
  );
};

export default HomeNavbar;

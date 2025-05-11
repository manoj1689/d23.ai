import { useState } from 'react';
import { FaArrowLeft, FaBell, FaStar } from 'react-icons/fa';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import Select from 'react-select';
import Sidebar from '@/components/Sidebar';
import { useRouter } from 'next/router';
import HomeNavbar from '@/components/HomeNavbar';

const mockData = [
  {
    rank: 1,
    name: 'Elizabeth Chen',
    title: 'Grandmaster Debater',
    initials: 'EC',
    winRate: '92%',
    totalDebates: 248,
    avgScore: 9.4,
    category: 'Technology',
  },
  {
    rank: 2,
    name: 'Marcus Thompson',
    title: 'Elite Debater',
    initials: 'MT',
    winRate: '88%',
    totalDebates: 186,
    avgScore: 9.1,
    category: 'Politics',
  },
  {
    rank: 3,
    name: 'Dr. Sarah Williams',
    title: 'Distinguished Scholar',
    initials: 'SW',
    winRate: '86%',
    totalDebates: 312,
    avgScore: 8.9,
    category: 'Education',
  },
  {
    rank: 4,
    name: 'Alex Kovalev',
    title: 'Professional Debater',
    initials: 'AK',
    winRate: '84%',
    totalDebates: 175,
    avgScore: 8.7,
    category: 'Ethics',
  },
];

const categoryOptions = [
  { value: 'Technology', label: 'Technology' },
  { value: 'Politics', label: 'Politics' },
  { value: 'Environment', label: 'Environment' },
  { value: 'Economics', label: 'Economics' },
  { value: 'Ethics', label: 'Ethics' },
  { value: 'Education', label: 'Education' },
];

const tabs = ['Weekly', 'Monthly', 'All Time'];

export default function RankingPage() {
  const [activeTab, setActiveTab] = useState('Weekly');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchText, setSearchText] = useState('');
  const router = useRouter();

  const handleOnSearch = (string) => {
    setSearchText(string);
  };

  const filteredData = mockData.filter((debater) => {
    const matchesSearch = debater.name.toLowerCase().includes(searchText.toLowerCase());
    const matchesCategory = selectedCategory ? debater.category === selectedCategory.value : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <Sidebar />
      <div className="lg:ml-64">
        <div>
          <HomeNavbar />
        </div>

        <div className="container mx-auto p-4 mt-4 ">
          <div className="flex  gap-4  text-gray-600">
            <span><FaStar size={30} color='#2B6CB0' /> </span> <h2 className="text-2xl font-medium"> Rankings</h2>

          </div>
          <div className='flex flex-col bg-white rounded-2xl p-4'>
            {/* Search & Category Filter */}
            <div className="mb-6 flex  flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex-1">
                <ReactSearchAutocomplete
                  items={mockData}
                  onSearch={(string) => handleOnSearch(string)}
                  fuseOptions={{ keys: ['name'] }}
                  resultStringKeyName="name"
                  placeholder="Ex. Artificial Intelligence Ethics"
                  styling={{ height: '44px', border: '1px solid #ccc', borderRadius: '8px' }}
                />
              </div>
              <div className="w-full md:w-64">
                <Select
                  options={categoryOptions}
                  placeholder="Select Category"
                  onChange={(option) => setSelectedCategory(option)}
                  isClearable
                />
              </div>
            </div>

            {/* Tabs */}
            <div className="flex space-x-4 mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`px-4 py-2 rounded-2xl font-semibold ${activeTab === tab
                    ? 'bg-gradient-to-r from-[#63A7D4] to-[#F295BE] text-white'
                    : 'bg-gray-100 text-gray-700'
                    }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Table Header */}
            <div className="grid grid-cols-6 font-semibold text-gray-500 mb-2 px-4">
              <div>Rank</div>
              <div>Debater</div>
              <div>Win Rate</div>
              <div>Total Debates</div>
              <div>Avg Score</div>
              <div>Actions</div>
            </div>

            {/* Debater List */}
            {filteredData.map((debater) => (
              <div
                key={debater.rank}
                className="grid grid-cols-6 items-center px-4 py-3 mb-2 bg-gray-50 rounded-lg shadow-sm"
              >
                <div className="font-bold text-lg">#{debater.rank}</div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#63A7D4] to-[#F295BE] text-white flex items-center justify-center font-bold">
                    {debater.initials}
                  </div>
                  <div>
                    <div className="font-semibold">{debater.name}</div>
                    <div className="text-sm text-gray-500">{debater.title}</div>
                  </div>
                </div>
                <div>{debater.winRate}</div>
                <div>{debater.totalDebates}</div>
                <div className="text-blue-500 font-semibold">{debater.avgScore}</div>
                <button className="bg-gradient-to-r from-[#63A7D4] to-[#F295BE] text-white px-4 py-1 rounded">
                  View Profile
                </button>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
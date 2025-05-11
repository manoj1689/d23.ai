'use client';

import { useState } from 'react';
import Select from 'react-select';
import Sidebar from "@/components/Sidebar";
import { useRouter } from 'next/router';
import { FaArrowLeft, FaBell } from 'react-icons/fa';
import HomeNavbar from '@/components/HomeNavbar';

const categoryOptions = [
  { value: 'Technology', label: 'Technology' },
  { value: 'Politics', label: 'Politics' },
  { value: 'Ethics', label: 'Ethics' },
  { value: 'Education', label: 'Education' },
];

const tagOptions = [
  { value: 'AI', label: 'AI' },
  { value: 'Climate', label: 'Climate' },
  { value: 'Freedom', label: 'Freedom' },
  { value: 'Equality', label: 'Equality' },
];

const levels = ['Beginner', 'Intermediate', 'Advanced'];
const formats = ['One-on-One', 'Group', 'Open Floor'];
const times = ['5 min', '10 min', '15 min'];

const CreateAIDebate = () => {
  const router = useRouter();

  const [topic, setTopic] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Technology');
  const [selectedTags, setSelectedTags] = useState([]);
  const [level, setLevel] = useState('Beginner');
  const [format, setFormat] = useState('Group');
  const [time, setTime] = useState('5 min');
  const [errors, setErrors] = useState<{ description?: string }>({});

  const handleTagsChange = (tags: any) => {
    setSelectedTags(tags || []);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
    if (e.target.value.trim() === '') {
      setErrors((prev) => ({ ...prev, description: 'Description is required.' }));
    } else {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.description;
        return newErrors;
      });
    }
  };

  const handleStartDebate = () => {
    const tagValues = selectedTags.map((tag: any) => tag.value);
    console.log({
      topic,
      description,
      category,
      tags: tagValues,
      level,
      format,
      time,
    });

    // Submit this data to your backend API
  };

  return (
    <>
      <Sidebar />
      <div className="lg:ml-64 ">
        <div>
          <HomeNavbar />
        </div>
        <div className="container mx-auto max-w-4xl my-6 bg-white  rounded-2xl p-4">
          {/* Basic Info */}
          <section className="bg-gray-100 shadow rounded-xl space-y-4 p-6">
            <h2 className="text-lg md:text-xl font-semibold mb-4">Basic Information</h2>

            <div>
              <label className="block text-md lg:text-lg font-light text-neutral-800 mb-2">
                Debate Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter a specific topic..."
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-1 focus:ring-[#62E9D7]/50"
              />
            </div>

            <div>
              <label className="block text-md lg:text-lg font-light text-neutral-800 mb-2">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                id="description"
                value={description}
                placeholder="Describe your topic..."
                onChange={handleDescriptionChange}
                className={`w-full bg-gray-50 border ${errors.description ? "border-red-500" : "border-gray-200"
                  } rounded-xl px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-1 focus:ring-[#62E9D7]/50`}
              />
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">{errors.description}</p>
              )}
            </div>

            <div>
              <label className="block text-md lg:text-lg font-light text-neutral-800 mb-2">Category</label>
              <Select
                options={categoryOptions}
                defaultValue={categoryOptions[0]}
                onChange={(option) => setCategory(option?.value || 'Technology')}
              />
            </div>

            <div>
              <label className="block text-md lg:text-lg font-light text-neutral-800 mb-2">Tags</label>
              <Select
                isSearchable
                isMulti
                isClearable
                className="react-select-container"
                classNamePrefix="react-select"
                value={selectedTags}
                onChange={handleTagsChange}
                options={tagOptions}
                placeholder="Add tags"
              />
            </div>
          </section>

          {/* Advanced Settings */}
          <div className="p-6 bg-white my-4 rounded-2xl">
            <h4 className="text-xl font-semibold text-gray-700 mb-4">Advance Settings</h4>

            <label className="block text-lg font-medium text-neutral-800 mb-2">AI Opponent Level</label>
            <div className="flex gap-2 mb-4">
              {levels.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setLevel(item)}
                  className={`flex-1 rounded-lg py-2 font-light text-md ${level === item
                      ? 'bg-gradient-to-r from-[#63A7D4] to-[#F295BE] text-white font-light'
                      : 'border border-gray-300 bg-gray-200 text-gray-600'
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <label className="block text-lg font-medium text-neutral-800 mb-2">Debate Format</label>
            <div className="flex gap-2 mb-4">
              {formats.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setFormat(item)}
                  className={`flex-1 rounded-lg py-2 font-light text-md ${format === item
                      ? 'bg-gradient-to-r from-[#63A7D4] to-[#F295BE] text-white font-light'
                      : 'border border-gray-300 bg-gray-200 text-gray-600'
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <label className="block text-lg font-medium text-neutral-800 mb-2">Time Limit</label>
            <div className="flex gap-2 mb-6">
              {times.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setTime(item)}
                  className={`flex-1 rounded-lg py-2 font-light text-md ${time === item
                      ? 'bg-gradient-to-r from-[#63A7D4] to-[#F295BE] text-white font-light'
                      : 'border border-gray-300 bg-gray-200 text-gray-600'
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleStartDebate}
            className="w-full py-3 mt-4 rounded-xl bg-gradient-to-r from-[#63A7D4] to-[#F295BE] text-white text-md font-semibold hover:opacity-90"
          >
            Start AI Debate
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateAIDebate;

import React, { useEffect, useState } from 'react';
import type { RootState, AppDispatch } from '../../store/store';
import { LuBrain } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTopics,
  deleteTopic,
  Topic,
} from '../../store/slices/topicSlice';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { IoMdAdd } from "react-icons/io";
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import Sidebar from "@/components/Sidebar";
import { useRouter } from 'next/router';
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

const TopicsPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { topics, loading, error } = useSelector((state: RootState) => state.topics);

  const [filteredTopics, setFilteredTopics] = useState<Topic[]>([]);
  const [open, setOpen] = useState(false);
  const [viewMode, setViewMode] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [popoverOpen, setPopoverOpen] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  useEffect(() => {
    dispatch(fetchTopics());
  }, [dispatch]);

  useEffect(() => {
    let filtered = [...topics];

    if (selectedCategory) {
      filtered = filtered.filter(topic => topic.category === selectedCategory);
    }

    if (selectedTags.length > 0) {
      filtered = filtered.filter(topic =>
        topic.tags?.some(tag => selectedTags.includes(tag))
      );
    }

    setFilteredTopics(filtered);
  }, [selectedCategory, selectedTags, topics]);

  const handleDelete = async (id: number) => {
    await dispatch(deleteTopic(id));
    setPopoverOpen(null);
  };

  const handleEdit = (topic: Topic) => {
    setSelectedTopic(topic);
    setViewMode(false);
    setOpen(true);
    setPopoverOpen(null);
  };

  const handleView = (topic: Topic) => {
    setSelectedTopic(topic);
    setViewMode(true);
    setOpen(true);
    setPopoverOpen(null);
  };

  const handleOnSearch = (string: string) => {
    const filtered = topics.filter((topic) =>
      topic.title.toLowerCase().includes(string.toLowerCase())
    );
    setFilteredTopics(filtered);
  };

  const searchItems = topics.map((topic) => ({
    id: topic.id,
    name: topic.title,
  }));

  return (
    <>
      <Sidebar />
      <div className="lg:ml-64 min-h-screen bg-gray-50">
        {/* Header */}
        <div >

          <HomeNavbar />
        </div>

        {/* Main Content */}
        <div className="container mx-auto p-6">
        <div className='flex w-full justify-between my-4'>
              <div className="flex  gap-4   text-gray-600">
                <span><LuBrain size={30} color='#2B6CB0' /> </span> <h2 className="text-2xl font-medium"> Practice with Ai</h2>

              </div>
              <div>
                <button className='flex gap-2 px-4 py-2  bg-gradient-to-r from-[#63A7D4] to-[#F295BE] rounded-lg items-center text-white shadow-lg cursor-pointer' onClick={() => router.push("/AddTopics")}> <span><IoMdAdd size={20} /></span> <span>Add Topic</span></button>

              </div>
            </div>
          <div className="max-w-4xl mx-auto bg-white p-4 rounded-2xl">
        

            <h1 className="text-md font-semibold text-gray-800 mb-2">Search for a topic</h1>

            {/* Search Bar */}
            <div className="mb-6">
              <ReactSearchAutocomplete
                items={searchItems}
                onSearch={handleOnSearch}
                fuseOptions={{ keys: ['name'] }}
                resultStringKeyName="name"
                placeholder="Ex. Artificial Intelligence Ethics"
                styling={{
                  height: "44px",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                }}
              />
            </div>

            {/* Category Filter */}
            <div className="mb-4">
              <label className="block font-medium text-gray-700 mb-2">Category:</label>
              <div className="flex flex-wrap gap-2">
                {categoryOptions.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() =>
                      setSelectedCategory(prev => prev === cat.value ? null : cat.value)
                    }
                    className={`px-3 py-1 rounded-full border ${selectedCategory === cat.value
                      ? 'bg-sky-500 text-white'
                      : 'bg-white text-gray-700 border-gray-300'
                      } hover:bg-blue-100`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tag Filter */}
            <div className="mb-6">
              <label className="block font-medium text-gray-700 mb-2">Tags:</label>
              <div className="flex flex-wrap gap-2">
                {tagOptions.map((tag) => (
                  <button
                    key={tag.value}
                    onClick={() =>
                      setSelectedTags(prev =>
                        prev.includes(tag.value)
                          ? prev.filter(t => t !== tag.value)
                          : [...prev, tag.value]
                      )
                    }
                    className={`px-3 py-1 rounded-full border ${selectedTags.includes(tag.value)
                      ? 'bg-cyan-600 text-white'
                      : 'bg-white text-gray-700 border-gray-300'
                      } hover:bg-cyan-200`}
                  >
                    {tag.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Modal */}
            <Modal open={open} onClose={() => setOpen(false)} center>
              <h2 className="text-2xl font-bold mb-4">Topic Details</h2>
              {viewMode && selectedTopic && (
                <div className="space-y-2 text-left">
                  <p><strong>Title:</strong> {selectedTopic.title}</p>
                  <p><strong>Category:</strong> {selectedTopic.category}</p>
                  <p><strong>Description:</strong> {selectedTopic.description}</p>
                  <p>
                    <strong>Tags:</strong>{' '}
                    {selectedTopic.tags?.map((tag, i) => (
                      <span key={i} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs mr-1">
                        {tag}
                      </span>
                    ))}
                  </p>
                  <button
                    onClick={() => setOpen(false)}
                    className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded"
                  >
                    Close
                  </button>
                </div>
              )}
            </Modal>

            {/* Topics List */}
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p className="text-red-500">{error}</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2  gap-4">
                {filteredTopics.map((topic: Topic) => (
                  <div key={topic.id} className="flex flex-col p-4 rounded-2xl shadow-sm justify-between bg-gray-100">
                    <div className="flex flex-col justify-between h-full items-start">

                      <div>
                        <h2 className="text-lg font-semibold text-neutral-700">{topic.title}</h2>
                        <p className="text-md text-gray-600 my-2">{topic.description}</p>
                      </div>
                      <div>
                        <p className="mt-1 bg-sky-100 text-gray-500 px-4 py-1 text-md rounded-full w-fit">{topic.category}</p>
                        {topic.tags && (
                          <div className="flex gap-2 mt-2 flex-wrap">
                            {topic.tags.map((tag, i) => (
                              <span key={i} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                    </div>
                    {/* Popover menu or other action buttons */}


                    {/* Join Button */}
                    <div className="flex w-full justify-end mt-2">
                      <button className="bg-gradient-to-r from-[#63A7D4] to-[#F295BE] text-white px-4 py-2 rounded-lg hover:scale-105 transition">
                        Join Debate
                      </button>
                    </div>
                  </div>
                ))}
              </div>

            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopicsPage;

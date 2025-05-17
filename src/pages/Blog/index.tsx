'use client';

import React, { useState, useEffect } from 'react';
import { IoArrowBackOutline } from "react-icons/io5";
import Select from 'react-select';
import articlesData from '../../../public/data/blogReviews.json';
import Details from "./Details";
import { useRouter } from 'next/navigation';

const categoryOptions = [
    { value: 'All', label: 'All' },
    { value: 'Technology', label: 'Technology' },
    { value: 'Design', label: 'Design' },
    { value: 'Development', label: 'Development' },
    { value: 'Business', label: 'Business' }
];

const sortOptions = [
    { value: 'Latest', label: 'Latest' },
    { value: 'Popular', label: 'Popular' },
    { value: 'Trending', label: 'Trending' }
];

const BlogSection = () => {
    const router = useRouter()
    const [selectedCategory, setSelectedCategory] = useState(categoryOptions[0]);
    const [selectedSort, setSelectedSort] = useState(sortOptions[0]);
    const [displayArticles, setDisplayArticles] = useState<any>([]);
    const [visibleCount, setVisibleCount] = useState(7);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchFilteredArticles = async () => {
            setLoading(true);
            await new Promise((res) => setTimeout(res, 500));

            let filtered = articlesData;

            if (selectedCategory.value !== 'All') {
                filtered = filtered.filter((a) => a.category === selectedCategory.value);
            }

            if (selectedSort.value === 'Popular') {
                filtered = [...filtered].sort((a, b) => b.id - a.id);
            } else if (selectedSort.value === 'Trending') {
                filtered = [...filtered].sort((a, b) => a.id - b.id);
            }

            setDisplayArticles(filtered);
            setVisibleCount(7);
            setLoading(false);
        };

        fetchFilteredArticles();
    }, [selectedCategory, selectedSort]);

    const loadMore = () => {
        setVisibleCount((prev) => prev + 6);
    };

    const visibleArticles: any = displayArticles.slice(0, visibleCount);

    return (
        <div className="container mx-auto p-6">
            <div className='flex flex-col lg:flex-row gap-8'>

                {/* Left Section */}
                <div className="flex-1">
                    <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-6'>
                        <div onClick={() => router.push("/")} className='flex gap-2 hover:underline cursor-pointer text-gray-600'> <span><IoArrowBackOutline size={20} /></span>Back</div>
                        <h2 className='text-2xl font-bold'>Latest Articles</h2>
                        <div className="flex gap-4 mt-4 md:mt-0">
                            <div className="w-48">
                                <Select
                                    options={categoryOptions}
                                    value={selectedCategory}
                                    onChange={(option) => setSelectedCategory(option!)}
                                />
                            </div>
                            <div className="w-48">
                                <Select
                                    options={sortOptions}
                                    value={selectedSort}
                                    onChange={(option) => setSelectedSort(option!)}
                                />
                            </div>
                        </div>
                    </div>

                    {loading ? (
                        <div className="text-center text-gray-600 py-10">Loading articles...</div>
                    ) : visibleArticles.length === 0 ? (
                        <div className="text-center text-gray-600 py-10">No articles found.</div>
                    ) : (
                        <>
                            {/* Featured Article */}
                            <div className="mb-10">
                                <div className="w-full overflow-hidden rounded-2xl shadow-sm  bg-white">
                                    <img
                                        src={visibleArticles[0].image}
                                        alt={visibleArticles[0].title}
                                        className="w-full h-72 "
                                    />
                                    <div className="p-6">
                                        <span className="inline-block text-sm font-medium bg-blue-100 text-sky-700 px-2 py-1 rounded-full mb-3">
                                            {visibleArticles[0].category}
                                        </span>
                                        <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                            {visibleArticles[0].title}
                                        </h2>
                                        <p className="text-md text-gray-700 mb-4">{visibleArticles[0].description}</p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-3">
                                                <img
                                                    src={visibleArticles[0].author.image}
                                                    alt={visibleArticles[0].author.name}
                                                    className="w-8 h-8 rounded-full"
                                                />
                                                <div className="text-sm text-gray-600">
                                                    <p className="font-medium">{visibleArticles[0].author.name}</p>
                                                    <p className="text-sm text-gray-500">Mar 18, 2025 • {visibleArticles[0].readTime}</p>
                                                </div>
                                            </div>
                                            <span
                                                onClick={() => router.push(`/BlogView?id=${visibleArticles[0].id}`)}
                                                className="text-blue-500 text-sm font-medium hover:underline flex items-center cursor-pointer"
                                            >
                                                Read More →
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Grid of Remaining Articles */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {visibleArticles.slice(1).map((article: any) => (
                                    <div key={article.id} className="bg-white rounded-2xl shadow  overflow-hidden hover:scale-105 " onClick={() => router.push(`/BlogView?id=${article.id}`)}>
                                        <img
                                            src={article.image}
                                            alt={article.title}
                                            className="w-full h-48 object-cover"
                                        />
                                        <div className="p-4">
                                            <span className="inline-block text-sm font-medium bg-blue-100 text-sky-700 px-2 py-1 rounded-full mb-2">
                                                {article.category}
                                            </span>
                                            <h3 className="text-base font-semibold text-gray-900 mb-1">
                                                {article.title}
                                            </h3>
                                            <p className="text-md text-gray-600 mb-3">
                                                {article.description.length > 100
                                                    ? `${article.description.slice(0, 100)}...`
                                                    : article.description}
                                            </p>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <img
                                                        src={article.author.image}
                                                        alt={article.author.name}
                                                        className="w-6 h-6 rounded-full"
                                                    />
                                                    <p className="text-sm text-gray-800">{article.author.name}</p>
                                                </div>
                                                <span className="text-sm text-gray-500">{article.readTime}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>

                            {/* Load More Button */}
                            {visibleCount < displayArticles.length && (
                                <div className="flex justify-center mt-8">
                                    <button
                                        onClick={loadMore}
                                        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                                    >
                                        Load More
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </div>

                {/* Right Sidebar */}
                <div >
                    <Details />
                </div>
            </div>
        </div>
    );
};

export default BlogSection;

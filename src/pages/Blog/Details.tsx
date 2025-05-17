import React from 'react';

const Sidebar = () => {
  return (
    <div className="space-y-6 w-full max-w-sm">

      {/* Categories */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">Categories</h3>
        <ul className="space-y-2">
          {[
            { name: 'Technology', count: 24 },
            { name: 'Design', count: 18 },
            { name: 'Development', count: 32 },
            { name: 'Business', count: 16 },
          ].map((category) => (
            <li key={category.name} className="flex justify-between text-gray-700">
              <span>{category.name}</span>
              <span className="font-medium">{category.count}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Popular Posts */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">Popular Posts</h3>
        <div className="space-y-4">
          {[
            {
              title: 'Top Tech Trends to Watch in 2025',
              date: 'March 15, 2025',
              image: '/images/trends.jpg',
            },
            {
              title: 'Remote Work Tools for Maximum Productivity',
              date: 'March 12, 2025',
              image: '/images/remote.jpg',
            },
          ].map((post, index) => (
            <div key={index} className="flex items-center space-x-4">
              <img
                src={post.image}
                alt={post.title}
                className="w-14 h-14 rounded-md object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-gray-900">{post.title}</p>
                <p className="text-xs text-gray-500">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
        <p className="text-sm text-gray-600 mb-4">
          Stay updated with our latest insights and news.
        </p>
        <form className="space-y-3">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 text-sm font-medium"
          >
            Subscribe
          </button>
        </form>
      </div>

    </div>
  );
};

export default Sidebar;

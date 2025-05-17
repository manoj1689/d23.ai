import { useEffect, useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { useRouter } from 'next/router';
import articlesData from '../../../public/data/blogReviews.json';

const ArticlePage = () => {
  const router = useRouter();
  const { id } = router.query; // Get the dynamic id from the URL
  const [article, setArticle] = useState<any>(null); // Store the selected article
  const [comment, setComment] = useState("")

  useEffect(() => {
    if (id) {
      // Find the article that matches the dynamic id
      const selectedArticle = articlesData.find((article) => article.id.toString() === id.toString());
      setArticle(selectedArticle);
    }
  }, [id]); // Re-run this when `id` changes
  console.log("article data", article)
  if (!article) {
    return <p>Loading...</p>; // Show loading state while article is being fetched
  }


  const handlePostComment = () => {
    if (!comment.trim()) return


    setComment("")
  }
  return (
    <div className="container mx-auto p-6">


      <div className=' my-8'>
        <div onClick={() => router.push("/Blog")} className='flex gap-2 hover:underline cursor-pointer text-gray-600'>
          <span><IoArrowBackOutline size={20} /></span>Back to Blog
        </div>

      </div>
      {/* Left Section */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-2/3">
          {/* Featured Article */}
          <div className="mb-10">
            <div className="w-full overflow-hidden rounded-2xl shadow-sm bg-white">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-72 object-cover"
              />
              <div className="p-6">
                <span className="inline-block text-sm font-medium bg-blue-100 text-sky-700 px-2 py-1 rounded-full mb-3">
                  {article.category}
                </span>
                <h2 className="text-2xl lg:text-5xl font-bold text-gray-900 mb-2">
                  {article.title}
                </h2>
                <p className="text-md text-gray-700 mb-4">{article.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img
                      src={article.author.image}
                      alt={article.author.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="text-sm text-gray-600">
                      <p className="font-medium">{article.author.name}</p>
                      <p className="text-sm text-gray-500">Mar 18, 2025 • {article.readTime}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Article Sections */}
          <div className="space-y-8">
            {article.sections.map((section: any, index: any) => (
              <div key={index} className="space-y-4">
                <h3 className="text-xl lg:text-2xl font-semibold text-gray-800">{section.heading}</h3>
                <p className="text-md text-gray-700">{section.content}</p>
              </div>
            ))}
          </div>

          {/* Comments */}
          <div className="mt-10 space-y-6">
            <h3 className="text-lg lg:text-xl font-semibold text-gray-800">Comments</h3>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write your comment..."
              className="w-full border border-gray-300 rounded-md p-2"
              rows={4}
            />

            <button
              onClick={handlePostComment}
              className="bg-sky-500 text-white px-4 py-2 rounded hover:bg-sky-600"
            >
              Post comment
            </button>

            {article.comments.map((comment: any, index: any) => (
              <div key={index} className="flex space-x-3">
                <img
                  src={comment.commenter.image}
                  alt={comment.commenter.name}
                  className="w-8 h-8 rounded-full"
                />
                <div className="text-sm text-gray-600">
                  <p className="font-medium">{comment.commenter.name}</p>
                  <p className="text-sm text-gray-500">{comment.timeAgo}</p>
                  <p className="mt-1">{comment.comment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-6">
            <div className="text-2xl font-medium text-gray-800 ">
              Recent Articles
            </div>
            {articlesData.slice(3, 7).map((article: any) => (
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
        </div>
      </div>

    </div>
  );
};

export default ArticlePage;

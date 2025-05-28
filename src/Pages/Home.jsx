// import React from 'react';
// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Topbar from '../Component/TopBar';
// import Footer from '../Component/Footer';

// const Home = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   // Create Post Modal States
//   const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
//   const [createFormData, setCreateFormData] = useState({
//     title: '',
//     content: '',
//     category: '',
//     author: '',
//     image: ''
//   });
//   const [createLoading, setCreateLoading] = useState(false);

//   // Update functionality state variables
//   const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
//   const [currentPost, setCurrentPost] = useState(null);
//   const [updateFormData, setUpdateFormData] = useState({
//     title: '',
//     content: '',
//     category: ''
//   });
//   const [updateLoading, setUpdateLoading] = useState(false);

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   // Function to fetch all posts
//   const fetchPosts = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch('http://localhost:5000/api/post/getallpost');

//       if (!response.ok) {
//         throw new Error(`API request failed with status ${response.status}`);
//       }

//       const data = await response.json();
//       setPosts(data);
//       setLoading(false);
//     } catch (err) {
//       setError(err.message);
//       setLoading(false);
//       console.error('Error fetching posts:', err);
//     }
//   };

//   // Function to handle create post modal open (instead of navigation)
//   const handleCreatePost = () => {
//     setIsCreateModalOpen(true);
//     setCreateFormData({
//       title: '',
//       content: '',
//       category: '',
//       author: '',
//       image: ''
//     });
//   };

//   // Function to handle create form input changes
//   const handleCreateInputChange = (e) => {
//     const { name, value } = e.target;
//     setCreateFormData({
//       ...createFormData,
//       [name]: value
//     });
//   };

//   // Function to submit new post
//   const submitCreatePost = async (e) => {
//     e.preventDefault();

//     try {
//       setCreateLoading(true);
//       const response = await fetch('http://localhost:5000/api/post/createpost', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(createFormData)
//       });

//       if (!response.ok) {
//         throw new Error(`Failed to create post. Status: ${response.status}`);
//       }

//       const newPost = await response.json();

//       // Add the new post to the posts state
//       setPosts([newPost, ...posts]);

//       // Close modal and reset form
//       setIsCreateModalOpen(false);
//       setCreateFormData({
//         title: '',
//         content: '',
//         category: '',
//         author: '',
//         image: ''
//       });

//       // Show success message
//       alert('Post created successfully!');
//     } catch (err) {
//       console.error('Error creating post:', err);
//       alert(`Failed to create post: ${err.message}`);
//     } finally {
//       setCreateLoading(false);
//     }
//   };

//   // Function to handle update post
//   const handleUpdatePost = (postId) => {
//     const postToUpdate = posts.find(post => post._id === postId);
//     if (postToUpdate) {
//       setCurrentPost(postToUpdate);
//       setUpdateFormData({
//         title: postToUpdate.title || '',
//         content: postToUpdate.content || '',
//         category: postToUpdate.category || ''
//       });
//       setIsUpdateModalOpen(true);
//     } else {
//       alert('Post not found!');
//     }
//   };

//   // Function to handle form input changes
//   const handleUpdateInputChange = (e) => {
//     const { name, value } = e.target;
//     setUpdateFormData({
//       ...updateFormData,
//       [name]: value
//     });
//   };

//   // Function to submit update
//   const submitUpdate = async (e) => {
//     e.preventDefault();
//     if (!currentPost) return;

//     try {
//       setUpdateLoading(true);
//       const response = await fetch(`http://localhost:5000/api/post/updatepost/${currentPost._id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           postId: currentPost._id,
//           ...updateFormData
//         })
//       });

//       if (!response.ok) {
//         throw new Error(`Failed to update post. Status: ${response.status}`);
//       }

//       const updatedPost = await response.json();

//       // Update the posts state with the updated post
//       setPosts(posts.map(post =>
//         post._id === currentPost._id ? { ...post, ...updateFormData } : post
//       ));

//       // Close modal and reset form
//       setIsUpdateModalOpen(false);
//       setCurrentPost(null);
//       setUpdateFormData({
//         title: '',
//         content: '',
//         category: ''
//       });

//       // Show success message
//       alert('Post updated successfully!');
//     } catch (err) {
//       console.error('Error updating post:', err);
//       alert(`Failed to update post: ${err.message}`);
//     } finally {
//       setUpdateLoading(false);
//     }
//   };

//   // Function to handle delete post
//   const handleDeletePost = async (postId) => {
//     if (window.confirm('Are you sure you want to delete this post?')) {
//       try {
//         const response = await fetch(`http://localhost:5000/api/post/deletepost/${postId}`, {
//           method: 'DELETE',
//           headers: {
//             'Content-Type': 'application/json',
//           }
//         });

//         if (!response.ok) {
//           throw new Error(`Failed to delete post. Status: ${response.status}`);
//         }

//         // Remove the deleted post from state
//         setPosts(posts.filter(post => post._id !== postId));

//         // Show success message
//         alert('Post deleted successfully!');
//       } catch (err) {
//         console.error('Error deleting post:', err);
//         alert(`Failed to delete post: ${err.message}`);
//       }
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-64">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
//         <strong className="font-bold">Error!</strong>
//         <span className="block sm:inline"> {error}</span>
//       </div>
//     );
//   }

//   return <>
//       <Topbar />
//       <div>
//         <div className="container mx-auto px-4 py-8">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-4xl font-bold text-gray-800">POSTS</h1>
//           <button
//             onClick={handleCreatePost}
//             className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md flex items-center gap-2"
//           >
//             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//             </svg>
//             Create Post
//           </button>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
//           {posts && posts.length > 0 ? (
//             posts.map((post) => (
//               <div key={post._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
//                 {post.image && (
//                   <img
//                     src={post.image}
//                     alt={post.title}
//                     className="w-full h-48 object-cover"
//                     onError={(e) => {
//                       e.target.onerror = null;
//                       e.target.src = "/api/placeholder/400/200";
//                     }}
//                   />
//                 )}

//                 <div className="p-6">
//                   <div className="flex items-center justify-between mb-2">
//                     <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
//                     {post.category && (
//                       <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
//                         {post.category}
//                       </span>
//                     )}
//                   </div>
//                   <p className="text-gray-600 mb-4 line-clamp-3">{post.content}</p>

//                   <div className="flex items-center justify-between">
//                     <span className="text-sm text-gray-500">
//                       {post.author && `By ${post.author}`}
//                     </span>
//                     <span className="text-sm text-gray-500">
//                       {post.createdAt && new Date(post.createdAt).toLocaleDateString()}
//                     </span>
//                   </div>

//                   <div className="flex gap-2 mt-2">
//                     <button
//                       onClick={() => handleUpdatePost(post._id)}
//                       className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors flex-1"
//                     >
//                       Update
//                     </button>
//                     <button
//                       onClick={() => handleDeletePost(post._id)}
//                       className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors flex-1"
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className="col-span-full text-center py-12 text-gray-500">
//               <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
//               </svg>
//               <h3 className="text-lg font-medium text-gray-900 mb-2">No posts found</h3>
//               <p className="text-gray-500">Get started by creating your first post.</p>
//             </div>
//           )}
//         </div>
//       </div>
//       </div>
//       {/* Create Post Modal */}
//       {isCreateModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-screen overflow-y-auto">
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-2xl font-bold text-gray-800">Create New Post</h2>
//               <button
//                 onClick={() => setIsCreateModalOpen(false)}
//                 className="text-gray-400 hover:text-gray-600 text-2xl"
//               >
//                 ×
//               </button>
//             </div>

//             <div className="space-y-6">
//               <div>
//                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="create-title">
//                   Title *
//                 </label>
//                 <input
//                   type="text"
//                   id="create-title"
//                   name="title"
//                   value={createFormData.title}
//                   onChange={handleCreateInputChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   placeholder="Enter post title"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="create-content">
//                   Content *
//                 </label>
//                 <textarea
//                   id="create-content"
//                   name="content"
//                   value={createFormData.content}
//                   onChange={handleCreateInputChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32"
//                   placeholder="Write your post content here..."
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="create-category">
//                   Category
//                 </label>
//                 <select
//                   id="create-category"
//                   name="category"
//                   value={createFormData.category}
//                   onChange={handleCreateInputChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 >
//                   <option value="">Select a category</option>
//                   <option value="Technology">Technology</option>
//                   <option value="Health">Health</option>
//                   <option value="Lifestyle">Lifestyle</option>
//                   <option value="Business">Business</option>
//                   <option value="Sports">Sports</option>
//                   <option value="Education">Education</option>
//                   <option value="Other">Other</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="create-author">
//                   Author
//                 </label>
//                 <input
//                   type="text"
//                   id="create-author"
//                   name="author"
//                   value={createFormData.author}
//                   onChange={handleCreateInputChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   placeholder="Enter author name"
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="create-image">
//                   Image URL
//                 </label>
//                 <input
//                   type="url"
//                   id="create-image"
//                   name="image"
//                   value={createFormData.image}
//                   onChange={handleCreateInputChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   placeholder="https://example.com/image.jpg"
//                 />
//               </div>

//               <div className="flex items-center justify-end gap-4 pt-4">
//                 <button
//                   type="button"
//                   onClick={() => setIsCreateModalOpen(false)}
//                   className="px-6 py-2 bg-gray-500 hover:bg-gray-600 text-white font-medium rounded-md transition-colors"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="button"
//                   onClick={submitCreatePost}
//                   className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors flex items-center gap-2"
//                   disabled={createLoading}
//                 >
//                   {createLoading ? (
//                     <>
//                       <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                       </svg>
//                       Creating...
//                     </>
//                   ) : (
//                     <>
//                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                       </svg>
//                       Create Post
//                     </>
//                   )}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Update Post Modal */}
//       {isUpdateModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-8 max-w-lg w-full max-h-screen overflow-y-auto">
//             <h2 className="text-2xl font-bold mb-4">Update Post</h2>

//             <form onSubmit={submitUpdate}>
//               <div className="mb-4">
//                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
//                   Title
//                 </label>
//                 <input
//                   type="text"
//                   id="title"
//                   name="title"
//                   value={updateFormData.title}
//                   onChange={handleUpdateInputChange}
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   required
//                 />
//               </div>

//               <div className="mb-4">
//                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
//                   Content
//                 </label>
//                 <textarea
//                   id="content"
//                   name="content"
//                   value={updateFormData.content}
//                   onChange={handleUpdateInputChange}
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
//                   required
//                 />
//               </div>

//               <div className="mb-4">
//                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
//                   Category
//                 </label>
//                 <select
//                   id="category"
//                   name="category"
//                   value={updateFormData.category}
//                   onChange={handleUpdateInputChange}
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 >
//                   <option value="">Select a category</option>
//                   <option value="Technology">Technology</option>
//                   <option value="Health">Health</option>
//                   <option value="Lifestyle">Lifestyle</option>
//                   <option value="Business">Business</option>
//                   <option value="Sports">Sports</option>
//                   <option value="Education">Education</option>
//                   <option value="Other">Other</option>
//                 </select>
//               </div>

//               <div className="flex items-center justify-between mt-6">
//                 <button
//                   type="button"
//                   onClick={() => setIsUpdateModalOpen(false)}
//                   className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center"
//                   disabled={updateLoading}
//                 >
//                   {updateLoading ? (
//                     <>
//                       <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                       </svg>
//                       Updating...
//                     </>
//                   ) : "Update Post"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//       <Footer />
//     </>
// };

// export default Home;

import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Topbar from "../Component/TopBar";
import Footer from "../Component/Footer";
import { toast } from "react-toastify";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // New state variables for update functionality
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);
  const [updateFormData, setUpdateFormData] = useState({
    title: "",
    content: "",
    category: "",
  });
  const [updateLoading, setUpdateLoading] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  // Function to fetch all posts
  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://blog-backend-lo51.onrender.com/api/post/getallpost"
      );

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();
      setPosts(data);
      setLoading(false);
      toast.success("Posts fetched successfully!");
    } catch (err) {
      setError(err.message);
      setLoading(false);
      console.error("Error fetching posts:", err);
      toast.error("Error fetching posts:");
    }
  };

  // Function to handle create post navigation
  const handleCreatePost = () => {
    navigate("/createpost");
  };

  // Function to handle update post
  const handleUpdatePost = (postId) => {
    const postToUpdate = posts.find((post) => post._id === postId);
    if (postToUpdate) {
      setCurrentPost(postToUpdate);
      setUpdateFormData({
        title: postToUpdate.title || "",
        content: postToUpdate.content || "",
        category: postToUpdate.category || "",
      });
      setIsUpdateModalOpen(true);
    } else {
      alert("Post not found!");
    }
  };

  // Function to handle form input changes
  const handleUpdateInputChange = (e) => {
    const { name, value } = e.target;
    setUpdateFormData({
      ...updateFormData,
      [name]: value,
    });
  };

  // Function to submit update
  const submitUpdate = async (e) => {
    e.preventDefault();
    if (!currentPost) return;

    try {
      setUpdateLoading(true);
      const response = await fetch(
        `https://blog-backend-lo51.onrender.com/api/post/updatepost/${currentPost._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            postId: currentPost._id,
            ...updateFormData,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to update post. Status: ${response.status}`);
        toast.error("Failed to update post.  Status");
      }

      const updatedPost = await response.json();

      // Update the posts state with the updated post
      setPosts(
        posts.map((post) =>
          post._id === currentPost._id ? { ...post, ...updateFormData } : post
        )
      );

      // Close modal and reset form
      setIsUpdateModalOpen(false);
      setCurrentPost(null);
      setUpdateFormData({
        title: "",
        content: "",
        category: "",
      });

      // Show success message
      toast.success("Post updated successfully!");
    } catch (err) {
      console.error("Error updating post:", err);
      alert(`Failed to update post: ${err.message}`);
      toast.error(`Failed to update post: ${err.message}`);
    } finally {
      setUpdateLoading(false);
    }
  };

  // Function to handle delete post
  const handleDeletePost = async (postId) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      try {
        const response = await fetch(
          `https://blog-backend-lo51.onrender.com/api/post/deletepost/${postId}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Failed to delete post. Status: ${response.status}`);
        }

        // Remove the deleted post from state
        setPosts(posts.filter((post) => post._id !== postId));

        // Show success message
        toast.success("Post deleted successfully");
      } catch (err) {
        console.error("Error deleting post:", err);
        toast.error("Failed to delete post:");
      }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <strong className="font-bold">Error!</strong>
        <span className="block sm:inline"> {error}</span>
      </div>
    );
  }

  return (
    <>
      <Topbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold text-gray-800">POSTS</h1>
          <button
            onClick={handleCreatePost}
            className="px-6 py-2 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-colors"
          >
            Create Post
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts && posts.length > 0 ? (
            posts.map((post) => (
              <div
                key={post._id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {post.image && (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/api/placeholder/400/200";
                    }}
                  />
                )}

                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2 text-gray-800">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.content}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {post.author && `By ${post.author}`}
                    </span>
                    <span className="text-sm text-gray-500">
                      {post.createdAt &&
                        new Date(post.createdAt).toLocaleDateString()}
                    </span>
                  </div>

                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={() => handleUpdatePost(post._id)}
                      className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors flex-1"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDeletePost(post._id)}
                      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors flex-1"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-gray-500">
              No posts found.
            </div>
          )}
        </div>
      </div>

      {/* Update Post Modal */}
      {isUpdateModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-lg w-full max-h-screen overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">Update Post</h2>

            <form onSubmit={submitUpdate}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="title"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={updateFormData.title}
                  onChange={handleUpdateInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="content"
                >
                  Content
                </label>
                <textarea
                  id="content"
                  name="content"
                  value={updateFormData.content}
                  onChange={handleUpdateInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="category"
                >
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={updateFormData.category}
                  onChange={handleUpdateInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">Select a category</option>
                  <option value="Technology">Technology</option>
                  <option value="Health">Health</option>
                  <option value="Lifestyle">Lifestyle</option>
                  <option value="Business">Business</option>
                  <option value="Sports">Sports</option>
                  <option value="Education">Education</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="flex items-center justify-between mt-6">
                <button
                  type="button"
                  onClick={() => setIsUpdateModalOpen(false)}
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center"
                  disabled={updateLoading}
                >
                  {updateLoading ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Updating...
                    </>
                  ) : (
                    "Update Post"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Home;

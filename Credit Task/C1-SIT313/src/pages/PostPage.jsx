import React, { useState } from 'react';
import Swal from 'sweetalert2';

const PostPage = () => {
  // State for conditional rendering: 'question' or 'article'
  const [postType, setPostType] = useState('question');

  // Form states
  const [formData, setFormData] = useState({
    title: '',
    problemDescription: '',
    abstract: '',
    articleText: '',
    tags: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePostTypeChange = (type) => {
    setPostType(type);
  };

  const validateForm = () => {
    const { title, problemDescription, abstract, articleText, tags } = formData;

    if (!title.trim()) {
      return 'Please enter a title for your post.';
    }

    if (postType === 'question') {
      if (!problemDescription.trim()) {
        return 'Please describe your problem.';
      }
    } else {
      if (!abstract.trim()) {
        return 'Please provide a 1-paragraph abstract for your article.';
      }
      if (!articleText.trim()) {
        return 'Please provide the article text.';
      }
    }

    if (!tags.trim()) {
      return 'Please add at least 1 tag (up to 3 tags).';
    }

    // Split tags by comma or whitespace and filter empty
    const tagArray = tags
      .split(/[, ]+/)
      .map((t) => t.trim())
      .filter(Boolean);

    if (tagArray.length > 3) {
      return 'You can add up to a maximum of 3 tags.';
    }

    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationError = validateForm();

    if (validationError) {
      Swal.fire({
        icon: 'error',
        title: 'Validation Error',
        text: validationError,
        confirmButtonColor: '#2563eb'
      });
      return;
    }

    // Per SIT313-C1: When the user presses Post, have a popup appear to alert that post has been sent
    Swal.fire({
      icon: 'success',
      title: 'Post Successful!',
      text: `Your ${postType === 'question' ? 'Question' : 'Article'} has been sent successfully.`,
      confirmButtonColor: '#2563eb'
    });

    // Reset form after successful submission
    setFormData({
      title: '',
      problemDescription: '',
      abstract: '',
      articleText: '',
      tags: ''
    });
  };

  return (
    <div className="post-page-container">
      <div className="post-form-card">
        {/* Top Banner Bar matching wireframe */}
        <div className="post-banner-bar">
          <span>New Post</span>
        </div>

        {/* Radio buttons row */}
        <div className="post-type-selector">
          <span className="post-type-label">Select Post Type:</span>
          <label className="radio-option">
            <input
              type="radio"
              name="postType"
              value="question"
              checked={postType === 'question'}
              onChange={() => handlePostTypeChange('question')}
            />
            <span>Question</span>
          </label>
          <label className="radio-option">
            <input
              type="radio"
              name="postType"
              value="article"
              checked={postType === 'article'}
              onChange={() => handlePostTypeChange('article')}
            />
            <span>Article</span>
          </label>
        </div>

        {/* Section Header Bar */}
        <div className="post-banner-bar">
          <span>What do you want to ask or share</span>
        </div>

        {/* Wireframe Dynamic Description Hint */}
        <p className="post-condition-hint">
          This section is designed based on the type of the post. It could be developed by conditional rendering. For post {postType === 'question' ? 'a question, the following section would be appeared.' : 'an article, the following section would be appeared.'}
        </p>

        <form onSubmit={handleSubmit} className="post-fields-form">
          {/* Conditional Rendering: QUESTION */}
          {postType === 'question' && (
            <>
              <div className="field-row">
                <label className="field-row-label">Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Start your question with how, what, why, etc."
                  className="post-wireframe-input"
                />
              </div>

              <div className="field-column">
                <label className="field-column-label">Describe your problem</label>
                <textarea
                  name="problemDescription"
                  value={formData.problemDescription}
                  onChange={handleInputChange}
                  rows={9}
                  className="post-wireframe-textarea"
                />
              </div>

              <div className="field-row">
                <label className="field-row-label">Tags</label>
                <input
                  type="text"
                  name="tags"
                  value={formData.tags}
                  onChange={handleInputChange}
                  placeholder="Please add up to 3 tags to describe what your question is about e.g., Java"
                  className="post-wireframe-input"
                />
              </div>
            </>
          )}

          {/* Conditional Rendering: ARTICLE */}
          {postType === 'article' && (
            <>
              <div className="field-row">
                <label className="field-row-label">Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Enter a descriptive title"
                  className="post-wireframe-input"
                />
              </div>

              <div className="field-column">
                <label className="field-column-label">Abstract</label>
                <textarea
                  name="abstract"
                  value={formData.abstract}
                  onChange={handleInputChange}
                  rows={2}
                  placeholder="Enter a 1-paragraph abstract"
                  className="post-wireframe-textarea"
                />
              </div>

              <div className="field-column">
                <label className="field-column-label">Article Text</label>
                <textarea
                  name="articleText"
                  value={formData.articleText}
                  onChange={handleInputChange}
                  rows={8}
                  placeholder="Enter a 1-paragraph abstract"
                  className="post-wireframe-textarea"
                />
              </div>

              <div className="field-row">
                <label className="field-row-label">Tags</label>
                <input
                  type="text"
                  name="tags"
                  value={formData.tags}
                  onChange={handleInputChange}
                  placeholder="Please add up to 3 tags to describe what your article is about e.g., Java"
                  className="post-wireframe-input"
                />
              </div>
            </>
          )}

          {/* Post Action Button matching wireframe */}
          <div className="post-action-row">
            <button type="submit" className="btn-wireframe-post">
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostPage;

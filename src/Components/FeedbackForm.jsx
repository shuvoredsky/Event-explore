import React, { useState } from "react";

const FeedbackForm = () => {
  const [feedbackList, setFeedbackList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const message = form.message.value.trim();
    if (!name || !message) return;

    const newFeedback = { name, message };
    setFeedbackList([newFeedback, ...feedbackList]);
    form.reset();
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Feedback Form */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
        <h2 className="text-xl font-semibold mb-4">Still have questions?</h2>
        <p className="text-gray-500 mb-6">
          Let us know how we can help or what you'd like to improve.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="input input-bordered w-full"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            className="textarea textarea-bordered w-full"
            required
          />
          <button
            type="submit"
            className="btn btn-primary bg-violet-600 w-full"
          >
            Submit Feedback
          </button>
        </form>
      </div>

      {/* Feedback Display */}
      <div className="bg-base-200 p-6 rounded-xl overflow-y-auto max-h-[400px]">
        <h3 className="text-lg font-semibold mb-4">Visitor Feedback</h3>
        {feedbackList.length === 0 ? (
          <p className="text-gray-400 italic">No feedback yet.</p>
        ) : (
          feedbackList.map((fb, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg mb-3 border border-gray-100 shadow-sm"
            >
              <p className="font-semibold text-sm text-gray-700">{fb.name}</p>
              <p className="text-gray-600 text-sm mt-1">{fb.message}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FeedbackForm;

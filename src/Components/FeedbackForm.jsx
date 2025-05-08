import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

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
      <Helmet>
        <title>Event | Community</title>
      </Helmet>

      <div className="backdrop-blur-xl bg-white/10 p-6 rounded-2xl shadow-lg border border-white/30 text-white">
        <h2 className="text-2xl font-semibold mb-4">Still have questions?</h2>
        <p className="text-white/70 mb-6">
          Let us know how we can help or what you'd like to improve.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-violet-400"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-violet-400"
            required
          />
          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-violet-600 hover:bg-violet-700 transition text-white font-semibold"
          >
            Submit Feedback
          </button>
        </form>
      </div>

      <div className="backdrop-blur-lg bg-white/10 p-6 rounded-2xl overflow-y-auto max-h-[400px] border border-white/30 text-white">
        <h3 className="text-xl font-semibold mb-4">Visitor Feedback</h3>
        {feedbackList.length === 0 ? (
          <p className="text-white/50 italic">No feedback yet.</p>
        ) : (
          feedbackList.map((fb, index) => (
            <div
              key={index}
              className="bg-white/10 p-4 rounded-lg mb-3 border border-white/20 shadow-sm"
            >
              <p className="font-semibold text-sm text-white/80">{fb.name}</p>
              <p className="text-white/70 text-sm mt-1">{fb.message}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FeedbackForm;

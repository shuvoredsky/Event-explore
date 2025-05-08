import React from "react";
import FeedbackForm from "../Components/FeedbackForm";

const GuidelinesTips = () => {
  return (
    <div className="bg-violet-400">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-indigo-600">
          Organizer Guidelines & Community Rules
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Event Planning Tips */}
          <div className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-green-400">
            <h3 className="text-xl font-semibold mb-4 text-green-600">
              ✨ How to Organize a Great Event
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Set a clear objective for your event</li>
              <li>Choose a convenient date & time</li>
              <li>Pick an appropriate venue or platform</li>
              <li>Target the right audience</li>
              <li>Add clear & detailed event descriptions</li>
              <li>Use engaging visuals (images, banners)</li>
              <li>Send reminders & enable RSVP</li>
              <li>Incorporate interactive sessions or rewards</li>
            </ul>
          </div>

          {/* Community Rules */}
          <div className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-red-400">
            <h3 className="text-xl font-semibold mb-4 text-red-600">
              🛡️ Community Rules & Safety
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Treat everyone with respect</li>
              <li>No harassment or abusive behavior</li>
              <li>Protect participants' privacy</li>
              <li>Be responsible in discussions</li>
              <li>Report inappropriate activity</li>
              <li>Don't share spam or ads</li>
              <li>Follow Event Explorer's platform rules</li>
            </ul>
          </div>
        </div>
      </div>
      <FeedbackForm></FeedbackForm>
    </div>
  );
};

export default GuidelinesTips;

import React, { useState } from "react";
import Switch from "react-switch";

const CreateDebateForm = () => {
  const [format, setFormat] = useState("panel");
  const [participantLimit, setParticipantLimit] = useState(6);
  const [includeModerator, setIncludeModerator] = useState(true);
  const [allowQuestions, setAllowQuestions] = useState(true);
  const [enforceTimed, setEnforceTimed] = useState(false);
  const [isRecurring, setIsRecurring] = useState(false);

  return (
    <form className="max-w-3xl mx-auto space-y-8 p-6">
      {/* Basic Information */}
      <section className="bg-white shadow rounded-xl p-6">
        <h2 className="text-lg md:text-xl font-semibold mb-4">Basic Information</h2>

        <label className="block mb-4">
          <span className="text-sm font-medium">Debate Title*</span>
          <input
            type="text"
            required
            placeholder="Enter a clear, concise title"
            className="w-full mt-1 border rounded-md px-3 py-2"
          />
        </label>

        <label className="block mb-4">
          <span className="text-sm font-medium">Topic Description*</span>
          <textarea
            required
            placeholder="Describe the debate topic and key points to be discussed"
            className="w-full mt-1 border rounded-md px-3 py-2"
          />
        </label>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label>
            <span className="text-sm font-medium">Category</span>
            <select className="w-full mt-1 border rounded-md px-3 py-2">
              <option>Select a category</option>
              <option>Academic</option>
              <option>Politics</option>
              <option>Technology</option>
            </select>
          </label>

          <label>
            <span className="text-sm font-medium">Tags</span>
            <input
              type="text"
              placeholder="Add tags..."
              className="w-full mt-1 border rounded-md px-3 py-2"
            />
          </label>
        </div>
      </section>

      {/* Debate Format */}
      <section className="bg-white shadow rounded-xl p-6">
        <h2 className="text-lg md:text-xl font-semibold mb-4">Debate Format</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <button
            type="button"
            className={`border rounded-md p-4 text-left ${
              format === "oxford" ? "border-blue-500 bg-blue-100" : ""
            }`}
            onClick={() => setFormat("oxford")}
          >
            <h4 className="font-semibold">Oxford Style</h4>
            <p className="text-sm">Formal debate with proposition and opposition teams</p>
          </button>

          <button
            type="button"
            className={`border rounded-md p-4 text-left ${
              format === "panel" ? "border-blue-500 bg-blue-100" : ""
            }`}
            onClick={() => setFormat("panel")}
          >
            <h4 className="font-semibold">Panel Discussion</h4>
            <p className="text-sm">Multiple experts discussing various viewpoints</p>
          </button>

          <button
            type="button"
            className={`border rounded-md p-4 text-left ${
              format === "roundtable" ? "border-blue-500 bg-blue-100" : ""
            }`}
            onClick={() => setFormat("roundtable")}
          >
            <h4 className="font-semibold">Roundtable</h4>
            <p className="text-sm">Open discussion with equal speaking opportunities</p>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <label>
            <span className="text-sm font-medium">Participant Limit</span>
            <input
              type="number"
              min={2}
              value={participantLimit}
              onChange={(e) => setParticipantLimit(Number(e.target.value))}
              className="w-full mt-1 border rounded-md px-3 py-2"
            />
          </label>

          <label>
            <span className="text-sm font-medium">Skill Level</span>
            <select className="w-full mt-1 border rounded-md px-3 py-2">
              <option>Beginner</option>
              <option selected>Intermediate - Some experience</option>
              <option>Advanced - Expert debater</option>
            </select>
          </label>
        </div>

        {/* Panel Structure */}
        <div className="space-y-4 mt-4">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">Include Moderator</label>
            <Switch
              checked={includeModerator}
              onChange={setIncludeModerator}
              onColor="#3B82F6"
              uncheckedIcon={false}
              checkedIcon={false}
              height={20}
              width={40}
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">Allow Audience Questions</label>
            <Switch
              checked={allowQuestions}
              onChange={setAllowQuestions}
              onColor="#3B82F6"
              uncheckedIcon={false}
              checkedIcon={false}
              height={20}
              width={40}
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">Enforce Timed Responses</label>
            <Switch
              checked={enforceTimed}
              onChange={setEnforceTimed}
              onColor="#3B82F6"
              uncheckedIcon={false}
              checkedIcon={false}
              height={20}
              width={40}
            />
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="bg-white shadow rounded-xl p-6">
        <h2 className="text-lg md:text-xl font-semibold mb-4">Schedule</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <label>
            <span className="text-sm font-medium">Date*</span>
            <input type="date" required className="w-full mt-1 border rounded-md px-3 py-2" />
          </label>
          <label>
            <span className="text-sm font-medium">Time*</span>
            <input type="time" required className="w-full mt-1 border rounded-md px-3 py-2" />
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label>
            <span className="text-sm font-medium">Duration</span>
            <select className="w-full mt-1 border rounded-md px-3 py-2">
              <option>30 minutes</option>
              <option selected>1 hour</option>
              <option>2 hours</option>
            </select>
          </label>

          <label>
            <span className="text-sm font-medium">Time Zone</span>
            <select className="w-full mt-1 border rounded-md px-3 py-2">
              <option>UTC</option>
              <option selected>Eastern Time (UTC-5)</option>
              <option>Central Time (UTC-6)</option>
            </select>
          </label>
        </div>

        <div className="flex items-center mt-4 gap-2">
          <input
            type="checkbox"
            checked={isRecurring}
            onChange={(e) => setIsRecurring(e.target.checked)}
            className="h-4 w-4"
          />
          <span className="text-sm">Make this a recurring debate</span>
        </div>
      </section>

      {/* Topic Configuration */}
      <section className="bg-white shadow rounded-xl p-6">
        <h2 className="text-lg md:text-xl font-semibold mb-4">Topic Configuration</h2>

        <label>
          <span className="text-sm font-medium">References (Optional)</span>
          <input
            type="url"
            placeholder="https://example.com/article-url"
            className="w-full mt-1 border rounded-md px-3 py-2"
          />
        </label>
      </section>

      <div className="text-center">
        <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">
          Create Debate
        </button>
      </div>
    </form>
  );
};

export default CreateDebateForm;

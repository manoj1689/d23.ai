"use client"
import React, { useState } from "react";
import dynamic from 'next/dynamic';
import Switch from "react-switch";
import Select, { SingleValue, MultiValue, ActionMeta } from 'react-select';
import { FaRegCircle } from "react-icons/fa";
import DatePicker from "react-datepicker";
import { FaBell } from "react-icons/fa";
import { IoArrowBackOutline } from "react-icons/io5";
import "react-datepicker/dist/react-datepicker.css";
import { IoIosAdd } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";
import Sidebar from "@/components/Sidebar";
import PopularTopics from "./PopularTopics";
type Option = {
  value: string;
  label: string;
};

const categoryOptions: Option[] = [
  { value: 'academic', label: 'Academic' },
  { value: 'politics', label: 'Politics' },
  { value: 'technology', label: 'Technology' },
];
const tagOptions: Option[] = [
  { value: 'ai', label: 'AI' },
  { value: 'climate', label: 'Climate' },
  { value: 'education', label: 'Education' },
];
const durationOptions: Option[] = [
  { value: '30', label: '30 minutes' },
  { value: '60', label: '1 hour' },
  { value: '120', label: '2 hours' },
];
const timeZoneOptions: Option[] = [
  { value: 'UTC', label: 'UTC' },
  { value: 'ET', label: 'Eastern Time (UTC-5)' },
  { value: 'CT', label: 'Central Time (UTC-6)' },
];
const skillOptions = [
  { value: 'beginner', label: 'Beginner - New to topic' },
  { value: 'intermediate', label: 'Intermediate - Some experience' },
  { value: 'advanced', label: 'Advanced - Deep understanding' },
];
const privacyOptions = [
  { value: "unlisted", label: "Unlisted - Anyone with the link can join" },
  { value: "private", label: "Private - Only invited participants can join" },
  { value: "public", label: "Public - Anyone can search and join" },
];
const defaultRules = [
  "Maintain civility and respect at all times",
  "Support arguments with credible evidence",
  "No interruptions during speaking time",
  "Avoid logical fallacies",
  "Adhere to time limits for responses",
];

const CreateDebateForm = () => {
  const Select = dynamic(() => import('react-select'), { ssr: false });
  // Basic info
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Option | null>(null);
  const [selectedTags, setSelectedTags] = useState<Option[]>([]);
  //  Debate Format
  const [format, setFormat] = useState("panel");
  const [participantLimit, setParticipantLimit] = useState(6);
  const [skillLevel, setSkillLevel] = useState(skillOptions[1]);
  const [includeModerator, setIncludeModerator] = useState(true);
  const [allowQuestions, setAllowQuestions] = useState(true);
  const [enforceTimed, setEnforceTimed] = useState(false);
  // schedule 
  const [startDate, setStartDate] = useState(new Date());
  const [duration, setDuration] = useState<Option | null>(durationOptions[1]);
  const [timeZone, setTimeZone] = useState<Option | null>(timeZoneOptions[1]);
  const [isRecurring, setIsRecurring] = useState(false);

  //Topic Configuration
  const [reference, setReference] = useState('');
  const [references, setReferences] = useState<string[]>([]);

  //Privacy Rule
  const [privacySetting, setPrivacySetting] = useState(privacyOptions[0]);
  const [moderatorApproval, setModeratorApproval] = useState(true);
  const [completeProfile, setCompleteProfile] = useState(true);
  const [identityVerification, setIdentityVerification] = useState(false);
  const [checkedRules, setCheckedRules] = useState<string[]>([]);
  const [customRules, setCustomRules] = useState<string[]>([]);
  const [customRuleInput, setCustomRuleInput] = useState("");
  // Invition options
  const [emails, setEmails] = useState("");


  const handleAdd = () => {
    if (reference.trim() && !references.includes(reference.trim())) {
      setReferences([...references, reference.trim()]);
      setReference('');
    }
  };

  const handleDelete = (index: number) => {
    setReferences(references.filter((_, i) => i !== index));
  };

  const handleTagsChange = (newValue: MultiValue<Option>) => {
    setSelectedTags([...newValue]);
  };

  const changeLimit = (delta: number) => {
    setParticipantLimit((prev) => Math.max(1, prev + delta));
  };

  const handleRuleToggle = (rule: string) => {
    setCheckedRules((prev) =>
      prev.includes(rule) ? prev.filter((r) => r !== rule) : [...prev, rule]
    );
  };

  const handleAddCustomRule = () => {
    if (customRuleInput.trim() && !customRules.includes(customRuleInput.trim())) {
      setCustomRules([...customRules, customRuleInput.trim()]);
      setCustomRuleInput("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = {
      title,
      description,
      selectedCategory,
      tagOptions,
      skillLevel,
      format,
      participantLimit,
      includeModerator,
      allowQuestions,
      enforceTimed,
      isRecurring,
      selectedTags,
      duration,
      timeZone,
      startDate,
      references,
      privacySetting,
      moderatorApproval,
      completeProfile,
      identityVerification,
      checkedRules,
      customRules,
      emails,

    };
    console.log("Debate Form Data:", formData);
  };

  return (
    <>
      <div>
        <Sidebar />
      </div>
      <div className="container flex w-full justify-between max-lg:mx-auto  lg:ml-64 p-6">

        {/* Search Bar with Autocomplete */}
        <div className="">
          <span className="flex gap-4 items-center ml-8">
            <span><IoArrowBackOutline size={25} /></span> <span className="text-xl font-semibold">Create Debate</span>
          </span>

        </div>

        {/* Notification Bell */}
        <div className="flex items-center space-x-4 ">
          <button className="relative">
            <FaBell className="text-gray-600 hover:text-purple-600 " size={28} />
            {/* Notification Dot */}
            <span className="absolute top-0 right-0 inline-flex items-center justify-center w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
        </div>
      </div>
      <section className="p-4">
        <PopularTopics/>
      </section>
      <form onSubmit={handleSubmit} className="container mx-auto lg:ml-64 space-y-8 p-4">
        {/* Basic Information */}
        <section className="bg-white shadow rounded-xl p-6">
          <h2 className="text-lg md:text-xl font-semibold mb-4">Basic Information</h2>

          <label className="block mb-4">
            <span className="text-md font-normal text-neutral-700">Debate Title*</span>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter a clear, concise title"
              className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2"
            />

          </label>

          <label className="block mb-4">
            <span className="text-md font-normal text-neutral-700">Topic Description*</span>
            <textarea
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the debate topic and key points to be discussed"
              className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2"
            />
          </label>

          <section className="pb-4">
            <label >
              <span className="text-md font-normal text-neutral-700">Category</span>
              <Select
                className="react-select-container"
                classNamePrefix="react-select"
                value={selectedCategory}
                onChange={(newValue) => setSelectedCategory(newValue)}
                options={categoryOptions}
                placeholder="Select a category"
              />
            </label>

          </section>

          <label className="pt-12 ">
            <span className="text-md font-normal text-neutral-700 ">Tags</span>
            <Select
              isSearchable
              isMulti
              isClearable
              className="react-select-container"
              classNamePrefix="react-select"
              value={selectedTags}
              onChange={handleTagsChange}
              options={tagOptions}
              placeholder="Add tags"
            />
          </label>



        </section>

        {/* Debate Format */}


        <section className="bg-white shadow rounded-xl p-6">
          <h2 className="text-lg md:text-xl font-semibold mb-4">Debate Format</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {/* Oxford Style */}
            <button
              type="button"
              className={`rounded-md p-4 text-left ${format === "oxford"
                ? "bg-gradient-to-r from-[#F295BE] to-[#63A7D4] text-white"
                : "border border-gray-300 "
                }`}
              onClick={() => setFormat("oxford")}
            >
              <div className="flex gap-4 items-start">
                <div className="pt-2">
                  <FaRegCircle size={20} color="gray" />
                </div>
                <div>
                  <h4 className="font-normal text-lg">Oxford Style</h4>
                  <p className={` text-md rounded-md  text-left ${format === "oxford"
                    ? " text-white"
                    : "text-gray-600"
                    }`}>
                    Formal debate with proposition and opposition teams
                  </p>
                </div>
              </div>
            </button>

            {/* Panel Discussion */}
            <button
              type="button"
              className={`rounded-md p-4 text-left ${format === "panel"
                ? "bg-gradient-to-r from-[#F295BE] to-[#63A7D4] text-white"
                : "border border-gray-300"
                }`}
              onClick={() => setFormat("panel")}
            >
              <div className="flex gap-4 items-start">
                <div className="pt-2">
                  <FaRegCircle size={20} color="gray" />
                </div>
                <div>
                  <h4 className="font-normal text-lg">Panel Discussion</h4>
                  <p className={` text-md rounded-md text-left ${format === "panel"
                    ? " text-white"
                    : "text-gray-600"
                    }`}>
                    Multiple experts discussing various viewpoints
                  </p>
                </div>
              </div>
            </button>

            {/* Roundtable */}
            <button
              type="button"
              className={`rounded-md p-4 text-left ${format === "roundtable"
                ? "bg-gradient-to-r from-[#F295BE] to-[#63A7D4] text-white"
                : "border border-gray-300"
                }`}
              onClick={() => setFormat("roundtable")}
            >
              <div className="flex gap-4 items-start">
                <div className="pt-2">
                  <FaRegCircle size={20} color="gray" />
                </div>
                <div>
                  <h4 className="font-normal text-lg">Roundtable</h4>
                  <p className={` text-md rounded-md  text-left ${format === "roundtable"
                    ? " text-white"
                    : "text-gray-600"
                    }`}>
                    Open discussion with equal speaking opportunities
                  </p>
                </div>
              </div>
            </button>
          </div>
          <div className="bg-white p-6 rounded-xl shadow space-y-6 ">

            {/* Participant Limit and Skill Level */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-2">
                <button onClick={() => changeLimit(-1)} className="bg-gray-200 px-2 rounded">-</button>
                <span className="text-lg font-semibold">{participantLimit}</span>
                <button onClick={() => changeLimit(1)} className="bg-gray-200 px-2 rounded">+</button>
                <span className="text-sm text-gray-500 ml-2">participants</span>
              </div>

              <div className="w-full md:w-1/2">
                <label className="block text-md font-medium mb-1">Skill Level</label>
                <Select
                  options={skillOptions}
                  value={skillLevel}
                  onChange={(option) => option && setSkillLevel(option)}
                />
              </div>
            </div>

            {/* Panel Structure Switches */}
            <div className="bg-gray-100 p-4 rounded-lg space-y-3">
              <h3 className="text-sm font-medium text-gray-700">Panel Structure</h3>

              <div className="flex items-center justify-between">
                <span>Include Moderator</span>
                <Switch
                  onChange={setIncludeModerator}
                  checked={includeModerator}
                  onColor="#a78bfa"
                />
              </div>

              <div className="flex items-center justify-between">
                <span>Allow Audience Questions</span>
                <Switch
                  onChange={setAllowQuestions}
                  checked={allowQuestions}
                  onColor="#f472b6"
                />
              </div>

              <div className="flex items-center justify-between">
                <span>Enforce Timed Responses</span>
                <Switch
                  onChange={setEnforceTimed}
                  checked={enforceTimed}
                  onColor="#60a5fa"
                />
              </div>
            </div>
          </div>
        </section>


        {/* Schedule */}
        <section className="bg-white shadow rounded-xl p-6">
          <h2 className="text-lg md:text-xl font-semibold mb-4">Schedule</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <label>

              <span className="flex flex-col gap-2">
                <span className="text-sm font-medium">Date*</span>
                <span className="flex gap-4 items-center">
                  <DatePicker selected={startDate} onChange={(date: any) => setStartDate(date)} className=" px-3 py-2 outline-none focus:ring-0 border shadow-none rounded-md border-gray-300 w-auto"
                    calendarClassName="rounded-xl" />
                </span>

              </span>
            </label>



            <label>
              <span className="text-sm font-medium">Time*</span>
              <input type="time" required className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2" />
            </label>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label>
              <span className="text-sm font-medium">Debate Duration</span>
              <Select
                options={durationOptions}
                value={duration}
                onChange={(newValue) => setDuration(newValue)}

                className="mt-1"
              />
            </label>

            <label>
              <span className="text-sm font-medium">Time Zone</span>
              <Select
                options={timeZoneOptions}
                value={timeZone}
                onChange={(newValue) => setTimeZone(newValue)}

                className="mt-1"
              />
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
            <div className="flex  mt-1">
              <input
                type="url"
                placeholder="https://example.com/article-url"
                className="flex-1 border border-gray-300 rounded-l-md px-3 py-2"
                value={reference}
                onChange={(e) => setReference(e.target.value)}
              />
              <button
                type="button"
                onClick={handleAdd}
                className="bg-gray-200 text-white px-4 py-2 border border-gray-300 rounded-r-md hover:bg-gray-300 "
              >
                <IoIosAdd size={25} color="gray" />
              </button>
            </div>
          </label>

          {references.length > 0 && (
            <ul className="mt-4 space-y-2">
              {references.map((ref, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-md"
                >
                  <a href={ref} target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">
                    {ref}
                  </a>
                  <button
                    type="button"
                    onClick={() => handleDelete(index)}
                    className="text-red-400 "
                  >
                    <RiDeleteBinLine size={24} />

                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>
        <section className="bg-white p-6 rounded-xl shadow space-y-4">
          <h2 className="text-xl font-semibold">Privacy & Rules</h2>

          <div>
            <label className="text-sm font-medium mb-1 block">Privacy Setting</label>
            <Select
              value={privacySetting}
              onChange={(value) => setPrivacySetting(value!)}
              options={privacyOptions}
            />
          </div>

          <div className="space-y-3">
            <label className="flex items-center justify-between">
              <span>Require moderator approval</span>
              <Switch
                checked={moderatorApproval}
                onChange={setModeratorApproval}
                onColor="#f295be"
                offColor="#ccc"
              />
            </label>

            <label className="flex items-center justify-between">
              <span>Require complete profile</span>
              <Switch
                checked={completeProfile}
                onChange={setCompleteProfile}
                onColor="#f295be"
                offColor="#ccc"
              />
            </label>

            <label className="flex items-center justify-between">
              <span>Require identity verification</span>
              <Switch
                checked={identityVerification}
                onChange={setIdentityVerification}
                onColor="#f295be"
                offColor="#ccc"
              />
            </label>
          </div>

          <div>
            <h3 className="text-md font-semibold mb-2">Debate Rules</h3>
            {defaultRules.map((rule) => (
              <label key={rule} className="block mb-2">
                <input
                  type="checkbox"
                  checked={checkedRules.includes(rule)}
                  onChange={() => handleRuleToggle(rule)}
                  className="mr-2"
                />
                {rule}
              </label>
            ))}
            {customRules.map((rule) => (
              <label key={rule} className="block mb-2 text-blue-600">
                <input
                  type="checkbox"
                  checked={checkedRules.includes(rule)}
                  onChange={() => handleRuleToggle(rule)}
                  className="mr-2"
                />
                {rule}
              </label>
            ))}
            <div className="mt-2 flex gap-2">
              <input
                type="text"
                placeholder="Add custom rule"
                value={customRuleInput}
                onChange={(e) => setCustomRuleInput(e.target.value)}
                className="border px-3 py-1 rounded-md flex-1"
              />
              <button
                type="button"
                onClick={handleAddCustomRule}
                className="text-blue-600 text-sm"
              >
                + Add
              </button>
            </div>
          </div>
        </section>

        <section className="bg-white p-6 rounded-xl shadow space-y-4">
          <h2 className="text-xl font-semibold">Invitation Options</h2>

          <div>
            <label className="text-md font-medium">Invite by Email</label>
            <input
              type="text"
              placeholder="Enter email addresses separated by commas"
              value={emails}
              onChange={(e) => setEmails(e.target.value)}
              className="w-full border mt-1 px-3 py-2 rounded-md"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md">Copy Invite Link</button>
            <button className="bg-[#2B6CB0] text-white px-4 py-2 rounded-md">Email Invitations</button>
            <button className="bg-blue-100 text-[#2B6CB0] px-4 py-2 rounded-md">Share to Community</button>
          </div>

          <div className="bg-blue-50 text-[#2B6CB0] px-4 py-2 rounded-md text-md font-light">
            <strong>ℹ️</strong> Invitations will be sent after the debate is created. Participants will receive an email with a link to join.
          </div>
        </section>
        <div className="text-center">
          <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">
            Create Debate
          </button>
        </div>
      </form>
    </>

  );
};

export default CreateDebateForm;

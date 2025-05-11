"use client"

import { type ChangeEvent, useState, type FormEvent } from "react"
import { FaStar } from "react-icons/fa"
import Select, { MultiValue } from "react-select"
import { useDispatch } from "react-redux"
import type { AppDispatch } from "../../store/store"
import { createDebate } from "../../store/slices/debateSlice"
import Sidebar from "@/components/Sidebar"
import { useRouter } from 'next/router';
import { FaArrowLeft, FaBell } from 'react-icons/fa';
import { FaRegCircle } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdInfoOutline } from "react-icons/md";
import HomeNavbar from "@/components/HomeNavbar"
type Opponent = {
  name: string
  initials: string
  wins: number
  debates: number
  rating: number
}
type Option = {
  value: string;
  label: string;
};

type FormErrors = {
  description?: string
  category?: string
  topic?: string
  difficulty?: string
  format?: string
  date?: string
  time?: string
  opponent?: string
}

const categoryOptions = [
  { value: "Technology", label: "Technology" },
  { value: "Politics", label: "Politics" },
  { value: "Environment", label: "Environment" },
  { value: "Economics", label: "Economics" },
  { value: "Ethics", label: "Ethics" },
  { value: "Education", label: "Education" },
]

const tagOptions: Option[] = [
  { value: 'ai', label: 'AI' },
  { value: 'climate', label: 'Climate' },
  { value: 'education', label: 'Education' },
];

const skillOptions = [
  { value: 'beginner', label: 'Beginner - New to debates' },
  { value: 'intermediate', label: 'Intermediate - Some experience' },
  { value: 'advanced', label: 'Advanced - Seasoned debater' },
];


const debateFormats = [
  {
    key: 'Oxford Style',
    title: 'Oxford Style',
    description: 'Formal debate with proposition and opposition teams',
  },
  {
    key: 'Cross-Examination',
    title: 'Cross-Examination',
    description: 'Debaters question each other after presenting arguments',
  },
  {
    key: 'Lincoln-Douglas',
    title: 'Lincoln-Douglas',
    description: 'One-on-one format focusing on values and logic',
  }
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

const DebateModal = () => {
  const dispatch: AppDispatch = useDispatch()
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false)
  const [topic, setTopic] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("Technology")

  // Use separate state variables instead of combined object
  const [difficulty, setDifficulty] = useState("Beginner")
  const [format, setFormat] = useState("Oxford Style")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("06:00")
  const [selectedTags, setSelectedTags] = useState<Option[]>([]);

  const [selectedOpponent, setSelectedOpponent] = useState<Opponent | null>(null)
  const [duration, setDuration] = useState<Option | null>(durationOptions[1]);
  const [timeZone, setTimeZone] = useState<Option | null>(timeZoneOptions[1]);


  const [participantLimit, setParticipantLimit] = useState(6);
  const [selectedSkill, setSelectedSkill] = useState(skillOptions[1]);
  //Topic Configuration
  const [reference, setReference] = useState('');
  const [references, setReferences] = useState<string[]>([]);
  // Invition options
  const [emails, setEmails] = useState("");

  // Form validation errors
  const [errors, setErrors] = useState<FormErrors>({})
  const [formSubmitted, setFormSubmitted] = useState(false)


  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value)
    if (formSubmitted) {
      validateField("description", e.target.value)
    }
  }
  const handleTagsChange = (newValue: MultiValue<Option>) => {
    setSelectedTags([...newValue]);
  };



  const handleAdd = () => {
    if (reference.trim() && !references.includes(reference.trim())) {
      setReferences([...references, reference.trim()]);
      setReference('');
    }
  };

  const handleDelete = (index: number) => {
    setReferences(references.filter((_, i) => i !== index));
  };


  // Validation functions
  const validateField = (field: string, value: string) => {
    const newErrors = { ...errors }

    switch (field) {
      case "description":
        if (!value || value.trim() === "") {
          newErrors.description = "Description is required"
        } else if (value.length < 10) {
          newErrors.description = "Description must be at least 10 characters"
        } else {
          delete newErrors.description
        }
        break
      case "date":
        if (!value) {
          newErrors.date = "Date is required"
        } else {
          delete newErrors.date
        }
        break
      case "time":
        if (!value) {
          newErrors.time = "Time is required"
        } else {
          delete newErrors.time
        }
        break
      case "opponent":
        if (!value) {
          newErrors.opponent = "Please select an opponent"
        } else {
          delete newErrors.opponent
        }
        break
      default:
        break
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateForm = () => {
    const newErrors: FormErrors = {}

    if (!description || description.trim() === "") {
      newErrors.description = "Description is required"
    } else if (description.length < 10) {
      newErrors.description = "Description must be at least 10 characters"
    }

    if (!date) {
      newErrors.date = "Date is required"
    }

    if (!time) {
      newErrors.time = "Time is required"
    }

    if (!selectedOpponent) {
      newErrors.opponent = "Please select an opponent"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {

    setFormSubmitted(true)

    // Validate form before submission
    if (!validateForm()) {
      // Scroll to the first error
      const firstError = document.querySelector(".error-message")
      if (firstError) {
        firstError.scrollIntoView({ behavior: "smooth", block: "center" })
      }
      return
    }

    // Create a proper date string for API
    const scheduledStart = `${date}T${time}:00Z`

    // Calculate end time (90 minutes after start)
    const [hours, minutes] = time.split(":")
    const endHours = Number.parseInt(hours) + Math.floor((Number.parseInt(minutes) + 90) / 60)
    const endMinutes = (Number.parseInt(minutes) + 90) % 60
    const scheduledEnd = `${date}T${endHours.toString().padStart(2, "0")}:${endMinutes.toString().padStart(2, "0")}:00Z`

    const newDebate = {
      title: topic || "Untitled Debate",
      description: description,
      category: category,
      format: format,
      scheduled_start: scheduledStart,
      scheduled_end: scheduledEnd,
      topic_id: 1,
      participant_ids: selectedOpponent ? [1] : [],
    }
    // const newDebate = {
    //   title: 'Robots coming',
    //   description: 'the risks and benefits of AI.',
    //   category: 'Technology',
    //   format: 'oxford',
    //   scheduled_start: '2025-05-08T18:00:00Z',
    //   scheduled_end: '2025-05-08T19:30:00Z',
    //   topic_id: 1,
    //   participant_ids: [1],
    // };
    try {
      console.log("new debate data", newDebate)
      setLoading(true)
      await dispatch(createDebate(newDebate))
      // Success handling could go here
      alert("Debate created successfully!")
      // Reset form after successful submission
      resetForm()
    } catch (error) {
      console.error("Failed to create debate:", error)
      // Error handling could go here
      alert("Failed to create debate. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const resetForm = () => {
    setTopic("")
    setDescription("")
    setCategory("Technology")
    setDifficulty("Beginner")
    setFormat("Oxford Style")
    setDate("")
    setTime("")
    setSelectedOpponent(null)
    setErrors({})
    setFormSubmitted(false)
  }

  return (
    <>
      <div>
        <Sidebar />

      </div>
      <div className="lg:ml-64 ">
        <div>
          <HomeNavbar />
        </div>

        <div className="container mx-auto p-6">


          <form onSubmit={handleSubmit} className="space-y-6  bg-white max-w-4xl mx-auto rounded-2xl p-6 ">
            <section className="bg-gray-100 shadow rounded-xl space-y-4 p-6">
              <h2 className="text-lg md:text-xl font-semibold mb-4">Basic Information</h2>

              <div>
                <label className="block text-md lg:text-lg font-light text-neutral-800 mb-2">
                  Debate Title  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter a specific topic..."
                  value={topic}
                  onChange={(e) => {
                    setTopic(e.target.value)
                  }}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-1 focus:ring-[#62E9D7]/50"
                />
              </div>


              <div>
                <label className="block text-md lg:text-lg font-light text-neutral-800 mb-2">
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="description"
                  value={description}
                  placeholder="Describe your topic..."
                  onChange={handleDescriptionChange}
                  className={`w-full bg-gray-50 border ${errors.description ? "border-red-500" : "border-gray-200"} rounded-xl px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-1 focus:ring-[#62E9D7]/50`}
                />
                {errors.description && <p className="text-red-500 text-sm mt-1 error-message">{errors.description}</p>}
              </div>

              <div>
                <label className="block text-md lg:text-lg font-light text-neutral-800 mb-2">Category</label>
                <Select
                  options={categoryOptions}
                  defaultValue={categoryOptions[0]}
                  onChange={(option) => {
                    setCategory(option?.value || "Technology")
                  }}
                />
              </div>
              <div>
                <label className="block text-md lg:text-lg font-light text-neutral-800 mb-2">Tags</label>
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

              </div>


            </section>
            <section className="bg-white shadow rounded-xl space-y-4 p-6">
              <h2 className="text-lg md:text-xl font-semibold mb-4">Debate Format</h2>
              <div>
                <label className="block text-md lg:text-lg font-light text-neutral-800 mb-2">
                  Format Type
                </label>
                <div className="flex flex-col md:flex-row gap-4  ">
                  {debateFormats.map((formatOption) => (
                    <button
                      key={formatOption.key}
                      type="button"
                      onClick={() => setFormat(formatOption.key)}
                      className={`w-full p-4  items-start rounded-xl text-left  transition-all ${format === formatOption.key
                        ? 'bg-gradient-to-r from-[#63A7D4] to-[#F295BE] text-white '
                        : 'bg-white text-gray-600 border-gray-200 border-2 hover:border-gray-400'
                        }`}
                    >
                      <div className="flex gap-4 items-start">
                        <div className="pt-2">
                          <FaRegCircle size={20} color="gray" />
                        </div>
                        <div>

                          <div className="font-semibold text-md ">{formatOption.title}</div>
                          <div className={` text-md rounded-md  text-left ${format === formatOption.key
                            ? " text-white"
                            : "text-gray-600"
                            }`}>{formatOption.description}</div>
                        </div>
                      </div>

                    </button>
                  ))}
                </div>
              </div>
              <div className="flex w-full flex-col md:flex-row gap-6">
                {/* Participant Limit */}
                <div className="w-full flex gap-4 items-end md:w-1/2 ">
                  <div className="flex-flex-col  ">
                    <label className="block text-lg font-light text-gray-800 mb-1">
                      Participant Limit
                    </label>
                    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden w-fit">
                      <button
                        type="button"
                        onClick={() => setParticipantLimit(Math.max(1, participantLimit - 1))}
                        className="px-4 py-2 border-r border-gray-400  text-gray-600 hover:bg-gray-100"
                      >
                        −
                      </button>
                      <span className="px-4 py-1 text-gray-800 font-lg font-semibold">{participantLimit}</span>
                      <button
                        type="button"
                        onClick={() => setParticipantLimit(participantLimit + 1)}
                        className="px-4 py-2 border-l border-gray-400  text-gray-600 hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div >
                    <span className="text-sm text-gray-500 ml-1">participants</span>
                  </div>

                </div>

                {/* Skill Level Dropdown */}
                <div className="w-full md:w-1/2">
                  <label className="block text-lg font-light text-gray-800 mb-1">
                    Skill Level
                  </label>
                  <Select
                    options={skillOptions}
                    value={selectedSkill}
                    onChange={(option) => setSelectedSkill(option!)}
                    className="text-md"
                    styles={{
                      control: (base) => ({
                        ...base,
                        borderColor: '#D1D5DB', // gray-300
                        boxShadow: 'none',
                        '&:hover': { borderColor: '#9CA3AF' }, // gray-400
                      }),
                    }}
                  />
                </div>
              </div>
            </section>

            <section className="bg-white shadow rounded-xl space-y-4 p-6">
              <h2 className="text-lg md:text-xl font-semibold mb-4">Schedule</h2>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2">
                  <label className="block text-lg font-light text-gray-800 mb-1">
                    Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => {
                      setDate(e.target.value)
                      if (formSubmitted) {
                        validateField("date", e.target.value)
                      }
                    }}
                    className={`w-full bg-gray-50 border ${errors.date ? "border-red-500" : "border-gray-200"} rounded-xl px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-1 focus:ring-[#62E9D7]/50`}
                  />
                  {errors.date && <p className="text-red-500 text-sm mt-1 error-message">{errors.date}</p>}
                </div>
                <div className="w-full md:w-1/2">
                  <label className="block text-lg font-light text-gray-800 mb-1">
                    Time <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="time"
                    value={time}
                    onChange={(e) => {
                      setTime(e.target.value)
                      if (formSubmitted) {
                        validateField("time", e.target.value)
                      }
                    }}
                    className={`w-full bg-gray-50 border ${errors.time ? "border-red-500" : "border-gray-200"} rounded-xl px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-1 focus:ring-[#62E9D7]/50`}
                  />
                  {errors.time && <p className="text-red-500 text-sm mt-1 error-message">{errors.time}</p>}
                </div>

              </div>
              <div className="flex w-full flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2">

                  <span className="block text-lg font-light text-gray-800 mb-1">Debate Duration</span>
                  <Select
                    options={durationOptions}
                    value={duration}
                    onChange={(newValue) => setDuration(newValue)}


                  />

                </div>

                <div className="w-full md:w-1/2">

                  <span className="block text-lg font-light text-gray-800 mb-1">Time Zone</span>
                  <Select
                    options={timeZoneOptions}
                    value={timeZone}
                    onChange={(newValue) => setTimeZone(newValue)}


                  />

                </div>

              </div>
            </section>

            {/* Topic Configuration */}
            <section className="bg-white shadow rounded-xl p-6">
              <h2 className="text-lg md:text-xl font-semibold mb-4">Topic Configuration</h2>

              <label>
                <span className="text-md font-medium text-gray-600">References (Optional)</span>
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
              <h2 className="text-xl font-semibold">Invitation Options</h2>

              <div>
                <label className="block text-lg font-light text-gray-800 mb-1">Invite by Email</label>
                <input
                  type="text"
                  placeholder="Enter email addresses separated by commas"
                  value={emails}
                  onChange={(e) => setEmails(e.target.value)}
                  className="w-full border border-gray-300 mt-1 px-3 py-3 rounded-md"
                />
              </div>

              <div className="flex  flex-col md:flex-row w-full gap-2">
                <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md w-full">Copy Invite Link</button>
                <button className="bg-[#2B6CB0] text-white px-4 py-2 rounded-md w-full ">Email Invitations</button>
                <button className="bg-blue-100 text-[#2B6CB0] px-4 py-2 rounded-md w-full">Share to Community</button>
              </div>

              <div className="flex gap-4 bg-blue-50 text-[#2B6CB0] px-4 py-2 rounded-md text-md font-light">
                <span><MdInfoOutline size={20} /></span> Invitations will be sent after the debate is created. Participants will receive an email with a link to join.
              </div>
            </section>



            <div className="flex gap-4">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-gradient-to-r from-[#63A7D4] to-[#F295BE] py-3 rounded-xl text-white font-light hover:scale-105 transition-all "
              >
                {loading ? "Submitting..." : "Create Debate"}
              </button>

              <button
                type="button"
                onClick={resetForm}
                className="px-4 bg-gray-200 text-gray-800 py-3 rounded-xl hover:bg-gray-300 transition-all font-medium"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>

    </>
  )
}

export default DebateModal

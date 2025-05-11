"use client"

import type React from "react"
import { useState } from "react"
import ReactSwitch from "react-switch"
import { MdOutlineInterests, MdOutlineManageAccounts, MdOutlineSmartToy } from "react-icons/md";
import { CgSmartHomeWashMachine } from "react-icons/cg"
import { IoBarChartSharp } from "react-icons/io5"
import { MdSecurity } from "react-icons/md"
import { IoCodeSlash } from "react-icons/io5"
import { auth, googleprovider, facebookProvider } from "../../firebase/firebase"
import { signInWithPopup } from "firebase/auth"
import { useDispatch } from "react-redux"
import { firebaseLogin } from "../../store/slices/firebaseAuthSlice"
import { registerUser } from "../../store/slices/registerSlice"
import type { AppDispatch } from "../../store/store"
import { useRouter } from "next/navigation"
import Stepper from "@/components/stepper"
import Select from 'react-select';
import { IoSettingsOutline } from "react-icons/io5";
import { CiGlobe } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
// Define type for the option structure
interface Option {
  value: string;
  label: string;
}
const timezoneOptions = [
  { value: 'America/New_York', label: 'America/New_York (UTC-04:00)' },
  { value: 'America/Los_Angeles', label: 'America/Los_Angeles (UTC-07:00)' },
  { value: 'Europe/London', label: 'Europe/London (UTC+01:00)' },
  { value: 'Asia/Tokyo', label: 'Asia/Tokyo (UTC+09:00)' },
  { value: 'Asia/Kolkata', label: 'Asia/Kolkata (UTC+05:30)' },
  { value: 'Australia/Sydney', label: 'Australia/Sydney (UTC+10:00)' }
];

const SignupStepper = () => {
  const router = useRouter()
  const dispatch: AppDispatch = useDispatch()
  const [activeStep, setActiveStep] = useState(0)

  // Form state
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
    confirmPassword: "",
    skill_level: "beginner",
    interests: "",
    receive_product_updates: true,
    receive_new_features: true,
    receive_community_updates: false,
    receive_marketing_emails: false,
    timezone: "America/New_York",
    has_completed_preferences: false,
    username: "", // Will be generated from email
    bio: "",
  })

  // Selected interests tracking
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])

  // Form validation state
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [agreeToTerms, setAgreeToTerms] = useState(false)
  const [receiveUpdates, setReceiveUpdates] = useState(false)

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleChange = (selectedOption: any) => {
    handleInputChange({
      target: { name: 'timezone', value: selectedOption.value },
    });
  };

  // Handle checkbox changes
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    if (name === "agreeToTerms") {
      setAgreeToTerms(checked)
    } else if (name === "receiveUpdates") {
      setReceiveUpdates(checked)
    }
  }

  // Handle toggle changes
  const handleToggleChange = (name: string, checked: boolean) => {
    setFormData({
      ...formData,
      [name]: checked,
    })
  }

  // Handle interest selection
  const handleInterestClick = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter((item) => item !== interest))
    } else {
      setSelectedInterests([...selectedInterests, interest])
    }
  }

  // ✅ Google Login
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleprovider)
      const idToken = await result.user.getIdToken()
      dispatch(firebaseLogin(idToken))
      router.push("/Dashboard")
    } catch (error) {
      console.error("Google login failed:", error)
    }
  }

  // ✅ Facebook Login
  const signInWithFacebook = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider)
      const idToken = await result.user.getIdToken()
      dispatch(firebaseLogin(idToken))
      router.push("/Dashboard")
    } catch (error) {
      console.error("Facebook login failed:", error)
    }
  }

  // Validate form data
  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}

    if (activeStep === 0) {
      if (!formData.full_name.trim()) newErrors.full_name = "Full name is required"
      if (!formData.email.trim()) {
        newErrors.email = "Email is required"
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Email is invalid"
      }

      if (!formData.password) {
        newErrors.password = "Password is required"
      } else if (formData.password.length < 8) {
        newErrors.password = "Password must be at least 8 characters"
      }

      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match"
      }

      if (!agreeToTerms) {
        newErrors.terms = "You must agree to the terms"
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (activeStep === 0) {
      if (!validateForm()) return
    }

    if (activeStep === 1) {
      // Update interests in formData - keep as array instead of joining as string
      setFormData({
        ...formData,
        interests: selectedInterests, // Keep as array instead of joining
        has_completed_preferences: true,
      })
    }

    if (activeStep === 2) {
      // Submit the form
      handleSubmit()
      return
    }

    setActiveStep((prevStep) => prevStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
    setFormData({
      full_name: "",
      email: "",
      password: "",
      confirmPassword: "",
      skill_level: "beginner",
      interests: "",
      receive_product_updates: true,
      receive_new_features: true,
      receive_community_updates: false,
      receive_marketing_emails: false,
      timezone: "America/New_York",
      has_completed_preferences: false,
      username: "",
      bio: "",
    })
    setSelectedInterests([])
    setErrors({})
    setAgreeToTerms(false)
    setReceiveUpdates(false)
  }

  // Handle form submission
  const handleSubmit = async () => {
    // Generate username from email if not provided
    const userData = {
      ...formData,
      username: formData.username || formData.email.split("@")[0],
      // Ensure interests is properly formatted as an array of strings
      interests: selectedInterests.length > 0 ? selectedInterests : null,
    }

    // Remove confirmPassword as it's not part of the API model
    const { confirmPassword, ...userDataToSubmit } = userData

    // Log the payload for debugging
    console.log("Registration payload:", userDataToSubmit)

    try {
      // Dispatch the registerUser action
      await dispatch(registerUser(userDataToSubmit)).unwrap()
      // If successful, move to success state
      setActiveStep(3)
    } catch (error) {
      console.error("Registration failed:", error)
      // Handle registration error
      setErrors({
        submit: typeof error === "string" ? error : "Registration failed. Please try again.",
      })
    }
  }

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <div className="space-y-2 max-w-lg mx-auto rounded">
            <h2 className="text-2xl font-bold my-4 italic text-neutral-800 text-center">Create Your Account</h2>
            <p className="text-center font-light text-gray-600 text-md mb-4">Start your 14-day free trial, no credit card required</p>

            <div className="space-y-3">
              <button
                onClick={signInWithGoogle}
                className="w-full flex items-center justify-center rounded-md py-2 gap-4 bg-[#FFD7D7] hover:bg-[#fac8c8]"
              >
                <span>
                  <img src="./images/social/google.png" alt="google" className="w-8" />
                </span>
                <span className="text-neutral-600">Continue with Google</span>
              </button>

              <button
                onClick={signInWithFacebook}
                className="w-full flex items-center justify-center gap-4 rounded-md py-2 bg-sky-100 hover:bg-sky-200"
              >
                <span>
                  <img src="./images/social/facebook.png" alt="facebook" className="w-8" />
                </span>
                <span className="text-neutral-600">Continue with Facebook</span>
              </button>
            </div>

            <div className="flex items-center justify-center my-6">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="px-4 text-sm text-gray-400">or</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>


            <div className="space-y-4">
              <div>
                <label htmlFor="" className="font-normal text-gray-600 ">Full Name*</label>
                <input
                  type="text"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleInputChange}
                  placeholder="Ex. John Smith"
                  className={`w-full p-3 border border-gray-300 rounded ${errors.full_name ? "border-red-500" : ""}`}
                />
                {errors.full_name && <p className="text-red-500 text-xs mt-1">{errors.full_name}</p>}
              </div>

              <div>
                <label htmlFor="" className="font-normal text-gray-600 ">Email*</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Ex. example@domain.com"
                  className={`w-full p-3 border border-gray-300 rounded ${errors.email ? "border-red-500" : ""}`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="" className="font-normal text-gray-600 ">Password*</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  className={`w-full p-3 border border-gray-300 rounded ${errors.password ? "border-red-500" : ""}`}
                  minLength={8}
                />
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
              </div>

              <div>
                <label htmlFor="" className="font-normal text-gray-600 ">Confirm Password*</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm Password"
                  className={`w-full p-3 border border-gray-300 rounded ${errors.confirmPassword ? "border-red-500" : ""}`}
                />
                {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
              </div>
            </div>

            <div className="flex items-center mt-4">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={agreeToTerms}
                onChange={handleCheckboxChange}
                className={`mr-2 ${errors.terms ? "border-red-500" : ""}`}
              />
              <label className="text-md font-light text-gray-600">
                I agree to the{" "}
                <a
                  href="#"
                  className="bg-gradient-to-r from-[#63A7D4] to-[#F295BE] bg-clip-text text-transparent font-medium"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="bg-gradient-to-r from-[#63A7D4] to-[#F295BE] bg-clip-text text-transparent font-medium"
                >
                  Privacy Policy
                </a>
              </label>

            </div>
            {errors.terms && <p className="text-red-500 text-xs mt-1">{errors.terms}</p>}

            <div className="flex items-start ">
              <input
                type="checkbox"
                name="receiveUpdates"
                checked={receiveUpdates}
                onChange={handleCheckboxChange}
                className="mr-2 mt-1"
              />
              <label className="text-md font-light text-gray-600">
                I'd like to receive updates about new features and special offers
              </label>
            </div>

            <button onClick={handleNext} className="w-full mt-4 p-3 bg-gradient-to-r from-[#63A7D4] to-[#F295BE]  text-white rounded hover:scale-105 cursor-pointer">
              Create Account
            </button>

            <div className="mt-4 text-center">
              <span className="text-sm lg:text-lg font-light text-gray-600">
                Already have an account?{" "}
                <span onClick={()=>router.push("/Login")} className="bg-gradient-to-r from-[#63A7D4] to-[#F295BE] bg-clip-text text-transparent font-medium">
                  Log in
                </span>
              </span>
            </div>
          </div>
        )

      case 1:
        return (
          <div className="space-y-4">
            <div className="text-center">
              <h2 className="text-xl lg:text-3xl italic font-bold mb-2">Customize Your Preferences</h2>
              <p className="text-md lg:text-lg text-gray-500 font-light">Help us personalize your experience by selecting your preferences</p>
            </div>

            <div>
              <h4 className="font-normal  text-xl lg:text-2xl">Select Your Interests</h4>
              <p className="text-md text-gray-500 font-light my-2">Choose topics that interest you to receive personalized content and recommendations</p>
              <div className="flex flex-wrap gap-3 my-4">
                {/* Artificial Intelligence */}
                <button
                  className={`px-4 py-2 w-48 flex flex-col border rounded-2xl items-center cursor-pointer transition-all duration-200 
      ${selectedInterests.includes("AI") ? "bg-pink-200 border-pink-300 text-pink-900" : "bg-gray-200 border-gray-300 text-gray-800"}`}
                  onClick={() => handleInterestClick("AI")}
                >
                  <span className="block text-2xl bg-[#FBEFFF] rounded-full p-4 my-2">
                    <MdOutlineSmartToy size={30} color="#C026D3" />
                  </span>
                  <span className="text-sm text-center">Artificial Intelligence</span>
                </button>

                {/* Machine Learning */}
                <button
                  className={`px-4 py-2 w-48 flex flex-col border rounded-2xl items-center cursor-pointer transition-all duration-200 
      ${selectedInterests.includes("ML") ? "bg-blue-200 border-blue-300 text-blue-900" : "bg-gray-200 border-gray-300 text-gray-800"}`}
                  onClick={() => handleInterestClick("ML")}
                >
                  <span className="block text-2xl bg-[#EEF4FF] rounded-full p-4 my-2">
                    <CgSmartHomeWashMachine size={30} color="#3B82F6" />
                  </span>
                  <span className="text-sm text-center">Machine Learning</span>
                </button>

                {/* Data Science */}
                <button
                  className={`px-4 py-2 w-48 flex flex-col border rounded-2xl items-center cursor-pointer transition-all duration-200 
      ${selectedInterests.includes("DS") ? "bg-green-200 border-green-300 text-green-900" : "bg-gray-200 border-gray-300 text-gray-800"}`}
                  onClick={() => handleInterestClick("DS")}
                >
                  <span className="block text-2xl bg-[#E6F4EA] rounded-full p-4 my-2">
                    <IoBarChartSharp size={30} color="#059669" />
                  </span>
                  <span className="text-sm text-center">Data Science</span>
                </button>

                {/* Cybersecurity */}
                <button
                  className={`px-4 py-2 w-48 flex flex-col border rounded-2xl items-center cursor-pointer transition-all duration-200 
      ${selectedInterests.includes("CS") ? "bg-orange-200 border-orange-300 text-orange-900" : "bg-gray-200 border-gray-300 text-gray-800"}`}
                  onClick={() => handleInterestClick("CS")}
                >
                  <span className="block text-2xl bg-[#FFF3E6] rounded-full p-4 my-2">
                    <MdSecurity size={30} color="#F97316" />
                  </span>
                  <span className="text-sm text-center">Cybersecurity</span>
                </button>

                {/* Web Development */}
                <button
                  className={`px-4 py-2 w-48 flex flex-col border rounded-2xl items-center cursor-pointer transition-all duration-200 
      ${selectedInterests.includes("WD") ? "bg-purple-200 border-purple-300 text-purple-900" : "bg-gray-200 border-gray-300 text-gray-800"}`}
                  onClick={() => handleInterestClick("WD")}
                >
                  <span className="block text-2xl bg-[#F3E8FF] rounded-full p-4 my-2">
                    <IoCodeSlash size={30} color="#8B5CF6" />
                  </span>
                  <span className="text-sm text-center">Web Development</span>
                </button>
              </div>



            </div>
            <div className="space-y-2">

              <h4 className="font-normal  text-xl lg:text-2xl">Notification Settings</h4>
              <p className="text-md text-gray-500 font-light my-2">Manage what types of notifications you'd like to receive</p>

              <div className="space-y-6 font-light py-4">
                <div className="flex justify-between  items-start">
                  <div>
                    <label className="text-md lg:text-lg font-medium">Product Updates</label>
                    <p className="max-lg:text-sm lg:text-md text-gray-500 mt-1">
                      Receive notifications about new features and improvements
                    </p>
                  </div>
                  <ReactSwitch
                    checked={formData.receive_product_updates}
                    onChange={(checked) => handleToggleChange("receive_product_updates", checked)}
                    offColor="#ccc"
                    onColor="#0EA5E9"
                    offHandleColor="#fff"
                    onHandleColor="#fff"
                    height={20}
                    width={40}
                  />
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <label className="text-md lg:text-lg font-medium">New Features</label>
                    <p className="max-lg:text-sm lg:text-md text-gray-500 mt-1">
                      Be the first to know about new platform capabilities
                    </p>
                  </div>
                  <ReactSwitch
                    checked={formData.receive_new_features}
                    onChange={(checked) => handleToggleChange("receive_new_features", checked)}
                    offColor="#ccc"
                    onColor="#0EA5E9"
                    offHandleColor="#fff"
                    onHandleColor="#fff"
                    height={20}
                    width={40}
                  />
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <label className="text-md lg:text-lg font-medium">Community Updates</label>
                    <p className="max-lg:text-sm lg:text-md text-gray-500 mt-1">
                      Stay informed about community events and discussions
                    </p>
                  </div>
                  <ReactSwitch
                    checked={formData.receive_community_updates}
                    onChange={(checked) => handleToggleChange("receive_community_updates", checked)}
                    offColor="#ccc"
                    onColor="#0EA5E9"
                    offHandleColor="#fff"
                    onHandleColor="#fff"
                    height={20}
                    width={40}
                  />
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <label className="text-md lg:text-lg font-medium">Marketing Communications</label>
                    <p className="max-lg:text-sm text-md text-gray-500 mt-1">
                      Receive special offers, promotions, and marketing messages
                    </p>
                  </div>
                  <ReactSwitch
                    checked={formData.receive_marketing_emails}
                    onChange={(checked) => handleToggleChange("receive_marketing_emails", checked)}
                    offColor="#ccc"
                    onColor="#0EA5E9"
                    offHandleColor="#fff"
                    onHandleColor="#fff"
                    height={20}
                    width={40}
                  />
                </div>
              </div>

            </div>

            <label className="font-medium text-md">Timezone</label>
      <Select
        className="mt-2"
        name="timezone"
        value={timezoneOptions.find(option => option.value === formData.timezone)}
        options={timezoneOptions}
        onChange={handleChange}
        placeholder="Select a timezone"
      />
          </div>
        )
      case 2:
        return (
          <div className="space-y-4">
            <h2 className=" flex gap-4 text-xl lg:text-2xl text-neutral-800 italic items-center font-bold mb-2"> <span className="p-4 rounded-full bg-green-200"><FaCheck  color="green"/>
            </span>Almost Done! Please review your Prefernces.</h2>
            

            <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">
            <span className="flex gap-4"><span><MdOutlineManageAccounts   color="#2B6CB0" size={30}/></span> <h3 className="font-normal text-xl mb-2"> Account Information</h3></span>
              <h3 className="font-normal text-xl mb-2"></h3>
              <ul className="space-y-2">
                <li>
                  <strong className="text-neutral-800">Name:</strong> <span className="text-gray-600">{formData.full_name}</span>
                </li>
                <li>
                  <strong className="text-neutral-800">Email:</strong> <span className="text-gray-600">{formData.email}</span>
                </li>
              </ul>
            </div>

            <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">
            <span className="flex gap-4"><span><MdOutlineInterests  color="#2B6CB0" size={30}/></span> <h3 className="font-normal text-xl mb-2"> Selected Interests</h3></span>
             
              {selectedInterests.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {selectedInterests.map((interest) => (
                    <span key={interest} className="px-2 py-1 bg-blue-100 text-sky-700 rounded-full text-md">
                      {interest === "AI" && "Artificial Intelligence"}
                      {interest === "ML" && "Machine Learning"}
                      {interest === "DS" && "Data Science"}
                      {interest === "CS" && "Cybersecurity"}
                      {interest === "WD" && "Web Development"}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No interests selected</p>
              )}
            </div>

            <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">
            <span className="flex gap-4"><span><IoMdNotificationsOutline  color="#2B6CB0" size={30}/></span> <h3 className="font-normal text-xl mb-2"> Notification Preferences</h3></span>
             
              <ul className="space-y-1">
                <li className={formData.receive_product_updates ? "text-green-600" : "text-gray-400"}>
                  {formData.receive_product_updates ? "✓" : "✗"} Product Updates
                </li>
                <li className={formData.receive_new_features ? "text-green-600" : "text-gray-400"}>
                  {formData.receive_new_features ? "✓" : "✗"} New Features
                </li>
                <li className={formData.receive_community_updates ? "text-green-600" : "text-gray-400"}>
                  {formData.receive_community_updates ? "✓" : "✗"} Community Updates
                </li>
                <li className={formData.receive_marketing_emails ? "text-green-600" : "text-gray-400"}>
                  {formData.receive_marketing_emails ? "✓" : "✗"} Marketing Communications
                </li>
              </ul>
            </div>

            <div className=" border  border-gray-300 rounded-lg p-4 bg-gray-50">
            <span className="flex gap-4"><span><IoSettingsOutline  color="#2B6CB0" size={30}/></span> <h3 className="font-normal text-xl mb-2">TimeZone</h3></span>
             
              <p className="flex gap-4 my-2">
                <strong className="text-neutral-800"><CiGlobe size={20} color="gray"/></strong>  <span className="text-gray-600">{formData.timezone}</span>
              </p>
            </div>

            {errors.submit && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">{errors.submit}</div>
            )}
          </div>
        )
      case 3:
        return (
          <div className="text-center space-y-4 ">
            <div className="text-green-500 text-6xl mb-4">✓</div>
            <h2 className="text-2xl font-bold">Registration Complete!</h2>
            <p className="text-gray-600">Thank you for creating an account with us.</p>
            <p>
              We've sent a confirmation email to <strong>{formData.email}</strong>.
            </p>
            <button
              onClick={() => router.push("/Dashboard")}
              className="mt-4 px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 cursor-pointer"
            >
              Go to Dashboard
            </button>
          </div>
        )
      default:
        return "Unknown Step"
    }
  }

  return (
    <>
      <div className="flex flex-col bg-gray-100 h-screen justify-between ">
        <div className="flex flex-col  bg-white">
          <div className="flex container mx-auto justify-between items-center py-2 px-4">
            <div>
              <img src="/images/logo/company-logo.png" alt="company-logo" className="w-24 lg:w-30" />
            </div>
            <div className="text-sm space-x-2">
              <span className="text-sm lg:text-md font-light text-gray-600">Need Help?</span>
              <span className="bg-gradient-to-r from-[#63A7D4] to-[#F295BE] bg-clip-text text-transparent font-medium">Contact Support</span>
            </div>

          </div>
          <div className="">
            {/* Stepper */}
           {activeStep<3 &&
            <Stepper activeStep={activeStep} />
           }
            



          </div>

        </div>

        <div className="max-w-3xl px-4 mx-auto">


          {/* Content */}
          <div className="mt-8 rounded-2xl mx-auto my-4  p-4 bg-white ">
            {renderStepContent(activeStep)}
            {activeStep < 3 && (
              <div className="flex justify-between mt-6">
                <button
                  onClick={handleBack}
                  disabled={activeStep === 0}
                  className="px-6 py-2 border border-gray-400 rounded disabled:opacity-50"
                >
                  Back
                </button>
                <button onClick={handleNext} className="px-6 py-2 bg-[#63A7D4] text-white rounded hover:cursor-pointer">
                  {activeStep === 2 ? "Submit" : "Next"}
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="bg-white ">
          <div className="container mx-auto py-4 flex flex-col md:flex-row items-center justify-between text-md font-light text-gray-500 text-center gap-2">
            <p>© 2025 d23.ai. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className=" hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="hover:underline">
                Terms of Service
              </a>
              <a href="#" className=" hover:underline">
                Help Center
              </a>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default SignupStepper

"use client"

import type React from "react"
import { useState } from "react"
import { Stepper, Step } from "react-form-stepper"
import ReactSwitch from "react-switch"
import { MdPunchClock } from "react-icons/md"
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
          <div className="space-y-8 max-w-md mx-auto p-6 border rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">Create Your Account</h2>
            <p className="text-center text-sm mb-6">Start your 14-day free trial, no credit card required</p>

            <div className="space-y-3">
              <button
                onClick={signInWithGoogle}
                className="w-full flex items-center justify-center border rounded-md py-2 gap-4 hover:bg-gray-100"
              >
                <span>
                  <img src="./images/social/google.png" alt="google" className="w-8" />
                </span>
                <span>Continue with Google</span>
              </button>

              <button
                onClick={signInWithFacebook}
                className="w-full flex items-center justify-center border gap-4 rounded-md py-2 hover:bg-gray-100"
              >
                <span>
                  <img src="./images/social/facebook.png" alt="facebook" className="w-8" />
                </span>
                <span>Continue with Facebook</span>
              </button>
            </div>

            <div className="text-center mb-6">
              <span className="text-sm text-gray-600">or</span>
            </div>

            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  className={`w-full p-3 border rounded ${errors.full_name ? "border-red-500" : ""}`}
                />
                {errors.full_name && <p className="text-red-500 text-xs mt-1">{errors.full_name}</p>}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  className={`w-full p-3 border rounded ${errors.email ? "border-red-500" : ""}`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  className={`w-full p-3 border rounded ${errors.password ? "border-red-500" : ""}`}
                  minLength={8}
                />
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
              </div>

              <div>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm Password"
                  className={`w-full p-3 border rounded ${errors.confirmPassword ? "border-red-500" : ""}`}
                />
                {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
              </div>
            </div>

            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={agreeToTerms}
                onChange={handleCheckboxChange}
                className={`mr-2 ${errors.terms ? "border-red-500" : ""}`}
              />
              <label className="text-sm text-gray-700">
                I agree to the{" "}
                <a href="#" className="text-blue-500">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-500">
                  Privacy Policy
                </a>
              </label>
            </div>
            {errors.terms && <p className="text-red-500 text-xs mt-1">{errors.terms}</p>}

            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                name="receiveUpdates"
                checked={receiveUpdates}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <label className="text-sm text-gray-700">
                I'd like to receive updates about new features and special offers
              </label>
            </div>

            <button onClick={handleNext} className="w-full p-3 bg-green-500 text-white rounded hover:bg-green-600">
              Create Account
            </button>

            <div className="mt-4 text-center">
              <span className="text-sm text-gray-600">
                Already have an account?{" "}
                <a href="#" className="text-blue-500">
                  Log in
                </a>
              </span>
            </div>
          </div>
        )

      case 1:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-bold mb-2">Customize Your Preferences</h2>
            <p>Help us personalize your experience by selecting your preferences</p>
            <div>
              <h4 className="font-semibold text-lg">Select Your Interests</h4>
              <p>Choose topics that interest you to receive personalized content and recommendations</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <button
                  className={`px-3 py-1 flex flex-col border rounded items-center ${selectedInterests.includes("AI") ? "bg-blue-100 border-blue-500" : ""}`}
                  onClick={() => handleInterestClick("AI")}
                >
                  <span className="block text-2xl mb-1">
                    <MdPunchClock />
                  </span>
                  Artificial Intelligence
                </button>
                <button
                  className={`px-3 py-1 flex flex-col border rounded items-center ${selectedInterests.includes("ML") ? "bg-blue-100 border-blue-500" : ""}`}
                  onClick={() => handleInterestClick("ML")}
                >
                  <span className="block text-2xl mb-1">
                    <CgSmartHomeWashMachine />
                  </span>
                  Machine Learning
                </button>
                <button
                  className={`px-3 py-1 flex flex-col border rounded items-center ${selectedInterests.includes("DS") ? "bg-blue-100 border-blue-500" : ""}`}
                  onClick={() => handleInterestClick("DS")}
                >
                  <span className="block text-2xl mb-1">
                    <IoBarChartSharp />
                  </span>
                  Data Science
                </button>
                <button
                  className={`px-3 py-1 flex flex-col border rounded items-center ${selectedInterests.includes("CS") ? "bg-blue-100 border-blue-500" : ""}`}
                  onClick={() => handleInterestClick("CS")}
                >
                  <span className="block text-2xl mb-1">
                    <MdSecurity />
                  </span>
                  Cybersecurity
                </button>
                <button
                  className={`px-3 py-1 flex flex-col border rounded items-center ${selectedInterests.includes("WD") ? "bg-blue-100 border-blue-500" : ""}`}
                  onClick={() => handleInterestClick("WD")}
                >
                  <span className="block text-2xl mb-1">
                    <IoCodeSlash />
                  </span>
                  Web Development
                </button>
              </div>
            </div>
            <div className="space-y-6">
              <h4 className="font-semibold text-lg mt-4">Notification Settings</h4>
              <p className="text-sm text-gray-600">Manage what types of notifications you'd like to receive</p>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <label className="flex items-center text-md">Product Updates</label>
                    <p className="text-xs text-gray-500">Receive notifications about new features and improvements</p>
                  </div>
                  <ReactSwitch
                    checked={formData.receive_product_updates}
                    onChange={(checked) => handleToggleChange("receive_product_updates", checked)}
                    offColor="#ccc"
                    onColor="#4caf50"
                    offHandleColor="#fff"
                    onHandleColor="#fff"
                    height={20}
                    width={40}
                  />
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <label className="flex items-center text-md">New Features</label>
                    <p className="text-xs text-gray-500">Be the first to know about new platform capabilities</p>
                  </div>
                  <ReactSwitch
                    checked={formData.receive_new_features}
                    onChange={(checked) => handleToggleChange("receive_new_features", checked)}
                    offColor="#ccc"
                    onColor="#4caf50"
                    offHandleColor="#fff"
                    onHandleColor="#fff"
                    height={20}
                    width={40}
                  />
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <label className="flex items-center text-md">Community Updates</label>
                    <p className="text-xs text-gray-500">Stay informed about community events and discussions</p>
                  </div>
                  <ReactSwitch
                    checked={formData.receive_community_updates}
                    onChange={(checked) => handleToggleChange("receive_community_updates", checked)}
                    offColor="#ccc"
                    onColor="#4caf50"
                    offHandleColor="#fff"
                    onHandleColor="#fff"
                    height={20}
                    width={40}
                  />
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <label className="flex items-center text-md">Marketing Communications</label>
                    <p className="text-xs text-gray-500">Receive special offers, promotions, and marketing messages</p>
                  </div>
                  <ReactSwitch
                    checked={formData.receive_marketing_emails}
                    onChange={(checked) => handleToggleChange("receive_marketing_emails", checked)}
                    offColor="#ccc"
                    onColor="#4caf50"
                    offHandleColor="#fff"
                    onHandleColor="#fff"
                    height={20}
                    width={40}
                  />
                </div>
              </div>
            </div>

            <div className="mt-4">
              <h4 className="font-semibold">Your Timezone</h4>
              <select
                className="w-full p-2 border rounded mt-2"
                name="timezone"
                value={formData.timezone}
                onChange={handleInputChange}
              >
                <option value="America/New_York">America/New_York (UTC-04:00)</option>
                <option value="America/Los_Angeles">America/Los_Angeles (UTC-07:00)</option>
                <option value="Europe/London">Europe/London (UTC+01:00)</option>
                <option value="Asia/Tokyo">Asia/Tokyo (UTC+09:00)</option>
                <option value="Asia/Kolkata">Asia/Kolkata (UTC+05:30)</option>
                <option value="Australia/Sydney">Australia/Sydney (UTC+10:00)</option>
              </select>
            </div>
          </div>
        )
      case 2:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-bold mb-2">Almost Done!</h2>
            <p>Please review your information before submitting.</p>

            <div className="border rounded-lg p-4 bg-gray-50">
              <h3 className="font-semibold mb-2">Account Information</h3>
              <ul className="space-y-2">
                <li>
                  <strong>Name:</strong> {formData.full_name}
                </li>
                <li>
                  <strong>Email:</strong> {formData.email}
                </li>
              </ul>
            </div>

            <div className="border rounded-lg p-4 bg-gray-50">
              <h3 className="font-semibold mb-2">Selected Interests</h3>
              {selectedInterests.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {selectedInterests.map((interest) => (
                    <span key={interest} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
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

            <div className="border rounded-lg p-4 bg-gray-50">
              <h3 className="font-semibold mb-2">Notification Preferences</h3>
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

            <div className="border rounded-lg p-4 bg-gray-50">
              <h3 className="font-semibold mb-2">Other Settings</h3>
              <p>
                <strong>Timezone:</strong> {formData.timezone}
              </p>
            </div>

            {errors.submit && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">{errors.submit}</div>
            )}
          </div>
        )
      case 3:
        return (
          <div className="text-center space-y-4">
            <div className="text-green-500 text-6xl mb-4">✓</div>
            <h2 className="text-2xl font-bold">Registration Complete!</h2>
            <p className="text-gray-600">Thank you for creating an account with us.</p>
            <p>
              We've sent a confirmation email to <strong>{formData.email}</strong>.
            </p>
            <button
              onClick={() => router.push("/Dashboard")}
              className="mt-4 px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
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
      <div className="container mx-auto">
        <div className="flex justify-between py-2 ">
          <div>
            <img src="/images/logo/company-logo.png" alt="company-logo" className="w-30" />
          </div>
          <div className="text-sm space-x-2">
            <span className="text-gray-500">Need Help?</span>
            <span className="text-blue-500">Contact Support</span>
          </div>
        </div>
        <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded shadow">
          {/* Stepper */}
          <Stepper activeStep={activeStep}>
            <Step label="Account" />
            <Step label="Preferences" />
            <Step label="Confirmation" />
          </Stepper>

          {/* Content */}
          <div className="mt-8">
            {renderStepContent(activeStep)}
            {activeStep < 3 && (
              <div className="flex justify-between mt-6">
                <button
                  onClick={handleBack}
                  disabled={activeStep === 0}
                  className="px-6 py-2 border rounded disabled:opacity-50"
                >
                  Back
                </button>
                <button onClick={handleNext} className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                  {activeStep === 2 ? "Submit" : "Next"}
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="py-4 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 text-center gap-2">
          <p>© 2025 d23.ai. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-500 hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:underline">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:underline">
              Help Center
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignupStepper

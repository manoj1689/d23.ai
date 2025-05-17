import { FaRegUser, FaRegEnvelope } from 'react-icons/fa';
import { IoChatbubblesOutline, IoCallOutline } from "react-icons/io5";
import { GrSend } from "react-icons/gr";
import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
    <div className='flex'>
      <div className='container mx-auto pt-12 pb-8 px-4'>

        {/* Header */}
        <div className='flex justify-center items-center mb-4'>
          <motion.span 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-xs md:text-sm px-8 py-1 rounded-full text-[#4DA0D7] bg-sky-100 '
          >
            Contact Us
          </motion.span>
        </div>

        {/* Title */}
        <section>
          <motion.div 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light bg-gradient-to-r from-[#2a5e81] via-[#F295BE] to-[#197abb] text-center bg-clip-text text-transparent leading-tight gap-4 pb-2'
          >
            <span>Get in Touch</span> <span className='font-bold'>Anytime !</span> 
          </motion.div>
        </section>

        {/* Subtitle */}
        <section>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='text-gray-600 mb-12 text-md lg:text-lg justify-center text-center max-w-2xl mx-auto'
          >
            Ready to evaluate your hiring process? Our team is here to support your journey.
          </motion.div>
        </section>

        <hr className="w-20 h-1 bg-gradient-to-r from-[#63A7D4] to-[#F295BE] border-0 rounded mx-auto mt-4 mb-12" />

        {/* Contact Section */}
        <div className='flex max-lg:flex-col gap-6'>
          
          {/* Left: Contact Form */}
          <motion.div 
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className='flex flex-col relative w-full lg:w-1/2 bg-white rounded-xl shadow-md p-6 md:p-8'
          >
            <div className="absolute right-0 top-0 flex flex-col gap-4">
              <img src="/images/tools/circle.png" alt="Image 1" className="w-20" />
            </div>

            <div className='flex items-center gap-3 mb-4'>
              <div className='text-3xl p-4 rounded-full bg-purple-100 text-purple-400'><IoChatbubblesOutline /></div>
              <div>
                <h3 className='text-lg font-light'>Send us a Message</h3>
                <p className='text-md font-light text-gray-500 mb-8'>We&apos;ll get back to you within 24 hours</p>
              </div>
            </div>

            <form className='space-y-6'>
              <label>Name</label>
              <div className='relative mt-2'>
                <FaRegUser className='absolute top-3 left-3 text-gray-400' />
                <input
                  type='text'
                  placeholder='Enter your name'
                  className='pl-10 w-full rounded-lg py-2 px-3 outline-none placeholder:font-light bg-gray-100 focus:bg-white'
                />
              </div>

              <label>Email</label>
              <div className='relative mt-2'>
                <FaRegEnvelope className='absolute top-3 left-3 text-gray-400' />
                <input
                  type='email'
                  placeholder='Enter your email'
                  className='pl-10 w-full rounded-lg py-2 px-3 outline-none placeholder:font-light bg-gray-100 focus:bg-white'
                />
              </div>

              <label>Message</label>
              <div className='mt-2'>
                <textarea
                  rows={4}
                  placeholder='How can we help you?'
                  className='w-full rounded-lg py-2 px-3 outline-none bg-gray-100 placeholder:font-light focus:bg-white resize-none'
                />
              </div>
              <div className='mt-8'>
              <button
                type='submit'
                className='w-full bg-gradient-to-r from-blue-400 to-pink-400 text-white font-light py-4 mt-8 cursor-pointer rounded-lg flex justify-center items-center gap-2'
              >
                Send Message <GrSend />
              </button>
              </div>
            
            </form>
          </motion.div>

          {/* Right: Image and Info */}
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className='flex w-full lg:w-1/2 flex-col gap-4 justify-between'
          >
            <div>
              <img src="/images/contact/OfficeSpace.png" alt="Office space" className='w-full' />
            </div>
            <div className='flex w-full max-sm:flex-col gap-4'>
              <div className='bg-white rounded-xl shadow-md p-6 flex items-center gap-4 w-full sm:w-1/2'>
                <div className='text-3xl text-purple-400'><IoCallOutline /></div>
                <div>
                  <h4 className='font-light text-sm'>Phone</h4>
                  <p className='text-gray-600 font-light text-sm'>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className='bg-white rounded-xl shadow-md p-6 flex items-center gap-4 w-full sm:w-1/2'>
                <div className='text-3xl text-purple-400'><FaRegEnvelope /></div>
                <div>
                  <h4 className='font-light text-sm'>Email</h4>
                  <p className='text-gray-600 font-light text-sm'>support@d23.ai</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

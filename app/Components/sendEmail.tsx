'use client';
import { useRef, useState } from 'react';
import { sendEmail } from '../api/route'

export default function ContactForm() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const ref = useRef<HTMLFormElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (formData: FormData) => {
    const result = await sendEmail(formData);
    ref.current?.reset();
    if (result.success) {
      alert(result.message);
    } else {
      alert(result.message);
    }
  };

  return (
    <form
      ref={ref}
      action={handleSubmit}
      className="max-w-md mx-auto p-6 space-y-6 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg"
    >
      {/** NAME FIELD */}
      <div className="relative">
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder=" "
          className="peer w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <label
          htmlFor="name"
          className="absolute text-sm text-gray-500 dark:text-gray-400 left-4 top-3.5 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-gray-500 transition-all peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-600"
        >
          Name
        </label>
      </div>

      {/** EMAIL FIELD */}
      <div className="relative">
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder=" "
          className="peer w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <label
          htmlFor="email"
          className="absolute text-sm text-gray-500 dark:text-gray-400 left-4 top-3.5 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-gray-500 transition-all peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-600"
        >
          Email
        </label>
      </div>

      {/** MESSAGE FIELD */}
      <div className="relative">
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
          placeholder=" "
          className="peer w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        ></textarea>
        <label
          htmlFor="message"
          className="absolute text-sm text-gray-500 dark:text-gray-400 left-4 top-3.5 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-gray-500 transition-all peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-600"
        >
          Message
        </label>
      </div>

      {/** SUBMIT BUTTON */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 active:scale-95 transition transform"
      >
        Submit
      </button>
    </form>
  )
}
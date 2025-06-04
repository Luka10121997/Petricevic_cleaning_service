'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema, FormSchemaType } from '../validationSchema';
import { sendEmail } from '../api/route';
import WorkingHours from './workingHours';
import ErrorMessage from './errorMessage';
import Spinner from './spinner';
import { useState } from 'react';
import { ToastNotifier } from './toastMessage';

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    criteriaMode: 'all' // Prikazuje sve greške (ne samo required)
  });
  const [isSubmitting, setSubmitting] = useState(false)

  const onSubmit = async (data: FormSchemaType) => {
    setSubmitting(true)
    const result = await sendEmail({
      name: data.name,
      email: data.email,
      message: data.message
    });

    if (result.success) {
      reset();
      ToastNotifier.success()
      setSubmitting(false)
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto p-6 space-y-6 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg"
      >
        {/* NAME */}
        <div>
          <input
            type="text"
            {...register('name')}
            placeholder="Name"
            className="w-full px-4 py-3 border rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && (
            <ErrorMessage>{errors.name.message}</ErrorMessage>
          )}
        </div>

        {/* EMAIL */}
        <div>
          <input
            type="email"
            {...register('email')}
            placeholder="Your Email"
            className="w-full px-4 py-3 border rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <ErrorMessage>{errors.email.message}</ErrorMessage>
          )}
        </div>

        {/* MESSAGE */}
        <div>
          <textarea
            {...register('message')}
            rows={4}
            placeholder="Message"
            className="w-full px-4 py-3 border rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          {errors.message && (
            <ErrorMessage>{errors.message.message}</ErrorMessage>
          )}
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 active:scale-95 transition transform"
        >
          {isSubmitting ? <Spinner label='Sending...' /> : 'Submit'}
        </button>
      </form>
      <WorkingHours />
    </>
  );
}

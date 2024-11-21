'use client'

import React, { useState } from 'react'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import { CodeBlock, dracula } from 'react-code-blocks'

const NextJsFeatureSlides = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const slides = [
        {
            title: 'Next.js 15: Modern Web Development Superpowers 🚀',
            content: (
                <div className='text-center'>
                    <p className='text-xl'>
                        Revolutionizing React Development with Powerful New
                        Features
                    </p>
                    <img
                        src='https://raw.githubusercontent.com/SAWARATSUKI/KawaiiLogos/main/Next.js/Next.js.png'
                        alt='Next.js and React logos'
                        className='mx-auto mt-4 rounded-lg'
                    />
                    <img
                        src='https://vercel.com/api/www/avatar/a9e9d53a312e28b36f055df18237306b22572926?s=160'
                        alt='Next.js and React logos'
                        className='mx-auto mt-4 w-16 h-16 rounded-full'
                    />
                </div>
            ),
        },
        {
            title: '1. Form Handling: Simplified & Powerful 📝',
            content: (
                <div>
                    <h3 className='text-lg font-bold mb-3'>
                        Use Case: User Registration
                    </h3>
                    <CodeBlock
                        text={`// Simplified form handling
function RegistrationForm() {
  const handleSubmit = async (formData) => {
    'use server'
    const result = await registerUser(formData)
    // Automatic validation and submission
  }

  return (
    <form action={handleSubmit}>
      <input name="email" required />
      <button type="submit">Register</button>
    </form>
  )
}`}
                        language='javascript'
                        showLineNumbers={false}
                        theme={dracula}
                    />
                    <p className='mt-2'>
                        🌟 Key Benefits: - Server-side form handling - Built-in
                        validation - Seamless client-server integration
                    </p>
                </div>
            ),
        },
        {
            title: '2. Error Handling: More Graceful & Intuitive 🛡️',
            content: (
                <div>
                    <h3 className='text-lg font-bold mb-3'>
                        Use Case: API Error Management
                    </h3>
                    <CodeBlock
                        text={`// Centralized error boundaries
function ErrorBoundary({ error }) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <button onClick={() => recover()}>
        Try Again
      </button>
    </div>
  )
}`}
                        language='javascript'
                        showLineNumbers={false}
                        theme={dracula}
                    />
                    <p className='mt-2'>
                        🌟 Key Benefits: - Graceful error presentation -
                        Automatic error catching - Easy recovery mechanisms
                    </p>
                </div>
            ),
        },
        {
            title: '3. Loading UI & Streaming: Performance Magic ⚡',
            content: (
                <div>
                    <h3 className='text-lg font-bold mb-3'>
                        Use Case: Dashboard Data Loading
                    </h3>
                    <CodeBlock
                        text={`// Streaming with loading states
function DashboardPage() {
  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <RevenueChart />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <UserActivityFeed />
      </Suspense>
    </div>
  )
}`}
                        language='javascript'
                        showLineNumbers={false}
                        theme={dracula}
                    />
                    <p className='mt-2'>
                        🌟 Key Benefits: - Partial page rendering - Improved
                        perceived performance - Progressive content loading
                    </p>
                </div>
            ),
        },
        {
            title: '4. Redirects: Smooth Navigation Control 🧭',
            content: (
                <div>
                    <h3 className='text-lg font-bold mb-3'>
                        Use Case: Authentication Flow
                    </h3>
                    <CodeBlock
                        text={`// Server-side redirects
async function loginAction(formData) {
  'use server'
  const user = await authenticateUser(formData)

  if (user) {
    redirect('/dashboard')
  } else {
    redirect('/login?error=invalid')
  }
}`}
                        language='javascript'
                        showLineNumbers={false}
                        theme={dracula}
                    />
                    <p className='mt-2'>
                        🌟 Key Benefits: - Server-side routing - Conditional
                        navigation - Instant route changes
                    </p>
                </div>
            ),
        },
        {
            title: '5. Route Groups: Organize Without URLs 📂',
            content: (
                <div>
                    <h3 className='text-lg font-bold mb-3'>
                        Folder Structure Example
                    </h3>
                    <CodeBlock
                        text={`app/
├── (marketing)/
│   ├── about/page.js
│   └── contact/page.js
├── (dashboard)/
│   ├── analytics/page.js
│   └── settings/page.js`}
                        language='plaintext'
                        showLineNumbers={false}
                        theme={dracula}
                    />
                    <p className='mt-2'>
                        🌟 Key Benefits: - Logical project organization - No
                        impact on URL structure - Cleaner routing logic
                    </p>
                </div>
            ),
        },
        {
            title: '6. Parallel Routes: Multiple Views, One Page 🖼️',
            content: (
                <div>
                    <h3 className='text-lg font-bold mb-3'>
                        Dashboard with Multiple Panels
                    </h3>
                    <CodeBlock
                        text={`// Parallel routes in layout
function DashboardLayout({
  analytics,
  notifications,
  performance
}) {
  return (
    <div>
      {analytics}
      {notifications}
      {performance}
    </div>
  )
}`}
                        language='javascript'
                        showLineNumbers={false}
                        theme={dracula}
                    />
                    <p className='mt-2'>
                        🌟 Key Benefits: - Independent content loading - Complex
                        UI compositions - Modular page design
                    </p>
                </div>
            ),
        },
        {
            title: '7. Intercepting Routes: Modal-like Navigation 🔍',
            content: (
                <div>
                    <h3 className='text-lg font-bold mb-3'>
                        Image Gallery Modal Example
                    </h3>
                    <CodeBlock
                        text={`// Intercept routes for modal-like experience
function PhotoModal({ params }) {
  return (
    <Modal>
      <PhotoDetails id={params.id} />
    </Modal>
  )
}`}
                        language='javascript'
                        showLineNumbers={false}
                        theme={dracula}
                    />
                    <p className='mt-2'>
                        🌟 Key Benefits: - SEO - Maintain page context -
                        Navigation history
                    </p>
                </div>
            ),
        },
        {
            title: 'Thank You! 🎉',
            content: (
                <div className='text-center'>
                    <h2 className='text-2xl font-bold'>
                        Next.js 15: The Future of Web Development
                    </h2>
                    <p className='mt-4'>Questions? Let's Dive Deeper! 🚀</p>
                </div>
            ),
        },
    ]

    const nextSlide = () => {
        setCurrentSlide(prev => (prev < slides.length - 1 ? prev + 1 : prev))
    }

    const prevSlide = () => {
        setCurrentSlide(prev => (prev > 0 ? prev - 1 : prev))
    }

    const currentSlideData = slides[currentSlide]

    return (
        <div
            className='max-w-4xl mx-auto p-6 bg-black shadow-lg rounded-lg'
            onKeyDown={e => {
                if (e.key === 'ArrowRight') {
                    nextSlide()
                } else if (e.key === 'ArrowLeft') {
                    prevSlide()
                }
            }}
            tabIndex={0}
        >
            <div className='flex items-center justify-between mb-4'>
                <button
                    onClick={prevSlide}
                    disabled={currentSlide === 0}
                    className='disabled:opacity-50'
                >
                    <ChevronLeft size={32} />
                </button>
                <h1 className='text-xl font-bold'>{currentSlideData.title}</h1>
                <button
                    onClick={nextSlide}
                    disabled={currentSlide === slides.length - 1}
                    className='disabled:opacity-50'
                >
                    <ChevronRight size={32} />
                </button>
            </div>

            <div className='bg-gray-950 p-6 rounded-lg min-h-[400px]'>
                {currentSlideData.content}
            </div>

            <div className='text-center mt-4'>
                <span>
                    {currentSlide + 1} / {slides.length}
                </span>
            </div>
        </div>
    )
}

export default NextJsFeatureSlides

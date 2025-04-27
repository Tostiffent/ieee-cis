'use client'
import Head from 'next/head'
import { useEffect } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer1'
import { Container } from '@/components/Cointainer1'

export default function Events() {
  const events = [
    {
      id: 1,
      year: '2024',
      title: 'Events 2024',
      description: 'Activities conducted for the year 2023-2024 under IEEE CIS',
      hasDownload: false,
      hasView: true,
      viewPath: '/events-2024',
      downloadPath: null,
      downloadFilename: null,
      viewDocPath: null,
    },
    {
      id: 2,
      year: '2023',
      title: 'Events 2023',
      description: 'Practical Approaches in Computational Intelligence.',
      hasDownload: true,
      hasView: true,
      viewPath: null,
      downloadPath: '/documents/Web_Pagefor_IEEE-CIS Summer School.pdf',
      downloadFilename: 'Event_Report_2023.pdf',
      viewDocPath: '/documents/Web_Pagefor_IEEE-CIS Summer School.docx',
    },
    {
      id: 3,
      year: '2021',
      title: 'Events 2021',
      description: 'Activities conducted for the year 2021 under IEEE CIS.',
      hasDownload: true,
      hasView: true,
      viewPath: null,
      downloadPath: '/documents/Event_Report_2021.pdf',
      downloadFilename: 'Event_Report_2021.pdf',
      viewDocPath: '/documents/Event_Report_2021.pdf',
    },
    {
      id: 4,
      year: '2020',
      title: 'Events 2020',
      description: 'Activities conducted for the year 2019-2020 under IEEE CIS',
      hasDownload: true,
      hasView: true,
      viewPath: null,
      downloadPath: '/documents/Event_Report_2020.pdf',
      downloadFilename: 'Event_Report_2020.pdf',
      viewDocPath: '/documents/Event_Report_2020.pdf',
    },
  ]

  const handleDownload = (path, filename) => {
    fetch(path).then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob)
        let alink = document.createElement('a')
        alink.href = fileURL
        alink.download = filename
        alink.click()
      })
    })
  }

  return (
    <div className="neumorphismbg min-h-screen">
      <Head>
        <title>Events - IEEE | Computational Intelligence Society</title>
      </Head>

      <Header />

      <main className="py-16">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-sky-600">
              IEEE CIS Events
            </h1>
            <p className="mx-auto max-w-2xl text-gray-600">
              Following activities are conducted to enhance the technical
              knowledge in the areas of computational intelligence, machine
              learning, Artificial Intelligence, Soft Computing for
              professionals, faculty and students of engineering courses.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2">
            {events.map((event) => (
              <div
                key={event.id}
                className="neumorphism overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:shadow-lg"
              >
                <div className="relative">
                  <div className="h-2 bg-blue-600"></div>
                  {/* Removed the year circle that was here */}
                </div>

                <div className="p-8">
                  <h2 className="mb-3 text-2xl font-semibold text-gray-800">
                    {event.title}
                  </h2>

                  <p className="mb-8 min-h-[3rem] text-gray-600">
                    {event.description}
                  </p>

                  <div className="mt-auto flex flex-col gap-3 sm:flex-row sm:items-center">
                    {event.hasDownload && (
                      <button
                        onClick={() =>
                          handleDownload(
                            event.downloadPath,
                            event.downloadFilename
                          )
                        }
                        className="flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white transition-colors duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-2 h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                          />
                        </svg>
                        Download
                      </button>
                    )}

                    {event.hasView && (
                      <a
                        href={event.viewPath || event.viewDocPath}
                        target={event.viewDocPath ? '_blank' : ''}
                        rel={event.viewDocPath ? 'noreferrer' : ''}
                        className="flex items-center justify-center rounded-lg bg-sky-500 px-5 py-2.5 font-medium text-white transition-all duration-300 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-2 h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                        View
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  )
}

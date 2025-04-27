import Head from 'next/head'
import { useId } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer1'
import { Container } from '@/components/Cointainer1'

export default function Reports() {
  const reports = [
    {
      id: 1,
      title: 'CIS INDUSTRY INTERACTION ACTIVITIES 2024-2025',
      description:
        'IEEE Computational Intelligence Chapter, Bangalore Section (R-10), Bangalore',
      filename: 'IEEE_CIS_INDUSTRY_INTERACTION_ACTIVITY_2024-25.pdf',
      path: '/documents/IEEE_CIS_INDUSTRY_INTERACTION_ACTIVITY_2024-25.pdf',
    },
    {
      id: 2,
      title: 'Report 2022',
      description:
        'IEEE Computational Intelligence Chapter, Bangalore Section (R-10), Bangalore',
      filename: 'Newsletter2022.pdf',
      path: '/documents/Newsletter2022.pdf',
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
        <title>Reports - IEEE | Computational Intelligence Society</title>
      </Head>

      <Header />

      <main className="py-16">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-sky-600">
              Reports & Publications
            </h1>
            <p className="text-lg text-gray-600">
              Access our latest reports and publications from the IEEE
              Computational Intelligence Society
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
            {reports.map((report) => (
              <div
                key={report.id}
                className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl transition-all duration-300 hover:translate-y-[-4px] hover:shadow-2xl"
              >
                <div className="h-3 bg-gradient-to-r from-blue-500 to-sky-600"></div>
                <div className="p-8">
                  <div className="mb-6 flex items-center justify-center">
                    <div className="rounded-full bg-blue-50 p-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                  </div>

                  <h2 className="line-clamp-2 mb-3 text-xl font-semibold text-gray-800">
                    {report.title}
                  </h2>

                  <div className="mb-6 rounded-lg bg-gray-50 p-4">
                    <p className="text-sm text-gray-600">
                      {report.description}
                    </p>
                  </div>

                  <button
                    onClick={() => handleDownload(report.path, report.filename)}
                    className="flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-3 font-medium text-white transition-colors duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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
                        strokeWidth={2}
                        d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                      />
                    </svg>
                    Download Report
                  </button>
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

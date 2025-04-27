import React, { useState } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer1'
import {
  Calendar,
  MapPin,
  Download,
  ChevronDown,
  ChevronUp,
  X,
} from 'lucide-react'

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null)

  const events = [
    {
      id: 1,
      title: 'UXForge',
      date: '31-01-2024',
      description:
        'An insightful UI/UX workshop held at REVA University with approximately 50 students, culminating in a competition to apply learned concepts.',
      location: 'REVA UNIVERSITY',
      images: [
        'https://github.com/sanjay212003/cis-2024-events/blob/main/activity-1.1.png?raw=true',
        'https://github.com/sanjay212003/cis-2024-events/blob/main/activity-1.2.png?raw=true',
      ],
      reportUrl: '/documents/Events reports 2024/UXForge.pdf',
    },
    {
      id: 2,
      title: 'NetWorth',
      date: '20-02-2024',
      description:
        'Session on "Navigating the Future of Computer Networking Careers" led by Deepak Kulkarni, Senior Engineering Manager at Infinera Corporation.',
      location: 'REVA UNIVERSITY',
      images: [
        'https://github.com/sanjay212003/cis-2024-events/blob/main/activity-2.1.png?raw=true',
        'https://github.com/sanjay212003/cis-2024-events/blob/main/activity-2.2.png?raw=true',
      ],
      reportUrl: '/documents/Events reports 2024/NetWorth.pdf',
    },
    {
      id: 3,
      title: "A Scholar's Canvas",
      date: '20-02-2024',
      description:
        'Workshop on research paper writing led by Dr. Manjunath Kounte, providing a detailed walkthrough from conceptualization to final publication.',
      location: 'REVA UNIVERSITY',
      images: [
        'https://github.com/sanjay212003/cis-2024-events/blob/main/activity-3.1.png?raw=true',
        'https://github.com/sanjay212003/cis-2024-events/blob/main/activity-3.2.png?raw=true',
      ],
      reportUrl: "/documents/Events reports 2024/scholar's canvas.pdf",
    },
    {
      id: 4,
      title: 'Enterprise Application Development',
      date: '15-02-2024 to 17-02-2024',
      description:
        'Training program teaching application development with Python, providing interactive sessions with industry professionals.',
      location: 'MITB',
      images: [
        'https://github.com/sanjay212003/cis-2024-events/blob/main/activity-4.1.png?raw=true',
        'https://github.com/sanjay212003/cis-2024-events/blob/main/activity-4.2.png?raw=true',
      ],
      reportUrl:
        '/documents/Events reports 2024/ENTERPRISE APPLICATION DEVELOPMENT.pdf',
    },
    {
      id: 5,
      title: 'Data Visualization and Software Development',
      date: '26-02-2024 to 01-03-2024',
      description:
        'Hands-on workshop on PowerBI & Tableau for data visualization alongside DevOps practices for streamlined software development.',
      location: 'Ramaiah Institute of Technology',
      images: [
        'https://github.com/sanjay212003/cis-2024-events/blob/main/activity-5.1.png?raw=true',
        'https://github.com/sanjay212003/cis-2024-events/blob/main/activity-5.2.png?raw=true',
        'https://github.com/sanjay212003/cis-2024-events/blob/main/activity-5.3.png?raw=true',
      ],
      reportUrl: '/documents/Events reports 2024/Data visualisation.pdf',
    },
    {
      id: 6,
      title: 'AI Arena',
      date: '26-04-2024 to 27-04-2024',
      description:
        'Overnight hackathon for AI enthusiasts with real-world challenges, mentored by Dr. Manju Khanna and structured in multiple evaluation rounds.',
      location: 'Amrita School of Engineering',
      images: [
        'https://github.com/sanjay212003/cis-2024-events/blob/main/activity-6.1.png?raw=true',
        'https://github.com/sanjay212003/cis-2024-events/blob/main/activity-6.2.png?raw=true',
      ],
      reportUrl: '/reports/event2.pdf',
    },
    {
      id: 7,
      title: 'Intercontinental Innovo Quest-24',
      date: '01-03-2024 to 03-03-2024',
      description:
        'Global hackathon collaboration between DSU and LeTourneau University (USA), featuring 30 hours of innovation and international collaboration.',
      location: 'Dayanand Sagar University',
      images: [
        'https://github.com/sanjay212003/cis-2024-events/blob/main/activity-7.1.png?raw=true',
        'https://github.com/sanjay212003/cis-2024-events/blob/main/activity-7.2.png?raw=true',
      ],
      reportUrl: '/reports/event2.pdf',
    },
    {
      id: 8,
      title: 'Innovation Hackathon',
      date: '23-02-2024',
      description:
        "Hackathon focused on agriculture and rural development, testing participants' abilities to identify and solve problems within limited timeframes.",
      location: 'Sai Vidya Institute of Technology',
      images: [
        'https://github.com/sanjay212003/cis-2024-events/blob/main/activity-8.1.png?raw=true',
        'https://github.com/sanjay212003/cis-2024-events/blob/main/activity-8.2.png?raw=true',
      ],
      reportUrl: '/documents/Events reports 2024/Innovation hackathon.pdf',
    },
    {
      id: 9,
      title: 'MongoDB',
      date: '16-04-2024 to 18-04-2024',
      description:
        'Faculty Development Program on MongoDB, designed to enhance faculty knowledge of this technology recently introduced in VTU scheme 2022.',
      location: 'Sai Vidya Institute of Technology',
      images: [
        'https://github.com/sanjay212003/cis-2024-events/blob/main/activity-9.1.png?raw=true',
        'https://github.com/sanjay212003/cis-2024-events/blob/main/activity-9.2.png?raw=true',
      ],
      reportUrl: '/documents/Events reports 2024/MongodB.pdf',
    },
    {
      id: 10,
      title: 'Exploratory Data Analysis for Machine Learning',
      date: '23-04-2024 to 27-04-2024',
      description:
        'Skill development program equipping students with tools for data manipulation and visualization using Python for machine learning applications.',
      location: 'Sai Vidya Institute of Technology',
      images: [
        'https://github.com/sanjay212003/cis-2024-events/blob/main/activity-10.1.png?raw=true',
        'https://github.com/sanjay212003/cis-2024-events/blob/main/activity-10.2.png?raw=true',
      ],
      reportUrl: '/documents/Events reports 2024/Exploratory data analysis.pdf',
    },
    {
      id: 11,
      title: 'Transformative Journey Towards International Education',
      date: '06-05-2024',
      description:
        'Technical talk by Mr. Craig Phillips on overseas education opportunities, simplifying university admissions and visa applications.',
      location: 'Sai Vidya Institute of Technology',
      images: [
        'https://github.com/sanjay212003/cis-2024-events/blob/main/activity-11.1.png?raw=true',
        'https://github.com/sanjay212003/cis-2024-events/blob/main/activity-11.2.png?raw=true',
      ],
      reportUrl: '/documents/Events reports 2024/TRANSFORMTION JOURNEY.pdf',
    },
    {
      id: 12,
      title: 'Enterprise Technology Infrastructure',
      date: '10-06-2024',
      description:
        'Workshop focused on enterprise technology infrastructure concepts and implementation strategies for modern business environments.',
      location: 'Sai Vidya Institute of Technology',
      images: [
        'https://github.com/sanjay212003/cis-2024-events/blob/main/activity-12.1.png?raw=true',
        'https://github.com/sanjay212003/cis-2024-events/blob/main/activity-12.2.png?raw=true',
      ],
      reportUrl:
        '/documents/Events reports 2024/Enterprise Technology Infrastructure.pdf',
    },
    {
      id: 13,
      title: 'Generative AI',
      date: '28-06-2024',
      description:
        'Event focused on generative AI technologies, applications, and their impact on various industries and research domains.',
      location: 'Sai Vidya Institute of Technology',
      images: [
        'https://github.com/sanjay212003/cis-2024-events/blob/main/activity-13.1.png?raw=true',
        'https://github.com/sanjay212003/cis-2024-events/blob/main/activity-13.2.png?raw=true',
      ],
      reportUrl: '/documents/Events reports 2024/Generative AI.pdf',
    },
    {
      id: 14,
      title: 'Inauguration Ceremony - DSU',
      date: '03-06-2024',
      description:
        'Official inauguration of the IEEE-CIS student chapter at Dayananda Sagar University, promoting computational intelligence research.',
      location: 'Dayananda Sagar University',
      images: [
        'https://github.com/sanjay212003/cis-2024-events/blob/main/activity-14.1.png?raw=true',
        'https://github.com/sanjay212003/cis-2024-events/blob/main/activity-14.2.png?raw=true',
      ],
      reportUrl: '/reports/event2.pdf',
    },
    {
      id: 15,
      title: 'Inauguration of IEEE-CIS - SVIT',
      date: '17-07-2024',
      description:
        'Official inauguration of the IEEE-CIS student chapter at Sai Vidya Institute of Technology, expanding the computational intelligence community.',
      location: 'Sai Vidya Institute of Technology',
      images: [
        'https://github.com/sanjay212003/cis-2024-events/blob/main/activity-15.1.png?raw=true',
        'https://github.com/sanjay212003/cis-2024-events/blob/main/activity-15.2.png?raw=true',
      ],
      reportUrl: '/reports/event2.pdf',
    },
    {
      id: 16,
      title: 'IEEE-CIS Orientation - Christ University',
      date: '22-07-2024',
      description:
        'Orientation session for the newly established IEEE-CIS student chapter at Christ University, introducing computational intelligence initiatives.',
      location: 'Christ University',
      images: [
        'https://github.com/sanjay212003/cis-2024-events/blob/main/activity-16.1.png?raw=true',
        'https://github.com/sanjay212003/cis-2024-events/blob/main/activity-16.2.png?raw=true',
      ],
      reportUrl: '/reports/event2.pdf',
    },
    {
      id: 17,
      title: 'IDEATHON',
      date: '17-05-2024',
      description:
        'Joint event fostering innovation among students from various disciplines, showcasing problem-solving skills in emerging technologies.',
      location: 'Ramaiah Institute of Technology',
      images: [
        'https://github.com/sanjay212003/cis-2024-events/blob/main/activity-17.1.png?raw=true',
        'https://github.com/sanjay212003/cis-2024-events/blob/main/activity-17.2.png?raw=true',
      ],
      reportUrl: '/reports/event2.pdf',
    },
    {
      id: 18,
      title: 'Unlocking Opportunities with IEEE CIS',
      date: '29-08-2024',
      description:
        'Promotional event highlighting IEEE membership value and CIS community opportunities, focusing on career growth and global collaboration.',
      location: 'IEEE Bangalore Section',
      images: [
        'https://github.com/sanjay212003/cis-2024-events/blob/main/placeholder.png?raw=true',
        'https://github.com/sanjay212003/cis-2024-events/blob/main/placeholder.png?raw=true',
      ],
      reportUrl: '/reports/event2.pdf',
    },
    {
      id: 19,
      title: 'MLOps Workshop',
      date: '03-10-2024 to 10-10-2024',
      description:
        'Workshop on building and managing machine learning pipelines using Docker, Streamlit, FastAPI and Evidently with focus on CI/CD practices.',
      location: 'Ramaiah Institute of Technology',
      images: ['/images/MLOps.png'],
      reportUrl: '/documents/Events reports 2024/MLOPS.pdf',
    },
    {
      id: 20,
      title: 'ESP 32 Gateway to Edge ML',
      date: '17-10-2024 to 18-10-2024',
      description:
        'Workshop introducing ESP 32 Microcontroller for IoT applications, wearable electronics, and its real-world applications.',
      location: 'MITB',
      images: ['/images/ESP 32.jpg'],
      reportUrl: '/documents/Events reports 2024/ESP 32 Report.pdf',
    },
    {
      id: 21,
      title: 'Botcraft - Building Conversational AI',
      date: '26-10-2024 to 27-10-2024',
      description:
        'Two-day Workshop + Ideathon focusing on building foundational knowledge of Large Language Models and career paths in AI.',
      location: 'Amrita Vishwa Vidyapeetham',
      images: ['/images/BOT CRAFT 1.jpg', '/images/BOT CRAFT 2.jpg'],
      reportUrl: '/documents/Events reports 2024/BOTCRAFT.pdf',
    },
    {
      id: 22,
      title: 'NirvAI Conclave',
      date: '28-11-2024',
      description:
        'Event exploring the intersection of academia and industry in AI, featuring industry leaders and hands-on sessions on AI tools.',
      location: 'NMIT, Bangalore',
      images: ['/images/NIRV AI 1.jpg', '/images/NIRV AI 2.jpg'],
      reportUrl: '/documents/Events reports 2024/NIRVAI.pdf',
    },
    {
      id: 23,
      title: 'Hack4 Humanity Hackathon',
      date: '13-12-2024 to 14-12-2024',
      description:
        'Hybrid hackathon addressing digital accessibility for people with disabilities and connecting low-income groups to opportunities.',
      location: 'MSRIT',
      images: ['/images/HACK4HUMANITY.jpg'],
      reportUrl: '/documents/Events reports 2024/hack4humanity report.pdf',
    },
    {
      id: 24,
      title: 'IEEE-CIS High School Community Outreach',
      date: '01-10-2024 to 30-12-2024',
      description:
        'Program educating 8th standard students on ML, AI, Data Science, and Analytics, culminating in an ideathon to apply learned concepts.',
      location: 'Various High Schools',
      images: [
        'https://github.com/sanjay212003/cis-2024-events/blob/main/placeholder.png?raw=true',
        'https://github.com/sanjay212003/cis-2024-events/blob/main/placeholder.png?raw=true',
      ],
      reportUrl:
        '/documents/Events reports 2024/IEEE_Community_Outreach_Program_Report.pdf',
    },
    {
      id: 25,
      title: 'HANDS-ON SESSION ON USECASES OF Machine Learning',
      date: '07-12-2024',
      description:
        'The AI and Data Science program is designed to provide participants with a strong foundation in Artificial Intelligence (AI) and Data Science, equipping them with the necessary skills to analyze data, develop machine learning models, and derive meaningful insights for decision- making.',
      location: 'MSRIT',
      images: ['/images/USECASES OF AI AND DATA SCIENCE.png'],
      reportUrl: '/documents/Events reports 2024/USES OF AI REPORT.pdf',
    },
    {
      id: 26,
      title: 'IEEE-CIS AGM Meeting',
      date: '29-12-2024',
      description:
        'Annual General Meeting discussing chapter progress, projects, and new IEEE CIS student branch openings across engineering colleges.',
      location: 'Online',
      images: [
        'https://github.com/sanjay212003/cis-2024-events/blob/main/placeholder.png?raw=true',
        'https://github.com/sanjay212003/cis-2024-events/blob/main/placeholder.png?raw=true',
      ],
      reportUrl: '/reports/event2.pdf',
    },
  ]

  const handleClick = (event) => {
    setSelectedEvent(
      selectedEvent && selectedEvent.id === event.id ? null : event
    )
  }

  const handleDownload = (reportUrl, e) => {
    e.stopPropagation()
    window.open(reportUrl, '_blank', 'noopener,noreferrer')
    const link = document.createElement('a')
    link.href = reportUrl
    link.download = reportUrl.split('/').pop()
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const openImageModal = (imageSrc, e) => {
    e.stopPropagation()
    setSelectedImage(imageSrc)
  }

  const closeImageModal = () => {
    setSelectedImage(null)
  }

  // Image Modal Component
  const ImageModal = ({ imageSrc, onClose }) => {
    if (!imageSrc) return null

    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
        onClick={onClose}
      >
        <div className="relative max-h-full max-w-4xl">
          <button
            className="absolute -top-12 right-0 p-2 text-white hover:text-gray-300"
            onClick={onClose}
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={imageSrc}
            alt="Enlarged view"
            className="max-h-screen max-w-full object-contain"
          />
        </div>
      </div>
    )
  }

  const EventCard = ({ event }) => {
    const isSelected = selectedEvent && selectedEvent.id === event.id

    return (
      <div
        className={`mb-6 overflow-hidden rounded-lg shadow transition-all duration-300 hover:shadow-md ${
          isSelected ? 'border-2 border-blue-500' : 'border border-gray-200'
        }`}
      >
        <div className="flex flex-col md:flex-row">
          {/* Preview image - always visible */}
          <div
            className="h-48 cursor-pointer overflow-hidden md:w-1/4"
            onClick={(e) => openImageModal(event.images[0], e)}
          >
            <img
              src={event.images[0]}
              alt={`Preview of ${event.title}`}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Event information */}
          <div className="bg-white p-4 md:w-3/4">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-bold text-blue-800">
                  {event.title}
                </h2>
                <div className="mt-1 flex items-center text-gray-600">
                  <Calendar className="mr-1 h-4 w-4" />
                  <span className="text-sm">{event.date}</span>
                </div>
                <div className="mt-1 flex items-center text-gray-600">
                  <MapPin className="mr-1 h-4 w-4" />
                  <span className="text-sm">{event.location}</span>
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  <p>{event.description}</p>
                </div>
              </div>

              <div className="flex flex-col items-end space-y-2">
                <button
                  onClick={(e) => handleDownload(event.reportUrl, e)}
                  className="flex items-center space-x-1 rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700 transition-colors hover:bg-blue-200"
                >
                  <Download className="h-4 w-4" />
                  <span>Report</span>
                </button>

                <button
                  onClick={() => handleClick(event)}
                  className="flex items-center space-x-1 text-sm text-gray-500 hover:text-blue-600"
                >
                  <span>{isSelected ? 'Hide details' : 'View details'}</span>
                  {isSelected ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Expanded content */}
            {isSelected && (
              <div className="mt-4 border-t border-gray-100 pt-4">
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                  {event.images.map((image, index) => (
                    <div
                      key={index}
                      className="cursor-pointer overflow-hidden rounded-lg border border-gray-200"
                      onClick={(e) => openImageModal(image, e)}
                    >
                      <img
                        src={image}
                        alt={`Event ${event.id} image ${index + 1}`}
                        className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <Header />
      <div className="bg-white py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-sky-600">
              Events in 2024
            </h1>
            <p className="mt-2 text-gray-600">
              IEEE CIS events and activities throughout the academic year
            </p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow">
            <div className="mb-6 flex items-center justify-between border-b border-gray-200 pb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                All Events
              </h2>
              <div className="text-sm text-gray-500">
                <span>{events.length} events</span>
              </div>
            </div>

            <div>
              {events.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal (appears when an image is clicked) */}
      <ImageModal imageSrc={selectedImage} onClose={closeImageModal} />

      <Footer />
    </>
  )
}

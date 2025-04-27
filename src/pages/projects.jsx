import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { AuthLayout } from '@/components/AuthLayout'
import { Input } from '@/components/Input'
import { Logo } from '@/components/Logo'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer1'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'CIS High School Outreach Program 2025',
      funding: 'IEEE-CIS',
      coordinators: ['Dr Sumana M', 'Dr Lincy Meera Mathews', 'Dr Anitha P'],
      amount: '$4000',
      year: '2025',
      students: ['Yet to be held'],
    },
    {
      id: 2,
      title: 'Interaction with Local Industry Event',
      funding: 'IEEE-CIS',
      coordinators: ['Dr Sumana M'],
      amount: '$3182',
      year: '2024',
      students: [
        'Nikitha Singhh',
        'Narendra V S',
        'Suprith Patil (NMIT)',
        'Dr Manju Khanna',
        'Dr Soumya B J',
        'Dr Vijaya Kumar B P',
      ],
    },
    {
      id: 3,
      title: 'Computational Intelligence High School Education',
      funding: 'IEEE-CIS',
      coordinators: [
        'Dr Sumana M',
        'Dr Lincy Meera Mathews',
        'Dr Vijaya Kumar B P',
      ],
      amount: '$2002',
      year: '2024',
      students: [
        'Chamili Suresh ',
        'Bontha Nithish Reddy ',
        'Cherukupalli Sri Ramya ',
        'Alapati Nikhila Divya ',
      ],
    },
    {
      id: 4,
      title:
        'Development of Solar Powered Information Kiosk for Rural Community Empowerment in South Karnataka',
      funding: 'IEEE',
      coordinators: ['Dr. Megha.P.Arakeri'],
      amount: '$4796',
      year: '2022',
      students: [
        'Aastha Singh',
        'Amitesh Verma',
        'Amith M',
        'Ayush Jain',
        'Bhavya',
        'Dhatvik',
        'Divyam',
        'Nanditha S',
        'Rohan',
        'Samprathi H',
        'Shilpa H',
      ],
    },
    {
      id: 5,
      title:
        'Design and Development of Head-Mounted Assistive Device for the Blind Using Computer Vision',
      funding: 'IEEE',
      coordinators: ['Dr. Megha.P.Arakeri'],
      amount: '$4,400.29',
      year: '2022',
      students: ['Dhatvik M.P', 'Kavan A.V', 'Nandan', 'Jayant', 'Iram'],
    },
    {
      id: 6,
      title: 'Local Industry Interactions',
      funding: 'IEEE CIS',
      coordinators: [
        'Dr.Vijaya Kumar B.P',
        'Dr. Sumana. M',
        'Dr. Megha.P.Arakeri',
      ],
      amount: '$3988.66',
      year: '2021',
      students: [],
    },
    {
      id: 7,
      title: 'High School Outreach Program',
      funding: 'IEEE CIS',
      coordinators: [
        'Dr. Megha.P.Arakeri',
        'Dr. Vijaya Kumar B. P',
        'Dr. Sumana. M',
      ],
      amount: '$1500',
      year: '2021',
      students: [],
    },
    {
      id: 8,
      title: 'Local Industry Interactions',
      funding: 'IEEE CIS',
      coordinators: ['Dr.Vijaya Kumar B.P', 'Dr. Megha.P.Arakeri'],
      amount: '$1570.85',
      year: '2020',
      students: [],
    },
    {
      id: 9,
      title: 'High School Outreach Program',
      funding: 'IEEE CIS',
      coordinators: ['Dr. Megha.P.Arakeri', 'Dr. Vijaya Kumar B. P'],
      amount: '$2000',
      year: '2020',
      students: [],
    },
  ]

  return (
    <>
      <Head>
        <title>Projects - IEEE | Computational Intelligence Society</title>
      </Head>
      <Header />
      <section className="py-16 text-gray-600">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Our <span className="text-sky-600">Projects</span>
            </h1>
            <div className="mx-auto mb-8 h-1 w-24 rounded bg-sky-600"></div>
            <p className="mx-auto max-w-lg text-center text-lg text-gray-600">
              Funded projects of IEEE CIS members that demonstrate innovation
              and commitment to technological advancement
            </p>
          </div>

          <div className="mx-auto max-w-6xl">
            {projects.map((project) => (
              <div
                key={project.id}
                className="mb-8 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md"
              >
                <div className="flex flex-wrap items-center border-b border-gray-200 bg-gray-50 px-6 py-3">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-sky-600 text-lg font-bold text-white">
                    {project.id}
                  </div>
                  <h2 className="flex-1 text-lg font-bold text-gray-800">
                    {project.title}
                  </h2>
                  <div className="mt-2 flex items-center lg:mt-0">
                    <span className="mr-2 rounded-full bg-sky-100 px-3.5 py-1 text-sm font-medium text-sky-800">
                      {project.year}
                    </span>
                    <span className="rounded-full bg-green-100 px-3.5 py-1 text-sm font-medium text-green-800">
                      {project.amount}
                    </span>
                  </div>
                </div>

                <div className="px-6 py-4">
                  <div className="grid gap-4 md:grid-cols-3">
                    <div>
                      <h3 className="mb-2 text-sm font-bold uppercase text-gray-500">
                        Funding Organization
                      </h3>
                      <p className="text-gray-800">{project.funding}</p>
                    </div>

                    <div>
                      <h3 className="mb-2 text-sm font-bold uppercase text-gray-500">
                        Coordinators
                      </h3>
                      <ul className="space-y-1">
                        {project.coordinators.map((coordinator, idx) => (
                          <li key={idx} className="text-gray-800">
                            {coordinator}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {project.students.length > 0 && (
                      <div>
                        <h3 className="mb-2 text-sm font-bold uppercase text-gray-500">
                          Student and Faculty Participants
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {project.students.map((student, idx) => (
                            <span
                              key={idx}
                              className="inline-block rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
                            >
                              {student}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

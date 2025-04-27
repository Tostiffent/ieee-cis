import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { AuthLayout } from '@/components/AuthLayout'
import { Input } from '@/components/Input'
import { Logo } from '@/components/Logo'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer1'
import img1 from '@/images/members/manjunath.png'
import img2 from '@/images/members/megha.png'
import img3 from '@/images/members/vijayakumar.png'
import img4 from '@/images/members/sumana.png'
import img5 from '@/images/members/mohan.png'

const members = [
  {
    name: 'Dr. Vijaya Kumar B. P',
    designation: 'Advisor',
    description:
      'Dr. Vijay Kumar is a Professor with research experience of 20+ Yrs in the areas of Cognitive and Mobile Computing. Technical Advisor for Heart Rescue India & Road Traffic Injuries, National Task force project, Advisor, IEEE CIS, Bangalore section.',
    image: img3,
    profile: '/documents/Vijaya Kumar-profile.pdf',
  },
  {
    name: 'Dr. Sumana. M',
    designation: 'Chair',
    description:
      'Dr. Sumana Maradithaya is a Ph. D degree holder from Manipal University and is currently serving as an associate professor in IS&E department of MSRIT. She is interested in subjects related to Data Mining , Data Science and Analytics, Machine Learning and Deep Learning',
    image: img4,
    profile: '/documents/Sumana-profile.pdf',
  },
  {
    name: 'Dr. Megha. P. Arakeri',
    designation: 'Vice Chair',
    description:
      'Dr. Megha Arakeri has a Ph.D from NITK, Surathkal. Working as Associate Professor in MSRIT with 18 years of teaching and research experience in the areas of Computer Vision.',
    image: img2,
    profile: '/documents/Megha-profile.pdf',
  },
  {
    name: 'Dr. Mohan Gowda',
    designation: 'Treasurer',
    description: 'Description',
    image: img5,
    profile: '/documents/Mohan-profile.pdf',
  },
  {
    name: 'Dr. Manjunath R Kounte',
    designation: 'Secretary',
    description: 'Description',
    image: img1,
    profile: '/documents/Manjunath-profile.pdf',
  },
]

export default function Login() {
  return (
    <>
      <Head>
        <title>
          Office Bearers - IEEE | Computational Intelligence Society
        </title>
      </Head>
      <Header />
      <section>
        <div className="container mx-auto px-6 py-10">
          <h1 className="text-center text-3xl font-semibold capitalize text-gray-800">
            Our <span className="text-sky-600">Executive Team</span>
          </h1>
          <div className="mt-5 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-8 xl:grid-cols-3">
            {members.map((member) => (
              <div className="border-n transform cursor-pointer rounded-xl border-sky-300 px-7 py-8 shadow-md transition-colors duration-300">
                <div className="sm:-mx-4 sm:flex-row">
                  <div className="mb-5 flex justify-center">
                    <Image
                      className="flex-shrink-0 rounded-xl object-cover sm:mx-4"
                      src={member.image}
                      width="220px"
                      height="220px"
                    />
                  </div>
                  <div className="mt-4 sm:mx-4 sm:mt-3">
                    <h1 className="text-xl font-semibold capitalize text-gray-700 group-hover:text-white ">
                      {member.name}
                    </h1>
                    <h3 className="mb-3 text-base font-medium text-gray-800">
                      {member.designation}
                    </h3>
                  </div>
                </div>
                {/*                 <p className="mt-4 text-gray-500">{member.description}</p> */}
                <div>
                  <a
                    className="buttonview text-md group mt-10 inline-flex items-center justify-center rounded bg-sky-600 py-2 px-4  text-sm font-semibold text-white shadow-md hover:bg-slate-700 hover:text-slate-100 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 active:bg-slate-800 active:text-slate-300"
                    href={member.profile}
                  >
                    View Profile
                  </a>
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

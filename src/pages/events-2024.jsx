import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer1';

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      id: 1,
      title: "Event 1",
      date: "2024-01-01",
      description: "Description for Event 1",
      images: [
        "https://github.com/sanjay212003/cis-2024-events/blob/main/activity-1.1.png?raw=true",
        "https://github.com/sanjay212003/cis-2024-events/blob/main/activity-1.2.png?raw=true",
      ],
      reportUrl: "/reports/event1.pdf", // Example report URL for downloading
    },
    {
      id: 2,
      title: "Event 2",
      date: "2024-02-01",
      description: "Description for Event 2",
      images: [
        "https://github.com/sanjay212003/cis-2024-events/blob/main/activity-2.1.png?raw=true",
        "https://github.com/sanjay212003/cis-2024-events/blob/main/activity-2.2.png?raw=true",
      ],
      reportUrl: "/reports/event2.pdf",
    },
    {
      id: 3,
      title: "Event 3",
      date: "2024-03-01",
      description: "Description for Event 3",
      images: ["https://github.com/sanjay212003/cis-2024-events/blob/main/activity-3.1.png?raw=true","https://github.com/sanjay212003/cis-2024-events/blob/main/activity-3.2.png?raw=true"],
      reportUrl: "/reports/event2.pdf",
    },
    {
        id: 4,
        title: "Event 4",
        date: "2024-02-01",
        description: "Description for Event 4",
        images: ["https://github.com/sanjay212003/cis-2024-events/blob/main/activity-4.1.png?raw=true","https://github.com/sanjay212003/cis-2024-events/blob/main/activity-4.2.png?raw=true"],
        reportUrl: "/reports/event2.pdf",
      },
      {
        id: 5,
        title: "Event 5",
        date: "2024-02-01",
        description: "Description for Event 5",
        images: ["https://github.com/sanjay212003/cis-2024-events/blob/main/activity-5.1.png?raw=true","https://github.com/sanjay212003/cis-2024-events/blob/main/activity-5.2.png?raw=true","https://github.com/sanjay212003/cis-2024-events/blob/main/activity-5.3.png?raw=true"],
        reportUrl: "/reports/event2.pdf",
      },
      {
        id: 6,
        title: "Event 6",
        date: "2024-02-01",
        description: "Description for Event 6",
        images: ["https://github.com/sanjay212003/cis-2024-events/blob/main/activity-6.1.png?raw=true","https://github.com/sanjay212003/cis-2024-events/blob/main/activity-6.2.png?raw=true"],
        reportUrl: "/reports/event2.pdf",
      },
      {
        id: 7,
        title: "Event 7",
        date: "2024-02-01",
        description: "Description for Event 7",
        images: ["https://github.com/sanjay212003/cis-2024-events/blob/main/activity-7.1.png?raw=true","https://github.com/sanjay212003/cis-2024-events/blob/main/activity-7.2.png?raw=true"],
        reportUrl: "/reports/event2.pdf",
      },
      {
        id: 8,
        title: "Event 8",
        date: "2024-02-01",
        description: "Description for Event 8",
        images: ["https://github.com/sanjay212003/cis-2024-events/blob/main/activity-8.1.png?raw=true","https://github.com/sanjay212003/cis-2024-events/blob/main/activity-8.2.png?raw=true"],
        reportUrl: "/reports/event2.pdf",
      },
      {
        id: 9,
        title: "Event 9",
        date: "2024-02-01",
        description: "Description for Event 9",
        images: ["https://github.com/sanjay212003/cis-2024-events/blob/main/activity-9.1.png?raw=true","https://github.com/sanjay212003/cis-2024-events/blob/main/activity-9.2.png?raw=true"],
        reportUrl: "/reports/event2.pdf",
      },
      {
        id: 10,
        title: "Event 10",
        date: "2024-02-01",
        description: "Description for Event 10",
        images: ["https://github.com/sanjay212003/cis-2024-events/blob/main/activity-10.1.png?raw=true","https://github.com/sanjay212003/cis-2024-events/blob/main/activity-10.2.png?raw=true"],
        reportUrl: "/reports/event2.pdf",
      },
      {
        id: 11,
        title: "Event 11",
        date: "2024-02-01",
        description: "Description for Event 11",
        images: ["https://github.com/sanjay212003/cis-2024-events/blob/main/activity-11.1.png?raw=true","https://github.com/sanjay212003/cis-2024-events/blob/main/activity-11.2.png?raw=true"],
        reportUrl: "/reports/event2.pdf",
      },
      {
        id: 12,
        title: "Event 12",
        date: "2024-02-01",
        description: "Description for Event 12",
        images: ["https://github.com/sanjay212003/cis-2024-events/blob/main/activity-12.1.png?raw=true","https://github.com/sanjay212003/cis-2024-events/blob/main/activity-12.2.png?raw=true"],
        reportUrl: "/reports/event2.pdf",
      },
      {
        id: 13,
        title: "Event 13",
        date: "2024-02-01",
        description: "Description for Event 13",
        images: ["https://github.com/sanjay212003/cis-2024-events/blob/main/activity-13.1.png?raw=true","https://github.com/sanjay212003/cis-2024-events/blob/main/activity-13.2.png?raw=true"],
        reportUrl: "/reports/event2.pdf",
      },
      {
        id: 14,
        title: "Event 14",
        date: "2024-02-01",
        description: "Description for Event 14",
        images: ["https://github.com/sanjay212003/cis-2024-events/blob/main/activity-14.1.png?raw=true","https://github.com/sanjay212003/cis-2024-events/blob/main/activity-14.2.png?raw=true"],
         reportUrl: "/reports/event2.pdf",
      },
      {
        id: 15,
        title: "Event 15",
        date: "2024-02-01",
        description: "Description for Event 15",
        images: ["https://github.com/sanjay212003/cis-2024-events/blob/main/activity-15.1.png?raw=true","https://github.com/sanjay212003/cis-2024-events/blob/main/activity-15.2.png?raw=true"],
         reportUrl: "/reports/event2.pdf",
      },
      {
        id: 16,
        title: "Event 16",
        date: "2024-02-01",
        description: "Description for Event 16",
        images: ["https://github.com/sanjay212003/cis-2024-events/blob/main/activity-16.1.png?raw=true","https://github.com/sanjay212003/cis-2024-events/blob/main/activity-16.2.png?raw=true"],
         reportUrl: "/reports/event2.pdf",
      },
      {
        id: 17,
        title: "Event 17",
        date: "2024-02-01",
        description: "Description for Event 17",
        images: ["https://github.com/sanjay212003/cis-2024-events/blob/main/activity-17.1.png?raw=true","https://github.com/sanjay212003/cis-2024-events/blob/main/activity-17.2.png?raw=true"],
         reportUrl: "/reports/event2.pdf",
      }
   
  ];

  const handleClick = (event) => {
    setSelectedEvent(selectedEvent && selectedEvent.id === event.id ? null : event);
  };

  const handleDownload = (reportUrl) => {
    const link = document.createElement("a");
    link.href = reportUrl;
    link.download = reportUrl.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Events in 2024</h1>
        <ul className="flex flex-col gap-5">
          {events.map((event) => (
            <li
              key={event.id}
              className="p-4 border rounded-lg cursor-pointer hover:bg-blue-50"
              onClick={() => handleClick(event)}
            >
              <h2 className="text-xl font-semibold">{event.title}</h2>
              <p>{event.date}</p>
              {selectedEvent && selectedEvent.id === event.id && (
                <div className="mt-4 p-4 border rounded-lg">
                  <p className="mb-4">{selectedEvent.description}</p>
                  <div className="flex justify-evenly gap-4">
                    {selectedEvent.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Event ${selectedEvent.id} image ${index + 1}`}
                        className="w-100 h-100 object-contain rounded-lg"
                      />
                    ))}
                  </div>
                  <button
                    onClick={() => handleDownload(selectedEvent.reportUrl)}
                    className="mt-4 w-full flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white shadow-lg  hover:bg-blue-500 focus:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-30"
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
                    <span>Download Report</span>
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
}

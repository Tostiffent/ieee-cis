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
      images: ["https://github.com/sanjay212003/cis-2024-events/blob/main/activity-1.1.png?raw=true","https://github.com/sanjay212003/cis-2024-events/blob/main/activity-1.2.png?raw=true"]
    },
    {
      id: 2,
      title: "Event 2",
      date: "2024-02-01",
      description: "Description for Event 2",
      images: ["https://github.com/sanjay212003/cis-2024-events/blob/main/activity-2.1.png?raw=true","https://github.com/sanjay212003/cis-2024-events/blob/main/activity-2.2.png?raw=true"]
    },
    {
      id: 3,
      title: "Event 3",
      date: "2024-03-01",
      description: "Description for Event 3",
      images: ["https://github.com/sanjay212003/cis-2024-events/blob/main/activity-3.1.png?raw=true","https://github.com/sanjay212003/cis-2024-events/blob/main/activity-3.2.png?raw=true"]
    },
    {
        id: 4,
        title: "Event 4",
        date: "2024-02-01",
        description: "Description for Event 4",
        images: ["https://github.com/sanjay212003/cis-2024-events/blob/main/activity-4.1.png?raw=true","https://github.com/sanjay212003/cis-2024-events/blob/main/activity-4.2.png?raw=true"]
      },
      {
        id: 5,
        title: "Event 5",
        date: "2024-02-01",
        description: "Description for Event 5",
        images: ["https://github.com/sanjay212003/cis-2024-events/blob/main/activity-5.1.png?raw=true","https://github.com/sanjay212003/cis-2024-events/blob/main/activity-5.2.png?raw=true","https://github.com/sanjay212003/cis-2024-events/blob/main/activity-5.3.png?raw=true"]
      },
      {
        id: 6,
        title: "Event 6",
        date: "2024-02-01",
        description: "Description for Event 6",
        images: ["https://github.com/sanjay212003/cis-2024-events/blob/main/activity-6.1.png?raw=true","https://github.com/sanjay212003/cis-2024-events/blob/main/activity-6.2.png?raw=true"]
      },
      {
        id: 7,
        title: "Event 7",
        date: "2024-02-01",
        description: "Description for Event 7",
        images: ["https://github.com/sanjay212003/cis-2024-events/blob/main/activity-7.1.png?raw=true","https://github.com/sanjay212003/cis-2024-events/blob/main/activity-7.2.png?raw=true"]
      },
      {
        id: 8,
        title: "Event 8",
        date: "2024-02-01",
        description: "Description for Event 8",
        images: ["https://github.com/sanjay212003/cis-2024-events/blob/main/activity-8.1.png?raw=true","https://github.com/sanjay212003/cis-2024-events/blob/main/activity-8.2.png?raw=true"]
      },
      {
        id: 9,
        title: "Event 9",
        date: "2024-02-01",
        description: "Description for Event 9",
        images: ["https://github.com/sanjay212003/cis-2024-events/blob/main/activity-9.1.png?raw=true","https://github.com/sanjay212003/cis-2024-events/blob/main/activity-9.2.png?raw=true"]
      },
      {
        id: 10,
        title: "Event 10",
        date: "2024-02-01",
        description: "Description for Event 10",
        images: ["https://github.com/sanjay212003/cis-2024-events/blob/main/activity-10.1.png?raw=true","https://github.com/sanjay212003/cis-2024-events/blob/main/activity-10.2.png?raw=true"]
      },
      {
        id: 11,
        title: "Event 11",
        date: "2024-02-01",
        description: "Description for Event 11",
        images: ["https://github.com/sanjay212003/cis-2024-events/blob/main/activity-11.1.png?raw=true","https://github.com/sanjay212003/cis-2024-events/blob/main/activity-11.2.png?raw=true"]
      },
      {
        id: 12,
        title: "Event 12",
        date: "2024-02-01",
        description: "Description for Event 12",
        images: ["https://github.com/sanjay212003/cis-2024-events/blob/main/activity-12.1.png?raw=true","https://github.com/sanjay212003/cis-2024-events/blob/main/activity-12.2.png?raw=true"]
      },
      {
        id: 13,
        title: "Event 13",
        date: "2024-02-01",
        description: "Description for Event 13",
        images: ["https://github.com/sanjay212003/cis-2024-events/blob/main/activity-13.1.png?raw=true","https://github.com/sanjay212003/cis-2024-events/blob/main/activity-13.2.png?raw=true"]
      },
      {
        id: 14,
        title: "Event 14",
        date: "2024-02-01",
        description: "Description for Event 14",
        images: ["https://github.com/sanjay212003/cis-2024-events/blob/main/activity-14.1.png?raw=true","https://github.com/sanjay212003/cis-2024-events/blob/main/activity-14.2.png?raw=true"]
      },
      {
        id: 15,
        title: "Event 15",
        date: "2024-02-01",
        description: "Description for Event 15",
        images: ["https://github.com/sanjay212003/cis-2024-events/blob/main/activity-15.1.png?raw=true","https://github.com/sanjay212003/cis-2024-events/blob/main/activity-15.2.png?raw=true"]
      },
      {
        id: 16,
        title: "Event 16",
        date: "2024-02-01",
        description: "Description for Event 16",
        images: ["https://github.com/sanjay212003/cis-2024-events/blob/main/activity-16.1.png?raw=true","https://github.com/sanjay212003/cis-2024-events/blob/main/activity-16.2.png?raw=true"]
      },
      {
        id: 17,
        title: "Event 17",
        date: "2024-02-01",
        description: "Description for Event 17",
        images: ["https://github.com/sanjay212003/cis-2024-events/blob/main/activity-17.1.png?raw=true","https://github.com/sanjay212003/cis-2024-events/blob/main/activity-17.2.png?raw=true"]
      }
  ];

  const handleClick = (event) => {
    setSelectedEvent(selectedEvent && selectedEvent.id === event.id ? null : event);
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
                      <img  key={index} src={image} alt={`Event ${selectedEvent.id} image ${index + 1}`} className="w-100 h-100 object-contain rounded-lg" />
                      
                    ))}
                  </div>
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



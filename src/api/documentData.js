// api/documentData.js
export const subjects = [
    { id: 'all', name: 'All Subjects', icon: 'Book', count: 15 },
    { id: 'ldp', name: 'Logic Design', icon: 'Network', count: 4 },
    { id: 'dbms', name: 'Database Management', icon: 'Database', count: 5 },
    { id: 'cn', name: 'Computer Networks', icon: 'Network', count: 3 },
    { id: 'os', name: 'Operating Systems', icon: 'Clock', count: 2 },
    { id: 'dsa', name: 'Data Structures', icon: 'Database', count: 1 }
  ];
  
  export const documents = [

    { 
        id: 1, 
        name: 'Introduction to Logic Gates',
        subject: 'ldp',
        description: 'Comprehensive guide to basic logic gates and boolean algebra',
        downloadCount: 234,
        rating: 4.5,
        link: 'https://docs.google.com/document/d/1Ofl_ooaQZLEcuyRf8qz1UQpmh6BJoGbr/edit?usp=drivesdk&ouid=113975947138882823448&rtpof=true&sd=true',
        tags: ['beginner', 'theory', 'digital'],
        type: 'PDF',
        size: '2.4 MB',
        lastUpdated: '2024-03-15'
      },
      { 
        id: 2, 
        name: 'SQL Fundamentals',
        subject: 'dbms',
        description: 'Complete guide to SQL queries and database design',
        downloadCount: 567,
        rating: 4.8,
        link: 'https://docs.google.com/document/d/1Ofl_ooaQZLEcuyRf8qz1UQpmh6BJoGbr/edit?usp=drivesdk&ouid=113975947138882823448&rtpof=true&sd=true',
        tags: ['database', 'sql', 'practical'],
        type: 'PDF',
        size: '3.1 MB',
        lastUpdated: '2024-03-18'
      },
      { 
        id: 3, 
        name: 'Network Protocols',
        subject: 'cn',
        description: 'Deep dive into TCP/IP and other networking protocols',
        downloadCount: 345,
        rating: 4.2,
        link: 'https://docs.google.com/document/d/1Ofl_ooaQZLEcuyRf8qz1UQpmh6BJoGbr/edit?usp=drivesdk&ouid=113975947138882823448&rtpof=true&sd=true',
        tags: ['networking', 'protocols', 'advanced'],
        type: 'PDF',
        size: '4.2 MB',
        lastUpdated: '2024-03-20'
      },
      { 
        id: 4, 
        name: 'Process Management',
        subject: 'os',
        description: 'Understanding process scheduling and management',
        downloadCount: 432,
        rating: 4.6,
        link: 'https://docs.google.com/document/d/1Ofl_ooaQZLEcuyRf8qz1UQpmh6BJoGbr/edit?usp=drivesdk&ouid=113975947138882823448&rtpof=true&sd=true',
        tags: ['operating-system', 'processes', 'intermediate'],
        type: 'PDF',
        size: '2.8 MB',
        lastUpdated: '2024-03-22'
      },
      {
        id: 5,
        name: 'Data Structures and Algorithms',
        subject: 'dsa',
        description: 'Fundamentals of data structures and algorithms',
        downloadCount: 789,
        rating: 4.9,
        link: 'https://docs.google.com/document/d/1Ofl_ooaQZLEcuyRf8qz1UQpmh6BJoGbr/edit?usp=drivesdk&ouid=113975947138882823448&rtpof=true&sd=true',
        tags: ['data-structures', 'algorithms', 'advanced'],
        type: 'PDF',
        size: '3.5 MB',
        lastUpdated: '2024-03-25'
      },
      {
        id: 6,
        name: 'Database Design and Management',
        subject: 'dbms',
        description: 'Principles of database design and management',
        downloadCount: 654,
        rating: 4.7,
        link: 'https://docs.google.com/document/d/1Ofl_ooaQZLEcuyRf8qz1UQpmh6BJoGbr/edit?usp=drivesdk&ouid=113975947138882823448&rtpof=true&sd=true',
        tags: ['database', 'design', 'intermediate'],
        type: 'PDF',
        size: '2.9 MB',
        lastUpdated: '2024-03-27'
      },
      {
        id: 7,
        name: 'Computer Networks',
        subject: 'cn',
        description: 'Understanding computer networks and protocols',
        downloadCount: 876,
        rating: 4.5,
        link: 'https://docs.google.com/document/d/1Ofl_ooaQZLEcuyRf8qz1UQpmh6BJoGbr/edit?usp=drivesdk&ouid=113975947138882823448&rtpof=true&sd=true',
        tags: ['networking', 'protocols', 'advanced'],
        type: 'PDF',
        size: '3.2 MB',
        lastUpdated: '2024-03-29'
      },
      {
        id: 8,
        name: 'Operating Systems',
        subject: 'os',
        description: 'Fundamentals of operating systems and process management',
        downloadCount: 543,
        rating: 4.3,
        link: 'https://docs.google.com/document/d/1Ofl_ooaQZLEcuyRf8qz1UQpmh6BJoGbr/edit?usp=drivesdk&ouid=113975947138882823448&rtpof=true&sd=true',
        tags: ['operating-system', 'processes', 'intermediate'],
        type: 'PDF',
        size: '2.7 MB',
        lastUpdated: '2024-03-31'
      },
      {
        id: 9,
        name: 'Data Structures and Algorithms',
        subject: 'dsa',
        description: 'Fundamentals of data structures and algorithms',
        downloadCount: 789,
        rating: 4.9,
        link: 'https://docs.google.com/document/d/1Ofl_ooaQZLEcuyRf8qz1UQpmh6BJoGbr/edit?usp=drivesdk&ouid=113975947138882823448&rtpof=true&sd=true',
        tags: ['data-structures', 'algorithms', 'advanced'],
        type: 'PDF',
        size: '3.5 MB',
        lastUpdated: '2024-04-02'
      }
  
    // ... (other documents from original code)
  ];
  
  export const getAllTags = () => {
    return Array.from(new Set(documents.flatMap(doc => doc.tags)));
  };
  
  
  
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
        link: '/doc1',
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
        link: '/doc2',
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
        link: '/doc3',
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
        link: '/doc4',
        tags: ['operating-system', 'processes', 'intermediate'],
        type: 'PDF',
        size: '2.8 MB',
        lastUpdated: '2024-03-22'
      }
  
    // ... (other documents from original code)
  ];
  
  export const getAllTags = () => {
    return Array.from(new Set(documents.flatMap(doc => doc.tags)));
  };
  
  
  
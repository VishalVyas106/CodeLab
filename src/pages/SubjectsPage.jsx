
  // pages/SubjectsPage.jsx
  import React, { useState, useMemo } from 'react';
  import { Menu } from 'lucide-react';
  import { subjects, documents, getAllTags } from '../api/documentData';
  import SearchBar from '../components/SearchBar';
  import Sidebar from '../components/Sidebar';
  import DocumentCard from '../components/DocumentCard';
  
  const SubjectsPage = () => {
    const [selectedSubject, setSelectedSubject] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [selectedTags, setSelectedTags] = useState([]);
  
    const tags = getAllTags();
  
    // Format date
    const formatDate = (dateString) => {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    };
  
    // Advanced search function
    const handleSearch = (query) => {
      setSearchQuery(query);
      if (query.trim() === '') {
        setSearchResults([]);
        return;
      }
  
      const results = documents.filter(doc => {
        const matchesQuery = (
          doc.name.toLowerCase().includes(query.toLowerCase()) ||
          doc.description.toLowerCase().includes(query.toLowerCase()) ||
          doc.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
        );
        const matchesSubject = selectedSubject === 'all' || doc.subject === selectedSubject;
        const matchesTags = selectedTags.length === 0 || 
          selectedTags.some(tag => doc.tags.includes(tag));
        
        return matchesQuery && matchesSubject && matchesTags;
      });
  
      setSearchResults(results);
    };
  
    // Handle tag selection
    const toggleTag = (tag) => {
      setSelectedTags(prev => 
        prev.includes(tag) 
          ? prev.filter(t => t !== tag)
          : [...prev, tag]
      );
    };
  
    // Filter documents based on all criteria
    const filteredDocuments = useMemo(() => {
      if (searchQuery.trim() !== '') {
        return searchResults;
      }
      return documents.filter(doc => {
        const matchesSubject = selectedSubject === 'all' || doc.subject === selectedSubject;
        const matchesTags = selectedTags.length === 0 || 
          selectedTags.some(tag => doc.tags.includes(tag));
        return matchesSubject && matchesTags;
      });
    }, [documents, searchResults, searchQuery, selectedSubject, selectedTags]);
  
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Top Search Bar */}
        <div className="fixed top-0 left-0 right-0 bg-white shadow-lg z-20">
          <div className="max-w-7xl mx-auto p-4">
            <div className="flex items-center gap-4">
              <button
                className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <Menu className="w-6 h-6" />
              </button>
              <SearchBar 
                searchQuery={searchQuery}
                onSearchChange={(query) => {
                  handleSearch(query);
                  setIsSearchFocused(true);
                }}
                onClearSearch={() => {
                  handleSearch('');
                  setIsSearchFocused(false);
                }}
                searchResults={searchResults}
                isSearchFocused={isSearchFocused}
              />
            </div>
          </div>
        </div>
  
        {/* Sidebar */}
        <Sidebar
          subjects={subjects}
          selectedSubject={selectedSubject}
          onSubjectChange={setSelectedSubject}
          tags={tags}
          selectedTags={selectedTags}
          onTagToggle={toggleTag}
        />
  
        {/* Main Content */}
        <main className="md:ml-72 pt-24 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredDocuments.map((doc) => (
                <DocumentCard 
                  key={doc.id} 
                  doc={doc} 
                  formatDate={formatDate} 
                />
              ))}
            </div>
            
            {/* Empty State */}
            {filteredDocuments.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No documents found</h3>
                <p className="text-gray-600">
                  Try adjusting your search or filters to find what you're looking for
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
    );
  };







  
  
  export default SubjectsPage;
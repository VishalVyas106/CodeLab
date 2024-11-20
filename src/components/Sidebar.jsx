import React, { useState } from 'react';
import { Menu, X, Filter } from 'lucide-react';
import * as Icons from 'lucide-react';

const MobileSidebar = ({ 
  subjects = [], 
  selectedSubject, 
  onSubjectChange, 
  tags = [], 
  selectedTags = [], 
  onTagToggle 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button 
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-full shadow-md"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <aside 
        className={`
          fixed  inset-0 z-40 inline-block
          bg-white md:translate-x-0
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:w-64 md:h-auto md:flex-shrink-0
        `}
      >
        <div className="p-6 pt-20 md:pt-6">
          {/* Subjects Section */}
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-6">Subjects</h2>
            <nav className="space-y-2">
              {subjects.map((subject) => {
                const SubjectIcon = Icons[subject.icon] || Icons.Archive;
                return (
                  <button
                    key={subject.id}
                    className={`
                      w-full flex items-center justify-between 
                      px-4 py-3 rounded-xl
                      ${selectedSubject === subject.id 
                        ? 'bg-blue-50 text-blue-600' 
                        : 'text-gray-600 hover:bg-gray-50'}
                    `}
                    onClick={() => onSubjectChange(subject.id)}
                  >
                    <div className="flex items-center gap-3">
                      <SubjectIcon className="w-5 h-5" />
                      <span className="font-medium">{subject.name}</span>
                    </div>
                    <span className="text-sm text-gray-400">{subject.count}</span>
                  </button>
                );
              })}
            </nav>
          </section>

          {/* Tags Filter */}
          <section className="mt-8">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-5 h-5 text-gray-600" />
              <h3 className="font-semibold text-gray-800">Filter by Tags</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => onTagToggle(tag)}
                  className={`
                    px-3 py-1 rounded-full text-sm font-medium
                    ${selectedTags.includes(tag)
                      ? 'bg-blue-100 text-blue-600'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}
                  `}
                >
                  {tag}
                </button>
              ))}
            </div>
          </section>
        </div>
      </aside>

      {/* Backdrop */}
      {isOpen && (
        <div 
          onClick={toggleSidebar} 
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
        />
      )}
    </>
  );
};

export default MobileSidebar;

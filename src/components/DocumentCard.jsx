
  // components/DocumentCard.jsx
  import React from 'react';
  import { Star, Download } from 'lucide-react';
  
  const DocumentCard = ({ doc, formatDate }) => {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-200 group">
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
              {doc.name}
            </h3>
            <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-lg">
              {doc.type}
            </span>
          </div>
          <p className="text-gray-600 text-sm mb-4">{doc.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {doc.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span>{doc.rating}</span>
              </div>
              <div className="flex items-center gap-1">
                <Download className="w-4 h-4" />
                <span>{doc.downloadCount}</span>
              </div>
            </div>
            <span className="text-xs">{doc.size}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500">
              Updated {formatDate(doc.lastUpdated)}
            </span>
            <a
              href={doc.link}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium"
            >
              View Document
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default DocumentCard;
  
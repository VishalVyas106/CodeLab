import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4">CodeLab</h3>
          <p className="text-gray-400 leading-relaxed">
            Transforming coding education through a collaborative and community-driven approach.
          </p>
        </div>

        {/* Trusted By */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Trusted By</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Ampics Community</li>
            <li>50+ Developers</li>
            <li>Open Source Contributors</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-gray-400">
            <li>© 2024 CodeLab Members</li>
            <li>Website Created by Vyas Vishal</li>
            <li>All Rights Reserved</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        <NavLink to="/team"> The CodeLab Team</NavLink>
      </div>
    </div>
  </footer>
);

export default Footer;

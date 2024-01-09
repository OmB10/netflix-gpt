import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const links = [
    ['FAQ', 'Investor Relations', 'Privacy', 'Speed Test'],
    ['Help Centre', 'Jobs', 'Cookie Preferences', 'Legal Notices'],
    ['Account', 'Ways to Watch', 'Corporate Information', 'Only on Netflix'],
    ['Media Centre', 'Terms of Use', 'Contact Us']
];

function Footer() {
    const [activeLink, setActiveLink] = useState(null);

    return (
        <div className="bg-black h-full mt-10 w-10/12 mx-auto text-[#ffffff] opacity-70 p-6 ">
            <p className="mb-4">Questions? Call 000-800-919-1694</p>
            <div className="grid grid-cols-4 gap-4 mb-4">
                {links.map((column, i) => (
                    <ul key={i}>
                        {column.map((link, j) => (
                            <li key={j} className="mb-2">
                                <Link
                                    to="/signin"
                                    onClick={() => setActiveLink(link)}
                                    className={activeLink === link ? 'text-red-500' : 'text-white'}
                                >
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                ))}
            </div>
            <div className="flex flow-row">
                <select className="bg-black rounded-md px-3 py-2 border border-white ">
                    <option>English</option>
                    <option>Hindi</option>
                </select>
            </div>
            <p className='mt-2'>Netflix India</p>
        </div>
    );
}

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-black text-white p-4">
            <div className="flex justify-between">
                <p>Questions? Call 000-800-919-1694</p>
                <div className="space-x-4">
                    <Link to="/faq" className="hover:underline">FAQ</Link>
                    <Link to="/cookie-preferences" className="hover:underline">Cookie Preferences</Link>
                    <Link to="/help-centre" className="hover:underline">Help Centre</Link>
                    <Link to="/corporate-information" className="hover:underline">Corporate Information</Link>
                </div>
                <div className="space-x-4">
                    <Link to="/terms-of-use" className="hover:underline">Terms of Use</Link>
                    <Link to="/privacy" className="hover:underline">Privacy</Link>
                </div>
            </div>

            {/* Language Selector */}
            <select
                name="language"
                id=""
                defaultValue={'English'}
                onChange={(e) => console.log(e.target.value)}
                className='mt-2 bg-black border border-gray-700 text-white'
            >
                {['English', 'Hindi', 'French'].map((lang) => (
                    <option key={lang} value={lang}>
                        {lang}
                    </option>))}
            </select>

        </div>
    );
};

export default Footer;

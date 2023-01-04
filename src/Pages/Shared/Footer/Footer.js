import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-[#3F0071] text-neutral-content text-center">
                <div>
                    <span className="footer-title">Shop With Us</span>
                    <Link className="link link-hover">Advanced Search</Link>
                    <Link className="link link-hover">  Browse Collections</Link>
                    <Link className="link link-hover">  My Orders</Link>
                    <Link className="link link-hover">View Basket</Link>
                </div>
                <div>
                    <span className="footer-title">Sell With Us</span>
                    <Link className="link link-hover">Start Selling</Link>
                    <Link className="link link-hover">Join Our Affiliate Program</Link>
                    <Link className="link link-hover">Book Buyback</Link>
                    <Link className="link link-hover">Refer a seller</Link>
                </div>
                <div>
                    <span className="footer-title">Follow AbeBooks</span>
                    <Link className="link link-hover">Facebook</Link>
                    <Link className="link link-hover">Instagram</Link>
                    <Link className="link link-hover">YouTube</Link>
                    <Link className="link link-hover">Podcast</Link>
                    <Link className="link link-hover">Twitter</Link>
                </div>
                <div>
                    <span className="footer-title">Find Help</span>
                    <Link className="link link-hover">Help</Link>
                    <Link className="link link-hover">Customer Support</Link>
                </div>
                <div>
                    <span className="footer-title">About Us</span>
                    <Link className="link link-hover">About AbeBooks</Link>
                    <Link className="link link-hover">Media</Link>
                    <Link className="link link-hover">Careers</Link>
                    <Link className="link link-hover">Forums</Link>
                    <Link className="link link-hover">Privacy Policy</Link>
                    <Link className="link link-hover">Designated Agent</Link>
                    <Link className="link link-hover">Accessibility</Link>
                </div>
            </footer>
            <div className='bg-[#3F0071]  text-white'>
                <p className='py-2'>Copyright © 2022 - All right reserved by Book House Ltd</p>
            </div>
        </div>
    );
};

export default Footer;
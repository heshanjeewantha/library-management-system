import React from "react";

const Footer: React.FC = () => (
    <footer>
        <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-dark">
            <div className="text-white mb-3 mb-md-0">
                Copyright © 2025. All rights reserved.
            </div>
            <div>
                <button className="btn btn-link mx-3 text-white" type="button" aria-label="Facebook">
                    <i className="fab fa-facebook-f"></i>
                </button>
                <button className="btn btn-link mx-3 text-white" type="button" aria-label="Twitter">
                    <i className="fab fa-twitter"></i>
                </button>
                <button className="btn btn-link mx-3 text-white" type="button" aria-label="Google">
                    <i className="fab fa-google"></i>
                </button>
                <button className="btn btn-link mx-3 text-white" type="button" aria-label="LinkedIn">
                    <i className="fab fa-linkedin-in"></i>
                </button>
            </div>
        </div>
    </footer>
);

export default Footer;
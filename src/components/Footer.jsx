import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon for social media icons
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"; // Import specific brand icons

const Footer = () => {
    return (
        <div className="mt-10 px-4 sm:px-20 bg-gray-900 py-10 text-white flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
            <div className="mb-6 sm:mb-0">
                <h1 className="font-extrabold text-3xl mb-4">LinkShrink</h1>

                <p className="text-sm font-light mb-2">
                    A product by{" "}
                    <span className="text-blue-500 font-medium">
                        <a
                            href="https://www.linkedin.com/in/nilava-bepari/"
                            className="hover:underline"
                        >
                            Nilava Bepari
                        </a>
                    </span>
                </p>

                {/* Social media icons */}
                <div className="flex justify-normal mt-6 space-x-6">
                    <a
                        href="https://www.linkedin.com/in/nilava-bepari/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            size="2x"
                            className="text-blue-500 hover:text-white transition"
                        />
                    </a>
                    <a
                        href="https://github.com/NILAVABEPARI"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon
                            icon={faGithub}
                            size="2x"
                            className="text-blue-500 hover:text-white transition"
                        />
                    </a>
                </div>
            </div>

            <div className="text-center sm:text-right mt-6 sm:mt-0">
                <p className="text-lg font-bold mb-1">URL Shortener with Analytics</p>
                <p className="text-sm text-gray-400">
                    Transforming long URLs into short links while providing valuable
                    insights.
                </p>
                <p className="text-sm mt-2">
                    {/* Display current year */}
                    &copy; {new Date().getFullYear()} LinkShrink. All rights reserved.{" "}
                </p>
            </div>
        </div>
    );
};

export default Footer;
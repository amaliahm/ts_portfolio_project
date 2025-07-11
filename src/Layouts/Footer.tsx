import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className='py-12 border-t border-gray-800 bg-black'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0">
                    <div className="flex items-center space-x-2">
                        <span className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                            AG
                        </span>
                        <span className="text-gray-400">
                            |
                        </span>
                        <span className="text-gray-400">
                            Developpeur Front-end
                        </span>
                    </div>
                    <div className="flex space-x-6">
                        <a
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                            <Github className="w-5 h-5" />
                        </a>
                        <a
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                          href="#"
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>
                    <div className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} Amina Ghandouz. Tous droits reserves.
                    </div>
                </div>
            </div>
        </footer>
    )
}
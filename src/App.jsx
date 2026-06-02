import React, { useRef, useState } from "react";
import animeGirl from "./assets/anime.png";
import { FaUserGraduate, FaCode, FaBrain, FaLightbulb, FaUser, FaStar, FaLaptopCode, FaLinkedin, FaGithub, FaEnvelope, FaCss3Alt } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiExpress, SiMysql, SiOpenjdk, SiHtml5, SiJavascript } from 'react-icons/si';
import seafoodImage from "./assets/Seafood.png";
import weatherImage from "./assets/Weathermap.png";
import libraryImage from "./assets/Library.png";
import gamehubImage from "./assets/Gamehub.png";
import emailjs from '@emailjs/browser';

export default function Portfolio() {
  // EmailJS form ref and state
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const SERVICE_ID = 'service_50x3lk9';      
  const TEMPLATE_ID = 'template_xnlmlfq';    
  const PUBLIC_KEY = 'UePjE-TUI9kZOo6JT';     

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('');

    try {
      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form.current,
        PUBLIC_KEY
      );
      console.log('Email sent:', result.text);
      setStatusMessage('✅ Message sent successfully! I will get back to you soon.');
      form.current.reset(); // Clear the form
    } catch (error) {
      console.error('Failed:', error);
      setStatusMessage('❌ Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Node.js",
    "MySQL",
    "Java",
    "Tailwind CSS",
  ];

  const projects = [
    {
      title: "Global Seafood Supply Chain Management System",
      description:
        "A full-stack web application to manage seafood supply chain operations including inventory, suppliers, shipment tracking, and product management.",
      tech: "React.js, MySQL, Node.js, Express.js",
      github: "https://github.com/harinibalaji3/Global-SCM-for-Seafood",
    },
    {
      title: "Weather Forecasting Website",
      description:
        "Responsive weather forecasting app with real-time weather updates using OpenWeather API.",
      tech: "React.js, OpenWeatherMap API, CSS",
      github: "https://github.com/harinibalaji3/weatherapp",
    },
    {
      title: "Library Management System",
      description:
        "A Console-based library management application that allows users to manage books, track borrowings, and maintain records of library activities.",
      tech: "Java, MySQL, JDBC",
      github: "https://github.com/harinibalaji3/librarymanagements",
    },
    {
      title: "GameHub",
      description: "A collection of two popular classic games - Tic-Tac-Toe and Snake - developed using Java with Swing GUI.",
      tech: "Java, Swing GUI",
      github: "https://github.com/harinibalaji3/Gamehub",
    },
  ];

  return (
    <div className="bg-[#fdf5f3] text-[#1f2454] font-sans scroll-smooth">
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-[#fdf5f3]/90 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-9xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-3xl font-extrabold tracking-wide">
            PORTFOLIO
          </h1>

          <ul className="hidden md:flex gap-10 text-lg font-medium">
            <li>
              <a href="#home" className="hover:text-orange-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-orange-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-orange-400 transition">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-orange-400 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-orange-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Home */}
      <section
        id="home"
        className="min-h-screen bg-[#fdf5f3] flex flex-col md:flex-row items-center justify-center px-8 lg:px-15 pt-5 overflow-hidden"
      >
        {/* Left Side */}
        <div className="flex-1 space-y-2">
          <h1 className="text-4xl md:text-4xl font-extrabold leading-tight text-[#1f2454]">
            <span className="text-2xl text-gray-500 tracking-wide"> Hello, I'm</span><br/>
            Harini Balaji<br />
          </h1>

          <h2 className="text-3xl md:text-4xl font-light text-orange-400">
            Aspiring Software Engineer
          </h2>

          <p className="text-gray-500 text-lg md:text-2xl leading-10 max-w-3xl">
            Passionate about developing modern and responsive web applications 
            through efficient and scalable solutions. Interested in building 
            real-world software systems, backend architectures, and user-friendly 
            digital experiences using modern technologies.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-6 pt-4">
            <a
              href="#projects"
              className="border-2 border-orange-300 text-[#1f2454] hover:bg-orange-300 hover:text-white transition-all duration-300 px-8 py-4 rounded-2xl text-lg font-semibold"
            >
              View My Work
            </a>

            <a
              href="/resume.pdf"
              download
              className="border-2 border-orange-300 text-[#1f2454] hover:bg-orange-300 hover:text-white transition-all duration-300 px-8 py-4 rounded-2xl text-lg font-semibold"
            >
              Download CV
            </a>
          </div>
          
          {/* Social Icons */}
          <div className="flex gap-6 pt-8">
            <a
              href="https://www.linkedin.com/in/harini2005"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={32} className="text-[#0077b5] hover:text-[#005582]" />
            </a>

            <a
              href="https://github.com/harinibalaji3/harinibalaji3"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub size={32} className="text-[#333333] hover:text-[#000000]" />
            </a>

            <a
              href="mailto:harini322005@gmail.com"
              className="transform transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <FaEnvelope size={32} className="text-[#D44638] hover:text-[#B23121]" />
            </a>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex-1 flex justify-center items-center mt-16 md:mt-0 relative">
          <div className="absolute w-[450px] h-[450px] bg-orange-200 opacity-40 blur-[120px] rounded-full"></div>
          <img
            src={animeGirl}
            alt="anime girl"
            className="relative z-10 w-[340px] md:w-[400px] object-contain mix-blend-multiply drop-shadow-4xl"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen bg-white py-20 px-5 lg:px-15">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1f2454] mb-4">About Me</h2>
            <div className="w-24 h-1 bg-orange-400 mx-auto mb-2"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Get to know more about my journey, background, and what drives me
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            
            {/* LEFT COLUMN - Computer Science Student Card */}
            <div className="space-y-8">
              <div className="bg-[#fdf5f3] rounded-2xl p-12 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <FaUserGraduate className="text-orange-400 text-3xl" />
                  <h3 className="text-2xl font-bold text-[#1f2454]">Computer Science Engineering Student</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  I'm a dedicated Computer Science Engineering student with a passion for technology and innovation. 
                  A recent graduate with a strong passion for continuously learning and exploring new technologies to build real-world solutions.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Driven by curiosity and creativity, I enjoy transforming ideas into functional 
                  digital experiences through clean code and modern development practices. 
                  Eager to contribute, learn, and grow in a professional software development environment.
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-3">
              
              <div className="bg-[#fdf5f3] rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow">
                <h4 className="text-xl font-bold text-[#1f2454] mb-4 flex items-center gap-2">
                  <FaUser className="text-orange-400" />
                  Personal Info
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-600">
                    <span><span className="font-semibold">Age:</span> 21</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <span><span className="font-semibold">Location:</span> Ramanathapuram</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <span><span className="font-semibold">Preferred Location:</span> Chennai || Coimbatore || Madurai || Bangalore</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#fdf5f3] rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h4 className="text-xl font-bold text-[#1f2454] mb-4 flex items-center gap-2">
                  <FaUserGraduate className="text-orange-400" />
                  Education
                </h4>
                <div className="space-y-2">
                  <p className="font-semibold text-gray-800">BE Computer Science Engineering</p>
                  <p className=" text-gray-800 font-medium">May 2026</p>
                </div>
              </div>

              <div className="bg-[#fdf5f3] rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-[#1f2454] mb-4 flex items-center gap-2">
                  <FaStar className="text-orange-400" /> Interests
                </h3>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-white px-4 py-2 rounded-full text-gray-700 hover:bg-orange-100 hover:text-orange-600 transition-colors cursor-pointer shadow-sm">
                    Software Engineer
                  </span>
                  <span className="bg-white px-4 py-2 rounded-full text-gray-700 hover:bg-orange-100 hover:text-orange-600 transition-colors cursor-pointer shadow-sm">
                    Java Developer
                  </span>
                  <span className="bg-white px-4 py-2 rounded-full text-gray-700 hover:bg-orange-100 hover:text-orange-600 transition-colors cursor-pointer shadow-sm">
                    Full-stack Developer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section id="skills" className="min-h-screen bg-[#fff8f6] py-20 px-8 lg:px-15">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <p className="text-orange-400 font-semibold uppercase tracking-wide">My Expertise</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1f2454] mt-2 mb-4">Technical Skills</h2>
            <div className="w-24 h-1 bg-orange-400 mx-auto mb-6"></div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#1f2454] mb-8 text-center border-b-2 border-orange-200 pb-3 inline-block w-full">💻 Technical</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              
              <div className="aspect-square bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col">
                <div className="bg-orange-100 p-3 rounded-xl w-fit mb-4">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1f2454] mb-3">Frontend</h3>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="bg-[#fff8f6] px-2 py-1 rounded-lg text-xs font-medium text-gray-700 hover:bg-orange-100 hover:text-orange-600 transition">HTML5</span>
                  <span className="bg-[#fff8f6] px-2 py-1 rounded-lg text-xs font-medium text-gray-700 hover:bg-orange-100 hover:text-orange-600 transition">CSS3</span>
                  <span className="bg-[#fff8f6] px-2 py-1 rounded-lg text-xs font-medium text-gray-700 hover:bg-orange-100 hover:text-orange-600 transition">JavaScript</span>
                  <span className="bg-[#fff8f6] px-2 py-1 rounded-lg text-xs font-medium text-gray-700 hover:bg-orange-100 hover:text-orange-600 transition">React.js</span>
                  <span className="bg-[#fff8f6] px-2 py-1 rounded-lg text-xs font-medium text-gray-700 hover:bg-orange-100 hover:text-orange-600 transition">Tailwind CSS</span>
                </div>
              </div>

              <div className="aspect-square bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col">
                <div className="bg-orange-100 p-3 rounded-xl w-fit mb-4">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1f2454] mb-3">Backend</h3>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="bg-[#fff8f6] px-2 py-1 rounded-lg text-xs font-medium text-gray-700 hover:bg-orange-100 hover:text-orange-600 transition">Java</span>
                  <span className="bg-[#fff8f6] px-2 py-1 rounded-lg text-xs font-medium text-gray-700 hover:bg-orange-100 hover:text-orange-600 transition">Node.js</span>
                  <span className="bg-[#fff8f6] px-2 py-1 rounded-lg text-xs font-medium text-gray-700 hover:bg-orange-100 hover:text-orange-600 transition">Express.js</span>
                  <span className="bg-[#fff8f6] px-2 py-1 rounded-lg text-xs font-medium text-gray-700 hover:bg-orange-100 hover:text-orange-600 transition">Servlets</span>
                  <span className="bg-[#fff8f6] px-2 py-1 rounded-lg text-xs font-medium text-gray-700 hover:bg-orange-100 hover:text-orange-600 transition">JSP</span>
                </div>
              </div>

              <div className="aspect-square bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col">
                <div className="bg-orange-100 p-3 rounded-xl w-fit mb-4">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1f2454] mb-3">Database</h3>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="bg-[#fff8f6] px-2 py-1 rounded-lg text-xs font-medium text-gray-700 hover:bg-orange-100 hover:text-orange-600 transition">MySQL</span>
                </div>
              </div>

              <div className="aspect-square bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col">
                <div className="bg-orange-100 p-3 rounded-xl w-fit mb-4">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1f2454] mb-3">Tools & Other</h3>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="bg-[#fff8f6] px-2 py-1 rounded-lg text-xs font-medium text-gray-700 hover:bg-orange-100 hover:text-orange-600 transition">Git</span>
                  <span className="bg-[#fff8f6] px-2 py-1 rounded-lg text-xs font-medium text-gray-700 hover:bg-orange-100 hover:text-orange-600 transition">GitHub</span>
                  <span className="bg-[#fff8f6] px-2 py-1 rounded-lg text-xs font-medium text-gray-700 hover:bg-orange-100 hover:text-orange-600 transition">VS Code</span>
                  <span className="bg-[#fff8f6] px-2 py-1 rounded-lg text-xs font-medium text-gray-700 hover:bg-orange-100 hover:text-orange-600 transition">Eclipse</span>
                  <span className="bg-[#fff8f6] px-2 py-1 rounded-lg text-xs font-medium text-gray-700 hover:bg-orange-100 hover:text-orange-600 transition">Netlify</span>
                </div>
              </div>

              <div className="aspect-square bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col">
                <div className="bg-orange-100 p-3 rounded-xl w-fit mb-4">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1f2454] mb-3">Concepts</h3>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="bg-[#fff8f6] px-2 py-1 rounded-lg text-xs font-medium text-gray-700 hover:bg-orange-100 hover:text-orange-600 transition">REST APIs</span>
                  <span className="bg-[#fff8f6] px-2 py-1 rounded-lg text-xs font-medium text-gray-700 hover:bg-orange-100 hover:text-orange-600 transition">CRUD</span>
                  <span className="bg-[#fff8f6] px-2 py-1 rounded-lg text-xs font-medium text-gray-700 hover:bg-orange-100 hover:text-orange-600 transition">OOP</span>
                  <span className="bg-[#fff8f6] px-2 py-1 rounded-lg text-xs font-medium text-gray-700 hover:bg-orange-100 hover:text-orange-600 transition">Basic DSA</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#1f2454] mb-8 text-center border-b-2 border-orange-200 pb-3 inline-block w-full">🤝 Non-Technical</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-center group">
                <div className="bg-orange-100 p-4 rounded-2xl w-fit mx-auto mb-4 group-hover:bg-orange-400 transition-colors">
                  <svg className="w-8 h-8 text-orange-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-[#1f2454] mb-3">Communication</h4>
                <p className="text-sm text-gray-500">Effective verbal and written communication</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-center group">
                <div className="bg-orange-100 p-4 rounded-2xl w-fit mx-auto mb-4 group-hover:bg-orange-400 transition-colors">
                  <FaBrain className="w-8 h-8 text-orange-400 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-xl font-bold text-[#1f2454] mb-3">Problem Solving</h4>
                <p className="text-sm text-gray-500">Analytical thinking and creative solution finding</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-center group">
                <div className="bg-orange-100 p-4 rounded-2xl w-fit mx-auto mb-4 group-hover:bg-orange-400 transition-colors">
                  <svg className="w-8 h-8 text-orange-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-[#1f2454] mb-3">Creative Thinking</h4>
                <p className="text-sm text-gray-500">Innovative ideas and out-of-the-box solutions</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-center group">
                <div className="bg-orange-100 p-4 rounded-2xl w-fit mx-auto mb-4 group-hover:bg-orange-400 transition-colors">
                  <svg className="w-8 h-8 text-orange-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-[#1f2454] mb-3">Teamwork</h4>
                <p className="text-sm text-gray-500">Collaboration and effective team player</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen px-8 py-20 bg-white">
        <div className="text-center mb-20">
          <p className="text-orange-400 font-semibold uppercase">My Work</p>
          <h2 className="text-5xl font-extrabold mt-4 text-[#1f2454]">PROJECTS</h2>
<div className="w-24 h-1 bg-orange-400 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#fdf5f3] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 flex flex-col"
            >
<div className="h-48  bg-gradient-to-br from-[#fde2e4] to-[#fad2e1] flex items-center justify-center p-2 overflow-hidden">
                  {project.title === "GameHub" && (
                  <img src={gamehubImage} alt="GameHub" className="w-full h-full object-contain object-top"/>
                )}
                {project.title === "Global Seafood Supply Chain Management System" && (
                  <img src={seafoodImage} alt="Seafood SCM" className="w-full h-full object-contain" />
                )}
                {project.title === "Weather Forecasting Website" && (
                  <img src={weatherImage} alt="Weather App" className="w-full h-full object-contain" />
                )}
                {project.title === "Library Management System" && (
                  <img src={libraryImage} alt="Library System" className="w-full h-full object-contain" />
                )}
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-3 text-[#1f2454]">{project.title}</h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                {project.tech && (
                  <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                    {project.tech.split(', ').map((tech, idx) => (
                      <span key={idx} className="bg-white px-2 py-1 rounded-lg text-xs font-medium text-gray-600 shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-orange-400 text-sm font-semibold hover:text-orange-500 transition inline-flex items-center gap-2 w-fit"
                >
                  View on GitHub <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20 px-5 lg:px-15 bg-[#fdf5f3]">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-orange-400 font-semibold uppercase tracking-wide">Get In Touch</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1f2454] mt-2 mb-4">Contact</h2>
            <div className="w-24 h-1 bg-orange-400 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Let's connect and discuss opportunities, projects, or just have a chat about technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* LEFT COLUMN - Contact Information */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-[#1f2454] mb-6">Contact Information</h3>
              <p className="text-gray-600 mb-8">
                I'd love to hear from you. Send me a message and I'll get back to you as soon as possible.
              </p>

              {/* Email */}
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-orange-100 p-3 rounded-xl">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-[#1f2454]">Email</p>
                  <a href="mailto:harini322005@gmail.com" className="text-gray-600 hover:text-orange-400 transition">
                    harini322005@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-orange-100 p-3 rounded-xl">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-[#1f2454]">Location</p>
                  <p className="text-gray-600">Ramanathapuram, Tamil Nadu, India</p>
                </div>
              </div>

              {/* Connect With Me - Social Links */}
              <div className="mt-8 pt-4 border-t border-orange-100">
                <h4 className="text-lg font-semibold text-[#1f2454] mb-4">Connect With Me</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/harinibalaji3" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-orange-100 p-3 rounded-xl hover:bg-orange-400 transition-colors group"
                  >
                    <FaGithub className="w-5 h-5 text-orange-400 group-hover:text-white transition-colors" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/harini2005" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-orange-100 p-3 rounded-xl hover:bg-orange-400 transition-colors group"
                  >
                    <FaLinkedin className="w-5 h-5 text-orange-400 group-hover:text-white transition-colors" />
                  </a>
                  <a 
                    href="mailto:harini322005@gmail.com" 
                    className="bg-orange-100 p-3 rounded-xl hover:bg-orange-400 transition-colors group"
                  >
                    <FaEnvelope className="w-5 h-5 text-orange-400 group-hover:text-white transition-colors" />
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN - Send Me a Message Form */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-[#1f2454] mb-6">Send Me a Message</h3>
              
              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#1f2454] mb-2">First Name</label>
                    <input 
                      type="text" 
                      name="from_name"
                      placeholder="Harini"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#fdf5f3] border border-orange-100 focus:border-orange-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1f2454] mb-2">Last Name</label>
                    <input 
                      type="text" 
                      name="last_name"
                      placeholder="Balaji"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#fdf5f3] border border-orange-100 focus:border-orange-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#1f2454] mb-2">Phone</label>
                    <input 
                      type="tel" 
                      name="phone"
                      placeholder="+91 9876543210"
                      className="w-full px-4 py-3 rounded-xl bg-[#fdf5f3] border border-orange-100 focus:border-orange-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1f2454] mb-2">Email</label>
                    <input 
                      type="email" 
                      name="from_email"
                      placeholder="harini@example.com"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#fdf5f3] border border-orange-100 focus:border-orange-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1f2454] mb-2">Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    placeholder="Project Collaboration"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#fdf5f3] border border-orange-100 focus:border-orange-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1f2454] mb-2">Message</label>
                  <textarea 
                    rows="4"
                    name="message"
                    placeholder="Tell me about your project or just say hello..."
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#fdf5f3] border border-orange-100 focus:border-orange-400 focus:outline-none resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-400 text-white font-semibold py-3 rounded-xl hover:bg-orange-500 transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                
                {statusMessage && (
                  <div className={`text-center p-3 rounded-lg ${
                    statusMessage.includes('✅') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {statusMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-500 bg-white">
        © 2026 Harini Portfolio. 
      </footer>
    </div>
  );
}
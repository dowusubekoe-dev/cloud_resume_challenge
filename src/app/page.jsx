// React Imports
"use client";
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Function for Main Component
function MainComponent() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visitorCount, setVisitorCount] = useState(0);
  const [activeCategory, setActiveCategory] = useState("all");
  const [activePortfolioCategory, setActivePortfolioCategory] = useState("all");

// Google Tag Manager Setup
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=GTM-W29DQZ2X";
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "GTM-W29DQZ2X", {
        page_path: window.location.pathname,
        custom_map: { dimension1: "visitor_count" },
      });

      const currentCount = parseInt(
        localStorage.getItem("visitorCount") || "0"
      );
      const newCount = currentCount + 1;
      localStorage.setItem("visitorCount", newCount.toString());
      setVisitorCount(newCount);

      gtag("event", "visitor_count", { visitor_count: newCount });
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#1a1f2e]">
      <div className="fixed bottom-4 right-4 bg-[#2d364f] p-2 rounded-lg shadow-lg z-50">
        <p className="text-[#e2e8f0] font-poppins text-sm">
          Visitors: {visitorCount}
        </p>
      </div>
      <nav className="fixed w-full bg-[#1a1f2e] shadow-lg z-50 border-b border-[#2d364f]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="font-poppins text-xl font-bold text-[#60a5fa]">
              Derek Owusu Bekoe
            </div>

            <div className="hidden md:flex space-x-8 font-poppins">
              {["home", "about", "resume", "portfolio", "blog", "contact"].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`${activeSection === section
                      ? "text-[#60a5fa]"
                      : "text-[#e2e8f0]"
                      } hover:text-[#60a5fa] transition-colors capitalize`}
                  >
                    {section}
                  </button>
                ),
              )}
            </div>

            <button
              className="md:hidden text-[#60a5fa]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i
                className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-2xl`}
              ></i>
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden pb-4">
              {["home", "about", "resume", "portfolio", "blog", "contact"].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="block w-full text-left py-2 px-4 text-[#e2e8f0] hover:bg-[#2d364f] capitalize font-poppins">
                    {section}
                  </button>
                ),
              )}
            </div>
          )}
        </div>
      </nav>

      <section
        id="home"
        className="min-h-screen pt-16 bg-gradient-to-br from-[#1a1f2e] to-[#2d364f] flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 py-20 w-full">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="md:w-1/2 text-center">
              <h1 className="font-poppins text-4xl md:text-5xl font-bold text-[#e2e8f0] mb-4">
                Cloud Support Engineer
              </h1>
              <p className="font-poppins text-xl text-[#a0aec0] mb-8">
                Empowering Business Through Cloud Solutions
              </p>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => scrollToSection("portfolio")}
                  className="bg-[#60a5fa] text-[#1a1f2e] px-4 py-2 rounded-lg hover:bg-[#3b82f6] transition-colors font-poppins inline-flex items-center justify-center">
                  <i className="fas fa-briefcase mr-2"></i>
                  View Portfolio
                </button>
                <a
                  href="mailto:dowusubekoe@gmail.com"
                  className="border-2 border-[#60a5fa] text-[#60a5fa] px-4 py-2 rounded-lg hover:bg-[#60a5fa] hover:text-[#1a1f2e] transition-colors font-poppins inline-flex items-center justify-center">
                  <i className="fas fa-envelope mr-2"></i>
                  Contact Me
                </a>
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
              <div className="w-64 h-64 rounded-full overflow-hidden shadow-xl border-4 border-[#2d364f]">
                <img
                  src="https://ucarecdn.com/8bddf375-76f9-4e84-9af5-a1ad51f433df/-/format/auto/"
                  alt="Professional headshot of a person wearing glasses and a yellow hoodie"
                  className="w-full h-full object-cover"/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="about"
        className="min-h-screen bg-[#1a1f2e] flex items-center justify-center"
      >
        <div className="max-w-7xl mx-auto px-4 py-20 w-full">
          <h2 className="text-3xl font-bold text-center mb-12 font-poppins text-[#e2e8f0]">
            <i className="fas fa-user-circle mr-2 text-[#60a5fa]"></i>About Me
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-[#a0aec0] mb-6 font-poppins text-center">
              I am a dedicated cloud support engineer with a passion for solving
              complex infrastructure challenges. My expertise lies in helping
              businesses leverage cloud technologies to achieve their technical
              goals and optimize their operations.
            </p>
            <p className="text-[#a0aec0] mb-6 font-poppins text-center">
              With a strong foundation in cloud platforms and technical support,
              I specialize in providing solutions that enhance system
              reliability, performance, and security. I stay current with the
              latest cloud developments to deliver exceptional support and drive
              technological advancement.
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/cv.pdf";
                  link.download = "Derek_Owusu_Bekoe_CV.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="bg-[#60a5fa] text-[#1a1f2e] px-4 py-2 rounded-lg hover:bg-[#3b82f6] transition-colors font-poppins inline-flex items-center justify-center">
                <i className="fas fa-download mr-2"></i>
                Download CV
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="border-2 border-[#60a5fa] text-[#60a5fa] px-4 py-2 rounded-lg hover:bg-[#60a5fa] hover:text-[#1a1f2e] transition-colors font-poppins inline-flex items-center justify-center"
              >
                <i className="fas fa-briefcase mr-2"></i>
                View Portfolio
              </button>
            </div>
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-center mb-8 font-poppins text-[#e2e8f0]">
                <i className="fas fa-heart mr-2 text-[#60a5fa]"></i>Hobbies &
                Interests
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-[#2d364f] p-6 rounded-lg">
                  <h4 className="font-bold text-[#e2e8f0] mb-2 font-poppins flex items-center">
                    <i className="fas fa-table-tennis mr-2 text-[#60a5fa]"></i>
                    Tennis
                  </h4>
                  <p className="text-[#a0aec0] font-poppins">
                    Enjoys weekend games, meeting people on public courts.
                  </p>
                </div>
                <div className="bg-[#2d364f] p-6 rounded-lg">
                  <h4 className="font-bold text-[#e2e8f0] mb-2 font-poppins flex items-center">
                    <i className="fas fa-futbol mr-2 text-[#60a5fa]"></i>Soccer
                  </h4>
                  <p className="text-[#a0aec0] font-poppins">
                    Plays for exercise and fun with friends.
                  </p>
                </div>
                <div className="bg-[#2d364f] p-6 rounded-lg">
                  <h4 className="font-bold text-[#e2e8f0] mb-2 font-poppins flex items-center">
                    <i className="fas fa-bicycle mr-2 text-[#60a5fa]"></i>
                    Cycling
                  </h4>
                  <p className="text-[#a0aec0] font-poppins">
                    Explores mountain trails and nature on bike.
                  </p>
                </div>
                <div className="bg-[#2d364f] p-6 rounded-lg">
                  <h4 className="font-bold text-[#e2e8f0] mb-2 font-poppins flex items-center">
                    <i className="fas fa-tv mr-2 text-[#60a5fa]"></i>TV Series
                  </h4>
                  <p className="text-[#a0aec0] font-poppins">
                    Enjoys shows like Silicon Valley, Lost, Mr. Robot, and Narcos.
                  </p>
                </div>
                <div className="bg-[#2d364f] p-6 rounded-lg">
                  <h4 className="font-bold text-[#e2e8f0] mb-2 font-poppins flex items-center">
                    <i className="fas fa-plane mr-2 text-[#60a5fa]"></i>Travel
                  </h4>
                  <p className="text-[#a0aec0] font-poppins">
                    Loves discovering new places, cultures, and meeting people.
                  </p>
                </div>
                <div className="bg-[#2d364f] p-6 rounded-lg">
                  <h4 className="font-bold text-[#e2e8f0] mb-2 font-poppins flex items-center">
                    <i className="fas fa-fish mr-2 text-[#60a5fa]"></i>
                    AquaScaping
                  </h4>
                  <p className="text-[#a0aec0] font-poppins">
                    Enjoys aquariums, both visiting and building them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="resume" className="min-h-screen py-20 bg-[#2d364f]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-poppins text-[#e2e8f0]">
            <i className="fas fa-file-alt mr-2 text-[#60a5fa]"></i>Resume
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4 font-poppins text-[#e2e8f0]">
                  <i className="fas fa-graduation-cap mr-2 text-[#60a5fa]"></i>
                  Education
                </h3>
                <div className="space-y-4">
                  <div className="bg-[#1a1f2e] p-6 rounded-lg shadow-md">
                    <h4 className="font-bold text-[#e2e8f0] font-poppins">
                      Master of Science: Computer Science/Network Management
                    </h4>
                    <p className="text-[#a0aec0] font-poppins">
                      Colorado Technical University, Remote
                    </p>
                  </div>
                  <div className="bg-[#1a1f2e] p-6 rounded-lg shadow-md">
                    <h4 className="font-bold text-[#e2e8f0] font-poppins">
                      Bachelor of Science: Computer Science/Information
                      Technology
                    </h4>
                    <p className="text-[#a0aec0] font-poppins">
                      University of Education, Winneba, Ghana
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 font-poppins text-[#e2e8f0]">
                  <i className="fas fa-certificate mr-2 text-[#60a5fa]"></i>
                  Certifications
                </h3>
                <div className="space-y-4">
                  <div className="bg-[#1a1f2e] p-6 rounded-lg shadow-md">
                    <ul className="space-y-2 text-[#a0aec0] font-poppins">
                      <li>
                        AWS Certified Solutions Architect - Amazon Web Services
                      </li>
                      <li>CompTIA Security+ - CompTIA</li>
                      <li>
                        Microsoft Certified Database Administration – Microsoft
                      </li>
                      <li>ITIL® 3 Foundation – Axelos</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 font-poppins text-[#e2e8f0]">
                  <i className="fas fa-laptop-code mr-2 text-[#60a5fa]"></i>
                  Professional Development
                </h3>
                <div className="bg-[#1a1f2e] p-6 rounded-lg shadow-md">
                  <ul className="list-disc list-inside space-y-2 text-[#a0aec0] font-poppins">
                    <li>
                      Google Cloud Skill Bridge: Built Infrastructure with
                      Terraform, mastering automation for scalable environments.
                    </li>
                    <li>
                      Google Cloud Skill Bridge: Showcase IAM, VPCs, Compute
                      Engine, SQL, and Kubernetes expertise.
                    </li>
                    <li>
                      Google Cloud Skill Bridge: Show expertise in building,
                      scaling, and securing applications on Google Cloud.
                    </li>
                    <li>
                      Linux: Introduction to Shell Scripting for DevOps:
                      Developed efficient scripting techniques to streamline
                      operational tasks.
                    </li>
                    <li>
                      Creating a Dev Environment in AWS with Terraform: Gained
                      hands-on experience in creating and managing cloud
                      environments.
                    </li>
                    <li>
                      LinkedIn Learning Path: Become a Linux System
                      Administrator: Achieved expertise in managing Linux
                      environments, including advanced configuration and
                      troubleshooting.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 font-poppins text-[#e2e8f0]">
                <i className="fas fa-briefcase mr-2 text-[#60a5fa]"></i>
                Experience
              </h3>
              <div className="space-y-6">
                <div className="bg-[#1a1f2e] p-6 rounded-lg shadow-md">
                  <h4 className="font-bold text-[#e2e8f0] font-poppins">
                    Application Developer (AWS Cloud Support)
                  </h4>
                  <p className="text-[#a0aec0] font-poppins">
                    Veolia North America, Paramus, NJ • 01/22 - Present
                  </p>
                  <ul className="mt-4 list-disc list-inside text-[#a0aec0] font-poppins">
                    <li>
                      Led AWS cloud infrastructure management and optimization
                    </li>
                    <li>Developed and maintained cloud-based applications</li>
                    <li>
                      Implemented automated solutions for improved efficiency
                    </li>
                  </ul>
                </div>
                <div className="bg-[#1a1f2e] p-6 rounded-lg shadow-md">
                  <h4 className="font-bold text-[#e2e8f0] font-poppins">
                    Application Support Analyst
                  </h4>
                  <p className="text-[#a0aec0] font-poppins">
                    Veolia North America, Paramus, NJ • 03/2017 - 01/2022
                  </p>
                  <ul className="mt-4 list-disc list-inside text-[#a0aec0] font-poppins">
                    <li>
                      Provided technical support for enterprise applications
                    </li>
                    <li>Managed system upgrades and maintenance</li>
                    <li>Resolved complex application issues</li>
                  </ul>
                </div>
                <div className="bg-[#1a1f2e] p-6 rounded-lg shadow-md">
                  <h4 className="font-bold text-[#e2e8f0] font-poppins">
                    Information Technology Support Engineer
                  </h4>
                  <p className="text-[#a0aec0] font-poppins">
                    Veolia North America, Paramus, NJ • 05/2015 - 03/2017
                  </p>
                  <ul className="mt-4 list-disc list-inside text-[#a0aec0] font-poppins">
                    <li>Managed IT infrastructure and support operations</li>
                    <li>Implemented IT solutions and best practices</li>
                    <li>Provided technical guidance to team members</li>
                  </ul>
                </div>
                <div className="bg-[#1a1f2e] p-6 rounded-lg shadow-md">
                  <h4 className="font-bold text-[#e2e8f0] font-poppins">
                    Desktop Support Engineer
                  </h4>
                  <p className="text-[#a0aec0] font-poppins">
                    Virginia Beach Public Schools, Virginia Beach, VA • 10/2013
                    - 04/2015
                  </p>
                  <ul className="mt-4 list-disc list-inside text-[#a0aec0] font-poppins">
                    <li>Provided technical support for educational systems</li>
                    <li>Maintained hardware and software infrastructure</li>
                    <li>
                      Collaborated with teachers on technology integration
                    </li>
                  </ul>
                </div>
                <div className="bg-[#1a1f2e] p-6 rounded-lg shadow-md">
                  <h4 className="font-bold text-[#e2e8f0] font-poppins">
                    System Administrator
                  </h4>
                  <p className="text-[#a0aec0] font-poppins">
                    Ghana Education Service, Accra, Ghana • 09/2010 - 08/2013
                  </p>
                  <ul className="mt-4 list-disc list-inside text-[#a0aec0] font-poppins">
                    <li>Managed educational institution's IT systems</li>
                    <li>Implemented network security protocols</li>
                    <li>Trained staff on system usage</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 font-poppins text-[#e2e8f0]">
                <i className="fas fa-tools mr-2 text-[#60a5fa]"></i>
                Skills
              </h3>
              <div className="bg-[#1a1f2e] p-6 rounded-lg shadow-md space-y-6">
                <div>
                  <h4 className="font-bold text-[#e2e8f0] mb-2 font-poppins">
                    Cloud Platforms
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#2d364f] text-[#60a5fa] rounded font-poppins text-xs">
                      AWS RDS
                    </span>
                    <span className="px-3 py-1 bg-[#2d364f] text-[#60a5fa] rounded font-poppins text-xs">
                      AWS EC2
                    </span>
                    <span className="px-3 py-1 bg-[#2d364f] text-[#60a5fa] rounded font-poppins text-xs">
                      AWS IAM
                    </span>
                    <span className="px-3 py-1 bg-[#2d364f] text-[#60a5fa] rounded font-poppins text-xs">
                      CloudWatch
                    </span>
                    <span className="px-3 py-1 bg-[#2d364f] text-[#60a5fa] rounded font-poppins text-xs">
                      AWS S3
                    </span>
                    <span className="px-3 py-1 bg-[#2d364f] text-[#60a5fa] rounded font-poppins text-xs">
                      Auto Scaling
                    </span>
                    <span className="px-3 py-1 bg-[#2d364f] text-[#60a5fa] rounded font-poppins text-xs">
                      Azure
                    </span>
                    <span className="px-3 py-1 bg-[#2d364f] text-[#60a5fa] rounded font-poppins text-xs">
                      Google Cloud
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-[#e2e8f0] mb-2 font-poppins">
                    Infrastructure as Code
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#2d364f] text-[#60a5fa] rounded font-poppins text-xs">
                      Terraform
                    </span>
                    <span className="px-3 py-1 bg-[#2d364f] text-[#60a5fa] rounded font-poppins text-xs">
                      Ansible
                    </span>
                    <span className="px-3 py-1 bg-[#2d364f] text-[#60a5fa] rounded font-poppins text-xs">
                      Bash Scripting
                    </span>
                    <span className="px-3 py-1 bg-[#2d364f] text-[#60a5fa] rounded font-poppins text-xs">
                      CloudFormation
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-[#e2e8f0] mb-2 font-poppins">
                    Programming & Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#2d364f] text-[#60a5fa] rounded font-poppins text-xs">
                      Python
                    </span>
                    <span className="px-3 py-1 bg-[#2d364f] text-[#60a5fa] rounded font-poppins text-xs">
                      Linux RHEL
                    </span>
                    <span className="px-3 py-1 bg-[#2d364f] text-[#60a5fa] rounded font-poppins text-xs">
                      Nagios
                    </span>
                    <span className="px-3 py-1 bg-[#2d364f] text-[#60a5fa] rounded font-poppins text-xs">
                      Active Directory
                    </span>
                    <span className="px-3 py-1 bg-[#2d364f] text-[#60a5fa] rounded font-poppins text-xs">
                      SQL Server
                    </span>
                    <span className="px-3 py-1 bg-[#2d364f] text-[#60a5fa] rounded font-poppins text-xs">
                      GitLab
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-[#e2e8f0] mb-2 font-poppins">
                    Containerization & Monitoring
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#2d364f] text-[#60a5fa] rounded font-poppins text-xs">
                      Kubernetes
                    </span>
                    <span className="px-3 py-1 bg-[#2d364f] text-[#60a5fa] rounded font-poppins text-xs">
                      Docker
                    </span>
                    <span className="px-3 py-1 bg-[#2d364f] text-[#60a5fa] rounded font-poppins text-xs">
                      Splunk
                    </span>
                    <span className="px-3 py-1 bg-[#2d364f] text-[#60a5fa] rounded font-poppins text-xs">
                      ELK Stack
                    </span>
                    <span className="px-3 py-1 bg-[#2d364f] text-[#60a5fa] rounded font-poppins text-xs">
                      Prometheus
                    </span>
                    <span className="px-3 py-1 bg-[#2d364f] text-[#60a5fa] rounded font-poppins text-xs">
                      Grafana
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-[#e2e8f0] mb-2 font-poppins">
                    Security & Best Practices
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#2d364f] text-[#60a5fa] rounded font-poppins text-xs">
                      CI/CD
                    </span>
                    <span className="px-3 py-1 bg-[#2d364f] text-[#60a5fa] rounded font-poppins text-xs">
                      DevSecOps
                    </span>
                    <span className="px-3 py-1 bg-[#2d364f] text-[#60a5fa] rounded font-poppins text-xs">
                      AWS WAF
                    </span>
                    <span className="px-3 py-1 bg-[#2d364f] text-[#60a5fa] rounded font-poppins text-xs">
                      HashiCorp Vault
                    </span>
                    <span className="px-3 py-1 bg-[#2d364f] text-[#60a5fa] rounded font-poppins text-xs">
                      SIEM
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="min-h-screen py-20 bg-[#1a1f2e]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-poppins text-[#e2e8f0]">
            <i className="fas fa-briefcase mr-2 text-[#60a5fa]"></i>Portfolio
          </h2>
          <div className="flex justify-center mb-8 space-x-4">
            {["all", "cloud", "cybersecurity", "sys admin"].map((category) => (
              <button
                key={category}
                onClick={() => setActivePortfolioCategory(category)}
                className={`px-4 py-2 rounded-lg font-poppins ${activePortfolioCategory === category
                  ? "bg-[#60a5fa] text-[#1a1f2e]"
                  : "bg-[#1a1f2e] text-[#60a5fa] hover:bg-[#3b82f6] hover:text-[#1a1f2e]"
                  } transition-colors`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                title: "AWS Migration Project",
                description:
                  "Led the migration of legacy systems to AWS cloud infrastructure, implementing microservices architecture.",
                skills: ["AWS", "Docker", "Kubernetes", "Terraform"],
                image: "/assets/images/aws-migration.png",
                github: "https://github.com/username/aws-migration",
                medium: "https://medium.com/@username/aws-migration-case-study",
                category: "cloud",
              },
              {
                id: 2,
                title: "Cloud Security Framework",
                description:
                  "Developed a comprehensive security framework for multi-cloud environments using DevSecOps practices.",
                skills: ["Security", "DevSecOps", "CI/CD", "AWS WAF"],
                image: "/assets/images/cloud-security-framework.png",
                github: "https://github.com/username/cloud-security",
                medium: "https://medium.com/@username/cloud-security-framework",
                category: "cybersecurity",
              },
              {
                id: 3,
                title: "Serverless Analytics Platform",
                description:
                  "Built a scalable analytics platform using serverless architecture and real-time data processing.",
                skills: ["Lambda", "DynamoDB", "API Gateway", "CloudWatch"],
                image: "/assets/images/serverless-analytics.png",
                github: "https://github.com/username/serverless-analytics",
                medium: "https://medium.com/@username/serverless-analytics",
                category: "cloud",
              },
              {
                id: 4,
                title: "Multi-Cloud Monitoring",
                description:
                  "Implemented a unified monitoring solution across AWS, Azure, and GCP using open-source tools.",
                skills: ["Prometheus", "Grafana", "ELK Stack", "Python"],
                image: "/assets/images/multi-cloud-monitoring.png",
                github: "https://github.com/username/multi-cloud-monitoring",
                medium: "https://medium.com/@username/multi-cloud-monitoring",
                category: "sys admin",
              },
              {
                id: 5,
                title: "Container Orchestration",
                description:
                  "Designed and implemented a container orchestration platform for microservices deployment.",
                skills: ["Kubernetes", "Docker", "Helm", "GitOps"],
                image: "/assets/images/container-orchestration.png",
                github: "https://github.com/username/container-platform",
                medium: "https://medium.com/@username/container-orchestration",
                category: "sys admin",
              },
              {
                id: 6,
                title: "Infrastructure as Code",
                description:
                  "Automated cloud infrastructure deployment using Infrastructure as Code principles.",
                skills: ["Terraform", "CloudFormation", "Ansible", "Git"],
                image: "/assets/images/infrastructure-as-code.png",
                github: "https://github.com/username/infrastructure-as-code",
                medium: "https://medium.com/@username/iac-best-practices",
                category: "cloud",
              },
            ]
              .filter(
                (project) =>
                  activePortfolioCategory === "all" ||
                  project.category === activePortfolioCategory,
              )
              .map((project) => (
                <div
                  key={project.id}
                  className="bg-[#2d364f] rounded-lg shadow-md overflow-hidden"
                >
                  <img
                    src={project.image}
                    alt={`${project.title} project showcase`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2 font-poppins text-[#e2e8f0]">
                      {project.title}
                    </h3>
                    <p className="text-[#a0aec0] mb-4 font-poppins">
                      {project.description}
                    </p>
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-[#1a1f2e] text-[#60a5fa] text-[11px] rounded font-poppins"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#60a5fa] hover:text-[#3b82f6] font-poppins inline-flex items-center text-[11px]"
                      >
                        <i className="fab fa-github mr-2 text-[#60a5fa]"></i>
                        GitHub
                      </a>
                      <a
                        href={project.medium}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#60a5fa] hover:text-[#3b82f6] font-poppins inline-flex items-center text-[11px]"
                      >
                        <i className="fab fa-medium mr-2 text-[#60a5fa]"></i>
                        Article
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
      <section id="blog" className="min-h-screen py-20 bg-[#2d364f]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-poppins text-[#e2e8f0]">
            <i className="fas fa-blog mr-2 text-[#60a5fa]"></i>Blog
          </h2>
          <div className="flex justify-center mb-8 space-x-4">
            {["all", "cloud", "cybersecurity", "sys admin"].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg font-poppins ${activeCategory === category
                  ? "bg-[#60a5fa] text-[#1a1f2e]"
                  : "bg-[#1a1f2e] text-[#60a5fa] hover:bg-[#3b82f6] hover:text-[#1a1f2e]"
                  } transition-colors`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                title: "Cloud Technology Insights",
                description:
                  "Expert analysis on cloud computing trends and best practices...",
                category: "cloud",
                github: "https://github.com/username/cloud-insights",
                medium: "https://medium.com/@username/cloud-insights",
              },
              {
                id: 2,
                title: "Security Best Practices",
                description:
                  "Latest developments in cybersecurity and threat prevention...",
                category: "cybersecurity",
                github: "https://github.com/username/security-practices",
                medium: "https://medium.com/@username/security-practices",
              },
              {
                id: 3,
                title: "System Administration Tips",
                description:
                  "Professional insights into system administration and maintenance...",
                category: "sys admin",
                github: "https://github.com/username/sysadmin-tips",
                medium: "https://medium.com/@username/sysadmin-tips",
              },
            ]
              .filter(
                (post) =>
                  activeCategory === "all" || post.category === activeCategory,
              )
              .map((post) => (
                <div
                  key={post.id}
                  className="bg-[#1a1f2e] rounded-lg shadow-md overflow-hidden"
                >
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2 font-poppins text-[#e2e8f0]">
                      {post.title}
                    </h3>
                    <p className="text-[#a0aec0] mb-4 font-poppins">
                      {post.description}
                    </p>
                    <button className="text-[#60a5fa] hover:text-[#3b82f6] font-poppins mb-4">
                      Read More →
                    </button>
                    <div className="flex space-x-4 mt-2">
                      <a
                        href={post.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#60a5fa] hover:text-[#3b82f6] font-poppins inline-flex items-center text-xs"
                      >
                        <i className="fab fa-github mr-2"></i>
                        View on GitHub
                      </a>
                      <a
                        href={post.medium}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#60a5fa] hover:text-[#3b82f6] font-poppins inline-flex items-center text-xs"
                      >
                        <i className="fab fa-medium mr-2"></i>
                        Read on Medium
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen py-20 bg-[#1a1f2e]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-poppins text-[#e2e8f0]">
            <i className="fas fa-envelope mr-2 text-[#60a5fa]"></i>Contact Me
          </h2>
          <div className="max-w-xl mx-auto">
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 bg-[#2d364f] border border-[#4a5568] rounded-lg focus:outline-none focus:border-[#60a5fa] font-poppins text-[#e2e8f0] placeholder-[#a0aec0]"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 bg-[#2d364f] border border-[#4a5568] rounded-lg focus:outline-none focus:border-[#60a5fa] font-poppins text-[#e2e8f0] placeholder-[#a0aec0]"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  className="w-full px-4 py-2 bg-[#2d364f] border border-[#4a5568] rounded-lg focus:outline-none focus:border-[#60a5fa] font-poppins text-[#e2e8f0] placeholder-[#a0aec0]">
                </textarea>
              </div>
              <div className="flex justify-center mt-8 mb-4">
                <a
                  href="mailto:dowusubekoe@gmail.com"
                  className="w-1/2 bg-[#60a5fa] text-[#1a1f2e] px-6 py-3 rounded-lg hover:bg-[#3b82f6] transition-colors font-poppins font-bold text-center"
                >
                  Send Message
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-[#2d364f] py-16 border-t border-[#4a5568]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 font-poppins text-[#e2e8f0]">
                About
              </h3>
              <p className="text-[#a0aec0] font-poppins">
                Cloud Support Engineer helping businesses leverage cloud
                technologies for optimal performance and growth.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 font-poppins text-[#e2e8f0]">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {[
                  "home",
                  "about",
                  "resume",
                  "portfolio",
                  "blog",
                  "contact",
                ].map((section) => (
                  <li key={section}>
                    <button
                      onClick={() => scrollToSection(section)}
                      className="text-[#a0aec0] hover:text-[#60a5fa] transition-colors font-poppins capitalize">
                      {section}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 font-poppins text-[#e2e8f0]">
                Contact Info
              </h3>
              <ul className="space-y-2 text-[#a0aec0] font-poppins">
                <li className="flex items-center">
                  <i className="fas fa-envelope mr-2 text-[#60a5fa]"></i>
                  dowusubekoe@gmail.com
                </li>
                <li className="flex items-center">
                  <i className="fas fa-phone mr-2 text-[#60a5fa]"></i>
                  +1 (757) 915-3164
                </li>
                <li className="flex items-center">
                  <i className="fas fa-map-marker-alt mr-2 text-[#60a5fa]"></i>
                  Paramus, NJ, USA
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 font-poppins text-[#e2e8f0]">
                Follow Me
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/dowusubekoe-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#60a5fa] hover:text-[#3b82f6] text-2xl"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/derekowusubekoe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#60a5fa] hover:text-[#3b82f6] text-2xl"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://x.com/derekowusubekoe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#60a5fa] hover:text-[#3b82f6] text-2xl"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://medium.com/@dowusubekoe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#60a5fa] hover:text-[#3b82f6] text-2xl"
                >
                  <i className="fab fa-medium"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-[#4a5568] text-center">
            <p className="text-[#a0aec0] font-poppins">
              © 2025 Derek Owusu Bekoe. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MainComponent;
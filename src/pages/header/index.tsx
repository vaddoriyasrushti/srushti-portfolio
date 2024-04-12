import React, {useEffect, useState} from "react";
import '../../styles/header.css';
import moment from "moment";
import {educationList, experienceList, skills, personalInfo, portfolio} from './../data.json';
import GitHubIcon from "@/icons/github";
import LinkedInIcon from "@/icons/linkedIn";
import MoreIcon from "@/icons/moreIcon";

export default function Header() {
    const [activeSection, setActiveSection] = useState<string | null>(null);

    const yourAge = moment(new Date()).diff(moment(new Date(personalInfo.birthDate)), 'years');

    // @ts-ignore
    useEffect(() => {
        console.log("window", window.scrollY);
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const sections = document.querySelectorAll<HTMLElement>('section[id]');
            console.log("sections---", sections)
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                console.log("SectionTp--", sectionTop, sectionHeight, scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight)
                console.log("section.get", section.getAttribute('id'))
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    setActiveSection(section.getAttribute('id'));
                }
                if (scrollPosition > 0) {
                    // @ts-ignore
                    document.querySelector('.first-section').style.backgroundImage = 'none';
                }
            });
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div className="flex flex-col h-screen font-primary">
                <header
                    className="sticky top-0 left-0 z-50 px-4 text-gray-200 bg-zinc-900 lg:h-screen lg:w-60 xl:w-80 lg:fixed">
                    <div className="flex items-center justify-between h-16 lg:hidden">
                        <h2 className="text-xl font-bold tracking-wider">{personalInfo.name}</h2>
                        <div className="flex items-center">
                            <a className="ml-4 hover:text-blue-400" title="Github" href={personalInfo.gitHubLink} target="_blank">
                                <GitHubIcon />
                            </a>
                            <a className="ml-4 hover:text-blue-400" title="LinkedIn"  href={personalInfo.linkedInLink} target="_blank">
                                <LinkedInIcon />
                            </a>
                            <div className="ml-12 cursor-pointer">
                                <MoreIcon />
                            </div>
                        </div>
                    </div>
                    <nav
                        className="fixed top-0 bottom-0 flex flex-col items-center justify-between w-full py-10 mt-16
                        transition-all duration-300 bg-zinc-900 lg:mt-0 lg:left-0 lg:w-60 xl:w-80 left-0">
                        <div className="hidden md:flex md:flex-col md:items-center">
                            <img
                                className="object-cover w-48 h-48 border-8 rounded-full border-zinc-600 full"
                                src={personalInfo.profileImage} alt={personalInfo.name}/>
                            <h2 className="mt-2 text-2xl font-bold tracking-wider"> {personalInfo.name} </h2>
                        </div>
                        <div className="w-full">
                            <ul className="text-lg tracking-wider text-center">
                                <li><a className={`block py-2 hover:text-blue-400  ${activeSection==='home' && 'text-blue-400'}`} href="#home"> Home </a></li>
                                <li><a className={`block py-2 hover:text-blue-400  ${activeSection==='about' && 'text-blue-400'}`} href="#about"> About Me </a></li>
                                <li><a className={`block py-2 hover:text-blue-400  ${activeSection==='resume' && 'text-blue-400'}`} href="#resume"> Resume </a></li>
                                <li><a className={`block py-2 hover:text-blue-400  ${activeSection==='portfolio' && 'text-blue-400'}`} href="#portfolio"> Portfolio </a></li>
                                <li><a className={`block py-2 hover:text-blue-400  ${activeSection==='contact' && 'text-blue-400'}`} href="#contact"> Contact </a></li>
                            </ul>
                        </div>
                        <div className="justify-center hidden h-6 space-x-8 md:flex">
                            <a className="text-white hover:text-blue-400" href={personalInfo.gitHubLink} title="Github" target="_blank">
                                <GitHubIcon />
                            </a>
                            <a className="text-white hover:text-blue-400" href={personalInfo.linkedInLink} target="_blank" title="LinkedIn">
                                <LinkedInIcon />
                            </a>
                        </div>
                    </nav>
                </header>
                <div className="flex-grow overflow-y-scroll lg:ml-60 xl:ml-80 scroll-smooth">
                    <div id="home" className="w-full h-full">
                        <section className="w-full h-full first-section">
                            <div
                                className="z-10 relative flex flex-col items-center justify-center w-full h-full text-center text-gray-200">
                                <p className="text-2xl font-bold lg:text-4xl"> Hello </p>
                                <p className="mt-4 text-6xl font-bold lg:text-7xl"> I am {personalInfo.name} </p>
                                <p className="mt-4 text-2xl"> based in {personalInfo.location}. </p>
                                <a className="mt-8 btn btn-outline" href="#contact"> Contact Me </a>
                            </div>
                            <div className="absolute inset-0 bg-black bg-opacity-80"></div>
                        </section>
                    </div>
                    <div id="about">
                        <section className="px-4 pb-24 bg-white dark:bg-zinc-700">
                            <div className="container mx-auto">
                                <div className="relative py-20">
                                    <div className="relative flex items-center justify-center w-full">
                                        <div className="absolute flex items-center justify-center">
                                            <span
                                                className="text-4xl font-bold tracking-widest text-gray-200 uppercase md:text-5xl
                                                 lg:text-6xl dark:text-zinc-600 opacity-70">About Me</span>
                                            <span className="absolute bottom-0 w-24 h-1 bg-blue-400 rounded-full"></span>
                                        </div>
                                        <div
                                            className="z-0 text-2xl font-extrabold lg:text-3xl text-zinc-800 dark:text-zinc-100">Get To Know Me
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:flex">
                                    <div className="space-y-4 text-base text-center text-zinc-800 dark:text-zinc-100 lg:w-4/6 lg:px-8">
                                        <h2 className="text-2xl font-bold">I
                                            am
                                            <span className="font-bold text-blue-400"> {personalInfo.name}, </span>
                                            a Canadian Developer
                                        </h2>
                                        <p>
                                            I graduated from the Shree Swami Atmanand Saraswati Institute Of Technology with a
                                            Computer Engineering degree and have a passion for building things. I love to build
                                            Web applications.
                                        </p>
                                        <p>
                                            When I am not writing code, I enjoy being active and being outdoors.
                                        </p>
                                    </div>
                                    <div className="lg:w-2/6 lg:px-8">
                                        <div className="mt-16 text-base divide-y lg:mt-0 text-zinc-800 dark:text-zinc-100">
                                            <p className="py-2">
                                                <span className="mr-2 font-bold">Name:</span> {personalInfo.name}
                                            </p>
                                            <p className="py-2">
                                                <span className="mr-2 font-bold">Email:</span> {personalInfo.email}
                                            </p>
                                            <p className="py-2">
                                                <span className="mr-2 font-bold">Age:</span> {yourAge}
                                            </p>
                                            <p className="py-2">
                                                <span className="mr-2 font-bold">From:</span> {personalInfo.location}
                                            </p>
                                        </div>
                                        <div className="mt-6">
                                            <a className="btn btn-primary" href="/srushti_timbadiya_resume.pdf"
                                               download="srushti-timbadiya-resume"> Download Resume </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div id="resume">
                        <section className="px-4 pb-24 bg-zinc-100 dark:bg-zinc-800">
                            <div className="container mx-auto">
                                <div className="relative py-20">
                                    <div className="relative flex items-center justify-center w-full">
                                        <div className="absolute flex items-center justify-center">
                                            <span
                                                className="text-4xl font-bold tracking-widest text-gray-200 uppercase
                                                md:text-5xl lg:text-6xl dark:text-zinc-600 opacity-70">Summary</span>
                                            <span
                                                className="absolute bottom-0 w-24 h-1 bg-blue-400 rounded-full"></span>
                                        </div>
                                        <div
                                            className="z-0 text-2xl font-extrabold lg:text-3xl text-zinc-800 dark:text-zinc-100">Resume
                                        </div>
                                    </div>
                                </div>
                                <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100"> My Education </h2>
                                <div className="grid grid-cols-1 gap-4 mt-4 lg:grid-cols-2">
                                    {
                                        educationList.map((education, index) => {
                                            return (
                                                <div key={index}
                                                    className="p-6 border rounded border-zinc-300 dark:border-0 dark:bg-zinc-900">
                                                    <div
                                                        className="inline-block px-2 text-xs leading-6 text-white bg-blue-400 rounded">{education.duration}
                                                    </div>
                                                    <h2 className="mt-4 text-xl font-bold text-zinc-800 dark:text-zinc-300">{education.degree}</h2>
                                                    <h4 className="text-sm text-rose-700">{education.collage}</h4>
                                                    <p className="mt-6 text-zinc-800 dark:text-zinc-400">{education.other}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <h2 className="mt-12 text-2xl font-bold text-zinc-800 dark:text-zinc-100"> My Experience </h2>
                                <div className="grid grid-cols-1 gap-4 mt-4 lg:grid-cols-1">
                                    {
                                        experienceList.map((experience, index) => {
                                            return (
                                                <div key={index}
                                                    className="p-6 border rounded border-zinc-300 dark:border-0 dark:bg-zinc-900">
                                                    <div className="inline-block px-2 text-xs leading-6 text-white bg-blue-400 rounded">{experience.duration}</div>
                                                    <h2 className="mt-4 text-xl font-bold text-zinc-800 dark:text-zinc-300">{experience.position}</h2>
                                                    <h4 className="text-sm text-rose-700">{experience.company}</h4>
                                                    <p className="mt-6 text-zinc-800 dark:text-zinc-400">{experience.description}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <h2 className="mt-12 text-2xl font-bold text-zinc-800 dark:text-zinc-100"> My Skills </h2>
                                <div className="grid grid-cols-1 gap-4 mt-4 lg:grid-cols-2">
                                    {
                                       skills.map((skill, index) => {
                                           return (
                                               <div key={index}>
                                                   <div className="flex items-center justify-between"><p
                                                       className="font-bold text-zinc-800 dark:text-zinc-100">{skill.language}</p>
                                                       <p
                                                           className="font-bold text-zinc-800 dark:text-zinc-100">{skill.percentage}% </p>
                                                   </div>
                                                   <div className="h-2 rounded-full bg-slate-300">
                                                       <div className="h-full bg-blue-400 rounded-l-full"
                                                            style={{width: `${skill.percentage}%`}}></div>
                                                   </div>
                                               </div>
                                           )
                                       })
                                    }
                                </div>
                                <div className="mt-24 text-center">
                                    <a className="btn btn-primary" href="/srushti_timbadiya_resume.pdf" download="srushti-timbadiya-resume"> Download Resume </a>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div id="portfolio">
                        <section className="px-4 pb-24 bg-white dark:bg-zinc-700">
                            <div className="container mx-auto">
                                <div className="relative py-20">
                                    <div className="relative flex items-center justify-center w-full">
                                        <div className="absolute flex items-center justify-center">
                                            <span className="text-4xl font-bold tracking-widest text-gray-200 uppercase
                                             md:text-5xl lg:text-6xl dark:text-zinc-600 opacity-70">Portfolio</span>
                                            <span
                                                className="absolute bottom-0 w-24 h-1 bg-blue-400 rounded-full"></span>
                                        </div>
                                        <div
                                            className="z-0 text-2xl font-extrabold lg:text-3xl text-zinc-800 dark:text-zinc-100">My
                                            Work
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-wrap items-center mt-4">
                                    {
                                        portfolio.map((data, index) => {
                                            return (
                                                <a
                                                    key={index}
                                                    href={data.projectLink}
                                                    target="_blank"
                                                    className="block h-48 mx-auto my-2 duration-500 transform
                                                    bg-center bg-cover shadow-xl cursor-pointer w-96 hover:-translate-y-2 group"
                                                    // style="background-image: url(&quot;../../ffc.png&quot;);"
                                                >
                                                    <div
                                                        className="flex flex-col items-center justify-center
                                                         h-full px-10 duration-300 transform bg-black bg-opacity-40 hover:bg-opacity-75">
                                                        <h1 className="text-xl font-bold text-white duration-500 transform opacity-0 group-hover:opacity-90">
                                                            {data.name}
                                                        </h1>
                                                        <h4 className="text-base text-white duration-500 transform opacity-0 group-hover:opacity-90">{data.projectLang}</h4>
                                                    </div>
                                                </a>
                                            )
                                        })
                                    }
                                    </div>
                            </div>
                        </section>
                    </div>
                    <div id="contact">
                        <section className="px-4 pb-24 bg-zinc-100 dark:bg-zinc-800">
                            <div className="container mx-auto">
                                <div className="relative py-20">
                                    <div className="relative flex items-center justify-center w-full">
                                        <div className="absolute flex items-center justify-center">
                                            <span className="text-4xl font-bold tracking-widest text-gray-200
                                            uppercase md:text-5xl lg:text-6xl dark:text-zinc-600 opacity-70">Contact</span>
                                            <span className="absolute bottom-0 w-24 h-1 bg-blue-400 rounded-full"></span>
                                        </div>
                                        <div
                                            className="z-0 text-2xl font-extrabold lg:text-3xl text-zinc-800 dark:text-zinc-100">Get In Touch
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <form className="space-y-6 text-center" action="#">
                                        <div className="relative">
                                            <input id="name" name="name" type="text" placeholder="Name" required
                                             className="w-full h-10 text-gray-900 placeholder-transparent bg-transparent border-0 border-b-2
                                              border-gray-300 dark:text-zinc-100 peer focus:outline-none focus:ring-0 focus:border-blue-400"/>
                                            <label htmlFor="name" className="absolute left-0 -top-3.5 text-gray-600
                                             dark:text-zinc-300 text-sm transition-all peer-placeholder-shown:text-base
                                             peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-zinc-400 peer-placeholder-shown:top-2
                                             peer-focus:-top-3.5 peer-focus:text-blue-400 peer-focus:font-bold peer-focus:text-sm">Name</label>
                                        </div>
                                        <div className="relative">
                                            <input id="email" name="email" type="email" placeholder="Email" required
                                            className="w-full h-10 text-gray-900 placeholder-transparent bg-transparent border-0 border-b-2 border-gray-300
                                            dark:text-zinc-100 peer focus:outline-none focus:ring-0 focus:border-blue-400"/>
                                            <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 dark:text-zinc-300 text-sm transition-all
                                            peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-zinc-400
                                            peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-blue-400 peer-focus:font-bold
                                             peer-focus:text-sm">Email</label>
                                        </div>
                                        <div className="relative">
                                            <input id="message" name="message" type="textarea" placeholder="Tell us more..." required
                                            className="w-full h-10 text-gray-900 placeholder-transparent bg-transparent border-0 border-b-2 border-gray-300
                                            dark:text-zinc-100 peer focus:outline-none focus:ring-0 focus:border-blue-400"/>
                                            <label htmlFor="message" className="absolute left-0 -top-3.5 text-gray-600 dark:text-zinc-300 text-sm transition-all
                                            peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-zinc-400
                                             peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-blue-400 peer-focus:font-bold
                                              peer-focus:text-sm">Tell us more...</label>
                                        </div>
                                        <button className="btn btn-primary" type="submit"> Send Message</button>
                                    </form>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div id="footer">
                        <div className="px-4 py-16 bg-white dark:bg-zinc-700">
                            <div className="container mx-auto">
                                <p className="text-center text-zinc-800 dark:text-zinc-100"> Copyright © 2022
                                    <span className="font-bold text-blue-400">{personalInfo.name}</span>. All Rights Reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

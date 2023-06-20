import React from 'react'

// react icons
import { FiGrid, FiLinkedin, FiFigma } from 'react-icons/fi'
import { ImBlogger } from 'react-icons/im'
import { VscProject } from 'react-icons/vsc'
import {
    BsBootstrapFill,
    BsPersonLinesFill,
    BsGithub,
    BsGoogle,
} from 'react-icons/bs'
import { RiContactsLine, RiReactjsLine } from 'react-icons/ri'
import {
    SiSass,
    SiExpress,
    SiRedux,
} from 'react-icons/si'

import { GrGithub, GrTwitter } from 'react-icons/gr'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3, DiMongodb } from 'react-icons/di'
import { IoLogoJavascript } from 'react-icons/io'
import { FaNodeJs, FaGit } from 'react-icons/fa'
import { HiRectangleStack } from "react-icons/hi2"
import { About, Blog, Contact, Home, Project } from '../assets'

// sidebar menu list and icons
const sideBarMenu = [
    {
        text: 'Home',
        icon: <Home className="link-icon" />,
        url: '/',
    },
    {
        text: 'About',
        icon: <About className="link-icon" />,
        url: '/about',
    },
    {
        text: 'Projects',
        icon: <HiRectangleStack className="link-icon" />,
        url: '/project',
    },
    {
        text: 'Blog',
        icon: (
            <Blog
                className="link-icon"
                style={{ fill: 'current', stroke: 'current' }}
            />
        ),
        url: '/blog',
    },
    {
        text: 'Contacts',
        icon: <Contact className="link-icon" />,
        url: '/contact',
    }
]
// social media icons and url
const socialIcons = [
    {
        icon: <GrGithub className="icon github" />,
        url: 'https://github.com/ashraful2020',
    },

    {
        icon: <GrTwitter className="icon twitter" />,
        url: 'https://twitter.com/ashraful2023',
    },
    {
        icon: <FiLinkedin className="icon linkedin" />,
        url: 'https://www.linkedin.com/in/ashraful20/',
    },
]
// programming lanuages (spanText), icons and url
const skillSet = [
    {
        icon: <AiFillHtml5 className="skills-icon switch__color" />,
        spanText: 'HTML',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    },
    {
        icon: <DiCss3 className="skills-icon switch__color" />,
        spanText: 'CSS',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    },
    {
        icon: <IoLogoJavascript className="skills-icon switch__color" />,
        spanText: 'JAVASCRIPT',
        url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript',
    },
    {
        icon: <SiSass className="skills-icon switch__color" />,
        spanText: 'SASS',
        url: '',
    },

    {
        icon: <BsBootstrapFill className="skills-icon switch__color" />,
        spanText: 'BOOTSTRAP',
        url: '',
    },

    {
        icon: <FaGit className="skills-icon switch__color" />,
        spanText: 'GIT',
        url:
            'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/GitHub',
    },
    {
        icon: <BsGithub className="skills-icon switch__color" />,
        spanText: 'GITHUB',
        url:
            'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/GitHub',
    },
    {
        icon: <RiReactjsLine className="skills-icon switch__color" />,
        spanText: 'REACT JS',
        url:
            'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started',
    },
    {
        icon: <RiReactjsLine className="skills-icon switch__color" />,
        spanText: 'REACT Native',
        url:
            'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started',
    },
    {
        icon: <FaNodeJs className="skills-icon switch__color" />,
        spanText: 'NODE',
        url:
            'https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs',
    },

    {
        icon: <DiMongodb className="skills-icon switch__color" />,
        spanText: 'MONGO DB',
        url: '',
    },
    {
        icon: <SiExpress className="skills-icon switch__color" />,
        spanText: 'EXPRESS JS',
        url:
            'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Express',
    },
    {
        icon: <SiRedux className="skills-icon switch__color" />,
        spanText: 'Redux',
        url: 'https://redux.js.org/introduction/getting-started',
    },
    {
        icon: <FiFigma className="skills-icon switch__color" />,
        spanText: 'Figma',
        url: 'https://figma.com',
    },
    {
        icon: <BsGoogle className="skills-icon switch__color" />,
        spanText: 'Googling',
        url: 'https://google.com',
    },
]

export { sideBarMenu, socialIcons, skillSet }

import { Home, Briefcase, Shield, Move, Lock, Eye, Activity } from 'lucide-react';

import intelligenceImg from '../assets/intelligence.png';
import executiveImg from '../assets/executive.png';
import residentialImg from '../assets/residential.png';
import tacticalImg from '../assets/tactical.png';
import diplomaticImg from '../assets/diplomatic.png';

export const services = [
    {
        title: "CLOSE PROTECTION",
        description: "Professional security personnel with military and law enforcement backgrounds. Discrete coverage for principals and their families.",
        image: residentialImg
    },
    {
        title: "SECURE ESCORT",
        description: "Protective escort and secure transportation. Route planning, advance work, and real-time situational awareness.",
        image: executiveImg
    },
    {
        title: "THREAT ASSESSMENT",
        description: "Comprehensive risk analysis and intelligence gathering. Identify vulnerabilities and develop mitigation strategies.",
        image: intelligenceImg
    },
    {
        title: "SECURITY CONSULTING",
        description: "Security audits, protocol development, and training. Technical solutions for residential and corporate environments.",
        image: diplomaticImg
    }
];

export const sectors = [
    {
        icon: Briefcase,
        title: "CORPORATE",
        target: "Executive Protection",
        desc: "Executive protection, secure facilities assessment, and corporate security consulting.",
        image: executiveImg
    },
    {
        icon: Home,
        title: "HIGH NET-WORTH INDIVIDUALS",
        target: "Personal Security",
        desc: "Personal and family protection. Residential security assessments, travel planning, and close protection services.",
        image: residentialImg
    },
    {
        icon: Shield,
        title: "PUBLIC FIGURES",
        target: "Profile Protection",
        desc: "Security services for politicians, executives, and public personalities requiring discrete protection.",
        image: diplomaticImg
    },
    {
        icon: Activity,
        title: "EVENT SECURITY",
        target: "Special Events",
        desc: "Security planning and management for private events, corporate functions, and high-profile gatherings.",
        image: tacticalImg
    }
];

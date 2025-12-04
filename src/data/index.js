import { Home, Briefcase, Shield, Move, Lock, Eye, Activity } from 'lucide-react';

import intelligenceImg from '../assets/intelligence.png';
import executiveImg from '../assets/executive.png';
import residentialImg from '../assets/residential.png';
import tacticalImg from '../assets/tactical.png';
import diplomaticImg from '../assets/diplomatic.png';

export const services = [
    {
        title: "PERSONAL PROTECTION",
        description: "Trained bodyguards who blend in while keeping you and your family safe. We're there when you need us, invisible when you don't.",
        image: residentialImg
    },
    {
        title: "SECURE TRANSPORT",
        description: "Safe travel from A to B. We plan routes, check locations ahead of time, and handle any situation on the road.",
        image: executiveImg
    },
    {
        title: "RISK ASSESSMENT",
        description: "We look at your daily life and find the weak spots before problems happen. Then we fix them.",
        image: intelligenceImg
    },
    {
        title: "SECURITY ADVICE",
        description: "Expert guidance on making your home or office safer. From alarm systems to staff training, we cover it all.",
        image: diplomaticImg
    }
];

export const sectors = [
    {
        icon: Briefcase,
        title: "BUSINESSES",
        target: "Executive Protection",
        desc: "Keep your executives safe and your offices secure. We work with companies of all sizes.",
        image: executiveImg
    },
    {
        icon: Home,
        title: "FAMILIES",
        target: "Personal Security",
        desc: "Protection for you and your loved ones. At home, traveling, or anywhere life takes you.",
        image: residentialImg
    },
    {
        icon: Shield,
        title: "PUBLIC FIGURES",
        target: "Profile Protection",
        desc: "Quiet, professional security for people in the spotlight. We protect without drawing attention.",
        image: diplomaticImg
    },
    {
        icon: Activity,
        title: "EVENTS",
        target: "Special Events",
        desc: "From private parties to corporate gatherings, we make sure everything runs smoothly and safely.",
        image: tacticalImg
    }
];

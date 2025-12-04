import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorVariant, setCursorVariant] = useState("default");

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            height: 32,
            width: 32,
            backgroundColor: "rgba(201, 169, 98, 0.3)",
            border: "1px solid rgba(201, 169, 98, 0.5)",
        },
        text: {
            height: 80,
            width: 80,
            x: mousePosition.x - 40,
            y: mousePosition.y - 40,
            backgroundColor: "rgba(201, 169, 98, 0.1)",
            border: "1px solid rgba(201, 169, 98, 0.8)",
            mixBlendMode: "difference"
        },
        button: {
            height: 50,
            width: 50,
            x: mousePosition.x - 25,
            y: mousePosition.y - 25,
            backgroundColor: "rgba(201, 169, 98, 0.8)",
            border: "none",
        }
    };

    const dotVariants = {
        default: {
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            backgroundColor: "#C9A962",
        },
        text: {
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            backgroundColor: "#C9A962",
            scale: 0
        },
        button: {
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            backgroundColor: "#fff",
            scale: 0.5
        }
    };

    useEffect(() => {
        const handleMouseOver = (e) => {
            const target = e.target;
            if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
                setCursorVariant("button");
            } else if (['P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'SPAN', 'INPUT', 'TEXTAREA', 'LABEL'].includes(target.tagName)) {
                setCursorVariant("text");
            } else {
                setCursorVariant("default");
            }
        };

        window.addEventListener("mouseover", handleMouseOver);
        return () => window.removeEventListener("mouseover", handleMouseOver);
    }, []);

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
                variants={variants}
                animate={cursorVariant}
                transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                    mass: 0.1
                }}
            />
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999]"
                variants={dotVariants}
                animate={cursorVariant}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 28
                }}
            />
        </>
    );
};

export default CustomCursor;

import React from 'react'
import '../make/content.css'
import Kid1 from '../assets/boy.png'
import Kid7 from '../assets/ppp.png'
import Kide from '../assets/side.png'
import Kido from '../assets/right.png'
import Kida from '../assets/center.png'
import Kid4 from '../assets/oooo.png'
import Kid0 from '../assets/lll.png'
import { motion } from "framer-motion";

function Content() {
    const fadeUp = {
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const staggerParent = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <div className='content'>
            {/* Header Animation */}
            <motion.header
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
            >
                WELCOME TO <br />EDUCATIONAL TOY'S
            </motion.header>

            {/* Images Animation */}
            <motion.img
                src={Kide}
                alt=""
                className='sideimg'
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
            />
            <motion.img
                src={Kida}
                alt=""
                className='centerimg'
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
            />
            <motion.img
                src={Kido}
                alt=""
                className='rightimg'
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
            />

            {/* Text */}
            <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
            >
                SHOP BY AGE
            </motion.p>

            {/* Circle Boxes with Stagger Effect */}
            <motion.div
                className='circle'
                variants={staggerParent}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
            >
                <motion.div className='box1' variants={fadeUp}>
                    <div className='box'><img src={Kid1} alt="" /></div>
                    <p>1-3 years</p>
                </motion.div>

                <motion.div className='box1' variants={fadeUp}>
                    <div className='box'><img src={Kid7} alt="" /></div>
                    <p>4-7 years</p>
                </motion.div>

                <motion.div className='box1' variants={fadeUp}>
                    <div className='box'><img src={Kid0} alt="" /></div>
                    <p>8-10 years</p>
                </motion.div>

                <motion.div className='box1' variants={fadeUp}>
                    <div className='box'><img src={Kid4} alt="" /></div>
                    <p>11-18+ years</p>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Content

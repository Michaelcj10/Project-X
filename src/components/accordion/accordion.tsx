import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

const AccordionStyle = styled.div`
  .refresh {
    padding: 10px;
    position: absolute;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 10px;
    width: 20px;
    height: 20px;
    top: 10px;
    right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .content-placeholder {
    padding: 20px;
    transform-origin: top center;
  }

  header {
    background: #fff;
    box-shadow: 0 6px 10px 0 rgba(21, 25, 68, 0.12),
      0 8px 16px -12px rgba(21, 25, 68, 0.05),
      0 4px 8px -3px rgba(21, 25, 68, 0.02);
    border-radius: 10px;
    cursor: pointer;
    height: 40px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto-Bold;
  }

  .word {
    height: 18px;
    border-radius: 10px;
    display: inline-block;
    margin-bottom: 8px;
    margin-right: 8px;
    background: #0055ff;
    border-radius: 10px;
    display: inline-block;
  }

  .paragraph {
    margin-bottom: 20px;
  }

  section {
    overflow: hidden;
  }

  p {
    background: #ffffffdb;
    border-radius: 40px 31px 48px 51px;
    padding: 15px;
  }
`;

export const Accordion = ({
  i,
  expanded,
  setExpanded,
  heading,
  text,
  activeColor,
}) => {
  const isOpen = i === expanded;
  return (
    <AccordionStyle>
      <motion.header
        initial={false}
        animate={{ backgroundColor: isOpen ? activeColor : "#fff" }}
        onClick={() => setExpanded(isOpen ? false : i)}
      >
        {heading}
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <p>{text}</p>
          </motion.section>
        )}
      </AnimatePresence>
    </AccordionStyle>
  );
};

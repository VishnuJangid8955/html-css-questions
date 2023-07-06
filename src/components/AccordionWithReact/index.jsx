import { useCallback, useEffect, useState } from "react";
import Accordion, { AccordionPanel, AccordionToggle } from "./Accordion";

const AccordionWithReact = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [active, setActive] = useState(false);
  const [data, setData] = useState([]);

  const handleToggle = useCallback((index) => {
    if (index === activeIndex) {
      setActive((prev)=> !prev);
    } else {
      setActive(true);
    }
    setActiveIndex(index);
  }, [activeIndex]);

  const canShowPanel = useCallback(
    (index) => {
      return activeIndex === index && active;
    },
    [activeIndex, active]
  );

  useEffect(() => {
    setData([1, 2, 3, 4, 5]);
  }, []);

  useEffect(() => {
    console.log("activeIndex", activeIndex);
    console.log("active", active);
  }, [activeIndex, active]);

  return (
    <Accordion>
      {data.map((count, index) => (
        <Accordion.Item key={index} id={index}>
          <AccordionToggle onClick={() => handleToggle(index)}>
            Devtools Tech? 🤔 {count}
          </AccordionToggle>
          <AccordionPanel show={canShowPanel(index)}>
            The aim with Devtools Tech is to create a platform for Frontend
            Engineers where we all can improve, invest in ourselves, and grow by
            learning from high quality real world programming content. This is a
            platform where you can practice actual interview questions, watch
            courses, read blogs, and keep track of your progress across various
            domains and topics.
          </AccordionPanel>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default AccordionWithReact;

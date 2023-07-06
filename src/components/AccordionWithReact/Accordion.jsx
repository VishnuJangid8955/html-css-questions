import "./style.css";

const Accordion = (props) => {
  return (
    <div className={`accordion ${props.className || ""}`}>{props.children}</div>
  );
};

export const AccordionItem = (props) => {
  return (
    <div className={`accordion-item ${props.className || ""}`}>
      {props.children}
    </div>
  );
};

Accordion.Item = AccordionItem;

export const AccordionToggle = (props) => {
  return (
    <div onClick={props.onClick} className={`accordion-toggle ${props.className || ""}`}>
      {props.children}
    </div>
  );
};

Accordion.Toggle = AccordionToggle;

export const AccordionPanel = (props) => {
  return (
    <div
      className={`accordion-panel ${props.className || ""} ${
        props.show ? "show" : ""
      }`}
    >
      {props.children}
    </div>
  );
};

Accordion.Panel = AccordionPanel;

export default Accordion;

import isFunction from "lodash.isfunction";
import { cloneElement } from "react";

const CLASS_NAME = "className",
  SPACE = " ";

const addClassName = (props, name) => {
  if (CLASS_NAME in props) {
    props[CLASS_NAME] = props[CLASS_NAME].split(SPACE)
      .filter(x => x)
      .concat(name)
      .join(SPACE);
  } else {
    props[CLASS_NAME] = name;
  }
};

const addTwSupport = funcComponent => {
  if (!isFunction(funcComponent))
    throw new Error(
      "Argument should be function. Only function-components supported for now."
    );

  return (...args) => {
    const renderedNode = funcComponent(...args);
    if (!("pt-16" in renderedNode.props)) return renderedNode;

    let newProps = { ...renderedNode.props };
    addClassName(newProps, "pt-16");
    delete newProps["pt-16"];
    return cloneElement(renderedNode, newProps);
  };
};

export default addTwSupport;

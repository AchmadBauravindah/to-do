import React from "react";

// Yang ada di children itu aslinya props.children, jadi {children} karena di destructive variabelnya
const Main = ({ children }) => {
    return <div className="Main">{children}</div>;
};

export default Main;

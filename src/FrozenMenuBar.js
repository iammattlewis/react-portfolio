import React, { useState, useEffect } from "react";
import { Menubar } from "primereact/menubar";
import { classNames } from "primereact/utils";
import "./FrozenMenuBar.css";

const FrozenMenuBar = ({ items }) => {
  const [isMenuFrozen, setMenuFrozen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setMenuFrozen(true);
      } else {
        setMenuFrozen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={classNames("frozen-menu", { "frozen": isMenuFrozen })}>
      <Menubar model={items} onItemClick={(event) => event.originalEvent.currentTarget.click()} />
    </div>
  );
};

export default FrozenMenuBar;
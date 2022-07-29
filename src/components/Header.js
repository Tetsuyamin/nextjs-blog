import React from "react";
import {navLinks} from "../source/data";
import Link from "next/link";

export default function Header(){
  return(
    <header>
      <div className="brand">
        <h3>
          Menus
        </h3>
      </div>
      <nav>
        {navLinks.map((link, index) => {
          return(
            <ul>
              <Link href={link.path}>
                <li key={index}>
                  {link.name}
                </li>
              </Link>
            </ul>
          );
        })}
      </nav>
    </header>
  );
};
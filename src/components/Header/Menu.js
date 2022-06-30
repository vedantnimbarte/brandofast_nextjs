import React from "react";
import Link from "next/link";

import { menuItems } from "./menuItems";

const Menu = () => {
  return (
    <>
      <ul className="navbar-nav main-menu d-none d-lg-flex">
        {menuItems.map(
          ({ label, isExternal = false, name, items, ...rest }, index) => {
            const hasSubItems = Array.isArray(items);
            return (
              <React.Fragment key={name + index}>
                {hasSubItems ? (
                  <li className="nav-item dropdown" {...rest}>
                    <a
                      className="nav-link dropdown-toggle gr-toggle-arrow"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      href="/#"
                      onClick={(e) => e.preventDefault()}
                    >
                      {label}
                      <i className="icon icon-small-down"></i>
                    </a>
                    <ul className="gr-menu-dropdown dropdown-menu">
                      {items.map((subItem, indexSub) => {
                        const hasInnerSubItems = Array.isArray(subItem.items);
                        return (
                          <React.Fragment key={subItem.name + indexSub}>
                            {hasInnerSubItems ? (
                              <li className="drop-menu-item dropdown">
                                <a
                                  className="dropdown-toggle gr-toggle-arrow"
                                  role="button"
                                  data-toggle="dropdown"
                                  aria-expanded="false"
                                  aria-haspopup="true"
                                  href="/#"
                                  onClick={(e) => e.preventDefault()}
                                >
                                  {subItem.label}
                                  <i className="icon icon-small-down"></i>
                                </a>
                                <ul className="gr-menu-dropdown dropdown-menu dropdown-right">
                                  {subItem.items.map(
                                    (itemInner, indexInnerMost) => (
                                      <li
                                        className="drop-menu-item"
                                        key={itemInner.name + indexInnerMost}
                                      >
                                        {itemInner.isExternal ? (
                                          <a
                                            href={`${itemInner.name}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                          >
                                            {itemInner.label}
                                          </a>
                                        ) : (
                                          <Link href={`/${itemInner.name}`}>
                                            <a>{itemInner.label}</a>
                                          </Link>
                                        )}
                                      </li>
                                    )
                                  )}
                                </ul>
                              </li>
                            ) : (
                              <li className="drop-menu-item">
                                {subItem.isExternal ? (
                                  <a
                                    href={`${subItem.name}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    {subItem.label}
                                  </a>
                                ) : (
                                  <Link href={`/${subItem.name}`}>
                                    <a>{subItem.label}</a>
                                  </Link>
                                )}
                              </li>
                            )}
                          </React.Fragment>
                        );
                      })}
                    </ul>
                  </li>
                ) : (
                  <li className="nav-item" {...rest}>
                    {isExternal ? (
                      <a
                        className="nav-link"
                        href={`${name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {label}
                      </a>
                    ) : (
                      <Link href={`/${name}`}>
                        <a
                          className="nav-link"
                          role="button"
                          aria-expanded="false"
                        >
                          {label}
                        </a>
                      </Link>
                    )}
                  </li>
                )}
              </React.Fragment>
            );
          }
        )}
      </ul>
    </>
  );
};
export default Menu;

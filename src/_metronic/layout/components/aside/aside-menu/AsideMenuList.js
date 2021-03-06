/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl, checkIsActive } from "../../../../_helpers";

export function AsideMenuList({ layoutProps }) {
  const location = useLocation();
  const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url)
      ? ` ${!hasSubmenu &&
          "menu-item-active"} menu-item-open menu-item-not-hightlighted`
      : "";
  };

  return (
    <>
      {/* begin::Menu Nav */}
      <ul className={`menu-nav ${layoutProps.ulClasses}`}>
        {/*begin::1 Level*/}
        <li
          className={`menu-item ${getMenuItemActive("/dashboard", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/dashboard">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Library.svg")} />
            </span>
            <span className="menu-text">Dashboard</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}

        {/*begin::1 Level*/}
        <li
          className={`menu-item ${getMenuItemActive("/store", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/builder">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Earth.svg")} />
            </span>
            <span className="menu-text">Front Page</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}

        {/* Applications */}
        {/* begin::section */}
        <li className="menu-section ">
          <h4 className="menu-text">Store Management</h4>
          <i className="menu-icon flaticon-more-v2"></i>
        </li>
        {/* end:: section */}

        {/* eCommerce */}
        {/*begin::1 Level*/}
        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            "/e-commerce",
            true
          )}`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
          <NavLink className="menu-link menu-toggle" to="/e-commerce">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Shopping/Bag2.svg")} />
            </span>
            <span className="menu-text">eCommerce</span>
          </NavLink>
          <div className="menu-submenu">
            <i className="menu-arrow" />
            <ul className="menu-subnav">
              <li className="menu-item menu-item-parent" aria-haspopup="true">
                <span className="menu-link">
                  <span className="menu-text">eCommerce</span>
                </span>
              </li>
              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/e-commerce/customers"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/e-commerce/customers">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Customers</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}

              {/*begin::2 Level*/}
              <li
                className={`menu-item ${getMenuItemActive(
                  "/e-commerce/products"
                )}`}
                aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/e-commerce/products">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Products</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}
              {/*begin::2 Level*/}
              <li
                  className={`menu-item ${getMenuItemActive(
                      "/e-commerce/products/categories"
                  )}`}
                  aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/e-commerce/products">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Categories</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}
            </ul>
          </div>
        </li>
        {/*end::1 Level*/}

        {/*begin::1 Level*/}
        <li
            className={`menu-item menu-item-submenu ${getMenuItemActive(
                "/store",
                true
            )}`}
            aria-haspopup="true"
            data-menu-toggle="hover"
        >
          <NavLink className="menu-link menu-toggle" to="/store">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Book-open.svg")} />
            </span>
            <span className="menu-text">Store</span>
          </NavLink>
          <div className="menu-submenu">
            <i className="menu-arrow" />
            <ul className="menu-subnav">
              <li className="menu-item menu-item-parent" aria-haspopup="true">
                <span className="menu-link">
                  <span className="menu-text">Store</span>
                </span>
              </li>
              {/*begin::2 Level*/}
              <li
                  className={`menu-item ${getMenuItemActive(
                      "/store/articles"
                  )}`}
                  aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/store/articles">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Articles</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}

              {/*begin::2 Level*/}
              <li
                  className={`menu-item ${getMenuItemActive(
                      "/store/import"
                  )}`}
                  aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/store/import">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Import Analytics</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}
              {/*begin::2 Level*/}
              <li
                  className={`menu-item ${getMenuItemActive(
                      "/store/export"
                  )}`}
                  aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/store/export">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Export Analytics</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}
              {/*begin::2 Level*/}
              <li
                  className={`menu-item ${getMenuItemActive(
                      "/store/staff"
                  )}`}
                  aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/store/staff">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Staff Management</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}

              {/*begin::2 Level*/}
              <li
                  className={`menu-item ${getMenuItemActive(
                      "/store/staff"
                  )}`}
                  aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/store/register">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Cash Location Registers</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}
              {/*begin::2 Level*/}
              <li
                  className={`menu-item ${getMenuItemActive(
                      "/store/staff"
                  )}`}
                  aria-haspopup="true"
              >
                <NavLink className="menu-link" to="/store/details">
                  <i className="menu-bullet menu-bullet-dot">
                    <span />
                  </i>
                  <span className="menu-text">Public Information</span>
                </NavLink>
              </li>
              {/*end::2 Level*/}
            </ul>
          </div>
        </li>
        {/*end::1 Level*/}

        {/* Content Management System */}
        {/* begin::section */}
        <li className="menu-section ">
          <h4 className="menu-text">Content Management</h4>
          <i className="menu-icon flaticon-more-v2"></i>
        </li>
        {/* end:: section */}

        {/* CMS */}
        {/*begin::1 Level*/}
        <li
          className={`menu-item menu-item-submenu ${getMenuItemActive(
            "/cms/pages",
            false
          )}`}
          aria-haspopup="true"
          data-menu-toggle="hover"
        >
          <NavLink className="menu-link menu-toggle" to="/cms/pages">
            <span className="svg-icon menu-icon">
              <SVG
                src={toAbsoluteUrl("/media/svg/icons/Design/Interselect.svg")}
              />
            </span>
            <span className="menu-text">Pages</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}

        {/*begin::1 Level*/}
        <li
            className={`menu-item menu-item-submenu ${getMenuItemActive(
                "/cms/blog",
                false
            )}`}
            aria-haspopup="true"
            data-menu-toggle="hover"
        >
          <NavLink className="menu-link menu-toggle" to="/cms/blog">
            <span className="svg-icon menu-icon">
              <SVG
                  src={toAbsoluteUrl("/media/svg/icons/Home/Book.svg")}
              />
            </span>
            <span className="menu-text">Blog</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}

        {/*begin::1 Level*/}
        <li
            className={`menu-item menu-item-submenu ${getMenuItemActive(
                "/cms/promotions",
                false
            )}`}
            aria-haspopup="true"
            data-menu-toggle="hover"
        >
          <NavLink className="menu-link menu-toggle" to="/cms/promotions">
            <span className="svg-icon menu-icon">
              <SVG
                  src={toAbsoluteUrl("/media/svg/icons/Home/Bulb2.svg")}
              />
            </span>
            <span className="menu-text">Promotions</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}

        {/*begin::1 Level*/}
        <li
            className={`menu-item menu-item-submenu ${getMenuItemActive(
                "/cms/newsletter",
                false
            )}`}
            aria-haspopup="true"
            data-menu-toggle="hover"
        >
          <NavLink className="menu-link menu-toggle" to="/cms/newsletter">
            <span className="svg-icon menu-icon">
              <SVG
                  src={toAbsoluteUrl("/media/svg/icons/Home/Mailbox.svg")}
              />
            </span>
            <span className="menu-text">Newsletter</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}

        {/* Configuration */}
        {/* begin::section */}
        <li className="menu-section ">
          <h4 className="menu-text">System Configuration</h4>
          <i className="menu-icon flaticon-more-v2"></i>
        </li>
        {/* end:: section */}

        {/*begin::1 Level*/}
        <li
            className={`menu-item menu-item-submenu ${getMenuItemActive(
                "/system/social",
                false
            )}`}
            aria-haspopup="true"
            data-menu-toggle="hover"
        >
          <NavLink className="menu-link menu-toggle" to="/system/social">
            <span className="svg-icon menu-icon">
              <SVG
                  src={toAbsoluteUrl("/media/svg/icons/Communication/Chat6.svg")}
              />
            </span>
            <span className="menu-text">Social Integrations</span>
          </NavLink>
        </li>

        <li
            className={`menu-item menu-item-submenu ${getMenuItemActive(
                "/system/payment",
                false
            )}`}
            aria-haspopup="true"
            data-menu-toggle="hover"
        >
          <NavLink className="menu-link menu-toggle" to="/system/payment">
            <span className="svg-icon menu-icon">
              <SVG
                  src={toAbsoluteUrl("/media/svg/icons/Shopping/ATM.svg")}
              />
            </span>
            <span className="menu-text">Payment Gateways Integrations</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}

      </ul>



      {/* end::Menu Nav */}
    </>
  );
}

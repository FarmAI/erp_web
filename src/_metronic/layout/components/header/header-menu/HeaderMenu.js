/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl, checkIsActive } from "../../../../_helpers";

export function HeaderMenu({ layoutProps }) {
    const location = useLocation();
    const getMenuItemActive = (url) => {
        return checkIsActive(location, url) ? "menu-item-active" : "";
    }

    return <div
        id="kt_header_menu"
        className={`header-menu header-menu-mobile ${layoutProps.ktMenuClasses}`}
        {...layoutProps.headerMenuAttributes}
    >
        {/*begin::Header Nav*/}
        <ul className={`menu-nav ${layoutProps.ulClasses}`}>
            {/*begin::1 Level*/}
            <li className={`menu-item menu-item-rel ${getMenuItemActive('/dashboard')}`}>
                <NavLink className="menu-link" to="/dashboard">
                    <span className="menu-text">Dashboard</span>
                    {layoutProps.rootArrowEnabled && (<i className="menu-arrow" />)}
                </NavLink>
            </li>
            {/*end::1 Level*/}

            {/*Classic submenu*/}
            {/*begin::1 Level*/}
            <li
                data-menu-toggle={layoutProps.menuDesktopToggle}
                aria-haspopup="true"
                className={`menu-item menu-item-submenu menu-item-rel ${getMenuItemActive('/e-commerce')}`}>
                <NavLink className="menu-link menu-toggle" to="/google-material">
                    <span className="menu-text">eCommerce</span>
                    <i className="menu-arrow"></i>
                </NavLink>
                <div className="menu-submenu menu-submenu-classic menu-submenu-left">
                    <ul className="menu-subnav">
                        {/*begin::2 Level*/}
                        <li
                            className={`menu-item menu-item-submenu ${getMenuItemActive('/e-commerce/customers')}`}
                            data-menu-toggle="hover"
                            aria-haspopup="true"
                        >
                            <NavLink className="menu-link menu-toggle" to="/e-commerce/customers">
                                <span className="svg-icon menu-icon">
                                    <SVG src={toAbsoluteUrl("/media/svg/icons/Shopping/Wallet3.svg")} />
                                </span>
                                <span className="menu-text">
                                    Customers
                                </span>
                                <i className="menu-arrow" />
                            </NavLink>
                            <div className={`menu-submenu menu-submenu-classic menu-submenu-right`}>
                                <ul className="menu-subnav">
                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/e-commerce/customers/list')}`}>
                                        <NavLink className="menu-link" to="/e-commerce/customers/list">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">List</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}

                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/e-commerce/customers/new')}`}>
                                        <NavLink className="menu-link" to="/e-commerce/customers/new">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">New</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}

                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/e-commerce/customers/settings')}`}>
                                        <NavLink className="menu-link" to="/e-commerce/customers/settings">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Settings</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}

                                </ul>
                            </div>
                        </li>
                        {/*end::2 Level*/}

                        {/*begin::2 Level*/}
                        <li
                            className={`menu-item menu-item-submenu ${getMenuItemActive('/e-commerce/products')}`}
                            data-menu-toggle="hover"
                            aria-haspopup="true"
                        >
                            <NavLink className="menu-link menu-toggle" to="/e-commerce/products">
                                <span className="svg-icon menu-icon">
                                    <SVG src={toAbsoluteUrl("/media/svg/icons/Shopping/Price1.svg")} />
                                </span>
                                <span className="menu-text">
                                    Products
                                </span>
                                <i className="menu-arrow" />
                            </NavLink>
                            <div className={`menu-submenu menu-submenu-classic menu-submenu-right`}>
                                <ul className="menu-subnav">
                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/e-commerce/products/list')}`}>
                                        <NavLink className="menu-link" to="/e-commerce/products/list">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">List</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}

                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/e-commerce/products/new')}`}>
                                        <NavLink className="menu-link" to="/e-commerce/products/new">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">New</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}

                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/e-commerce/products/categories')}`}>
                                        <NavLink className="menu-link" to="/e-commerce/products/categories">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Categories</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}

                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/e-commerce/products/settings')}`}>
                                        <NavLink className="menu-link" to="/e-commerce/products/settings">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Settings</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}
                                </ul>
                            </div>
                        </li>
                        {/*end::2 Level*/}
                    </ul>
                </div>
            </li>
            {/*end::1 Level*/}

            {/*Mega submenu*/}
            {/*begin::1 Level*/}
            <li
                className={`menu-item menu-item-submenu menu-item-rel ${getMenuItemActive('/store')}`}
                data-menu-toggle={layoutProps.menuDesktopToggle}
                aria-haspopup="true"
            >
                <NavLink className="menu-link menu-toggle" to="/react-bootstrap">
                    <span className="menu-text">Store</span>
                    <i className="menu-arrow"></i>
                </NavLink>
                <div
                    className="menu-submenu menu-submenu-fixed menu-submenu-left"
                    style={{ width: "1000px" }}
                >
                    <div className="menu-subnav">
                        <ul className="menu-content">
                            <li className="menu-item ">
                                <h3 className="menu-heading menu-toggle">
                                    <i className="menu-bullet menu-bullet-dot"><span></span></i>
                                    <span className="menu-text">Inventory</span>
                                    <i className="menu-arrow"></i>
                                </h3>
                                <ul className="menu-inner">
                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/store/articles')}`}>
                                        <NavLink className="menu-link" to="/store/articles">
                                            <span className="menu-text">Articles</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}

                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/store/import')}`}>
                                        <NavLink className="menu-link" to="/react-bootstrap/alert">
                                            <span className="menu-text">Import</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}

                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/store/export')}`}>
                                        <NavLink className="menu-link" to="/react-bootstrap/accordion">
                                            <span className="menu-text">Export</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}

                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/store/activity')}`}>
                                        <NavLink className="menu-link" to="/react-bootstrap/badge">
                                            <span className="menu-text">Activity</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}

                                </ul>
                            </li>

                            <li className="menu-item ">
                                <h3 className="menu-heading menu-toggle">
                                    <i className="menu-bullet menu-bullet-dot"><span></span></i>
                                    <span className="menu-text">Front Store</span>
                                    <i className="menu-arrow"></i>
                                </h3>
                                <ul className="menu-inner">
                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/store/pages')}`}>
                                        <NavLink className="menu-link" to="/store/pages">
                                            <span className="menu-text">Pages</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}

                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/store/promotions')}`}>
                                        <NavLink className="menu-link" to="/store/promotions">
                                            <span className="menu-text">Promotions</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}

                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/store/details')}`}>
                                        <NavLink className="menu-link" to="/store/details">
                                            <span className="menu-text">Contact & Location Details</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}

                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/store/seo')}`}>
                                        <NavLink className="menu-link" to="/react-bootstrap/navbar">
                                            <span className="menu-text">Search Engine Optimization</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}

                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/store/blog')}`}>
                                        <NavLink className="menu-link" to="/store/blog">
                                            <span className="menu-text">Blog</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}

                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/store/social')}`}>
                                        <NavLink className="menu-link" to="/store/social">
                                            <span className="menu-text">Social Integrations</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}

                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/store/newsletter')}`}>
                                        <NavLink className="menu-link" to="/store/newsletter">
                                            <span className="menu-text">Newsletter</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}
                                </ul>
                            </li>

                            <li className="menu-item ">
                                <ul className="menu-inner">
                                    <h3 className="menu-heading menu-toggle">
                                        <i className="menu-bullet menu-bullet-dot"><span></span></i>
                                        <span className="menu-text">Staff</span>
                                        <i className="menu-arrow"></i>
                                    </h3>
                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/staff/permissions')}`}>
                                        <NavLink className="menu-link" to="/react-bootstrap/carousel">
                                            <span className="menu-text">Permissions and Roles</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}

                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/react-bootstrap/dropdowns')}`}>
                                        <NavLink className="menu-link" to="/staff/register">
                                            <span className="menu-text">Cash Register Units</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}

                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/react-bootstrap/forms')}`}>
                                        <NavLink className="menu-link" to="/staff/shifts">
                                            <span className="menu-text">Workers and Shifts</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>

        </ul>
        {/*end::Header Nav*/}
    </div>;
}

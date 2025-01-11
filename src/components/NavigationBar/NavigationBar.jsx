import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import "./NavigationBar.css";

export default function NavigationBar() {
  const location = useLocation();
  const tabs = [
    { title: "Home", link: "/home" },
    { title: "For you", link: "/your-interests" },
    { title: "Top stories", link: "/top-stories" },
    { title: "Local news", link: "/local-news" },
    { title: "Singapore", link: "/singapore" },
    { title: "World", link: "/world" },
    { title: "Business", link: "/business" },
    { title: "Technology", link: "/technology" },
    { title: "Entertainment", link: "/entertainment" },
    { title: "Sports", link: "/sports" },
  ];

  return (
    <div className="sticky-top bg-white mx-3">
      <Navbar className="pb-0">
        <NavbarBrand href="/home" className="text-muted" style={{ fontSize: "1.5rem" }}>
          <span className="text-primary">G</span>
          <span className="text-danger">o</span>
          <span className="text-warning">o</span>
          <span className="text-primary">d</span> News
        </NavbarBrand>
      </Navbar>
      <Nav className="d-flex justify-content-center">
        {tabs.map((tab, index) => (
          <NavItem key={index} className="p-0">
            <NavLink
              className={`pt-0 pb-2 link-hover ${
                location.pathname === tab.link
                  ? "active"
                  : "text-dark"
              }`}
              tag={Link}
              to={tab.link}
            >
              {tab.title}
            </NavLink>
          </NavItem>
        ))}
      </Nav>
    </div>
  );
}

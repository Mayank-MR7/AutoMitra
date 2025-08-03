import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../Header/Header.module.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Header2 from "../Header/Header2";
import { Navbar, Nav, Offcanvas } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfoCircle,
  faCogs,
  faHandshake,
  faEnvelope,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

  const handleCloseMenu = () => setShowMenu(false);
  const handleShowMenu = () => setShowMenu(true);

  const toggleServicesDropdown = () =>
    setShowServicesDropdown(!showServicesDropdown);

  return (
    <>
      <div className={styles.Header}>
        {/* Hamburger Toggle for Mobile */}
        <Navbar expand="lg" className="d-lg-none">
          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            onClick={handleShowMenu}
            className={styles.navbarToggle}
          >
            <FontAwesomeIcon icon={faBars} />
          </Navbar.Toggle>
        </Navbar>

        {/* Offcanvas Menu */}
        <Offcanvas
          show={showMenu}
          onHide={handleCloseMenu}
          placement="end"
          className={styles.offcanvasMenu}
        >
          <Offcanvas.Header closeButton className={styles.offcanvasHeader}>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className={styles.offcanvasBody}>
            <Nav className="flex-column">
              <Nav.Link
                as={Link}
                to="/"
                onClick={handleCloseMenu}
                className={styles.navLink}
              >
                <FontAwesomeIcon icon={faHome} className={styles.icon} /> Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/about-us"
                onClick={handleCloseMenu}
                className={styles.navLink}
              >
                <FontAwesomeIcon icon={faInfoCircle} className={styles.icon} /> About
              </Nav.Link>
              <Nav.Link onClick={toggleServicesDropdown} className={styles.navLink}>
                <FontAwesomeIcon icon={faCogs} className={styles.icon} /> Services{" "}
                <FontAwesomeIcon icon={faChevronDown} className={styles.icon} />
              </Nav.Link>
              {showServicesDropdown && (
                <div className={styles.dropdownMenuMobile}>
                  <Nav.Link
                    as={Link}
                    to="/insurance-claim"
                    onClick={handleCloseMenu}
                    className={styles.navLink}
                  >
                    Insurance Claim
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/get-franchise"
                    onClick={handleCloseMenu}
                    className={styles.navLink}
                  >
                    Get Franchise
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/hire-mechanic"
                    onClick={handleCloseMenu}
                    className={styles.navLink}
                  >
                    Hire Mechanic
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/get-hired"
                    onClick={handleCloseMenu}
                    className={styles.navLink}
                  >
                    Get Hired
                  </Nav.Link>
                </div>
              )}
              <Nav.Link
                as={Link}
                to="/partners"
                onClick={handleCloseMenu}
                className={styles.navLink}
              >
                <FontAwesomeIcon icon={faHandshake} className={styles.icon} /> Partners
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/contact"
                onClick={handleCloseMenu}
                className={styles.navLink}
              >
                <FontAwesomeIcon icon={faEnvelope} className={styles.icon} /> Contacts
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>

        {/* Desktop Navigation */}
        <div className={`d-none d-lg-block ${styles.desktopNav}`}>
          <ul>
            <li>
              <Link to="/">
                <FontAwesomeIcon icon={faHome} className={styles.icon} /> Home
              </Link>
            </li>
            <li>
              <Link to="/about-us">
                <FontAwesomeIcon icon={faInfoCircle} className={styles.icon} /> About
              </Link>
            </li>
            <li className={styles.dropdown}>
              <Link to="#">
                <FontAwesomeIcon icon={faCogs} className={styles.icon} /> Services{" "}
                <FontAwesomeIcon icon={faChevronDown} className={styles.icon} />
              </Link>
              <div className={styles.dropdownMenu}>
                <Link to="/insurance-claim">Insurance Claim</Link>
                <Link to="/get-franchise">Get Franchise</Link>
                <Link to="/hire-mechanic">Hire Mechanic</Link>
                <Link to="/get-hired">Get Hired</Link>
              </div>
            </li>
            <li>
              <Link to="/partners">
                <FontAwesomeIcon icon={faHandshake} className={styles.icon} /> Partners
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <FontAwesomeIcon icon={faEnvelope} className={styles.icon} /> Contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <Header2 />
    </>
  );
};

export default Header;

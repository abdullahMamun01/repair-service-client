import React from "react";
// import { AiOutlineMenu } from "@react-icons/all-files/fa/aiOutlineMenu";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlinePhone,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./../styles/App.css";

const NavbarMenu = () => {
  return (
    <header class="">
      <div class="wrap py-1" style={{ background: "#000957" }}>
        <div class="container">
          <div class="row justify-content-between">
            <div class="col">
              <p class="mb-0 phone">
                <AiOutlinePhone />{" "}
                <a className="text-decoration-none text-secondary" href="#">
                  +00 1234 567
                </a>
              </p>
            </div>
            <div class="col d-flex justify-content-end">
              <div class="social-media">
                <p class="mb-0 d-flex">
                  <a
                    href="#"
                    class="d-flex align-items-center justify-content-center"
                  >
                    <span class="f text-light bg-secondary mx-1 px-1">
                      <FaFacebookF>Facebook</FaFacebookF>
                    </span>
                  </a>
                  <a
                    href="#"
                    class="d-flex align-items-center justify-content-center"
                  >
                    <span class=" text-light bg-secondary mx-1 px-1">
                      <AiOutlineTwitter>Twitter</AiOutlineTwitter>
                    </span>
                  </a>
                  <a
                    href="#"
                    class="d-flex align-items-center justify-content-center"
                  >
                    <span class="fa text-light bg-secondary mx-1 px-1">
                      <FaInstagram>Instagram</FaInstagram>
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav
        className="navbar navbar-expand-lg navbar-dark text-secondary shadow-sm p-0"
        id="ftco-navbar"
        style={{ background: "#F4F6F8" }}
      >
        <div className="container">
          <a className="navbar-brand text-dark fw-bold" href="index.html">
            Repair <span>Service</span>
          </a>
          <form action="#" class="searchform order-sm-start order-lg-last">
            <div class="input-group d-flex">
              <input type="text" class="form-control" placeholder="Search" />
              <button
                type="submit"
                placeholder=""
                class="btn btn-outline-danger search"
              >
                <AiOutlineSearch />
              </button>
            </div>
          </form>
          <button
            class="navbar-toggler mt-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            id="openPopup"
          >
            <AiOutlineMenu className="text-info fs-3" />{" "}
            <span className="text-secondary">MENU</span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav m-auto">
              <li class="nav-item active">
                <Link to="/" className="nav-link text-secondary">
                  Home
                </Link>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle text-secondary"
                  href="#"
                  id="dropdown04"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Page
                </a>
                <div class="dropdown-menu" aria-labelledby="dropdown04">
                  <a class="dropdown-item" href="#">
                    Page 1
                  </a>
                  <a class="dropdown-item" href="#">
                    Page 2
                  </a>
                  <a class="dropdown-item" href="#">
                    Page 3
                  </a>
                  <a class="dropdown-item" href="#">
                    Page 4
                  </a>
                </div>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link text-secondary">
                  Blog
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link text-secondary">
                  Contact
                </a>
              </li>
              <li class="nav-item d-flex">
                  <Link to="/login" className="nav-link text-danger">Login /</Link>
                  <Link to="/signup" className="text-secondary text-decoration-none">signup</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavbarMenu;

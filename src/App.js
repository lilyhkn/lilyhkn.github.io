import "./styles.css";
import React, { useState, useEffect } from "react";
import { Router, Link } from "wouter";
import PageRouter from "./components/router.js";

export default function App() {
  return (
    <Router>
      <div className="header">
        <div className="links">
          <Link href="/">Home</Link>
          <span className="divider"> </span>
          <Link href="/coding">Coding</Link>
          <span className="divider"> </span>
          <Link href="/art">Art</Link>
        </div>
      </div>

      <main role="main" className="wrapper">
        <div>
          <PageRouter />
        </div>
      </main>

      <footer className="footer"></footer>
    </Router>
  );
}

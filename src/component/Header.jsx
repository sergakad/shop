function Header() {
  return (
    <nav className="teal darken-1">
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          React Shop
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="https://github.com/sergakad/shop">Repo</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };

function Footer() {
  return (
    <footer className="page-footer blue-grey darken-3">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a
            className="grey-text text-lighten-4 right"
            href="https://github.com/sergakad/shop"
          >
            Repo
          </a>
        </div>
      </div>
    </footer>
  );
}

export { Footer };

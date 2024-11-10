const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-row">
          <div className="footer-info">
            <div className="footer-logo">nique.</div>
            <div className="footer-copyright">
              <p>By Pawel Gola</p>
            </div>
          </div>

          <div className="footer-nav">
            <h4 className="footer-title">Pages</h4>

            <div className="footer-nav-list">
              <a className="footer-link" href="#">
                Menu
              </a>
              <a className="footer-link" href="#">
                Restaurant
              </a>
              <a className="footer-link" href="#">
                classNamees
              </a>
              <a className="footer-link" href="#">
                Book a Table
              </a>
              <a className="footer-link" href="#">
                Contact
              </a>
              <a className="footer-link" href="#">
                Blog
              </a>
              <a className="footer-link" href="#">
                Shop
              </a>
            </div>
          </div>

          <div className="footer-nav">
            <h4 className="footer-title">Utility Pages</h4>
            <div className="footer-nav-list">
              <a className="footer-link" href="#">
                Styleguide
              </a>
              <a className="footer-link" href="#">
                Licensing
              </a>
              <a className="footer-link" href="#">
                Changelog
              </a>
              <a className="footer-link" href="#">
                404 Page
              </a>
              <a className="footer-link" href="#">
                Password Protected
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};



export default Footer;
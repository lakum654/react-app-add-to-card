import { Outlet, Link } from "react-router-dom";


const Navbar = () => {
  return (<>
    <nav class="navbar navbar-expand-lg navbar-light w-100">
      <Link to="/" class="navbar-brand">Brand<b>Name</b></Link>
      <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarCollapse" class="collapse navbar-collapse justify-content-start">
        <div class="navbar-nav">
          <Link to="/" class="nav-item nav-link">Home</Link>
          <Link to="about" class="nav-item nav-link">About</Link>
          <div class="nav-item dropdown">
            <Link to="#" data-toggle="dropdown" class="nav-item nav-link dropdown-toggle">Services</Link>
            <div class="dropdown-menu">
              <Link to="service" class="dropdown-item">Web Design</Link>
              <Link to="service" class="dropdown-item">Web Development</Link>
              <Link to="service" class="dropdown-item">Graphic Design</Link>
              <Link to="service" class="dropdown-item">Digital Marketing</Link>
            </div>
          </div>
          <Link to="portfolio" class="nav-item nav-link active">Portfolio</Link>
          <Link to="blog" class="nav-item nav-link">Blog</Link>
          <Link to="contact" class="nav-item nav-link">Contact</Link>
        </div>
        <form class="navbar-form form-inline ml-auto">
          <div class="input-group search-box">
            <input type="text" class="form-control" placeholder="Search" />
            <div class="input-group-append">
              <button type="button" class="btn btn-danger"><span>Search</span></button>
            </div>
          </div>
        </form>
      </div>
    </nav>
  </>)
}


const Layout = () => {
  return (
    <>
      <Navbar />

      <Outlet />
    </>
  )
};

export default Layout;
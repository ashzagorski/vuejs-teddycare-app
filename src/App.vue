<template>
  <div id="app">
    <header class="header">
      <nav class="navbar navbar-expand-lg">
        <div class="container"><a href="#" class="navbar-brand"><img src="img/bear-512-final.jpg" alt="logo" class="d-none d-lg-block"><img src="img/bear-512-final.jpg" alt="logo" class="d-block d-lg-none"><span class="sr-only">Go to homepage</span></a>
          <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler navbar-toggler-right">Menu<i class="fa fa-bars"></i></button>
          <div id="navbarSupportedContent" class="collapse navbar-collapse">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active"><a href="category.html" class="nav-link">Todays Visits <span class="sr-only">(current)</span></a></li>
              <li class="nav-item"><a href="about.html" class="nav-link">All Visits</a></li>
              <li class="nav-item dropdown"><a id="clientZone" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link dropdown-toggle">Patients</a>
                <div aria-labelledby="clientZone" class="dropdown-menu"><a href="client-register.html" class="dropdown-item">Login or Register</a><a href="client-dashboard.html" class="dropdown-item">Dashboard</a><a href="client-applicants.html" class="dropdown-item">Applicants                </a><a href="client-job.html" class="dropdown-item">Post a new job  </a></div>
              </li>
              <li class="nav-item dropdown"><a onclick="location.href = '#/logout'" data-toggle="modal" class="btn navbar-btn btn-outline-light mb-5 mb-lg-0"> <i class="fa fa-sign-in"></i>Logout</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <router-view/>
     <footer class="footer">
      <div class="footer__block">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-12 mb-5">
              <h4 class="h5">About Jobs</h4>
              <p>Jobs is a <strong>Bootstrap 3 jobs board theme </strong> developed in the middle of Europe by <a href="http://ondrejsvestka.cz">Ondrej Svestka</a></p>
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. </p>
            </div>
            <div class="col-lg-4 col-md-6 mb-5">
              <h4 class="h5">This Theme</h4>
              <ul class="list-unstyled">
                <li><a href="index.html">Home</a></li>
                <li><a href="category.html">Jobs Listing</a></li>
                <li><a href="detail.html">Job detail</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><a href="blog.html">Blog listing</a></li>
                <li><a href="post.html">Blog Post</a></li>
                <li><a href="packages.html">Pricing packages</a></li>
                <li><a href="testimonials.html">Testimonials</a></li>
                <li><a href="text.html">Text page</a></li>
                <li><a href="faq.html">FAQ</a></li>
              </ul>
            </div>
            <div class="col-lg-4 col-md-6">
              <h4 class="h5">Our offices</h4>
              <h5>London</h5>
              <p> Donec eleifend<br />libero at sagittis<br />mollis + 44 2556 789 8799</p>
              <h5>Paris</h5>
              <p> Donec eleifend<br />libero at sagittis<br />mollis + 41 2556 789 8799</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
</style>

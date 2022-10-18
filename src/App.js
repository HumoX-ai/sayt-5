import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
          <div class="container">
            <a class="navbar-brand" href="#">
              Start Bootstrap
            </a>
            <button
              class="navbar-toggler collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-collapse collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#!">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#!">
                    Contact
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <section>
        <div className="text-center py-5 border-bottom">
          <div className="container py-4">
            <h1 className="fw-bold py-1">Welcome to Blog Home!</h1>
            <p className="lead ">
              A Bootstrap 5 starter layout for your next blog homepage
            </p>
          </div>
        </div>
      </section>
      <section className="py-4 container">
        <div className="row">
          <div className="col-8">
            <div class="card">
              <img
                src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg"
                class="card-img-top"
                alt=""
              />
              <div class="card-body">
                <h4 class="card-title">Featured Post Title</h4>
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a
                  laboriosam. Dicta expedita corporis animi vero voluptate
                  voluptatibus possimus, veniam magni quis!
                </p>
                <a href="#" class="btn btn-primary">
                  Read more →
                </a>
              </div>
            </div>
          </div>
          <div className="col-4 ">
            <div class="card">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Search</li>
                <li class="list-group-item">
                  <form class="d-flex p-1" role="search">
                    <input
                      class="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button class="btn btn-outline-primary" type="submit">
                      Go!
                    </button>
                  </form>
                </li>
              </ul>
            </div>
            <div className="py-4">
              <div class="card">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Categories</li>
                  <li class="list-group-item">
                    <div className="d-flex justify-content-around py-2">
                      <div>
                        <li>
                          <a href="#">Web Design</a>
                        </li>
                        <li>
                          <a href="#">HTML</a>
                        </li>
                        <li>
                          <a href="#">Freebies</a>
                        </li>
                      </div>
                      <div>
                        <li>
                          <a href="#">JavaScript</a>
                        </li>
                        <li>
                          <a href="#">CSS</a>
                        </li>
                        <li>
                          <a href="#">Tutorials</a>
                        </li>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="py-2">
              <div class="card">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Side Widget</li>
                  <li class="list-group-item">
                    <p>
                      You can put anything you want inside of these side
                      widgets. They are easy to use, and feature the Bootstrap 5
                      card component!
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row py-3">
          <div className="col-lg-4">
            <div class="card">
              <img
                src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg"
                class="card-img-top"
                alt=""
              />
              <div class="card-body">
                <p className="text-muted">October 18, 2022</p>
                <h5 class="card-title">Post Title</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reiciendis aliquid atque, nulla.
                </p>
                <a href="#" class="btn btn-primary">
                  Read more →
                </a>
              </div>
            </div>
            <div className="py-3">
              <div class="card">
                <img
                  src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg"
                  class="card-img-top"
                  alt=""
                />
                <div class="card-body">
                  <p className="text-muted">October 18, 2022</p>
                  <h5 class="card-title">Post Title</h5>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reiciendis aliquid atque, nulla.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Read more →
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div class="card">
              <img
                src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg"
                class="card-img-top"
                alt=""
              />
              <div class="card-body">
                <p className="text-muted">October 18, 2022</p>
                <h5 class="card-title">Post Title</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reiciendis aliquid atque, nulla.
                </p>
                <a href="#" class="btn btn-primary">
                  Read more →
                </a>
              </div>
            </div>
            <div className="py-3">
              <div class="card">
                <img
                  src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg"
                  class="card-img-top"
                  alt=""
                />
                <div class="card-body">
                  <p className="text-muted">October 18, 2022</p>
                  <h5 class="card-title">Post Title</h5>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reiciendis aliquid atque, nulla.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Read more →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link disabled" href="#">
                Never
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link disabled" href="#">
                ...
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                15
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                Older
              </a>
            </li>
          </ul>
        </nav>
      </section>
      <footer className="bg-dark p-5">
        <p className="lead text-light text-center">Copyright © Your Website 2022</p>
      </footer>
    </div>
  );
}

export default App;

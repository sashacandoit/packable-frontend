import './App.css';

function App() {
  return (
    <div className="App">
      <header class="lg">
        <div class="container">
          <div class="row ">
            <div class="col-lg-6 tablet-lg-top-30">
              <h2 class="page-title mb-15">
                <span class="text-primary">Style Guide</span>
                Maker
              </h2>
              <h6 class="secondary-font fs-14 fw-bold mb-40">
                Login to your account to get started!
              </h6>
              <p class="fs-16 mb-40 tablet-lg-top">
                Don't have an account yet? Register for a user account to generate and save your style guides!
              </p>
              <a href="/register" class="btn btn-primary pill m-10 ml-0">
                <i class="fas fa-user mr-5">
                </i>Sign Up</a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

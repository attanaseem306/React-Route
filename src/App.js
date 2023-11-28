// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';


function App() {
  const navigate = useNavigate();
 return(

    <>
    <nav  class="navbar navbar-expand-lg sticky-top ">
    <div class="container-fluid mx-4">
        <a class="navbar-brand" href="#">
          <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Ffree-backgrounds&psig=AOvVaw0lZ1Ie7vrv7wcCorcUESTT&ust=1701268908642000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCJj4ltr25oIDFQAAAAAdAAAAABAE'></img>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon text-light"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0 text-center">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">How it works</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Reviews</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Pricing</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">FAQs</a>
                </li>
            </ul>
            <form class="d-flex justify-content-center" role="search">
                <button class="btns text-light fw-bold" type="submit">LOG IN</button>
                <button class="btn text-center" type="submit">Get Started</button>
            </form>
        </div>
    </div>
</nav>
  <button onClick={() => setTimeout(() => {
      navigate('/Contact')
  }, 5000)}>Contatc</button>

    </>
  )
  
}


export default App;

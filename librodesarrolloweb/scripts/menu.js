document.write(`<nav id="sidebar">
<div class="sidebar-header navbar-static-top">
  <h5>Libro de Desarrollo Web</h5>
</div>

<ul class="list-unstyled components">
  <p>Dummy Heading</p>
  <li class="active">
    <a
      href="#homeSubmenu"
      data-toggle="collapse"
      aria-expanded="false"
      class="dropdown-toggle"
      >Introducción</a
    >
    <ul class="collapse list-unstyled" id="homeSubmenu">
      <li>
        <a href="introduccion.html">Introducción al Desarrollo Web</a>
      </li>
      <li>
        <a href="generos.html">Géneros de videojuegos</a>
      </li>
      <li>
        <a href="#">Home 3</a>
      </li>
    </ul>
  </li>
  <li>
    <a href="#">About</a>
    <a
      href="#pageSubmenu"
      data-toggle="collapse"
      aria-expanded="false"
      class="dropdown-toggle"
      >Pages</a
    >
    <ul class="collapse list-unstyled" id="pageSubmenu">
      <li>
        <a href="#">Page 1</a>
      </li>
      <li>
        <a href="#">Page 2</a>
      </li>
      <li>
        <a href="#">Page 3</a>
      </li>
    </ul>
  </li>
  <li>
    <a href="#">Portfolio</a>
  </li>
  <li>
    <a href="#">Contact</a>
  </li>
</ul>

<ul class="list-unstyled CTAs">
  <li>
    <a
      href="https://andreaoviedov.com"
      class="article"
      >andreaoviedov.com</a
    >
  </li>
</ul>
</nav>`);

<template>
  <nav class="navbar navbar-expand-lg bg-body fixed-top px-3 border-bottom border-3">
    <router-link to="/" class="navbar-brand">Utilities & Tools</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg">
      <span class="navbar-toggler-icon"></span>
    </button>
    <!-- Offcanvas -->
    <div class="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="navbarOffcanvasLg">
      <!-- Offcanvas header -->
      <div class="offcanvas-header">
        <div class="offcanvas-title" id="offcanvasNavbarLabel">Utilities &
          Tools</div>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
      </div>
      <!-- offcanvas body -->
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 d-flex align-items-center">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/tool-one" class="nav-link">Tool One</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/tool-two" class="nav-link">Tool Two</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <ThemeSwitch />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import ThemeSwitch from './ThemeSwitch.vue';

export default {
  name: 'MainNavbar',
  components: {
    ThemeSwitch,
  },
};
</script>

<style></style>
<template>
  <header>
    <nav class="navbar navbar-light bg-transparent navbar-expand-md">
      <div class="container-fluid">
        <!-- logo/brand/homepage link -->
        <div id="logo-div">
          <a class="navbar-brand" href="../../../../../../index.html" alt="Play2Learn Home"
             title="Play2Learn Home" target="_self">
            <img id="logo"
                 src="../../src/assets/play2Learn_logo.png"
                 alt="Play2Learn Logo"
                 aria-description="AI generated image"/>
          </a>
        </div>

        <!-- Main Menu toggle btn -->
        <button id="mobile-menu-btn" class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbar-content" title="Main Menu toggle" value="menu">
          <span id="mobile-menu-icon" class="navbar-toggler-icon"></span>
        </button>

        <div id="navbar-content" class="collapse navbar-collapse justify-content-end">
          <ul id="top-nav" class="navbar-nav ms-auto">
            <li id="top-nav-home" class="nav-item">
              <a class="nav-link" href="../../../../../../index.html" alt="Play2Learn Home" target="_self">
                Home
              </a>
            </li>
            <li id="top-nav-games" class="nav-item dropdown">
              <a id="games-dropdown" class="nav-link dropdown-toggle" href="#" role="button"
                 data-bs-toggle="dropdown" alt="Games Menu">
                Games
              </a>
              <ul id="top-sub-nav-games" class="dropdown-menu">
                <li id="top-nav-math-facts" class="dropdown-item">
                  <a href="../../../../../../games/math-facts/math-facts.html" alt="Math Facts Game">
                    Math Facts
                  </a>
                </li>
                <li id="top-nav-anagram-hunt" class="dropdown-item">
                  <a href="/games/anagram-hunt/anagram-hunt-vue/anagram-hunt" alt="Anagram Hunt Game">
                    Anagram Hunt
                  </a>
                </li>
              </ul>
            </li>
            <li id="top-nav-about" class="nav-item">
              <a class="nav-link" href="../../../../../../about.html" alt="About Play2Learn">
                About
              </a>
            </li>
            <li id="top-nav-contact-us" class="nav-item">
              <a class="nav-link" href="../../../../../../contact-us.html" alt="Contact Play2Learn">
                Contact Us
              </a>
            </li>
            <li id="top-nav-login" class="nav-item">
              <a class="nav-link" href="../../../../../../login.html" alt="Play2Learn Login">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <hr id="header-rule"/>
  </header>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: 'HeaderNavBar'
});
</script>

<style src="../../public/anagram-styles/anagram-normalize.css"></style>
<style src="../../public/anagram-styles/anagram-style.css"></style>

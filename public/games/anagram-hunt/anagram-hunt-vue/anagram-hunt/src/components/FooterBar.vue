<template>
  <footer class="mt-auto">
    <hr id="footer-rule" class="my-0"/>

    <div id="footer-div" class="d-flex row w-100 mx-0 justify-content-between">
      <div class="col-md-6 col-sm-12 mt-2 me-0 ms-2 mb-2 px-0">
        <p id="copyright-design" class="mb-1">
          <span class="fw-bold">&copy; 2024 Play2Learn</span>
          &nbsp;&verbar;&nbsp;
          <cite>Website by
            <a href="https://github.com/heather-cunningham" alt="See my GitHub portfolio"
               title="See my GitHub portfolio" target="_blank">
              Heather I. Cunningham
            </a>
          </cite>
        </p>
      </div>

      <div class="col-md-5 col-sm-12 mx-0 my-0 px-0">
        <ul id="social-media-list" class="mb-2 ms-2 px-0">
          <li>
            <a href="../../../../../../contact-us.html" alt="Contact Play2Learn" title="Contact Us">
              <i class="fa-solid fa-square-envelope"></i>
            </a>
          </li>
          <li>
            <a href="https://instagram.com" alt="Open Instagram in a new window" title="Instagram" target="_blank">
              <i class="fa-brands fa-square-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://x.com" alt="Open X, formerly known as Twitter, in a new window" title="X (fka Twitter)"
               target="_blank">
              <i class="fa-brands fa-square-x-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://facebook.com" alt="Open facebook in a new window" title="facebook" target="_blank">
              <i class="fa-brands fa-square-facebook"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: 'FooterBar'
});
</script>

<style src="../../public/anagram-styles/anagram-normalize.css"></style>
<style src="../../public/anagram-styles/anagram-style.css"></style>

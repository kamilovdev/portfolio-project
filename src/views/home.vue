<script setup>
 import { RouterLink } from 'vue-router';
</script>
<template>
  <div class="wrapper">
    <header>
      <div class="header-container">
        <div class="header-text">
          <h1>Developer</h1>
        </div>

        <div class="header-info">
          <div class="profile-container">
            <div class="profile-header">
              <img class="profile-photo" src="../../public/home/Profile photo.png" alt="">

              <span class="profile-info">
                <h6 class="profile-name">Amirbek</h6>
                <p class="profile-role">Front-End Developer</p>
              </span>
            </div>

            <div class="profile-details">
              <ul class="profile-contact-list">
                <li class="contact-item">
                  <img class="contact-icon" src="../../public/home/email.svg" alt="">
                  <a class="contact-link" href="#">amirbekk737@gmail.com</a>
                </li>
                <li class="contact-item">
                  <img class="contact-icon" src="../../public/home/location.svg" alt="">
                  <a class="contact-link" href="#">Uzbekistan, Khorezm</a>
                </li>
                <li class="contact-item">
                  <img class="contact-icon" src="../../public/home/case.svg" alt="">
                  <a class="contact-link" href="#">Full-time / Freelancer</a>
                </li>
              </ul>

              <div class="profile-actions">
                <a class="download-cv" href="#" download="#">Download CV
                  <img class="download-icon" src="../../public/home/download.svg" alt="">
                </a>
              </div>
            </div>
          </div>

          <div class="intro-container">
            <div class="main-content">
              <span class="intro-text">
                <h1 class="greeting">Hey</h1>
                <h1 class="name">I’m <span>Amirbek</span>,</h1>
                <h1 class="profession">Front-End developer</h1>
              </span>
              <span class="about">
                <p class="description">I help business grow by crafting amazing web experiences. If you’re <br> looking
                  for a developer that likes to get stuff done,</p>
                <a class="contact-link" href="#">let’s talk <img class="email-icon" src="../../public/home/Button.svg"
                    alt="Email Icon"></a>
              </span>
            </div>

            <div class="info-img">
              <img src="../../public/home/Highlights.png" alt="">
            </div>
          </div>
        </div>

      </div>
    </header>

    <section class="about-section">
      <div class="about-container">
        <div class="about-scroll">
          <img src="../../public/home/Scroll.svg" alt="">
        </div>
        <div class="about-header">
          <div class="about-btn">
            <h1>About Me</h1>
          </div>

          <div class="about-info">
            <h1>Hello! <br>
            </h1>
            <span>
              <p>
                My name is Sinan and I specialize in web developement that utilizes <span>HTML</span>,
                <span>TailwindCss</span>, <span>JS</span>, <br> and <span>VUE</span> etc. <br>
                I am a highly motivated individual and eternal optimist dedicated to writing clear, <br> concise, robust
                code
                that works. Striving to never stop learning and improving. <br>
                When I'm not coding, I am <span>writing bolgs</span> , reading, or picking up some new hands-on <br> art
                project like
                <span>photography</span> . <br>
                I like to have my perspective and belief systems challenged so that I see the world <br> through new
                eyes.
              </p>
            </span>
          </div>
        </div>
      </div>
    </section>

    <section class="features-section">
      <div class="features-container">
        <div class="feature-image">
          <img src="../../public/home/Scroll.svg" alt="Scroll Icon" class="scroll-icon">
        </div>
        <div class="feature-content">
          <div class="feature-card">
            <span class="feature-icon">
              <img src="../../public/home/Color.svg" alt="Feature Color">
            </span>
            <div class="feature-details">
              <span class="feature-icon-container">
                <img src="../../public/home/komp.svg" alt="Development Icon" class="development-icon">
              </span>
              <span class="feature-text">
                <p class="feature-title">Web Development</p>
                <small class="feature-stack">HTML · TailwindCSS · JS · Vue</small>
              </span>
            </div>
          </div>
        </div>

        <div class="language-container">
          <div class="tailwind-html">
            <div class="html">
              <div>
                <img src="../../public/home/html.png" alt="">
              </div>
              <h1>HTML</h1>
            </div>

            <div class="tailwind">
              <div class="tailwind-img">
                <img src="../../public/home/tailwind.svg" alt="">
              </div>
              <h1>TailwindCSS</h1>
            </div>
          </div>

          <div class="js-vue">

            <div class="js">
              <div>
                <img src="../../public/home/yellow.png" alt="">
              </div>
              <h1>JS</h1>
            </div>

            <div class="vue">
              <div class="vue-img">
                <img src="../../public/home/vue.svg" alt="">
              </div>
              <h1>VUE</h1>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="works-section">
      <div class="works-container">

        <div class="scroll-indicator">
          <img src="../../public/home/Scroll.svg" alt="Scroll Indicator">
        </div>

        <div class="works-content">
          <div class="works-header">
            <h1 class="works-title">Works</h1>
            <span class="works-highlight">
              <img src="../../public/home/green.svg" alt="Highlight Icon">
            </span>
            <p class="works-description">
              I had the pleasure of working with these awesome projects
            </p>
          </div>

          <div class="works-href">
             <RouterLink to="/">view Website</RouterLink>
          </div>

          <div class="works-cta">
            <span class="cta-icon">
              <img src="../../public/home/Content.png" alt="Content Icon">
            </span>
          </div>
        </div>
      </div>
    </section>
    
    <section class="blogs-section">
      <div class="blogs-container">
        <div class="scroll-indicator">
          <img src="../../public/home/Scroll.svg" alt="Scroll Indicator">
        </div>

        <div class="blogs-content">
          <div class="blogs-header"> 
            <h1>Blogs</h1>
            <span>
              <img src="../../public/home/green.svg" alt="Highlight Icon">
            </span>
            <p>
              My thoughts on technology and business, welcome to subscribe
            </p>
          </div>

          <span class="blogs-hr">
          <hr>
          </span>
          <div class="blogs-dev-content">

            <div class="blogs-img">
              <img src="../../public/home/works.png" alt="">
            </div>
             
            <div class="blogs-dev-header">
              <h1>What does it take to become a web developer?</h1>
              <p>Web development, also known as website development, encompasses a variety of tasks and processes involved in creating websites for the internet…</p>
              <RouterLink to="/">Read More</RouterLink>
            </div> 
          </div>

          <span class="blogs-hr">
          <hr>
          </span>

          <div class="blogs-btn">
            <button>View More</button>
            <button class="sub-btn">Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup></script>

<style scoped></style>
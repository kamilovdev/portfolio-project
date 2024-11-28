
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

    <section class="contact-section">
        <div class="contact-container">
          <div class="scroll-indicator">
          <img src="../../public/home/Scroll.svg" alt="Scroll Indicator">
          </div>

          <div class="contact-content"> 
            <div class="contact-header"> 
            <h1>Contact</h1>
            <span>
              <img src="../../public/home/green.svg" alt="Highlight Icon">
            </span>
            <p>
              I’m currently available for freelance work
            </p>
          </div>

          <div class="send-content">
             <div class="send-btn">
              <h1>Send me a message</h1>
             </div>

             <form>
                <div class="form-name-email">
                <span class="form-name">
                  <label for="name">Your name *</label><br><br>
                  <input v-model="firstName" type="text" id="firstName" :class="{ 'error-border': loginError }" placeholder="Enter your name">
                </span>

                <span class="form-email">
                  <label for="email">Your email *</label><br><br>
                  <input v-model="email" id="lastName" type="email" :class="{ 'error-border': loginError }"  placeholder="Enter your email">
                </span>
                </div>

                <div class="form-message">
                  <span>
                    <label for="message">Your message *</label><br><br>
                    <input v-model="messange" id="number" type="text" :class="{ 'error-border': loginError }" placeholder="Enter your needs">
                  </span>
                </div>
             </form>

             <div class="contact-btn">
              <button  @click="sendMessage" :disabled="submitted || loading" >Send Message  <i class="fa-regular fa-paper-plane"></i></button>
             </div>
          </div>
          </div>
        </div>  
    </section>
  
  <Footer/>
  </div>
</template>

<script setup>
 import { RouterLink } from 'vue-router';
 import Footer from '@/components/footer.vue';

 import {
    ref
  } from 'vue'


  const firstName = ref("");
const email = ref(""); 
const messange = ref("");
const submitted = ref(false);
const loading = ref(false); 
let alertShown = false; // Track if alert has been shown

const sendMessage = async () => {
    // Validate inputs
    if (!firstName.value || !email.value || !messange.value) {
        highlightEmptyFields();
        return; // Exit the function if validation fails
    }

    // Check if the email ends with '@gmail.com'
    if (!email.value.endsWith('@gmail.com')) {
        if (!alertShown) { // Show alert only if it hasn't been shown yet
            alert('Iltimos, emailingizni "@gmail.com" bilan tugatishni unutmang.');
            alertShown = true; // Set flag to true after showing the alert
        }
        return; // Exit if email is invalid
    } else {
        alertShown = false; // Reset the flag if email is valid
    }

    // Prevent further submissions
    if (submitted.value || loading.value) return;

    loading.value = true; // Set loading state to true
    const TELEGRAM_BOT_TOKEN = "7590818828:AAEcOBzrWLe8IMw2rwZUWjNmIXPyEj7QbRM";
    const CHAT_ID = "6755309533";

    // Prepare the message
    const message =
        `Yangi foydalanuvchi royhatdan o'tdi:\nIsm: ${firstName.value}\nEmail: ${email.value}\nSizga xabar qoldirdi: ${messange.value}`;
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(message)}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.ok) {
            console.log("Ro'yhatdan muvaffaqiyatli o'tdingiz");
            firstName.value = "";
            email.value = ""; 
            messange.value = "";
            submitted.value = true; 
        } else {
            console.log("Malumotlarni yuborishda xatolik");
        }
    } catch (error) {
        console.log("Xatolik yuz berdi");
        console.error("Error:", error);
    } finally {
        loading.value = false; 
    }
};

const highlightEmptyFields = () => {
    const fields = [
        { ref: firstName, name: 'firstName' },
        { ref: email, name: 'email' },
        { ref: messange, name: 'messange' }
    ];

    fields.forEach(({ ref, name }) => {
        const field = document.querySelector(`input[name="${name}"]`);
        if (!ref.value) {
            field.style.borderColor = 'red';
        } else {
            field.style.borderColor = ''; 
        }
    });
};

const inputFieldNames = ['firstName', 'email', 'messange']; 
inputFieldNames.forEach(name => {
    const field = document.querySelector(`input[name="${name}"]`);
    if (field) { 
        field.addEventListener('focus', () => {
            field.style.borderColor = ''; 
        });
    }
});

</script>

<style scoped></style>
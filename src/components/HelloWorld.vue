<!-- eslint-disable vue/first-attribute-linebreak -->
<!-- eslint-disable vue/html-closing-bracket-newline -->
<!-- eslint-disable vue/singleline-html-element-content-newline -->
<!-- eslint-disable vue/no-multi-spaces -->
<!-- eslint-disable vue/html-closing-bracket-spacing -->
<!-- eslint-disable vue/max-attributes-per-line -->
<!-- eslint-disable vue/html-indent -->
<!-- eslint-disable vue/html-self-closing -->
<!-- eslint-disable vue/multiline-html-element-content-newline -->

<template>


<div class="nav-menu"> 
  <i class="fas fa-bars mb-3"  @click="showMenu"> 
  </i> 
    <div
    class="nav-content"
    :class="showMobileMenu ? 'open-menu' : 'closed-menu'"> 
    <div class="logo" > <a href="https://sandeep-personal-website.vercel.app/home" @click.prevent="handleNavClick('home')">Sandeep Singh</a></div>
    <ul class="nav-items">
      <li> <a href="https://sandeep-personal-website.vercel.app/about-me" @click.prevent="handleNavClick('about-me')">About</a></li>
      <li> <a href="https://sandeep-personal-website.vercel.app/work" @click.prevent="handleNavClick('work')">Work</a></li>
      <li> <a href="https://sandeep-personal-website.vercel.app/projects" @click.prevent="handleNavClick('projects')">Projects</a></li>
    </ul>
    

    </div>
</div>
  <div>
    <transition name="fade">
      <div v-if="showScrollNotification" class="scroll-notification">
        <p class="scroll-text">Scroll down to discover</p>
        <div class="arrow-container">
          <a href="https://sandeep-personal-website.vercel.app/about-me" @click.prevent="handleNavClick('about-me')">
        <v-icon style="color: white;">mdi-arrow-down</v-icon> </a>
      </div>
      </div>
    </transition>
    </div>

<div class="progress-container">
      <div class="progress-bar" :style="{ width: scrollProgress + '%' }"></div>
    </div>


    <Hero />

    <Certificates />

    <AboutMe />

    <Work />
    <Projects />
  







    
    
    <v-container class="d-flex flex-column" style="margin-bottom: 30px; ">
      <div class="resume">
        <a href="/Sandeep_Singh_CV_17.pdf" target="_blank" class="cv-link">

      <h2>My CV <i class="fa-solid fa-arrow-up-right-from-square arrow-icon"></i></h2>
      </a>
      </div>
      </v-container>
  
</template>


<script>
import Hero from "./Hero.vue";
import Certificates from "./Certificates.vue";
import Work from "./Work.vue";
import AboutMe from "./AboutMe.vue";
import Projects from "./Projects.vue";
import gsap from "gsap"; // Import GSAP
import ScrollTrigger from "gsap/ScrollTrigger";



gsap.registerPlugin(ScrollTrigger);


export default{
  components:{
    Hero,
    Certificates,
    AboutMe,
    Work,
    Projects,
  },

  data() {
    return {
      
      showMobileMenu: false,
      scrollProgress:0,
      showScrollNotification: true,

  };
},

beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("scroll", this.updateScroll);

  },


  mounted(){
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("scroll", this.updateScroll);



    


    this.typewriter()
  },



  


  methods:{
    updateScroll() {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      this.scrollProgress = (scrollTop / scrollHeight) * 100;
    },
    handleScroll() {
      // Hide the scroll indicator when the user scrolls down
      if (window.scrollY > 50) {
        this.showScrollNotification = false;
      }
      else {
        this.showScrollNotification = true;
      }
    },
    
    handleNavClick(section) {
      const el = document.getElementById(section);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
      this.showMobileMenu = false;   // Close the menu after clicking
    },
    showMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
  

    typewriter() {
      const words = ["Full Stack Engineer", "Data Scientist", "Certificate extravagant"];
      const typewriterEl = document.querySelector(".typewriter");

      // Blinking cursor effect
      //gsap.to(".cursor", { opacity: 0, ease: "power2.inOut", repeat: -1, yoyo: true, duration: 0.5 });

      let wordIndex = 0;
      let charIndex = 0;
      let isDeleting = false;

      const typeEffect = () => {
        let currentWord = words[wordIndex];
        let displayedText = currentWord.substring(0, charIndex);
        typewriterEl.textContent = displayedText; // Update text

        if (!isDeleting) {
          charIndex++;
        } else {
          charIndex--;
        }

        if (charIndex === currentWord.length + 1) {
          isDeleting = true;
          setTimeout(typeEffect, 1000); // Pause before deleting
        } else if (charIndex === -1 && isDeleting) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          setTimeout(typeEffect, 500);
        } else {
          setTimeout(typeEffect, isDeleting ? 50 : 100);
        }
      };

      typeEffect();
    },

  },

};
  //
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
a{
  text-decoration: none;
  
}


@keyframes bounce {
  0%{
    transform: translateY(-7px);
  }
   
  50% {
    transform: translateY(7px);
  }
  100%{
    transform: translateY(-7px);
  }
}

.arrow-container .v-icon {
  animation: bounce 1.5s infinite 
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

/* Notification styling */
.scroll-notification {
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;


  font-weight: bold;
  z-index: 1000;
}
.scroll-text {
  font-size: 12px;
  font-weight: bold;
  color: white;
  background: transparent; /* No background for text */

  padding-bottom: 5px;
}
.arrow-container {
  background: #ff6b6b; /* Custom background color */
  padding: 3px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  
}
.arrow-container:hover {
  opacity: 0.2;
  cursor: pointer;


}
.arrow-icon {
  margin-left: 2px;
  transition: transform 0.3s ease-in-out;

}


/* Icon styling */

.progress-container {
  position: fixed;
  top:0px;
  left:0;

  width: 100%;
  height: 5px;
  background-color: transparent;
  z-index: 1000;
}

.progress-bar {
  height: 100%;
  background-color: white;
  transition: width 0.2s ease-out;
}
.cv-link {
  text-decoration: none;
  color: white;
  display: inline-flex;
  align-items: center;
  transition: color 0.3s ease-in-out;
}

.cv-link:hover {
  color: grey;
}
.cv-link:hover .arrow-icon {
  transform: translateY(-5px) translateX(5px);
}



.nav-menu {
  background-color:  black;
  border-radius: 40px;

  position: fixed;

    left: 10px;
    margin-top:9px; /* Remove extra margins */
    z-index: 1000;
    right:10px;
  
}
.nav-content {
  display: flex;
  justify-content: space-between;
  padding: 10px 10px;
  align-items: center;
  font-size: 22px;
}
.nav-items {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    padding: 0 10px;
  }
  li a{
    text-decoration: none;
    color: white;
  }
  li a:hover{
    color: aqua;
  }
}
.logo a{
  text-decoration: none;
  color: white;

}
.logo a:hover{
  color: aqua;

}
.nav-menu i {
  display: none;
}
@media screen and (max-width: 768px) {
  .nav-menu {
    position: fixed;


 
    width: 100%; /* Make sure it spans the whole screen */
    z-index: 1000;
    margin-top: 9px;
    left: 10px;
    right: 10px;
    border-radius: 40px;
  }
  
  .open-menu {
    opacity: 1;
    height: 30px;
    padding-bottom: 159px;
    z-index: 1000;
  }
  .closed-menu {
    opacity: 0;
    height: 0;
    padding: 0;


  }
  .nav-content {
    flex-direction: column;
    z-index: 1000;
    position: relative;
    transition: color 0.2s ease-in-out;
  }
  .nav-items {
    flex-direction: column;
  }
  .nav-menu i {
    display: block;
    text-align: center;
    margin-top: 10px;
    
  }
  }
 
 










</style>

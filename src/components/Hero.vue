


<template>

<div class="container-border">
<div class="nav-menu"> 
  <i class="fas fa-bars mb-3"    :class="showMobileMenu ? 'fas fa-times' : 'fas fa-bars'" 
  @click="showMenu"> 
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


<v-container id="home" class="d-flex justify-center align-center" style="min-height: 130vh;  text-align: center;  padding-bottom: 10px;">
    
    <v-card
      class="rounded-lg intro-table"
      color="black"
      elevation="0"
      style=" height: auto; text-align:center; width: 100%; background-color: white; "
    >
    <v-row class="justify-start">
      <v-col cols="auto">
    <a href="https://cp.certmetrics.com/amazon/en/public/verify/credential/ff7a45e5f19f4a27b94834b5a54c054c" target="_blank" class="aws-badge">
      <v-img
        src="../assets/aws-certified-cloud-practitioner.png"
        alt="AWS Certified Badge"
        class="animated-image"
        style=" width: 100px; height: auto;   display: block;"
      />
    </a>
    </v-col>
    </v-row>
    <v-row
    class="d-flex align-center"
    style="justify-content: center;"
  >
    <v-col
      cols="auto"
      class="d-flex align-center"
    >
      
        <img src="../assets/view-compress.png" class="animated-image mb-5" alt="Avatar" style="width: 100px; border-radius: 20px;">
     
    </v-col>
   
    <v-col
      cols="auto"
      class="d-flex align-center"
    >
      <h2 ref="name" class="wave-thing"  style=" align-items: center;  margin-bottom: 10px;" > <span class="name-gradient">Hi, I'm Sandeep Singh</span> <span class="wave">👋</span></h2> 
      </v-col>
      </v-row>
      

      <div class="description-text" style="margin-bottom: 10px; color: black; text-align: left;">
      <span>I'm a passionate, self-started software engineer. I make products that are performant and beautiful. </span>
        <span>Building things is what I live for</span>
        </div>

     <div class="description-text" style=" color: black; text-align: left;">I am also a <span ref="typewriter" class="typewriter name-gradient" style=" display: block; font-weight: 1700;">_</span></div>

     <div class="social-icons">
        <a href="https://github.com/Moonshallow5" target="_blank" class="icon">
          <i class="fab fa-github"></i>
        </a>
        <a href="mailto:ssandeepssingh55@gmail.com" class="icon">
          <i class="fas fa-envelope"></i>
        </a>
        <a href="https://www.linkedin.com/in/sandeep-singh-557510200/" target="_blank" class="icon">
          <i class="fab fa-linkedin"></i>
        </a>
      </div>
    </v-card>
    </v-container>
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

    

    
    
  
  
  </template>


<script>
export default{

    name:"Hero",
    data(){
      return{
      showMobileMenu: false,
      scrollProgress:0,
      showScrollNotification: true,
      };
    },
    beforeUnmount(){
      window.removeEventListener("scroll", this.handleScroll);

    },
    mounted(){
      window.addEventListener("scroll", this.handleScroll);
      this.cycleWords()
    },
    methods:{
      handleScroll() {
      if (window.scrollY > 50) {
        this.showScrollNotification = false;
      }
      else {
        this.showScrollNotification = true;
      }
    },
    cycleWords() {
  const words = ["Full Stack Developer", "Data Scientist", "Cert Achiever"];
  const typewriterEl = document.querySelector(".typewriter");
  
  let wordIndex = 0;

  const showNextWord = () => {
    typewriterEl.style.opacity = 0;
    setTimeout(() => {
      typewriterEl.textContent = words[wordIndex]; 
      typewriterEl.style.opacity = 1;
      wordIndex = (wordIndex + 1) % words.length; 
    }, 500); 

    setTimeout(showNextWord, 2000); 
  };

  showNextWord();
},
      handleNavClick(section) {
        if (!this.showMobileMenu && window.innerWidth <= 768) {
        return; // Do nothing if menu is closed on small screens
      }

      const el = document.getElementById(section);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }

      this.showMobileMenu = false; // Close the menu after clicking
      },
      showMenu() {
        this.showMobileMenu = !this.showMobileMenu;
      },
  


  },
    }

</script>

<style scoped>


.animated-image {
  transition: transform 1s ease-in-out;
}
/* Create the animated border effect */
.animated-image:hover {
  transform: rotate(360deg);
}

.wave {
  
  display: inline-block;
  font-size: 25px;

 
  transform-origin: 70% 70%;
  transition: transform 0.3s ease-in-out;

}
.wave-thing:hover .wave,
.wave:hover {
  animation: wave-animation 1.5s infinite;
}


@keyframes wave-animation {
  0% { transform: rotate(0deg); }
  10% { transform: rotate(14deg); }
  20% { transform: rotate(-8deg); }
  30% { transform: rotate(14deg); }
  40% { transform: rotate(-4deg); }
  50% { transform: rotate(10deg); }
  60% { transform: rotate(0deg); }
  100% { transform: rotate(0deg); }
}
h2{
  font-family: "Poppins", serif;
  font-weight: 1300;

  
}

p{
  font-family: 'Poppins', sans-serif; /* Replace 'Poppins' with your chosen font */
  font-weight: 300;
  font-style: normal;
}
/* Rainbow gradient text style */
.name-gradient {
  font-weight: bold;
  background: linear-gradient(90deg, #f97316, #3b82f6, #10b981); /* Rainbow colors */
  -webkit-background-clip: text;
  color: transparent;
  background-size: 300% 100%;
  background-position: 0 50;
  animation: gradientMove 6s ease-in-out infinite alternate;

}
@keyframes gradientMove {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}



.description-text  {
   font-family: 'Articulat CTF', sans-serif;
  
  font-size: 40px;
  font-weight: 100;

  margin-top: 1rem;
}

.social-icons {
  margin-top: 20px;
}

.icon {
  font-size: 40px; /* Adjust icon size */
  margin: 0 10px; /* Add spacing between icons */
  color: black; /* Default color */
  transition: color 0.3s ease-in-out;
  
}

.icon:hover {
  color: gray; /* Change color on hover */
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
  color: black;
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

.container-border {
  position: relative;
  border: 2px solid white; /* Border wraps both navbar and card */
  border-radius: 30px;
  padding-top: 5px; /* Adjust to align with navbar */

  max-width: 1160px; /* Set a max width for large screens */

  margin: auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: white;


  
}

  .intro-table {
 
  color: black !important; /* Ensure text is black */
  border: 1px solid rgba(0, 0, 0, 0.1); /* Optional: Light border for clarity */
  background-color: transparent !important; /* Remove background */
  box-shadow: none !important; /* Remove any shadow */
  border: none !important; /* Remove the border */
}



.typewriter {
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
  font-size: 50px;
  
}
.nav-menu {
border-radius: 100px;
position: fixed;
backdrop-filter: blur(15px); /* Adds a blur effect for a modern look */
border: 1px solid rgba(200, 200, 200, 0.5); /* Light border */
background-color: rgba(255, 255, 255, 0.3); /* Semi-transparent white */
  left: 10px;
  margin: 0 auto;
  z-index: 1000;
  right:10px;
  max-width: 90%;
  align-items: center;

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

list-style: none;

li {
  padding: 0 10px;
}
li a{
  text-decoration: none;
  color: black;
}
li a:hover{
  color:grey;
}
}
.logo a{
text-decoration: none;
color: black;

}
.logo a:hover{
color: grey

}
.nav-menu i {
display: none;
}
@media screen and (max-width: 768px) {
.nav-menu {
  border-radius: 40px;

  align-items: center;
  color: black;
}
.nav-items li {
    margin-bottom: 5px; /* Adjust spacing */
  }
  .nav-items li:last-child {
    margin-bottom: 5px; /* Remove margin from last item */
  }
  .logo{
    margin-bottom: 5px;
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
  font-size: 24px;
  transition: transform 0.5s ease;
  
}
}

@media (max-width: 400px) {
  #home {
    min-height: 160vh !important;

  }
}
@media (max-width: 600px) {
  .typewriter {
    font-size: 38px;
  }
}
@media (max-width: 420px) {
  .typewriter {
    font-size: 30px;
  }
}
@media (max-width: 380px) {
  #home {
    min-height: 180vh !important;
  }
  
}



</style>
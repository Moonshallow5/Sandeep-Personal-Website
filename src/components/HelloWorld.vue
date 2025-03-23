
<template>



<div class="progress-container">
      <div class="progress-bar" :style="{ width: scrollProgress + '%' }"></div>
    </div>


    <Hero />

    <Certificates />

    <AboutMe />
    <Skills />

    <Work />
    <Projects2 />
  
    <v-container class="d-flex flex-column" style="margin-bottom: 30px; margin-top: 70px; ">
      <div class="resume">
        <a href="/Sandeep_Singh_CV_20.pdf" target="_blank" class="cv-link">

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
import gsap from "gsap"; // Import GSAP
import ScrollTrigger from "gsap/ScrollTrigger";
import Skills from "./Skills.vue";
import Projects2 from "./Projects2.vue";


gsap.registerPlugin(ScrollTrigger);


export default{
  components:{
    Hero,
    Certificates,
    AboutMe,
    Work,
    Skills,
    Projects2
  },

  data() {
    return {
      scrollProgress:0,
      

  };
},

beforeUnmount() {
    
    window.removeEventListener("scroll", this.updateScroll);

  },


  mounted(){
    window.addEventListener("scroll", this.updateScroll);



    
  },



  


  methods:{
    updateScroll() {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      this.scrollProgress = (scrollTop / scrollHeight) * 100;
    },
    
    
  }

};
  //
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
a{
  text-decoration: none;
  
}


.progress-container {
  position: fixed;
  top:0px;
  left:0;
  width: 100%;
  height: 5px;
  background-color: transparent;
  z-index: 10005;
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


 
 










</style>

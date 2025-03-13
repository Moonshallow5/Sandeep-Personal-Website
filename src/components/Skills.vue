<template>

<v-container>

<v-row style="margin-top: 50px;">
  <v-col cols="12" >

  <h2 class="skill-experience mb-5">My Skills</h2>
</v-col>

</v-row>

<h3 class="frontend-text">Frontend:</h3>
<v-row class="d-flex flex-wrap">
  <v-col
      v-for="(skill, index) in skills"
      :key="skill.name"
      cols="auto"
    >
    <v-card
      
      class="skill-card"
      elevation="8"
      ref="skillRefs"

      @mouseover="startShimmer(skill.name)"
    @animationend="stopShimmer(skill.name)"
    :class="{ 'shimmer-active': activeShimmers.includes(skill.name) }"
    >
    <div class="icon-container">
            <i v-if="skill.icon" :class="skill.icon" style="font-size: 50px; margin-bottom: 20px;" :style="{ color: skill.color }"/>
          </div>
      <v-card-title class="text-center">{{ skill.name }}</v-card-title>
    </v-card>
    </v-col>
    </v-row>

    <h3 class="backend-text">Backend:</h3>
    <v-row class="d-flex flex-wrap">
      <v-col
        v-for="(skill, index) in backendSkills"
        :key="skill.name"
        cols="auto"

      >
        <v-card
          class="skill-card "
          elevation="8"
          ref="skillRefs"
         
          @mouseover="startShimmer(skill.name)"
    @animationend="stopShimmer(skill.name)"
    :class="{ 'shimmer-active': activeShimmers.includes(skill.name) }"
        >
          <i :class="skill.icon"
          class="skill-icon"  style="font-size: 50px; margin-bottom: 20px;" :style="{ color: skill.color }"></i>
          <v-card-title class="text-center">{{ skill.name }}</v-card-title>
        </v-card>
      </v-col>
    </v-row>

    <h3 class="ml-text">ML/Data Science:</h3>
    <v-row class="d-flex flex-wrap">
      <v-col
        v-for="(skill, index) in DataScience"
        :key="skill.name"
        cols="auto"

      >
        <v-card
          class="skill-card "
          elevation="8"
          ref="skillRefs"
         
          @mouseover="startShimmer(skill.name)"
    @animationend="stopShimmer(skill.name)"
    :class="{ 'shimmer-active': activeShimmers.includes(skill.name) }"
        >
          <i :class="skill.icon"
          class="skill-icon"  style="font-size: 50px; margin-bottom: 20px;" :style="{ color: skill.color }"></i>
          <v-card-title class="text-center">{{ skill.name }}</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>




<script >

import gsap from "gsap"; // Import GSAP
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
    name:'Skills',
  mounted(){

    this.$nextTick(() => {
          const heading = document.querySelector(".skill-experience"); // Select heading
          const frontendText = document.querySelector("h3.frontend-text");
          const backendText = document.querySelector("h3.backend-text");
          const mlText = document.querySelector("h3.ml-text");
          const skillCards = this.$refs.skillRefs ? this.$refs.skillRefs.map(ref => ref.$el) : []; 

// Combine heading and skill cards for animation
const allElements = [heading,frontendText,backendText, ...skillCards,mlText];
         
      allElements.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power1.in",
            scrollTrigger: {
              trigger: el,
              start: "top 70%",
              end: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    })


  },

  
  data() {
    
    return {
      activeShimmers: [], 
      skills: [
        { name: "Vue.js", icon: "fa-brands fa-vuejs" ,color: "#42b883"},
        { name: "JavaScript", icon: "fa-brands fa-js", color: "#F7DF1E" },
        { name: "React", icon: "fa-brands fa-react", color: "#61DAFB" },
        { name: "HTML5", icon: "fa-brands fa-html5", color: "#E34F26" },
        { name: "CSS3", icon: "fa-brands fa-css3", color: "#1572B6" },

      ],
      backendSkills: [
        { name: "Node.js", icon: "fa-brands fa-node-js", color: "#339933" },
        { name: "PostgreSQL", icon: "fa-solid fa-database", color: "#336791" },
        { name: "MongoDB", icon: "fa-brands fa-envira", color: "#47A248" },
       
      ],
      DataScience: [
      { name: "Python", icon: "fa-brands fa-python", color: "#3776AB" },
      { name: "Scikit-learn", icon: "fa-solid fa-brain", color: "#F7931E" },
      { name: "TensorFlow", icon: "fa-solid fa-square-root-variable", color: "#FF6F00" },
      { name: "NumPy", icon: "fa-solid fa-cubes", color: "#013243" }
       
      ],
    };
  },
  methods: {
    startShimmer(skillname) {
      if (!this.activeShimmers.includes(skillname)) {
        this.activeShimmers.push(skillname); // Add card to active shimmer list
      }
    },
    stopShimmer(skillname) {
      this.activeShimmers = this.activeShimmers.filter((name) => name !== skillname); // Remove after animation ends
    },
  },
};

</script>

<style scoped>

h2{
  font-family: "Poppins", serif;
  font-weight: 1300;

  
}
.skill-card {
  min-width: 120px; /* Minimum width for small screens */
  max-width: 180px; /* Maximum width to keep it uniform */
  height: 200px;
  width: 100%; /* Flexible width based on container */
  aspect-ratio: 4 / 5; /* Keeps consistent height ratio */
  margin-bottom: 20px;
  border-radius: 15px;
  background: linear-gradient(145deg, #1E1E2A, #A6A6C3);
  
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.skill-icon {
  font-size: clamp(2rem, 5vw, 3rem); /* Scales icon size based on screen */
}
.skill-card.shimmer-active::before {
  opacity: 1;
  animation: shimmer 1.5s linear;
}


.skill-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: -200%;
  width: 200%;
  height: 100%;
  background: linear-gradient(
    -60deg,
    rgba(255, 255, 255, 0) 30%,
    rgba(255, 255, 255, 0.6) 50%,
    rgba(255, 255, 255, 0) 70%
  );
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  pointer-events: none; /* Prevent blocking interactions */


}



@keyframes shimmer {
  0% {
    left: -200%;
  }
  100% {
    left: 100%;
  }
}






.skill-title {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  z-index: 3;
}

</style>
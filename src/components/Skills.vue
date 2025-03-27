<template>

<v-container>

<v-row style="margin-top: 50px;">
  <v-col cols="12" >

  <h2 class="skill-experience mb-5">My Skills</h2>
</v-col>

</v-row>

<h3 class="frontend-text mb-5">Frontend:</h3>
<v-row class="d-flex flex-wrap">
  <v-col
      v-for="(skill, index) in skills"
      :key="skill.name"
      cols="auto"
    >
    <v-card
      
      class="skill-card"
      elevation="8"
      ref="skillRefsFrontend"

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

    <h3 class="backend-text mb-5">Backend:</h3>
    <v-row class="d-flex flex-wrap">
      <v-col
        v-for="(skill, index) in backendSkills"
        :key="skill.name"
        cols="auto"

      >
        <v-card
          class="skill-card "
          elevation="8"
          ref="skillRefsBackend"
         
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

    <h3 class="ml-text mb-5">ML/Data Science:</h3>
    <v-row class="d-flex flex-wrap">
      <v-col
        v-for="(skill, index) in DataScience"
        :key="skill.name"
        cols="auto"

      >
        <v-card
          class="skill-card "
          elevation="8"
          ref="skillRefsMl"
         
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

import gsap from "gsap"; 
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
    name:'Skills',
  mounted(){

    this.$nextTick(() => {
          const heading = document.querySelector(".skill-experience");
          const frontendText = document.querySelector("h3.frontend-text");
          const backendText = document.querySelector("h3.backend-text");
          const mlText = document.querySelector("h3.ml-text");
          const frontendCards = this.$refs.skillRefsFrontend?.map(ref => ref.$el) || [];
          const backendCards = this.$refs.skillRefsBackend?.map(ref => ref.$el) || [];
          const mlCards=this.$refs.skillRefsMl?.map(ref=> ref.$el)||[];
          gsap.fromTo(
      heading,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power1.out",
        scrollTrigger: {
          trigger: heading,
          start: "top 80%",
          end: "top 30%", // Title fades out after cards
          toggleActions: "play none none reverse",
        },
      }
    );

          gsap.fromTo(
      frontendCards,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power1.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: frontendText, 
          start: "top 60%",
          end: "top 40%", 
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      frontendText,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power1.out",
        scrollTrigger: {
          trigger: frontendText,
          start: "top 80%",
          end: "top 30%", 
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      backendCards,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power1.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: backendText,
          start: "top 60%",
          end: "top 40%", 
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      backendText,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power1.out",
        scrollTrigger: {
          trigger: backendText,
          start: "top 80%",
          end: "top 30%", 
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      mlCards,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power1.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: mlText, 
          start: "top 60%",
          end: "top 40%", 
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      mlText,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power1.out",
        scrollTrigger: {
          trigger: mlText,
          start: "top 80%",
          end: "top 30%", 
          toggleActions: "play none none reverse",
        },
      }
    );
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
        {name:"Express.js",icon: "devicon-express-original"},
        { name: "MongoDB", icon: "devicon-mongodb-plain", color: "#47A248" },
       
      ],
      DataScience: [
      { name: "Python", icon: "fa-brands fa-python", color: "#3776AB" },
      { name: "Scikit-learn", icon: "devicon-scikitlearn-plain", color: "#F7931E" },
      { name: "TensorFlow", icon: "devicon-tensorflow-original", color: "#FF6F00" },
      { name: "NumPy", icon: "devicon-numpy-plain", color: "#013243" }
       
      ],
    };
  },
  methods: {
    startShimmer(skillname) {
      if (!this.activeShimmers.includes(skillname)) {
        this.activeShimmers.push(skillname); 
      }
    },
    stopShimmer(skillname) {
      this.activeShimmers = this.activeShimmers.filter((name) => name !== skillname);
    },
  },
};

</script>

<style scoped>

h2{
  font-family: "Poppins", serif;
  font-weight: 1300;
  font-size: 1.8rem; 

}
.skill-card {
  min-width: 120px; 
  max-width: 180px; 
  height: 200px;
  width: 100%; 
  aspect-ratio: 4 / 5; 
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

@media screen and (max-width: 400px) {
  .skill-card{
    max-width: 150px;
  }
}
.skill-icon {
  font-size: clamp(2rem, 5vw, 3rem); 
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
  pointer-events: none; 


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

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


    

    <v-container id="projects" class="d-flex flex-column"  >
      <div class="work-experience">
      <h2>My Projects</h2>
    </div>
    <div class="project-container">
      <div
        v-for="(project, index) in projects"
        :key="index"
        ref="projectRefs"
        class="project-item"
      >

      <img :src="project.image.url" :alt="project.title" class="project-image" />

      

      <p class="project-title">{{ project.title }}</p>
      <div class="github-container">
      <a :href="project.github" target="_blank" class="github-link">
      <i class="fab fa-github"></i> <!-- FontAwesome GitHub icon -->
    </a>
  </div>
    <p>{{ project.description }}</p>

    
      </div>
    </div>



    </v-container>
</template>



<script>

import { projects } from "./projects";
import gsap from "gsap"; // Import GSAP
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default{
    name:'Projects',
    data(){
        return {
            projects,

        }
    },
    mounted(){
        this.$nextTick(() => {
    // Keep first project static
  

        // Animate remaining projects
        this.$refs.projectRefs.forEach((el, i) => {


            gsap.fromTo(el,
                {
                    
                    opacity: 0,
                    y:10,
                },
                {
                    y: `-${i * 20}px`, // Moves upwards to stack on top
                    scale: 1,
                    opacity: 1,
                    duration: 10,
                    ease: "power1.in",
                    scrollTrigger: {
                        trigger: el,
                        start: `top 60%`, // Waits until 80% of the first container is seen
                        end: "top 50%",
                        toggleActions: "play none none reverse",
                    
                        scrub: 1,
                        pin: true,
                        onUpdate: (self) => {
                            el.style.zIndex = Math.round(self.progress * 100);
                        },
                    },
                }
            );
            
        });
    });
    },
}


</script>

<style scoped>
.project-container {
  display: flex;
  flex-direction: column; /* Stack items vertically */
  position: relative;

  align-items: center;

  border: 1px solid transparent; /* Ensures a base border exists */


}
.project-item:hover {
  border-width: 1px;
  border-color: aqua;

}
.project-title {
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
  text-align: center;
  color: wheat;
}

.project-item {
  width: 70%; /* Adequate width */
  max-width: 500px; /* Prevent too wide */
  
  height: auto; /* Large height */
  background: black;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  position: relative;
  border: 1px solid transparent; /* Ensures a base border exists */



}
.project-item img {
  width: 100%;
  height: min(100vh,370px);
  border-radius: 10px;

}
.github-link {
  transition: transform 0.6s ease; /* Smooth transition */


  position: relative;
  z-index: 10; /* Keep it above stacked items */
}

.github-container{
  transition: transform 0.6s ease;

}

.project-item:hover .github-container{
  transform: scale(1.5); 

}



</style>
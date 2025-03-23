<template>

<v-container id="projects" class="d-flex flex-column"  >
        <div class="project-experience" style=" margin-top: 50px;">
          <h2 >My Projects</h2>
        </div>
      <div class="project-container"  >
       
          

          <a
            v-for="(project, index) in projects"
           
            :key="index"
            ref="projectRefs"
            :href="project.github"
            target="_blank"
        class="project-item">

            <img :src="project.image.url" :alt="project.title" class="project-image" />
            <p class="project-title">{{ project.title }}</p>
            <div class="github-container">
              <a :href="project.github" target="_blank" class="github-link">
                <i class="fab fa-github"></i> 
              </a>
            </div>
            <p>{{ project.description }}</p>
          </a>
        </div>

    </v-container>

</template>



<script>

import { projects } from "./projects";
import gsap from "gsap"; 
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default{
    name:'Projects2',
    data(){
        return {
            projects,

        }
    },

    mounted(){

        this.$nextTick(() => { 
            const heading = document.querySelector(".project-experience"); 
            


            const projectElements = this.$refs.projectRefs || [];
            const projectContainer = document.querySelector(".project-container"); 

            ScrollTrigger.create({
      trigger: "#projects",
      start: "top top",
      end: () => `+=${projectContainer.scrollHeight *0.85 }px`, 
      pin: heading,
      pinSpacing: false,
    });

projectElements.forEach((project, index) => {
    let screenWidth = window.innerWidth;

  const skewValue =  screenWidth > 650 ? (index % 2 === 0 ? 10 : -10) : (index % 2 === 0 ? 5 : -5) 
  const moveUp =  screenWidth > 650 ? ( index % 3) * -10 + Math.random() * 15 : ( index % 3) * -5 + Math.random() * 5; 
  let scaleValue = screenWidth > 650 ? 1 : 0.6;

  gsap.to(project, {
    y: moveUp,
    rotate: skewValue,
    scale: scaleValue,
    duration: 1.5,
    ease: "power1.out",
    scrollTrigger: {
      trigger: project,
      start: "top 30%",
      end: "bottom top",
      scrub: true,
    },
  });
});
            




        })

    },

   
    

    
    
}
</script>


<style scoped>


h2{
  font-family: "Poppins", serif;
  font-weight: 1300;
  font-size: 1.9rem;

  
}

p{
  font-family: 'Poppins', sans-serif; /* Replace 'Poppins' with your chosen font */
  font-weight: 300;
  font-style: normal;
  font-size: 1.1em;


}
.project-container {
  display: flex;
  flex-direction: column; 

  justify-content: center;


  align-items: center;
  height: auto;
}
.project-experience {
  pointer-events: none;  
  z-index: 1;

  position: relative;
}


.project-title {
  font-size: 20px;
  color: black;
  font-weight: bold;
  margin-top: 10px;
  text-align: center;

}

.project-item p {

  white-space: normal; 
}

.project-item {
    position: sticky;
  top: 150px; 

  pointer-events: auto !important;

  text-decoration: none;
  color: black;
  width: 100%;
  max-width: 400px; 
  margin-bottom: 20px;
  height: auto; 
  background: white;
  border-radius: 15px;
  margin-right: 10px;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 10px;



}
.project-item img {
  width: 100%;
  height: min(100vh,230px);
  border-radius: 10px;

}
.github-link {
  transition: transform 0.6s ease; 


  position: relative;
  z-index: 10; 
}

.github-container{
  transition: transform 0.6s ease;

}

.project-item:hover .github-container{
  transform: scale(1.5); 

}

  #projects {
    margin-bottom: calc(100px + 30vh); 
  }



</style>
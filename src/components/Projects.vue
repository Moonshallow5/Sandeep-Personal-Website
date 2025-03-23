

<template>

    <v-container id="projects" class="d-flex flex-column"  >
        <div class="project-experience">
          <h2  style="margin-bottom: 550px; color: aquamarine;">My Projects</h2>
        </div>
      <div class="project-container"  >
       
          <div class="project-row">

          <a
            v-for="(project, index) in projects"
            :key="index"
            ref="projectRefs"
            :href="project.github"
            target="_blank"
            class="project-item ">

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
      
      </div>

    </v-container>
</template>



<script>

import { projects } from "./projects";
import gsap from "gsap"; 
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
            const heading = document.querySelector(".project-experience"); // The fixed title
            const projectContainer = document.querySelector(".project-container"); // Select the container
            gsap.to(heading, {
              scrollTrigger: {
                trigger: heading,
                
                start: "top 80%", // Pins only after reaching the center
                end: "top center", // Keeps it pinned dynamically
                scrub: true,
                pin:true,
                pinSpacing:false,
                
              
              },
              x: "40%", // Moves it left by half its width, centering it
            
            });
            ScrollTrigger.create({
  trigger: heading,
  start: "top center",  // Starts pinning where the first animation ends
  end: () => `+=${projectContainer.scrollHeight*0.8 }px`, // Dynamic based on content
  pin: true,
  pinSpacing: false
});
 

    // Step 2: Pin the heading while projects scroll
  

 
           
  
      const projectsss = this.$refs.projectRefs || [];


      projectsss.forEach((project, index) => {
        let screenWidth = window.innerWidth;

        let yValue;

        if (screenWidth > 1024) {
        // Desktop
        yValue = index % 2 === 0 ? "-700px" : "-400px";
      } else if (screenWidth > 768) {
        // Tablet
        yValue = index % 3 === 0 ? "-600px" : "-500px";
      } else {
        // Mobile
        yValue = index % 3 === 0 ? "-300px" : "-200px";
      }


        gsap.to(
          project, // Start slightly below
          {
            y: yValue, // Move project upwards at different speeds
            opacity: 1,
            duration: 10,
            ease: "power1.out",
            
            scrollTrigger: {
              trigger: project,
              start: "top bottom", 
                end: "bottom top", 
              scrub: true, // Different speeds per project
             
              
             
              
              
            },
          }
        );
      });
     
   
      
    });
          
    
  },
}
// this.$nextTick(() => {
//           const heading = document.querySelector(".project-experience"); // Select heading
//           const allElements = [heading, ...this.$refs.projectRefs]; // Include heading + work items
//         allElements.forEach((el, i) => {

//             gsap.fromTo(el,
//                 {
                    
//                     opacity: 0,
//                     y:10,
//                 },
//                 {
//                     y: `-${i * 20}px`, // Moves upwards to stack on top
//                     scale: 1,
//                     opacity: 1,
//                     duration: 10,
//                     ease: "power1.in",
//                     scrollTrigger: {
//                         trigger: el,
//                         start: `top 60%`, 
//                         end: "top 90%",
//                         toggleActions: "play none none reverse",
                    
//                         scrub: 1,
//                         pin: true,
//                         onUpdate: (self) => {
//                             el.style.zIndex = Math.round(self.progress * 100);
//                         },
//                     },
//                 }
//             );
            
//         });
//     });

// this.$nextTick(() => {
//           const heading = document.querySelector(".project-experience"); // Select heading
//           const allElements = [heading, ...this.$refs.projectRefs]; // Include heading + work items
//         allElements.forEach((el, i) => {

//             gsap.fromTo(el,
//                 {
                    
//                     opacity: 1,
//                     y: "20%",
//                 },
//                 {
//                   y: `-${i * 30}%`, // Moves up gradually to overlap previous projects
//                   scale: 1,
//                     opacity: 1,
//                     duration: 0.6,
//                     ease: "power1.in",
//                     scrollTrigger: {
//                         trigger: el,
//                         markers:true,
//                         start: "clamp(40% bottom)", // Trigger animation later for better pacing
//                     end: "clamp(1% top)", // Extend animation duration
//                     scrub: 1, // Increase scrub value to slow down effect
//                         pin: true,
//                         anticipatePin:1,
//                         onUpdate: (self) => {
//                             el.style.zIndex = Math.round(self.progress * 100);
                          

//                         },
//                     },
//                 }
//             );
            
//         });
//     });


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
  flex-direction: column; /* Stack items vertically */
  position: relative;
  justify-content: center;

  align-items: center;
  height: auto;
}
.project-experience {
  pointer-events: none;  /* ✅ Prevents it from blocking clicks */
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

  white-space: normal; /* Allows multiline text */
}

.project-row {
  display: flex;
  flex-wrap: wrap; /* Allows items to wrap when screen size is small */
  justify-content: center; /* Centers projects */
  gap:20px
}
.project-item {
  pointer-events: auto !important;

  text-decoration: none;
  color: black;
  width: 100%;
  max-width: 200px; 
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
  position: relative;



}
.project-item img {
  width: 100%;
  height: min(100vh,230px);
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
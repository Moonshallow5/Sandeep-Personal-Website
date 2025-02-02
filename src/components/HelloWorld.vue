<!-- eslint-disable vue/html-self-closing -->
<!-- eslint-disable vue/max-attributes-per-line -->
<!-- eslint-disable vue/multiline-html-element-content-newline -->
<!-- eslint-disable vue/html-indent -->

<template>

  <v-container class="d-flex justify-center align-center" style="height: 50vh; padding-top: 200px; text-align: center; ">
    
    <v-card
      class="rounded-lg p-4"
      color="black"
      elevation="3"
      style="width: 500px; height:300px; text-align:center; border-width: 1px;  border-color: aqua;"
    >
      <h2 ref="name" class="name-gradient" style="margin: 20px 20px;">Hi, I'm <span>Sandeep Singh</span></h2>

      
      <p class="description-text" style="margin:30px 20px">I'm a passionate and self-started software engineer. I make products that are performant and beautiful.</p>

     I am also a <span ref="typewriter" class="typewriter name-gradient"></span><span class="cursor">_</span>
    </v-card>

    

    
    
  </v-container> 


  

    <v-container class="d-flex justify-center align-center" style=" margin-top: 40px; ">
      
      <div ref="scrollWrapper" class="scroll-wrapper" style=" margin-top: 280px;">

        <h2>Certificates Achieved:</h2>
        
        
        

    <div ref="scrollContent" class="certificates-container">

      <div v-for="image in images" :key="image.id" class="certificates">
        <img :src="image.imgUrl " alt="yoyo" />

      </div>
    
    </div>
  </div>
  <div ref="spacer" class="spacer"></div>

  
    </v-container>

     <v-container class="container-section">




      <div class=" description-box"  id="box1">
    <h3>Machine Learning Specialisation</h3>
    <p>Andrew Ng first ML Course (for complete beginners)</p>

  </div>
  
  <div class=" description-box"  id="box2">
    <h3>Deep Learning Specialisation</h3>
    <p>Andrew Ng second ML Course (for more advanced people)</p>

  </div>

  <div class=" description-box"  id="box3">
    <h3>NLP Learning Specialisation</h3>
    <p>Andrew Ng third ML Course (for more advanced people)</p>

  </div>

     </v-container>
     <v-container class="d-flex justify-center align-center flex-column" style="margin: 200px 50px;">

      <h2> Woah that was a lot of certificates!</h2>
      <p>Let me first explain who I am</p>



     </v-container>





    <v-container class="d-flex flex-column" style="min-height: 300px; ">
    <div class="about-me">

      <h2>About me:</h2>

    <p>A recent grad from the University of Edinburgh with a Bachelors in Electronics and Computer Science.  Completed all of Andrew Ng Machine, Deep Learning and NLP specialisation accumalating over 20+ certificates</p>
    <br>

    <p>Current Full Stack Engineer, Future Data Scientist</p>
    <br>
    <p>Currently focusing on practicing LC and finding ways on exploring creativity by building things</p>
      

</div>
    </v-container>
    <v-container class="d-flex flex-column" >
      <div class="work-experience">
      <h2>Work Experience:</h2>
    </div>

    <div class="work-container">
    <div
      v-for="(work, index) in works"
      :key="work.id"
      ref="workRefs"
      class="work-item"
    >
      <h3><strong>{{ work.company }} </strong></h3>
      <p>{{ work.description }}</p>
      <div class="stack-container">
        <span v-for="(tech, i) in work.stack" :key="i" class="stack-item">
          {{ tech }}
        </span>
      </div>
    </div>
  </div>

</v-container>

<v-container class="d-flex flex-column" >
      <div class="work-experience">
      <h2>My Projects</h2>
    </div>
    <div class="project-container">
      <div
        v-for="(project, index) in projects"
        :key="project.id"
        ref="projectRefs"
        class="project-item"
      >

      <img :src="project.image.url" :alt="project.title" class="project-image" />

      <p class="project-title">{{ project.title }}</p>
      <a :href="project.github" target="_blank" class="github-link">
      <i class="fab fa-github"></i> <!-- FontAwesome GitHub icon -->
    </a>

    
      </div>
    </div>



    </v-container>
  
</template>


<script>
import gsap from "gsap"; // Import GSAP
import ScrollTrigger from "gsap/ScrollTrigger";
import { images } from "./certs";
import { works } from "./work";
import {ref} from 'vue';
import { projects } from "./projects";

gsap.registerPlugin(ScrollTrigger);


export default{
  name:"HelloWorld",

  data() {
    return {
      images,
      works,
      projects,


  
  };
},


  mounted(){
    const scrollWrapper = this.$refs.scrollWrapper;
    const scrollContent = this.$refs.scrollContent;
    const spacer = this.$refs.spacer; // Get the spacer div
    const spacer2 = document.createElement('div');
    //spacer.style.height = scrollContent.scrollWidth+5100 + "px";



//spacer2.style.height = 352+ 'vh'; // Set the height based on the content scroll width
//document.body.appendChild(spacer2); // Add spacer to body or scrollWrapper if needed

      
      const tl = gsap.timeline({
        
      scrollTrigger: {
        trigger: scrollWrapper,
        start: "top 30%", // Adjust where scrolling starts
         end: () => `+=${scrollContent.scrollWidth} +5100`,
        // Start when the container is at the top of the viewport
        scrub: 1, // Smooth scroll effect
        pin: true, // Pin the container during scroll
    // Keep this for smoother pinning
    pinSpacing:false,
    onLeave: () => {
      if (scrollContent) {
        scrollContent.style.position = "absolute"; // Change to absolute after scroll ends

        scrollContent.style.paddingBottom = "0px"; // Reset padding after scroll ends
      }
    },
    
    
   
        
      },
    })
    tl.to(scrollContent, {
      x: () => -11000, // Scroll left
      ease: "power1.inOut",
    });

    const tlBoxes = gsap.timeline({
        scrollTrigger: {
            trigger: ".container-section", // This should be the section AFTER the images
            start: "top 70%",
            end: "+=500",
            scrub: 1,
            pin: true, // Keeps boxes in place while they animate
        },
    });

    tlBoxes
        .to("#box1", {
            opacity: 1,
            x: "50vw", // Moves to the center
            rotate: -12,
            duration: 1,
        })
        .to("#box2", {
            opacity: 1,
            x: "50vw", // Moves to the center
            rotate: -6,
            duration: 1,
        })
        .to("#box3", {
            opacity: 1,
            x: "60vw", // Moves to the center
            rotate: 6,
            duration: 1,
        }, "-=0.5") // Starts slightly earlier

        const workRefs = ref([]); // Store references to each work item

        this.$nextTick(() => {
      this.$refs.workRefs.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              end: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    })

    this.$nextTick(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".project-container",
          start: "top 80%",
          end: "bottom top",
          toggleActions: "play none none reverse",
          scrub: 1, // Smooth transition as user scrolls
        },
      });

      this.$refs.projectRefs.forEach((el, i) => {
        tl.to(el, {
          opacity: 1,
          y: -i * 40, // Offsets each project upward slightly more than the previous one
          rotate: i % 2 === 0 ? -6 : 6, // Alternate rotation for staggered effect
          scale: 1,
          duration: 2,
          ease: "power2.out",
          

          scrollTrigger: {
      trigger: el,
      start: `top ${85 - i * 70}%`, // Delays when each project stacks
      end: "top 50%",
      toggleActions: "play none none reverse",
      scrub: 2, // Smooth stacking effect
      onUpdate: (self) => {
        el.style.zIndex = Math.round(self.progress * 100);
      }, // Updates z-index based on scroll progress
    },

        }); // Overlapping animation for smoother stacking
      });
    });


    this.typewriter()
  },



  


  methods:{

    typewriter() {
      const words = ["Full Stack", "Data Scientist", "Certificate Evangelist"];
      const typewriterEl = document.querySelector(".typewriter");

      // Blinking cursor effect
      gsap.to(".cursor", { opacity: 0, ease: "power2.inOut", repeat: -1, yoyo: true, duration: 0.5 });

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

body, html {
  overflow-x: hidden; /* Prevent horizontal overflow */
  overflow-y: scroll; /* Force vertical scrollbar */
}

.stack-container {
  margin-top: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.stack-item {
  background-color: yellow;
  color: black;
  padding: 6px 12px;
  border-radius: 10px;
  font-size: 10px;
  font-weight: bold;
  display: inline-block;
}


.work-experience h2 {
  align-self: flex-start;
 
}
.project-container {
  display: flex;
  flex-direction: column; /* Stack items vertically */

  gap: -40px; /* Space between stacked projects */
  align-items: center;
  position: relative;

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
  height: 500px; /* Large height */
  background: black;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  opacity: 0; /* Initially hidden for animation */
  position: absolute;
  transition: transform 0.5s ease-out, opacity 0.5s ease-out;
  pointer-events: auto;

}
.project-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;

}
.github-link {
  position: relative;
  z-index: 10; /* Keep it above stacked items */
}




.work-container {
  display: flex;
  flex-direction: column; /* Stack items vertically */

  gap: 20px;
  white-space: nowrap;
  padding: 20px;
  margin: 30px 30px;
  align-items: center;
  justify-content: center;
}
.work-item h3{
  margin:20px 20px;
}
.work-item:hover {
  border: 2px solid rgba(255, 255, 255, 0.8); /* Light border */
  box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.5); /* Glowing effect */
}
.work-item {
  width: min(90vw, 700px); /* Max width of 1200px but responsive */
  height: 250px; /* Allows content to adjust */
  min-height: 150px; /* Ensures enough space */
  background-color: transparent;
  border-radius: 10px;
  margin: 20px 20px;
  padding-left: 30px;
  padding-right: 30px;
  opacity: 0; /* Initially hidden */
  transform: translateY(50px); /* Starts slightly lower */
  text-align: center;
  word-wrap: break-word;
  white-space: normal;
  overflow-wrap: break-word;
  border: 2px solid transparent; /* Initially no border */
  transition: border 0.3s ease, box-shadow 0.3s ease;
}

.about-me h2 {
  align-self: flex-start;
  padding-bottom: 20px;
  padding-top: 50px;

  
}
.about-me{
  max-width: 800px;  /* Limits text width */
  display: flex;
  flex-direction: column;
  width: 100%;
 
}


.about-me p {
  align-self: flex-start;
  font-family: articulat-cf, sans-serif;
font-style: normal;
font-weight: 100;
}

.description-box {
  position: absolute;
  opacity: 0;
  width: 250px;
  height: 150px;
  background-color:black;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 16px;
}
#box1 {
  top: 50%;
  left: -48vw; /* Start far left */
  transform: translateY(-50%);
}
#box2 {
  top: 50%;
  left: -25vw; /* Starts from the right */
  transform: translateY(-50%);
  

}


#box3 {
  top: 50%;
  left: 0vw; /* Starts from the right */
  transform: translateY(-50%);
  

}

.certificates-container {
  height: 950vh;
  overflow:visible;
  white-space: nowrap;
  width: max-content;
  
  display: flex;
}

.scroll-wrapper{

  width: 200vw;
  
  overflow: hidden; /* Enable scrolling */

}


.certificates img {
  width: 300px;
  border-radius: 10px;
  transition: transform 0.3s ease;
  margin: 20px 400px;
  

}



/* Rainbow gradient text style */
.name-gradient {
  font-size: 1.25rem;
  font-weight: bold;
  background: linear-gradient(to right, #f97316, #3b82f6, #10b981); /* Rainbow colors */
  -webkit-background-clip: text;
  color: transparent;

  background-size: 200% 100%;
  background-position: 0 0;
  animation: gradientMove 3s ease-in-out infinite alternate;

}
@keyframes gradientMove {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}



.description-text {
  font-size: 1.125rem;
  color: white;
  margin-top: 1rem;
}

</style>

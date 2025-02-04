<!-- eslint-disable vue/html-closing-bracket-spacing -->
<!-- eslint-disable vue/max-attributes-per-line -->
<!-- eslint-disable vue/html-indent -->
<!-- eslint-disable vue/html-self-closing -->
<!-- eslint-disable vue/multiline-html-element-content-newline -->

<template>

  <v-container class="d-flex justify-center align-center" style="height: 50vh; padding-top: 200px; text-align: center; ">
    
    <v-card
      class="rounded-lg p-4"
      color="black"
      elevation="3"
      style="width: 500px; height:300px; text-align:center; border-width: 1px;  border-color: aqua;"
    >
      <h2 ref="name" class="name-gradient" style="margin: 20px 20px;">Hi, I'm <span>Sandeep Singh</span></h2>

      
      <p class="description-text" style="margin:30px 20px">I'm a passionate, self-started software engineer. I make products that are performant and beautiful. Building things is what I live for</p>

     I am also a <span ref="typewriter" class="typewriter name-gradient"></span><span class="cursor">_</span>
    </v-card>

    

    
    
  </v-container> 
  <v-container class="d-flex " style="margin-top: 250px;">

  <div class="certs">
      <h2>Certificates:</h2>
    </div>

  </v-container>


    <v-container class="d-flex justify-center align-center" style=" margin-top: 20px; ">
        <div id="images-container">
        <div
          v-for="image in images"
          :key="image.id"
          ref="imageRefs"
          class="image-container"
        >
        <img :src="image.imgUrl" alt="hello" />
      </div>
    </div>


  
    </v-container>

     <v-container class="container-section">




      <div class=" description-box"  id="box1">
        <div class="heading-container">
    <h3>Machine Learning Specialisation</h3>
    <a href="https://www.coursera.org/account/accomplishments/specialization/I2B4UDXUZXPU" target="_blank">
    <i class="fas fa-arrow-up-right-from-square"></i>
  </a>
</div>

    <p>Andrew Ng first ML Course (for complete beginners)</p>
    

  </div>
  
  <div class=" description-box"  id="box2">
    <div class="heading-container">
    <h3>Deep Learning Specialisation</h3>
    <a href="https://www.coursera.org/account/accomplishments/specialization/WO8RJLMC1ZDK" target="_blank">
    <i class="fas fa-arrow-up-right-from-square"></i>
  </a>
  </div>
    <p>Andrew Ng second ML Course (for more advanced people)</p>

  </div>

  <div class=" description-box"  id="box3">
    <div class="heading-container">
    <h3>NLP Learning Specialisation</h3>
    <a href="https://www.coursera.org/account/accomplishments/specialization/LBL14C1Z3SD1" target="_blank">
    <i class="fas fa-arrow-up-right-from-square"></i>
  </a>
  </div>
    <p>Andrew Ng third ML Course (for more advanced people)</p>

  </div>

     </v-container>
     <v-container class="d-flex justify-center align-center flex-column" style="padding-top: 200px ">

      <h2> Woah that was a lot of certificates!</h2>
      <p>Let me first explain who I am</p>



     </v-container>





    <v-container class="d-flex flex-column">
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

<v-container class="d-flex flex-column" style="padding-bottom: 800px;" >
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
import gsap from "gsap"; // Import GSAP
import ScrollTrigger from "gsap/ScrollTrigger";
import { images } from "./certs";
import { works } from "./work";
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
this.$nextTick(() => {
      this.$refs.imageRefs.forEach((el, index) => {
        gsap.fromTo(
          el,
          {
            opacity: 0,
            x: index % 2 === 0 ? -window.innerWidth : window.innerWidth, // Start from left/right
          y: index < 3 ? -window.innerHeight / 2 : window.innerHeight / 2, // Start from top/bottom
          rotate: index % 2 === 0 ? -30 : 30, // Alternate rotations
          },
          {
            scrollTrigger: {
              trigger: "#images-container",
              start: "top 50%",
              end: "+=100",
              scrub: 1,
              toggleActions: "play none none reverse",

            },
            opacity: 1,
            x: 0, // Stagger positioning towards center
            y: 0,
            rotate: index % 2 === 0 ? -6 : 6, // Straighten images as they arrive
            duration: 1.5,
            ease: "power2.out",
          }
        );
      });
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
            x: "50vw", // Moves to the center
            rotate: 6,
            duration: 1,
        }, "-=0.5") // Starts slightly earlier


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
      start: `top ${100 - i * 40}%`, // Delays when each project stacks
      end: "top 100%",
      toggleActions: "play none none reverse",
      scrub: true, // Smooth stacking effect
      pinSpacing:true,
      pin:true,
      anticipatePin:1,
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
      const words = ["Full Stack Developer", "Data Scientist", "Certificate extravagant"];
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

body {
  zoom: 3.0; /* Increases overall size */
}
.certs h2 {
  align-self: flex-start;
  padding-bottom: 20px;
  padding-top: 50px;

  
}

.stack-container {
  margin-top: 20px;
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
  opacity: 0; /* Initially hidden for animation */
  position: absolute;
  transition: transform 0.5s ease-out, opacity 0.5s ease-out;
  pointer-events: auto;
  border: 1px solid transparent; /* Ensures a base border exists */
  transition: transform 0.5s ease-in-out;


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


  
}
.about-me{
  max-width: 800px;  /* Limits text width */
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 40px;
 
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
  width: min(90vw, 250px);
  background-color:black;
  border-radius: 30px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  text-align: center;
  border: 2px solid transparent; /* Define border width and initial color */

}
.heading-container {
  display: flex;
  align-items: center; /* Aligns text and icon on the same line */
  gap: 8px; /* Adjust spacing between the text and the icon */
  
}
.description-box:hover{
  border-width: 1px;
  border-color: aqua;
}
.heading-container a{
  font-size: 19px; /* Adjust spacing between the text and the icon */
  text-decoration: none;
  padding-right: 10px;
  text-align: center;
  justify-content: center;
  transition: transform 0.6s ease; /* Smooth transition */

}
.description-box:hover .heading-container a {
  transform: translateX(10px) rotate(10deg) scale(1.1); /* Example with multiple effects */
  
}
#box1 {
  top: 50%;
  left: -35vw; /* Start far left */
  transform: translateY(-50%);
}
#box2 {
  top: 50%;
  left: -10vw; /* Starts from the right */
  transform: translateY(-50%);
  

}


#box3 {
  top: 50%;
  left: 15vw; /* Starts from the right */
  transform: translateY(-50%);
  

}
#images-container {


display: flex;
  flex-wrap: wrap;
  position: relative;
  justify-content: center;
  gap:-300px

}

.image-container {


  width: 300px; /* Adjust image size */
  height: 200px;
  transition: opacity 0.5s ease-out;
}
.image-container img {
  width: 100%; /* Ensures image fits inside container */
  height: 100%; /* Maintains aspect ratio */

  gap:-200px;

  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  transform: scale(1.1); /* Slight zoom */


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

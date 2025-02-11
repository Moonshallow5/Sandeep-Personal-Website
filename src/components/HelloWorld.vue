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
  <i class="fas fa-bars" @click="showMenu"> 
  </i> 
    <div
    class="nav-content"
    :class="this.showMobileMenu ? 'open-menu' : 'closed-menu'"> 
    <div class="logo" > <a href="https://sandeep-personal-website.vercel.app/home" @click.prevent="handleNavClick('home')">Sandeep Singh</a></div>
    <ul class="nav-items">
      <li> <a href="https://sandeep-personal-website.vercel.app/about-me" @click.prevent="handleNavClick('about-me')">About</a></li>
      <li> <a href="https://sandeep-personal-website.vercel.app/work" @click.prevent="handleNavClick('work')">Work</a></li>
      <li> <a href="https://sandeep-personal-website.vercel.app/projects" @click.prevent="handleNavClick('projects')">Projects</a></li>
    </ul>
    

    </div>
</div>
<v-container id="home" class="d-flex justify-center align-center" style="height: 50vh; padding-top:300px; text-align: center;  padding-bottom: 30px;">
    
    <v-card
      class="rounded-lg p-4 intro-table"
      color="black"
      elevation="3"
      style=" height: auto; text-align:center; border-width: 1px; "
    >
      <h2 ref="name" class="name-gradient" style="margin: 20px 20px;">Hi, I'm <span>Sandeep Singh</span></h2>

      <div class="description-text" style="margin:30px 20px">
      <p>I'm a passionate, self-started software engineer. I make products that are performant and beautiful. </p>
        <p>Building things is what I live for</p>
        </div>

     <p>I am also a <span ref="typewriter" class="typewriter name-gradient">_</span></p>

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
  <v-container class="d-flex " style="margin-top: 250px;">

  <div class="certs">
      <h2>Certificates:</h2>
    </div>

  </v-container>


    <v-container class="d-flex justify-center align-center" >
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




      <div id="box1"  class=" description-box">
        <div class="heading-container">
          <a href="https://www.coursera.org/account/accomplishments/specialization/I2B4UDXUZXPU" target="_blank"><h3>Machine Learning Specialisation</h3> </a>
    <a href="https://www.coursera.org/account/accomplishments/specialization/I2B4UDXUZXPU" target="_blank">
    <i class="fas fa-arrow-up-right-from-square"></i>
  </a>
</div>

    <p>Andrew Ng first ML Course (for complete beginners)</p>
    

  </div>
  
  <div id="box2"  class=" description-box">
    <div class="heading-container">
      <a href="https://www.coursera.org/account/accomplishments/specialization/WO8RJLMC1ZDK" target="_blank"><h3>Deep Learning Specialisation</h3></a>
    <a href="https://www.coursera.org/account/accomplishments/specialization/WO8RJLMC1ZDK" target="_blank">
    <i class="fas fa-arrow-up-right-from-square"></i>
  </a>
  </div>
    <p>Andrew Ng second ML Course (for intermediate people)</p>

  </div>

  <div id="box3"  class=" description-box">
    <div class="heading-container">
      <a href="https://www.coursera.org/account/accomplishments/specialization/LBL14C1Z3SD1" target="_blank"><h3>NLP Learning Specialisation</h3></a>
    <a href="https://www.coursera.org/account/accomplishments/specialization/LBL14C1Z3SD1" target="_blank">
    <i class="fas fa-arrow-up-right-from-square"></i>
  </a>
  </div>
    <p>Andrew Ng third ML Course (for more advanced people)</p>

  </div>

     </v-container>
     <v-container class=" wow-text d-flex justify-center align-center flex-column text-container" >

      <h2> Woah that was a lot of certificates!</h2>
      <p>Let me first explain who I am</p>



     </v-container>





    <v-container id="about-me" class="d-flex flex-column">
    <div class="about-me">

      <h2>About me:</h2>

      <p> I believe SWE is all about building things. But not just building things to keep it private, but instead build things to showcase your work to other people. You can be the best problem solver in the room, but if you don't show it to anyone, nobody is going to believe you.</p>
      <br>
      <p>Be proud of your work, showcase it to other people.</p>
      <br>

    <p>A recent grad from the  <a href="https://www.ed.ac.uk/" 
      class="highlight-link" target="_blank">University of Edinburgh with a Bachelors in Electronics and Computer Science.</a>
      
      Completed all of Andrew Ng Machine, Deep Learning and NLP specialisation accumulating over 16+ certificates</p>
    <br>

    <p>Current Full Stack Engineer, Future Data Scientist</p>
    <br>
    <p>Currently focusing on <a href="https://leetcode.com/u/moonshallow/" 
      class="highlight-link" target="_blank">practicing LC </a> and finding ways on exploring creativity by building things</p>
      

</div>
    </v-container>
    <v-container id="work" class="d-flex flex-column" style="padding-top: 70px;" >
      <div class="work-experience">
      <h2>Work Experience:</h2>
    </div>

    <div class="work-container">
      <a
      v-for="(work, index) in works"
      :key="index"
      ref="workRefs"
      :href="work.link"
      target="_blank"
      class="work-item"
    >
      <div class="work-title">
        <img :src="work.image_url" :alt="work.company" class="work-image"/>
        <h3><strong>{{ work.company }}</strong></h3>
        <i class="fa-solid fa-arrow-up-right-from-square arrow-icon"></i>
      </div>
      <p>{{ work.description }}</p>
      <div class="stack-container">
        <span v-for="(tech, i) in work.stack" :key="i" class="stack-item">
          {{ tech }}
        </span>
      </div>
    </a>
  </div>

</v-container>

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
    <v-container class="d-flex flex-column" style="margin-bottom: 30px; ">
      <div class="resume">
        <a href="/Sandeep_Singh_CV_17.pdf" target="_blank" class="cv-link">

      <h2>My CV <i class="fa-solid fa-arrow-up-right-from-square arrow-icon"></i></h2>
      </a>
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
      showMobileMenu: false,

  };
},


  mounted(){
this.$nextTick(() => {
      this.$refs.imageRefs.forEach((el, index) => {
        gsap.fromTo(
          el,
          {
            opacity: 0,
            x: index % 2 === 0 ? "-5vw" : "5vw", // Start from left/right
          y: index < 3 ? "-6vh" : "6vh",// Start from top/bottom
          rotate: index % 2 === 0 ? -20 : 20, // Alternate rotations
          },
          {
            scrollTrigger: {
              trigger: "#images-container",
              start: "top 90%",
              end: "top 100%",
              scrub: 1,
              toggleActions: "play none none reverse",

            },
            opacity: 1,
            x: 0, // Stagger positioning towards center
            y: 0,
            rotate: index % 2 === 0 ? -10 : 10, // Straighten images as they arrive
            duration: 0.8,
            ease: "power2.out",
          }
        );
      });
    });

    const tlBoxes = gsap.timeline({
        scrollTrigger: {
            trigger: ".container-section", // This should be the section AFTER the images
            start: "top 50%",
            end: "+=200",
            scrub: 1,
            pin: true, // Keeps boxes in place while they animate
        },
    });
    const mm = gsap.matchMedia();


    mm.add("(max-width: 768px)", () => {
    tlBoxes.clear(); // Reset previous animations

    tlBoxes
        .to("#box1", {
            opacity: 1,
            y: "0vh", // Keep first box at its position
            x: "70vw", // Center align on mobile
            rotate: 0,
            duration: 1,
        })
        .to("#box2", {
            opacity: 1,
            y: "25vh", // Move below the first box
            x: "46vw",
            rotate: 0,
            duration: 1,
        })
        .to("#box3", {
            opacity: 1,
            y: "50vh", // Move below the second box
            x: "16vw",
            rotate: 0,
            duration: 1,
        }, "-=0.5"); // Slight overlap for smoother transition
});
mm.add("(min-width: 769px)", () => {
    tlBoxes.clear();

    tlBoxes
        .to("#box1", {
            opacity: 1,
            x: "50vw",
            rotate: -12,
            duration: 1,
        })
        .to("#box2", {
            opacity: 1,
            x: "50vw",
            rotate: -6,
            duration: 1,
        })
        .to("#box3", {
            opacity: 1,
            x: "50vw",
            rotate: 6,
            duration: 1,
        }, "-=0.5");
});


        this.$nextTick(() => {
      this.$refs.workRefs.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              end: "top 40%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    })

    this.$nextTick(() => {
    // Keep first project static
    gsap.set(this.$refs.projectRefs[0], { opacity: 1, y: 10 });

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
                    start: `top 95%`, // Waits until 80% of the first container is seen
                    end: "top 80%",
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


    this.typewriter()
  },



  


  methods:{
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
      const words = ["Full Stack Developer", "Data Scientist", "Certificate extravagant"];
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

.arrow-icon {
  margin-left: 5px;
  transition: transform 0.3s ease-in-out;
}


.nav-menu {
  background-color:  black;

  position: fixed;
  top: 0;
    left: 10px;
    margin: 0; /* Remove extra margins */
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
    top:0;
 
    width: 100%; /* Make sure it spans the whole screen */
    margin: 0; /* Remove extra margins */
    z-index: 1000;
    padding-bottom: 10px;
    left: 10px;
    right: 10px;
  }
  
  .open-menu {
    opacity: 1;
    height: 30px;
    padding-bottom: 120px;
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
 
 
.social-icons {
  margin-top: 20px;
}

.icon {
  font-size: 28px; /* Adjust icon size */
  margin: 0 10px; /* Add spacing between icons */
  color: white; /* Default color */
  transition: color 0.3s ease-in-out;
}

.icon:hover {
  color: #007bff; /* Change color on hover */
}
.certs h2 {
  align-self: flex-start;
  padding-bottom: 20px;
  padding-top: 50px;

  
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




.work-container {
  display: flex;
  flex-direction: column; /* Stack items vertically */

  gap: 50px;
  white-space: nowrap;
  padding: 20px;
  margin: 30px 30px;
  align-items: center;
  justify-content: center;
}
.work-title {
  display: flex;
  align-items: center;
  justify-content: center;

}

.work-item h3{
  margin:10px 10px;
}
.work-item:hover h3{
  color: grey;
}
.work-item:hover .arrow-icon {
  transform: translateY(-5px) translateX(5px);
}

.work-item:hover .work-image {
  filter: grayscale(100%); /* Makes image grey */
}
.work-item:hover {
  border: 2px solid rgba(255, 255, 255, 0.8); /* Light border */
  box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.5); /* Glowing effect */
}
.work-image {
  width: 24px; /* Match FontAwesome icon size */
  height: auto;
  border-radius:30px;
 
}
.work-item {
  text-decoration: none;
  color: white;
  width: min(90vw, 700px); /* Max width of 1200px but responsive */
  height: auto; /* Allows content to adjust */
  min-height: 150px; /* Ensures enough space */
  background-color: transparent;
  border-radius: 10px;
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

.highlight-link {
  font-weight:700; /* Makes the text bold */
  text-decoration: none; /* Removes underline */
  color: white;


  transition: color 0.3s ease-in-out; /* Smooth color transition */
}

.highlight-link:hover {
  color: grey /* Changes color when hovered */
}
.container-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 70px; /* Adjust spacing between boxes */
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
  border: 1px solid transparent; /* Define border width and initial color */

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
  font-weight: bold; /* Adjust spacing between the text and the icon */
  text-decoration: none;
  padding-right: 10px;
  text-align: center;
  justify-content: center;
  transition: transform 0.3s ease; /* Smooth transition */
  color: white;

}
.description-box:hover a{
  color: grey;
}

.wow-text{
  padding-top: 200px; /* Default for large screens */
}
.wow-header {

  margin-bottom: 15px; /* Space between header and paragraph */
}
.text-container {
  text-align: center;

}
@media (max-width: 768px) {
  .wow-text{
    padding-top: 600px; /* Increase padding on small screens */
  }
}
@media (max-width: 768px) {
  #box1, #box2, #box3 {
    left: 80%; /* Center boxes */
    transform: translate(-50%, 0); /* Ensure centering */


  }

  #box1 {
    top: 70vh; /* Moves it higher */
    
  }

  #box2 {
    top: 70vh; /* Stacks below #box1 */

  }

  #box3 {
    top: 70vh; /* Stacks below #box2 */
  }
}
#box1 {
  top: 50%;
  left: -50vw; /* Start far left */
  transform: translateY(-50%);
}
#box2 {
  top: 50%;
  left: -25vw; /* Starts from the right */
  transform: translateY(-50%);
  

}


#box3 {
  top: 50%;
  left: 5vw; /* Starts from the right */
  transform: translateY(-50%);
  

}
#images-container {


display: flex;
  flex-wrap: wrap;
  position: relative;
  justify-content: center;


}

.image-container {


  width: 300px; /* Adjust image size */
  height: 200px;
  transition: opacity 0.5s ease-out;
}
.image-container img {
  width: 100%; /* Ensures image fits inside container */
  height: 100%; /* Maintains aspect ratio */

 
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);


}


.intro-table:hover{
  border-color: aqua;
  transition: border 0.4s ease;

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

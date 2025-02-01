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
      style="width: 500px; height:300px; text-align:center; border-width: 1px; margin-top: 100px; margin: 20px 20px; border-color: aqua;"
    >
      <h2 ref="name" class="name-gradient">Hi, I'm <span>Sandeep Singh</span></h2>

      
      <p class="description-text" style="margin:30px 20px">I'm a passionate and self-started software engineer. I make products that are performant and beautiful.</p>

     I am also a <span ref="typewriter" class="typewriter name-gradient"></span><span class="cursor">_</span>
    </v-card>

    

    
    
  </v-container> 


  

    <v-container class="d-flex justify-center align-center" style=" margin-bottom: 300px; margin-top: 40px; ">
      
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

     <v-container class="container-section" style="margin: 20px 20px;">




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
    <p>Andrew Ng second ML Course (for more advanced people)</p>

  </div>

     </v-container>
     <v-container class="d-flex justify-center align-center flex-column" style="margin: 200px 50px;">

      <h2> Woah that was a lot of certificates!</h2>
      <p>Let me first explain who I am</p>



     </v-container>





    <v-container class="d-flex justify-center align-center flex-column" style="min-height: 300px; ">
    <div class="about-me">

      <h2> About me:  </h2>

    <p>A recent grad from the University of Edinburgh with a Bachelors in Electronics and Computer Science.</p>
      <p> Completed all of Andrew Ng Machine, Deep Learning and NLP specialisation accumalating over 20+ certificates </p>

</div>
    </v-container>
    <v-container class="d-flex justify-center align-center flex-column">
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
      <h3>{{ work.title }}</h3>
      <p>{{ work.description }}</p>
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

gsap.registerPlugin(ScrollTrigger);


export default{
  name:"HelloWorld",

  data() {
    return {
      images,
      works,


  
  };
},


  mounted(){
    const scrollWrapper = this.$refs.scrollWrapper;
    const scrollContent = this.$refs.scrollContent;
    const spacer = this.$refs.spacer; // Get the spacer div

// Set the spacer height equal to scrollWrapper height (prevents jump)
//ScrollTrigger.refresh();


      
      const tl = gsap.timeline({
        
      scrollTrigger: {
        trigger: scrollWrapper,
        start: "top 30%", // Adjust where scrolling starts
         end: () => `+=${scrollContent.scrollWidth} +5100`,
        // Start when the container is at the top of the viewport
        scrub: 1, // Smooth scroll effect
        pin: true, // Pin the container during scroll
    // Keep this for smoother pinning
        
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
              start: "top 80%",
              end: "top 60%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    })



//    tl.to(scrollWrapper, {
//     opacity:0,
//   ease: "power1.inOut",
   
  
//   scrollTrigger: {
//     trigger: scrollWrapper,
//     start:' +=${scrollContent.scrollWidth} +5000', // Trigger after images scroll
//     end: "+=${scrollContent.scrollWidth} +6000",
//     scrub: 1,
//     pin:false,
//   },
// });


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

.body{
  overflow-y: hidden;
}
.work-experience h2{
  align-self: flex-start;
  
}
.work-container {
  display: flex;
  flex-direction: column; /* Stack items vertically */

  gap: 20px;
  white-space: nowrap;
  padding: 20px;
}
.work-item {
  width: 250px;
  height: 150px;
  background-color: black;
  border-radius: 10px;
  padding: 20px;
  opacity: 0; /* Initially hidden */
  transform: translateY(50px); /* Starts slightly lower */
  text-align: center;
}

.about-me h2 {
  align-self: flex-start; /* Align heading to the left */
  padding-left: 20px;
  margin-bottom: 10px; /* Add spacing below the heading */
}
.about-me {
  display: flex;
  flex-direction: column;  /* Stack elements vertically */
  align-items: center;
}
.about-section p {
  text-align: justify; /* Center-align the paragraph */
  
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
  height: 870vh;
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
.about-me {
  max-width: 800px;  /* Limits text width */
  padding: 20px 20px;     /* Adds inner spacing */
  text-align: center;
  backdrop-filter: blur(1px);
  
}

.about-me h2 {
  font-family: "Poppins", sans-serif;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 15px;
}

.about-me p {
  font-family: articulat-cf, sans-serif;
font-style: normal;
font-weight: 100;
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

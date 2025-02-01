'use client'
<template>
  <!-- <v-container class="d-flex justify-center align-center" style="height: 50vh;">
    
    <v-card
      class="rounded-lg p-4"
      color="black"
      elevation="3"
      style="width: 500px; height:300px; text-align:center; border-width: 1px; border-color: aqua;"
    >
      <h2 ref="name" class="name-gradient">Hi, I'm <span>Sandeep Singh</span></h2>

      
       Description with slightly larger font
      <p class="description-text" style="margin:30px 20px">I'm a passionate and self-started software engineer. I make products that are performant and beautiful.</p>

     I am also a <span ref="typewriter" class="typewriter name-gradient"></span><span class="cursor">_</span>
    </v-card>

    
    
  </v-container> -->


  <v-container class="d-flex justify-center align-center" style="height: 50vh;">
    
    <v-card
      class="rounded-lg p-4"
      color="black"
      elevation="3"
      style="width: 500px; height:300px; text-align:center; border-width: 1px; border-color: aqua;"
    >
      <h2 ref="name" class="name-gradient">Hi, I'm <span>Sandeep Singh</span></h2>

      
      <p class="description-text" style="margin:30px 20px">I'm a passionate and self-started software engineer. I make products that are performant and beautiful.</p>

     I am also a <span ref="typewriter" class="typewriter name-gradient"></span><span class="cursor">_</span>
    </v-card>

    
    
  </v-container> 

 

    <v-container class="d-flex justify-center align-center" style="height: auto">
      <div ref="scrollWrapper" class="scroll-wrapper">

    <div ref="scrollContent" class="certificates-container">

      <div v-for="image in images" :key="image.id" class="certificates">
        <img :src="image.imgUrl " alt="yoyo"/>

      </div>
    
    </div>
  </div>
  
    </v-container>

    <v-container class="d-flex justify-center align-center flex-column" style="height: auto; padding-top: 20px;">
    <div class="about-me">

      <h2> About me:  </h2>

    

    <p>A recent grad from the University of Edinburgh with a Bachelors in Electronics and Computer Science.</p>
      <p> Completed all of Andrew Ng Machine, Deep Learning and NLP specialisation accumalating over 20+ certificates </p>

</div>
    </v-container>


  



  
</template>


<script>
import gsap from "gsap"; // Import GSAP
import ScrollTrigger from "gsap/ScrollTrigger";
import { images } from "./certs";

gsap.registerPlugin(ScrollTrigger);


export default{
  name:"HelloWorld",

  data() {
    return {
      images,


  
  };
},


  mounted(){
    const scrollWrapper = this.$refs.scrollWrapper;
    const scrollContent = this.$refs.scrollContent;

   
    //this.typewriter()

    // const lenis = new Lenis({
    //   wrapper:scrollWrapper||undefined,
    //   content:scrollContent||undefined,
    //   smooth: true,
    //   direction: 'vertical', // vertical scroll
    // });

    // function raf(time) {
    //   lenis.raf(time); // Request animation frame for smooth scroll
    //   requestAnimationFrame(raf);
    // }

    //requestAnimationFrame(raf);


    const totalScrollDistance = scrollContent.scrollWidth - scrollWrapper.offsetWidth;
    const scrollDuration = totalScrollDistance * 1.5; // Increase duration based on width


    gsap.to(scrollContent, {
      x: () => -60000, // Scroll horizontally based on the container width
      ease:'power1.inOut',
      

      scrollTrigger: {
        trigger: scrollWrapper,
        // Start when the container is at the top of the viewport
         
        scrub: 7, // Smooth scroll effect
        pin: true, // Pin the container during scroll
    // Keep this for smoother pinning
        
      },
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

.certificates-container {
  height: 80vh;
  overflow:visible;
  white-space: nowrap;
  width: max-content;
  
  display: flex;
}

.scroll-wrapper{

  width: 200vw;
  
  overflow-x: hidden; /* Enable scrolling */

}


.certificates img {
  width: 300px;
  border-radius: 10px;
  transition: transform 0.3s ease;
  margin: 20px 50px;
  

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


// startColorAnimation() {

  //   gsap.killTweensOf(this.$refs.typewriter); // Stop any previous animations
  //     gsap.to(this.$refs.typewriter, {

  //       backgroundPosition:"200% 0",
  //       duration: 5,
  //     repeat: -1,
  //     ease: "power1.inOut",
      
  //   });
  //   gsap.killTweensOf(this.$refs.name); // Stop any previous animations
  //     gsap.to(this.$refs.name, {

  //       backgroundPosition:"200% 0",
  //       duration: 5,
  //     repeat: -1,

  //     ease: "power1.out",
      
  //   });


  // },

  // stopColorAnimation() {

  //   gsap.killTweensOf(this.$refs.typewriter)
  //   gsap.to(this.$refs.typewriter, {
  //     backgroundPosition: "0% 0",
  //     duration: 1,
  //     ease: "power1.inOut",
      
  //   });
  //   gsap.killTweensOf(this.$refs.name)
  //   gsap.to(this.$refs.name, {
  //     backgroundPosition: "0% 0",
  //     duration: 1,
  //     ease: "power1.inOut",
      
  //   });
  // },
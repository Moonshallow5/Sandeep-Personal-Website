<template>
  <v-container class="d-flex justify-center align-center" style="height: 100vh;">
    <!-- Container for the content -->
    <v-card
      class="rounded-lg p-4"
      color="black"
      elevation="3"
      style="width: 500px; height:210px; text-align:center; border-width: 1px; border-color: aqua;"
      @mouseenter="startColorAnimation"
      @mouseleave="stopColorAnimation"
    >
      <!-- Name with rainbow gradient -->
      <h2 ref="name" class="name-gradient">Hi, I'm <span>Sandeep Singh</span></h2>

      
      <!-- Description with slightly larger font -->
      <p class="description-text" style="margin:30px 20px">I'm a passionate and self-started software engineer. I make products that are performant and beautiful.</p>

     I am also a <span ref="typewriter" class="typewriter name-gradient"></span><span class="cursor">_</span>
    </v-card>

    
    
  </v-container>

  
</template>


<script>
import gsap from "gsap"; // Import GSAP


import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export default{
  name:"HelloWorld",


  mounted(){


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

    startColorAnimation() {

      gsap.killTweensOf(this.$refs.typewriter); // Stop any previous animations
        gsap.to(this.$refs.typewriter, {

          backgroundPosition:"200% 0",
          duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        
      });
      gsap.killTweensOf(this.$refs.name); // Stop any previous animations
        gsap.to(this.$refs.name, {

          backgroundPosition:"200% 0",
          duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        
      });


    },

    stopColorAnimation() {

      gsap.killTweensOf(this.$refs.typewriter)
      gsap.to(this.$refs.typewriter, {
        backgroundPosition: "0% 0",
        duration: 1,
        ease: "power1.inOut",
        
      });
      gsap.killTweensOf(this.$refs.name)
      gsap.to(this.$refs.name, {
        backgroundPosition: "0% 0",
        duration: 1,
        ease: "power1.inOut",
        
      });
    },
  },

};
  //
</script>
<style scoped>


/* Rainbow gradient text style */
.name-gradient {
  font-size: 1.25rem;
  font-weight: bold;
  background: linear-gradient(to right, #f97316, #3b82f6, #10b981); /* Rainbow colors */
  -webkit-background-clip: text;
  color: transparent;

  background-size: 200% 100%;
  background-position: 0 0;
  /* transition: background-position 0.5s ease-in-out; */
}

.description-text {
  font-size: 1.125rem;
  color: white;
  margin-top: 1rem;
}

</style>


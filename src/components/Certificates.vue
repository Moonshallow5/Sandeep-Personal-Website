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
        <img :src="image.imgUrl" alt="certificates" />
        </div>
    </div>



    </v-container>

    <v-container class="container-section">



        <a href="https://www.coursera.org/account/accomplishments/specialization/I2B4UDXUZXPU" target="_blank">
        <div id="box1"  class=" description-box">
            <div class="heading-container">
            <h3>Machine Learning Specialisation</h3> 

            <i class="fas fa-arrow-up-right-from-square"></i>

            </div>
            <p>Andrew Ng first ML Course (for complete beginners)</p>
        </div>
        </a>
    <a href="https://www.coursera.org/account/accomplishments/specialization/WO8RJLMC1ZDK" target="_blank">
    <div id="box2"  class=" description-box">
    <div class="heading-container">
        <h3>Deep Learning Specialisation</h3>
        <i class="fas fa-arrow-up-right-from-square"></i>

    </div>
    <p>Andrew Ng second ML Course (for intermediate people)</p>

    </div>
    </a>

    <a href="https://www.coursera.org/account/accomplishments/specialization/LBL14C1Z3SD1" target="_blank">
    <div id="box3" class="description-box">
    <div class="heading-container">
        <h3>NLP Learning Specialisation</h3>
        <i class="fas fa-arrow-up-right-from-square"></i>
    </div>
    <p>Andrew Ng third ML Course (for more advanced people)</p>
    </div>
    </a>


    </v-container>
    <v-container class=" wow-text d-flex justify-center align-center flex-column text-container" >

<h2> Woah that was a lot of certificates!</h2>
<p>Let me first explain who I am</p>



</v-container>

</template>


<script>
import gsap from "gsap"; // Import GSAP
import ScrollTrigger from "gsap/ScrollTrigger";
import { images } from "./certs";
gsap.registerPlugin(ScrollTrigger);
export default{
    name:'Certificates',

    data(){

        return{
            images,
        }
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

    }
}

</script>

<style scoped>

.certs h2 {
  align-self: flex-start;
  padding-bottom: 20px;
  padding-top: 50px;

  
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
.container-section {
  display: flex;
  flex-direction: column;
  align-items: center;

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
.description-box{
  color: white;
}

.description-box:hover{
  border-width: 1px;
  border-color: aqua;
}

.description-box:hover h3{
  color: grey;
}
.description-box:hover i{
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



</style>



<template>
    <v-container class="d-flex " style="margin-top: 100px;" >

    <div class="certs">
        <h2 class="cert-text">My Certificates</h2>
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

    <v-container class="container-section" style="margin-top:75px;">



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

<!-- <h2> Woah that was a lot of certificates!</h2>
<p>Let me first explain who I am</p> -->



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
  const heading = document.querySelector(".cert-text"); // Select heading
  gsap.from(heading, {
                scrollTrigger: {
                    trigger: heading, 
                    start: "clamp(top bottom)", 
                    end: "clamp(20px 85%)",
                    toggleActions: "play none none none",
                    scrub: 1,
                },
                y: 80,
                opacity: 0,
            })

      this.$refs.imageRefs.forEach((el, index) => {

        gsap.fromTo(
          el,
          {
            opacity: 0,
            x: index % 2 === 0 ? "-10vw" : "10vw", 
          y: index < 3 ? "-10vh" : "10vh",
          rotate: index % 2 === 0 ? -20 : 20, 
          scale:0.5,
          },
          {
            scrollTrigger: {
              trigger: "#images-container",
              start: "clamp(top 70%)",
              end: "+=200",
              scrub: 1.2,
              toggleActions: "play none none reverse",

            },
            opacity: 1,
            x: 0, 
            y: 0,
            rotate: index % 2 === 0 ? -10 : 10,
            duration: 0.5,
            ease: "power2.out",
            scale:1,
          }
        );
      });
    });

    const tlBoxes = gsap.timeline({
        scrollTrigger: {
            trigger: ".container-section", // This should be the section AFTER the images
            start: "top 40%",
            end: "+=900",
            scrub: 1,
            pin: true, 
            pinSpacing:true
        },
    });
    const mm = gsap.matchMedia();


    mm.add("(max-width: 768px)", () => {
    tlBoxes.clear(); 

    tlBoxes
        .to("#box1", {
            opacity: 1,
            y: "-20vh", 
            x: "0vw", 
            left: "50%",
            transform: "translateX(-50%)",

            rotate: 0,
            duration: 1,
        })
        .to("#box2", {
            opacity: 1,
            y: "0vh",
            x: "0vw", 
            left: "50%",
            transform: "translateX(-50%)",

            rotate: 0,
            duration: 1,
        })
        .to("#box3", {
            opacity: 1,
            y: "20vh", 
            x: "0vw",
            left: "50%",
            transform: "translateX(-50%)",
            rotate: 0,
            duration: 1,
        }, "-=0.5");
});
mm.add("(min-width: 769px)", () => {
    tlBoxes.clear();

    tlBoxes
        .fromTo("#box1",
        { opacity: 0, x: "-100vw" },  // Start from far left, invisible
 
        
        {
            opacity: 1,
            x: "-40vw",
            rotate: -12,
            duration: 1,
        })
        .fromTo("#box2", 
        { opacity: 0, x: "100vw" }, 

        
        {
            opacity: 1,
            x: "-15vw",
            rotate: -6,
            duration: 1,
        })
        .fromTo("#box3", 
        { opacity: 0, x: "-100vw" }, 

        
        {
            opacity: 1,
            x: "10vw",
            rotate: 6,
            duration: 1,
        });
});

    }
}

</script>

<style scoped>
h2{
  font-family: "Poppins", serif;
  font-weight: 1300;
  font-size: 1.8rem; 


  
}
.certs h2 {
  align-self: flex-start;
  padding-bottom: 20px;

  
}

@media (max-width: 768px) {

  #box1 {
        left: -10vw; 
        opacity: 0;
    }
    #box2 {
        left: -10vw; 
        opacity: 0;
    }
    #box3 {
        left: -10vw;
        opacity: 0;
    }
}
#images-container {


display: flex;
  flex-wrap: wrap;
  position: relative;
  justify-content: center;


}

.image-container {


  width: 270px;
  height: 200px;
  transition: opacity 0.5s ease-out;
}
.image-container img {
  width: 100%; 
  height: 100%; 

 
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);


}

@media (max-width: 600px) {
  .image-container {
    width: 170px;
    height: 200px;
  }

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
  align-items: center; 
  gap: 8px; 
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
  padding-top: 300px; 
}

.text-container {
  text-align: center;

}
@media (max-width: 768px) {
  .wow-text{
    padding-top: 400px; 
  }
}



</style>



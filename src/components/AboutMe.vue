

<template>

<v-container id="about-me" class="d-flex flex-column">
    <div class="about-me">
      <div id="about-para-1">


      <p> Having graduated from the <a href="https://www.ed.ac.uk/" 
        class="highlight-link" target="_blank">University of Edinburgh</a>. I'm currently a Full Stack Developer at <a class="highlight-link"href="https://www.pimato.com/" target="_blank"> Pimato</a>. I am a deeply passionate person, and extremely self driven. As you can see, I built this website all by myself by learning web development trough the 
        <a class="highlight-link" href="https://www.theodinproject.com/dashboard">Odin Projects</a>.</p>
        </div>
      <br>
      <div id="about-para-2">
        <p> I love all things technology and building solutions for problems. It is one of my goals in life to be able to use that love to make a real difference to society through software.</p>
    </div>
        <br>
    <div id="about-para-3">

    <p>I thoroughly enjoy building beautiful, responsive and effective frontends using 
      <v-tooltip location="top" >
      <template v-slot:activator="{ props }">
        <span v-bind="props">

        <i class="devicon-vuejs-plain colored" style="font-size: 27px;" ></i>
        </span>
      </template>
      <span>Vue.js</span>
      </v-tooltip>  <a class="highlight-link" href="https://vuejs.org/">Vue</a> 
      + <v-tooltip location="top" >
      <template v-slot:activator="{ props }">
        <span v-bind="props">

        <i class="devicon-javascript-plain colored" style="font-size: 27px;" ></i>
        </span>
      </template>
      <span>JavaScript</span>
      </v-tooltip>
      <a class="highlight-link" href="https://www.w3schools.com/js/"> JavaScript</a>, as well as building scalable, performant and resilient backends using 
      <v-tooltip location="top" >
      <template v-slot:activator="{ props }">
        <span v-bind="props">

        <i class="devicon-java-plain colored" style="font-size: 27px;" ></i>
        </span>
      </template>
      <span>Java</span>
      </v-tooltip>
       <a class="highlight-link" href="https://www.java.com/en/"> Java</a> or 
       <v-tooltip location="top" >
      <template v-slot:activator="{ props }">
        <span v-bind="props">
       <i class="devicon-nodejs-plain colored" style="font-size: 27px;" ></i>
        </span>
      </template>
      <span>Node.js</span>
      </v-tooltip>
      <a class="highlight-link" href="https://nodejs.org/en"> Node.js </a> + 

      <v-tooltip location="top" >
      <template v-slot:activator="{ props }">
        <span v-bind="props">
       <i class="devicon-express-original" style="font-size: 27px;" ></i>
        </span>
      </template>
      <span>Express.js</span>
      </v-tooltip>

      <a class="highlight-link" href="https://expressjs.com/"> Express.js</a> , and 
      <v-tooltip location="top" >
      <template v-slot:activator="{ props }">
        <span v-bind="props">

        <i class="devicon-postgresql-plain colored" style="font-size: 27px;" ></i>
        </span>
      </template>
      <span>PostgreSQL</span>
      </v-tooltip>
      <a class="highlight-link" href="https://www.postgresql.org/"> PostgreSQL</a> or
      <v-tooltip location="top" >
      <template v-slot:activator="{ props }">
        <span v-bind="props">

        <i class="devicon-mongodb-plain colored" style="font-size: 27px;" ></i>
        </span>
      </template>
      <span>MongoDB</span>
      </v-tooltip> 
      <a class="highlight-link" href="https://www.mongodb.com/">MongoDB</a> for the database.</p>
</div>
  
      

</div>
    </v-container>


</template>


<script>
import gsap from "gsap"; 
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default{

    name:'AboutMe',

    mounted(){
      const paragraphSelectors = [
                "#about-para-1",
                "#about-para-2",
                "#about-para-3"
            ];

            paragraphSelectors.forEach((selector) => {
                gsap.fromTo(
                    selector,
                    {
                        opacity: 0,
                        y: 50,
                    },
                    {
                        scrollTrigger: {
                            trigger: selector, 
                            start: "clamp(100% bottom)",
                            end: "clamp(bottom 20px)",
                            toggleActions: "play none none reverse",
                        },
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        ease: "power2.out"
                    }
                );
            });

    }

}


</script>

<style scoped>

h2{
  font-family: "Poppins", serif;
  font-weight: 1300;

  
}

p{
  font-family: 'Poppins', sans-serif; /* Replace 'Poppins' with your chosen font */
  font-weight: 300;
  font-style: normal;
  font-size: large;


}
.about-me h2 {
  align-self: flex-start;
  padding-bottom: 20px;


  
}
.about-me{
  
  display: flex;
  flex-direction: column;
  width: 90%;
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



</style>
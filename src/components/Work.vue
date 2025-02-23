
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
    <v-container id="work" class="d-flex flex-column" style="padding-top: 70px;" >
        <div class="work-experience mb-5">
        <h2>Work Experience:</h2>
      </div>
  
    <div class="work-container">
        <a
        v-for="(work, index) in works"
        :key="index"
        ref="workRefs"
        :href="work.link"
        target="_blank"
        class="work-item">
            <div class="work-header">
                <div class="work-duration">
                    <p>{{ work.duration }}</p> <!-- Add this for work duration -->
                </div>
                <div class="work-content">                
                    <div class="work-title">
                        <img :src="work.image_url" :alt="work.company" class="work-image"/>
                        <h3><strong>{{ work.company }}</strong></h3>
                        <i class="fa-solid fa-arrow-up-right-from-square arrow-icon"></i>
                    </div>
                    
            
                    <ul class="work-description">
                      <li v-for="(item, idx) in work.description" :key="idx">{{ item }}</li>
                    </ul>

                    <div class="stack-container">
                        <span v-for="(tech, i) in work.stack" :key="i" class="stack-item">
                        
                            {{ tech }}

                        </span>
                    </div>
                </div>
            </div>
        </a>
    </div>
  
  </v-container>

  </template>


<script>
import { works } from "./work";
import gsap from "gsap"; // Import GSAP
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default{
    name:'Work',
    data(){
        return{
        works,
        }
    },

    mounted(){
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
              start: "top 70%",
              end: "top 60%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    })
    },
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
  font-size: 1.1em;


}
@media screen and (max-width: 768px) {
  .work-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  }

  .work-content {
    margin-top: 10px; /* Moves description and stack down */
  }
  .work-duration{
    width: 100%;
  }
}
.work-content {
  display: flex;
  flex-direction: column;
  flex: 1; /* Ensures it takes available space */
}
.work-header {
  display: flex;
  align-items: flex-start;
  gap: 20px; /* Spacing between duration and title */
  width: 100%;

}

.work-duration {
  text-align: left;
  font-weight: bold;
  color: gray;
  margin-top: 10px;
  width: 100px;
}

.stack-container {

  display: flex;
  flex-wrap: wrap;
  gap: 8px;

}

.stack-item {
    background-color: #f7e15c;

  color: black;
  margin-top: 30px;
  padding: 6px 12px;
  border-radius: 10px;
  font-size: 10px;
  font-weight: bold;
  display: inline-block;
}




.work-container {
  display: flex;
  flex-direction: column; /* Stack items vertically */

  gap: 50px;
  white-space: nowrap;
  padding: 20px;

  align-items: center;
  justify-content: center;
}
.work-title {
   
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;


}
.work-description {
  margin-top: 5px; /* Adds spacing below title */
  text-align: left;
}
.work-description li {
  margin-bottom: 5px;
}
.work-item:hover h3{
  color: grey;
}
.work-item:hover .arrow-icon {
  transform: translateY(-5px) translateX(5px);
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
  width: 90%;


  height: auto; /* Allows content to adjust */
  background-color: transparent;
  border-radius: 10px;
padding: 10px;
  opacity: 0; /* Initially hidden */

  text-align: center;
  word-wrap: break-word;
  white-space: normal;
  overflow-wrap: break-word;
  border: 2px solid transparent; /* Initially no border */
  transition: border 0.3s ease, box-shadow 0.3s ease;
}


</style>
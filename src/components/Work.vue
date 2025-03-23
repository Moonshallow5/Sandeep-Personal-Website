

    <template>
    <v-container id="work" class="d-flex flex-column" style="padding-top: 120px;" >
        <div class="work-experience mb-5">
        <h2>My Work Experience</h2>
      </div>
  
    <div class="work-container">
        <a
        v-for="(work, index) in works"
        :key="index"
        ref="workRefs"
        :href="work.link"
        target="_blank"
        class="work-item"
        :style="{ backgroundColor: work.bgColor }"
        >
            <div class="work-header">
                <div class="work-duration">
                    <p>{{ work.duration }}</p> 
                </div>
                <div class="work-content">                
                    <div class="work-title">
                        <img :src="work.image_url" :alt="work.company" class="work-image"/>
                        <h3><strong>{{ work.company }}</strong></h3>
                        <i class="fa-solid fa-arrow-up-right-from-square arrow-icon"></i>
                    </div>
                    
            
                    <ul class="work-description ml-5">
                      <li v-for="(item, idx) in work.description" :key="idx">{{ item }}</li>
                    </ul>

                    <div class="stack-container ">
                      <v-tooltip v-for="(tech, i) in work.stack" :key="i" location="top"  >
                        <template v-slot:activator="{ props }"  >
                          <span v-bind="props" >
                            <i :class="tech.icon"  class="stack-item" :style="{ color: tech.color, fontSize: '24px'}"></i>
                          </span>
                        </template>
                        <span>{{ tech.name }}</span>
                      </v-tooltip>
                    </div>
                </div>
            </div>
        </a>
    </div>
  
  </v-container>

  </template>


<script>
import { works } from "./work";
import gsap from "gsap";
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
    const heading = document.querySelector(".work-experience");
    const workItems = [...this.$refs.workRefs] || []; 
    
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

    workItems.forEach((el,index) => {
      let yValue = index % 2 === 0 ? 130 : 200; 
      gsap.fromTo(
        el,
        { opacity: 1, y: yValue }, 
        {
          y: 0, 
  
         
          scrollTrigger: {
            trigger: el,
            start: "clamp(top bottom)", 
            end: "clamp(20px 85%)",
            scrub: 1,
          
            toggleActions:"play none none none none"
          },
        }
      );
    });
    gsap.delayedCall(0.6, () => ScrollTrigger.refresh());


  
  });

    },
}



</script>

<style scoped>
h2{
  font-family: "Poppins", serif;
  font-weight: 1300;
  font-size: 1.7rem; 

}

p{
  font-family: 'Poppins', sans-serif; 
  font-weight: 300;
  font-style: normal;
  font-size: 1.1em;


}
ul{
  font-family: 'Poppins', sans-serif; 
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
    margin-top: 10px; 
  }
  .work-duration{
    width: 100%;
  }
}
.work-content {
  display: flex;
  flex-direction: column;
  flex: 1; 
}
.work-header {
  display: flex;
  align-items: flex-start;
  gap: 20px; 
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
  margin-top: 30px;

  display: flex;
  flex-wrap: wrap;

}

.stack-item {

  padding-right: 12px ;
 padding-bottom: 10px;

 
}




.work-container {
  display: flex;
  flex-direction: column; 

  gap: 20px;
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
.arrow-icon {
  transition: transform 0.5s ease;
}

.work-item:hover {
  border: 2px solid rgba(255, 255, 255, 0.8); 
  box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.5); 
}
.work-item {
  transition: border 0.3s ease, box-shadow 0.3s ease;
}

.work-image {
  width: 24px; 
  height: auto;
  border-radius:30px;
 
}
.work-item {
  text-decoration: none;
  color: black;
  width: 100%;


  height: auto; 
  border-radius: 30px;
  padding: 10px;
  opacity: 1; 

  text-align: center;
  word-wrap: break-word;
  white-space: normal;
  overflow-wrap: break-word;
  border: 2px solid transparent; 
  transition: border 0.3s ease, box-shadow 0.3s ease;
}


</style>
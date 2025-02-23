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

<v-container id="home" class="d-flex justify-center align-center" style="height: 130vh;  text-align: center;  padding-bottom: 30px;">
    
    <v-card
      class="rounded-lg intro-table"
      color="black"
      elevation="3"
      style=" height: auto; text-align:center; border-width: 1px; width: 100%; "
    >
    <v-row class="justify-start">
      <v-col cols="auto">
    <a href="https://cp.certmetrics.com/amazon/en/public/verify/credential/ff7a45e5f19f4a27b94834b5a54c054c" target="_blank" class="aws-badge">
      <v-img
        src="../assets/aws-certified-cloud-practitioner.png"
        alt="AWS Certified Badge"
        class="animated-image"
        style=" width: 130px; height: auto;   display: block;"
      />
    </a>
    </v-col>
    </v-row>
    <v-row
    class="d-flex align-center"
    style="justify-content: center;"
  >
    <v-col
      cols="auto"
      class="d-flex align-center"
    >
      
        <img src="../assets/view-compress.png" class="animated-image mb-5" alt="Avatar" style="width: 100px; border-radius: 20px;">
     
    </v-col>
   
    <v-col
      cols="auto"
      class="d-flex align-center"
    >
      <h2 ref="name"  style=" align-items: center;  margin-bottom: 20px;" > <span class="name-gradient">Hi, I'm Sandeep Singh</span> <span class="wave">👋</span></h2> 
      </v-col>
      </v-row>
      

      <div class="description-text" style="margin-bottom: 20px;">
      <span>I'm a passionate, self-started software engineer. I make products that are performant and beautiful. </span>
        <span>Building things is what I live for</span>
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
  </template>


<script>
export default{

    name:"Hero",
}
</script>

<style scoped>

.animated-image {
  transition: transform 1s ease-in-out;
}
/* Create the animated border effect */
.animated-image:hover {
  transform: rotate(360deg);
}

.wave {
  
  display: inline-block;
  font-size: 25px;

 
  transform-origin: 70% 70%;
  transition: transform 0.3s ease-in-out;

}
.v-card:hover .wave {
  animation: wave-animation 1.5s infinite;
}


@keyframes wave-animation {
  0% { transform: rotate(0deg); }
  10% { transform: rotate(14deg); }
  20% { transform: rotate(-8deg); }
  30% { transform: rotate(14deg); }
  40% { transform: rotate(-4deg); }
  50% { transform: rotate(10deg); }
  60% { transform: rotate(0deg); }
  100% { transform: rotate(0deg); }
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



.description-text  {
  font-family: "Poppins", serif;
  font-weight: 1700;
  font-size: 1.8rem;
  color: white;
  margin-top: 1rem;
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


</style>
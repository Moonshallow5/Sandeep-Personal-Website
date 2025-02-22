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

<v-container id="home" class="d-flex justify-center align-center" style="height: 50vh; padding-top:350px; text-align: center;  padding-bottom: 30px;">
    
    <v-card
      class="rounded-lg p-4 intro-table"
      color="black"
      elevation="3"
      style=" height: auto; text-align:center; border-width: 1px; "
    >
    <v-row class="justify-start">
      <v-col cols="auto">
    <a href="https://cp.certmetrics.com/amazon/en/public/verify/credential/ff7a45e5f19f4a27b94834b5a54c054c" target="_blank" class="aws-badge">
      <v-img
        src="../assets/aws-certified-cloud-practitioner.png"
        alt="AWS Certified Badge"
        style=" width: 130px; height: auto; margin-top: 70px;  display: block;"
      />
    </a>
    </v-col>
    </v-row>
      <h2 ref="name" class="name-gradient" style="margin: 20px 20px;">Hi, I'm <span>Sandeep Singh</span></h2>

      <div class="description-text" style="margin:30px 20px">
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
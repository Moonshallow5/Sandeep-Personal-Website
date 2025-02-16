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

<v-container id="about-me" class="d-flex flex-column">
    <div class="about-me">

      <h2>About me:</h2>

      <p> I believe SWE is all about building things. But not just building things to keep it private, but instead build things to showcase your work to other people. You can be the best problem solver in the room, but if you don't show it to anyone, nobody is going to believe you.</p>
      <br>
      <p>Be proud of your work, showcase it to other people.</p>
      <br>

    <p>A recent grad from the  <a href="https://www.ed.ac.uk/" 
      class="highlight-link" target="_blank">University of Edinburgh with a Bachelors in Electronics and Computer Science.</a>
      
      Completed all of Andrew Ng Machine, Deep Learning and NLP specialisation accumulating over 16+ certificates</p>
    <br>

    <p>Current Full Stack Engineer, Future Data Scientist</p>
    <br>
    <p>Currently focusing on <a href="https://leetcode.com/u/moonshallow/" 
      class="highlight-link" target="_blank">practicing LC </a> and finding ways on exploring creativity by building things</p>
      

</div>
    </v-container>


</template>


<script>

export default{

    name:'AboutMe',
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
.about-me h2 {
  align-self: flex-start;
  padding-bottom: 20px;


  
}
.about-me{
  max-width: 800px;  /* Limits text width */
  display: flex;
  flex-direction: column;
  width: 100%;
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
<template>
    <v-container>

        <v-card color="#FCE4EC" class="mx-auto" style="width:600px">
            <v-form>
                <v-container>
                    <img src="/public/project.png" alt="About the Project" class="img">
                    <v-card-text>
                        <a href="/aboutmeApp"><img src="/public/aboutme.png" class="img1 mx-auto" alt=""></a>
                        <p> This page shows the Personal Information about Calista Francine F. Crujido </p>
                        <a href="/basicMath"><img src="/public/calculator.png" class="img1 mx-auto" alt=""></a>
                        <p> The basic calculator that I've created consists of buttons for addition, subtraction, division, multiplication,
                and the average. Once you've inputted two numbers and pressing the button of your choice, it will display the total. </p>
                        <a href="/stringApp"><img src="/public/string.png" class="img1 mx-auto" alt=""></a>
                        <p> The string manipulation consists of a single button to count and convert. Upon clicking this, it will show the number of
                vowels, numbers, and consonants in the given string that the user inputted. Also, there is a part where it converts
                all the vowels in the string into an asterisk (*). </p>
                        <a href="/vuetifyApp"><img src="/public/aboutvuetify.png" class="img1 mx-auto" alt=""></a>
                        <p> A Research About Vuetify. </p>
                        <a href="/axios"><img src="/public/axios.png" class="img1 mx-auto" alt=""></a>
                        <p> The Comics Quiz in the Quiz tab contains random questions from the Open Trivia Database. In
                the API helper, you are given the chance to select the number of questions, category, difficulty,
                type, and the encoding.  </p>
                    </v-card-text>
                </v-container>
            </v-form>
        </v-card>
    </v-container>


</template>

<script>

</script>
<style scoped>
    .img {
      margin-left: auto;
      margin-right: auto;
      width: 100%;
    }

    .img1 
    {
        width: 50%;
        height: 100px;
        
    }
    
    </style>
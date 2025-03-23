
import img1 from '@/assets/Image-compression.png';
import img2 from '@/assets/Foodvision.jpg'
import img3 from '@/assets/maps-gym-markers.png'
import img4 from '@/assets/drone.png'
import img5 from '@/assets/odin-project.png'
import img6 from '@/assets/personal-web.png'
import img7 from '@/assets/blog-api.png'
import img8 from '@/assets/good_food.jpg'
export const projects=[

    {
        id:0,
        title:'Personal Website',
        github: "https://sandeep-personal-website.vercel.app/",

        image:{
            url: img6,
        },


        description:' Built my personal website all by myself. Using Vue, Vuetify and gsap.'

    },


    {

        id:1,
        title:'Image Compression',
        github: "https://github.com/Moonshallow5/Image_Compressor",
        image:{
            url: img1,

        },
        description:' Unsupervised learning using K-means clustering to reduce file size of images by grouping similar colours together'
    },

    {

        id:2,
        title:'Odin Projects',
        github: "https://github.com/Moonshallow5/Odin_Project",
        image:{
            url: img5,

        },
        description:'The project which built my foundations of web development and led me to make this website, and also allowing me to be a Full Stack Engineer'
    },

    {

        id:3,
        title:'FoodVision',
        github: "https://github.com/Moonshallow5/Food_Vision_Flutter",
        image:{
            url: img2,
        },
        description: "A image classfication project, utilizing efficinetnet-b2, which received test accuracy of 90% to detect types of food within images. Has been deployed onto Flutter."
    },

    {

        id:4,
        title:'Web scraping gyms in Malaysia',
        github: "https://github.com/Moonshallow5/Find-Gyms/",
        image:{
            url: img3,
        },
        description: "A web scraper, utilizing Places API and Google Cloud Console to find gyms nearby a location and trained ollama model with web-scraping data for effective Q&A with users."
    },

    {
        id:5,
        title:'Blog Website',
        github: "https://github.com/Moonshallow5/blog-api",
        image:{
            url:img7 ,
        },
        description: "Built a full-stack website utilizing Vue, Vuetify, PostgreSQL, Express.js, JWT tokens and it's all deployed on Render"
    

    },

    {
        id:6,
        title:'Android Studio app to recommend food recipes',
        github: "https://github.com/Moonshallow5/Good_Food",
        image:{
            url:img8 ,
        },
        description: "Built a full android app with Kotlin and Android Studio to recommend food recipes for students to cook with, also utilized Amazon Alexa to read the recipes",
    

    },

    {

        id:7,
        title:'Drone Delivery System',
        github: "https://github.com/Moonshallow5/Ilp",
        image:{
            url: img4,
        },
        description: "Developed a solution to the travelling salesman problem, to find the optimal distance to fly a drone from one point the the next. Utilized geojson.io"
    },
    







]
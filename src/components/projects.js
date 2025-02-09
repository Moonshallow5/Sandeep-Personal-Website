
import img1 from '@/assets/Image-compression.png';
import img2 from '@/assets/Foodvision.jpg'
import img3 from '@/assets/maps-gym-markers.png'
import img4 from '@/assets/drone.png'
import img5 from '@/assets/odin-project.png'
export const projects=[


    {

        id:0,
        title:'Image Compression',
        github: "https://github.com/Moonshallow5/",
        image:{
            url: img1,

        },
        description:' Unsupervised learning using K-means clustering to reduce file size of images by grouping similar colours together'
    },

    {

        id:1,
        title:'Odin Projects',
        github: "https://github.com/Moonshallow5/",
        image:{
            url: img5,

        },
        description:'The project which built my foundations of web development and led me to make this website, and also allowing me to be a Full Stack Engineer'
    },

    {

        id:2,
        title:'FoodVision',
        github: "https://github.com/Moonshallow5/Food_Vision_Flutter",
        image:{
            url: img2,
        },
        description: "A image classfication project, utilizing efficinetnet-b2, which received test accuracy of 90% to detect types of food within images. Has been deployed onto Flutter to be used by all devices."
    },

    {

        id:3,
        title:'Web scraping gyms in Malaysia',
        github: "https://github.com/Moonshallow5/Find-Gyms/",
        image:{
            url: img3,
        },
        description: "A web scraper, utilizing Places API and Google Cloud Console to find gyms nearby a location and trained ollama model with web-scraping data for effective Q&A with users."
    },

    {

        id:4,
        title:'Drone Delivery System',
        github: "https://github.com/Moonshallow5/Ilp",
        image:{
            url: img4,
        },
        description: "Developed a solution to the travelling salesman problem, to find the optimal distance to fly a drone from one point the the next. Utilized geojson.io"
    },
    







]
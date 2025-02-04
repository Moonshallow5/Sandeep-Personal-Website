
import img1 from '@/assets/ML-Regress-and-classification.png';
import img2 from '@/assets/Foodvision.jpg'
import img3 from '@/assets/maps-gym-markers.png'
import img4 from '@/assets/drone.png'
export const projects=[


    {

        id:0,
        title:'FoodVisionasasdasdad',
        github: "https://github.com/Moonshallow5/",
        image:{
            url: img1,

        }
    },

    {

        id:1,
        title:'FoodVisions',
        github: "https://github.com/Moonshallow5/Food_Vision_Flutter",
        image:{
            url: img2,
        },
        description: "A image classfication project, utilizing efficinetnet-b2, which received test accuracy of 90% to detect types of food within images. Has been deployed onto Flutter to be used by all devices."
    },

    {

        id:2,
        title:'Web scraping gyms in Malaysia',
        github: "https://github.com/Moonshallow5/Find-Gyms/",
        image:{
            url: img3,
        },
        description: "A web scraper, utilizing Places API and Google Cloud Console to find gyms nearby a location and trained ollama model with web-scraping data for effective Q&A with users."
    },

    {

        id:3,
        title:'Drone Delivery System',
        github: "https://github.com/Moonshallow5/Ilp",
        image:{
            url: img4,
        },
        description: "Developed a solution to the travelling salesman problem, to find the optimal distance to fly a drone from one point the the next. Utilized geojson.io"
    },
    







]
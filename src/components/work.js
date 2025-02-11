import img1 from '@/assets/pimato.jpg';
import img2 from '@/assets/outlier.png'
import img3 from '@/assets/apu.jpg'

export const works=[



    {
        id: 1,
        company:'Pimato | Full Stack Engineer',
        description:`Work on the frontend design of our team building chatbots. 
        Utilized Vue.js and Vuetify to develop our chatbots.

        Implemented scalable and maintainable infrastructure using Amazon Cloud Development Kit (CDK) to automate
resource provisioning and streamline deployments. Build APIs when needed to do Ajax Requests as well as tested them with Postman API`,
        stack:['Vue.js', 'Vuetify','AWS','Postman'],
        image_url:img1,
        link:'https://www.pimato.com/',
    },

    {
        id: 2,
        company:'Outlier.AI | LLM Tester',
        description:`Focused on building better models in image classification (CNN), speech recognition (LSTM, GRU) and NLP, improving
the performance of n-gram models and transformers. Optimized LLMs to enhance customer interactions, enabling multiple UK-based companies to deploy AI-driven solutions that improve user experience on their websites`,

        stack:['Tensorflow', 'Scikit-learn'],
        image_url:img2,
        link:'https://outlier.ai/',
    },

    {
        id: 3,
        company:'Asia Pacific University | Full Stack Engineer',
        description:`Developed multiple Flask based applications ranging from simple file uploaders to complex encryption of data.`,

        stack:['Flask','JavaScript'],
        image_url:img3,
        link:'https://www.apu.edu.my/',
    },
   


]
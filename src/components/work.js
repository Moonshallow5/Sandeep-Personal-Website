import img1 from '@/assets/pimato.jpg';
import img2 from '@/assets/outlier.png'
import img3 from '@/assets/apu.jpg'
import { cyan } from 'vuetify/util/colors';

export const works=[



    {
        id: 1,
        company:'Pimato | Full Stack Engineer',
        description:[
        'Worked on the frontend design of our team building portals for customers, resellers and stakeholders.',
  'Utilized Vue.js and Vuetify to develop most of my frontend applications. Discussed with other members of my team, QA Engineers, backend team and stakeholders.',
  'Developed Dataflex, a tool which allows users to upload text heavy documents and by using Amazon Textract, with a query, be able to have Q&A with users on relevant information on documents',
  'Implemented scalable and maintainable infrastructure using Amazon Cloud Development Kit (CDK).',
  'Built APIs for Ajax requests and tested them with Postman API.',
  'Delivered our AI chatbot with numerous functionalities to the largest AI summit in Malaysia as the lead frontend developer.'
        ],
        stack: [
            { name: 'Vue.js', icon: 'fa-brands fa-vuejs', color: '#000000' },
            { name: 'Vuetify', icon: 'devicon-vuetify-plain colored', color: '#000000' },
            { name: 'AWS', icon: 'fa-brands fa-aws', color: '#000000' },
            { name: 'Postman', icon: 'devicon-postman-plain', color: '#000000' },
            {name:'Figma',icon:' devicon-figma-plain',color:'#000000'},
            {name:'Jest',icon: 'devicon-jest-plain',color:'#000000'}
        ],
        image_url:img1,
        link:'https://www.pimato.com/',
        duration: 'Dec 2024 - Present',
        bgColor:'#88efab',
    },

    {
        id: 2,
        company:'Outlier.AI | LLM Tester',
        description:[
        'Focused on building better models in image classification (CNN), speech recognition (LSTM, GRU) and NLP', 
        'Improved the performance of n-gram models and transformers. ',
        'Found ways to produce augmented data by either producing my own plastic data and submitting it to the person who trained the LLM, or researching if there was already a Kaggle dataset with the required data',
'Optimized LLMs to enhance customer interactions, enabling multiple UK-based companies to deploy AI-driven solutions that improve user experience on their websites',
        ],
        stack:[
            
            { name: "Scikit-learn", icon: "devicon-scikitlearn-plain colored", color: "#000000" },
            { name: "TensorFlow", icon: "devicon-tensorflow-original colored", color: "#000000" },
        
        ],
        image_url:img2,
        link:'https://outlier.ai/',
        duration: 'Sep 2024 - Nov 2024',
        bgColor:'#6de6b7',
    },

    {
        id: 3,
        company:'Asia Pacific University | Full Stack Engineer',
        description:['Developed multiple Flask based applications ranging from simple file uploaders to complex encryption of data.',
         'Collaborated with other team members to deliver numerous up and coming projects to our project manager ',
        ],
        stack:[
            
            { "name": "Flask", "icon": "devicon-flask-original colored", "color": "#000000" },
            { name: "HTML5", icon: "fa-brands fa-html5", color: "#000000" },
            { name: "CSS3", icon: "fa-brands fa-css3", color: "#000000" },
            { name: "JavaScript", icon: "fa-brands fa-js", color: "#000000" },



        ],
        image_url:img3,
        link:'https://www.apu.edu.my/',
        duration: 'Aug 2024 - Oct 2024',
        bgColor:'white'
        
    },
   


]
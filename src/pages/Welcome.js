import React, { useState } from 'react';
import {
  Container, Button, Dialog, DialogTitle, DialogContent, Card, CardHeader, CardMedia, CardContent,
  Typography, Grid
} from '@mui/material';

import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import InfoIcon from '@mui/icons-material/Info';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import { FaBehance } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

 // Import Behance icon from FontAwesome
import './style.css';

const WelcomePage = () => {

    const aboutMeContent = `
**Hirusha Keshan Sasanka**

I am currently pursuing a **BSc (Hons) in Information Technology** at the **Sri Lanka Institute of Information Technology (SLIIT)**, where I am in my final year. My educational journey began at **Christ King College**, where I completed my GCE O/L, and continued at **Ananda College Colombo** for my GCE A/L.

As a **full-stack developer**, I am passionate about creating dynamic and responsive web applications. I enjoy tackling challenges across both frontend and backend development, and I continuously seek to enhance my skill set with the latest technologies and frameworks.

---

### Technical Skills

**Programming Languages:**
- **Dart** 🦄
- **Python** 🐍
- **Java** ☕
- **Kotlin** 🦙
- **C++** 💻
- **SQL** 📊
- **JavaScript** 🌐

**Frontend Frameworks:**
- **React** ⚛️
- **Angular** 🔄
- **MUI** 🎨
- **Bootstrap** 📐
- **Tailwind CSS** 🌪️

**Backend Frameworks:**
- **Spring Boot** ☁️
- **Express.js** ⚙️
- **Discord.js** 🎮
- **TensorFlow** 📈

**Mobile Development:**
- **Flutter** 📱
- **React Native** 📲
- **Android Studio** 🤖

**IoT Development:**
- **Arduino** 🛠️
- **NodeMCU** 🌐

**Databases:**
- **MongoDB** 🗄️
- **SQLite** 📚
- **MySQL** 🔑
- **AWS** ☁️
- **Oracle** 🏛️

**IDEs:**
- **VS Code** 💻
- **IntelliJ IDE** ⚙️
- **PyCharm** 🐍
- **Arduino IDE** ⚙️
- **Eclipse** 🌌

---

### Projects & Experience

I have worked on various projects that include:

- **Web Applications**: Developed responsive applications using React and Express.js, focusing on user experience and functionality.
- **Mobile Apps**: Created mobile applications using Flutter, integrating APIs for real-time data.
- **IoT Solutions**: Designed and implemented IoT projects using Arduino and NodeMCU for smart home automation.

My experience in **team collaboration** and **agile methodologies** has helped me to effectively contribute to group projects while honing my problem-solving skills.

---

### Interests

I am an **electronics enthusiast**, constantly exploring new technologies and innovations in hardware and software integration. I enjoy experimenting with IoT devices, robotics, and machine learning, and I am always eager to learn about the latest advancements in technology.

---

### Future Aspirations

I aim to leverage my skills to work on projects that make a meaningful impact, particularly in fields such as healthcare technology, education, and sustainability. I am excited about the potential of technology to solve real-world problems and improve lives.

Feel free to connect with me to discuss potential collaborations, projects, or any exciting opportunities in the tech world!
`;

const contactContent = `
**Email:** [hirushasasanka8316@gmail.com](mailto:hirushasasanka8316@gmail.com)  
**Phone:** +94 705324475  
**Address:** 261 A/53 Siripura 2nd Lane, Palanwatta, Pannipitiya
  `;

    const handleGithubOpen = () => {
        window.open('https://github.com/IT21352676', '_blank');
      };

      const handleLinkedinOpen = () => {
        window.open('https://www.linkedin.com/in/hirusha-sasanka-hs67?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B7c6V3HkKTGqcdGN8C2IbWA%3D%3D', '_blank');
      };

      const handleBehanceOpen = () => {
        window.open('https://www.behance.net/hirushasasanka', '_blank');
      };


  const [openContact, setOpenContact] = useState(false);
  const [openAbout, setOpenAbout] = useState(false);
  const [openProjects, setOpenProjects] = useState(false);
  

  const handleContactOpen = () => setOpenContact(true);
  const handleContactClose = () => setOpenContact(false);

  const handleAboutOpen = () => setOpenAbout(true);
  const handleAboutClose = () => setOpenAbout(false);

  const handleProjectsOpen = () => setOpenProjects(true);
  const handleProjectsClose = () => setOpenProjects(false);

  const projectDescriptionVr = `
  **Virtual Dressing Room**
  
  A cutting-edge application that leverages computer vision and artificial intelligence to revolutionize the online shopping experience. Built using **Cvzone** and **TensorFlow** in **Python**, this project allows users to virtually try on outfits in real time. By uploading a video or using their camera with augmented reality (AR) technology, users can visualize how a dress will look on them before making a purchase.
  
  ### Key Features:
  - **Virtual Try-On**: Users can upload a video or use their camera to try on clothing items virtually.
  - **Size Suggestion**: The system analyzes body dimensions and suggests the ideal size for each user.
  - **Computer Vision**: Built with **cvzone**, this project uses advanced computer vision techniques for real-time body tracking.
  - **AI-Powered**: Integrated with **TensorFlow** for accurate body size and fit analysis.
  
  This innovative approach enhances the shopping experience, offering a personalized and immersive way to explore fashion.
  `;

  const projectDescriptionFitX = `
**FitX Fitness Social Web Application**

A fully functional fitness social platform designed to connect users who share an interest in health and fitness. Built with **Spring Boot** for the backend, **React** for the frontend, and **MUI** for the UI, this web app lets users sign up, log in, and connect with others through social media-like features.

### Key Features:
- **Login & Signup**: Secure authentication, including **Google Authentication**.
- **Social Interaction**: Users can share posts, comment, like, and connect with others.
- **CRUD Operations**: Comprehensive profile and post management.
- **Responsive Design**: Works smoothly across devices.
- **Backend**: **Spring Boot** powers the server-side logic and database.
- **Frontend**: **React** and **MUI** provide an interactive user experience.

FitX offers a platform for fitness enthusiasts to stay connected, track progress, and share motivation.
`;

const projectDescriptionLionTours = `
**LionTours (PVT) LTD Online System (Fuel Management)**

A comprehensive fuel management system developed for **LionTours**, a tourism company. Built using the **MERN stack**, this system allows the company to track and manage fuel usage across its fleet and storage tanks, providing real-time data on current fuel levels and consumption rates.

### Key Features:
- **Fuel Management**: Tracks fuel consumption for all company vehicles and storage tanks.
- **CRUD Functionality**: Add, update, and manage vehicle and fuel records with ease.
- **Dashboard Display**: View real-time fuel levels and consumption data across the fleet.
- **Frontend**: Developed using **Bootstrap** and **Tailwind CSS** for a modern, responsive interface.
- **Backend**: Fully powered by **MERN** stack technologies, ensuring scalability and performance.

This system streamlines fuel tracking, helping **LionTours** optimize fuel efficiency across their entire fleet.
`;
  
const projectDescriptionZuma = `
**ZUMA Online Book Store** (2022)

An **online book store** providing users with essential functionalities for browsing, searching, and purchasing books. This project served as a stepping stone into **web design**, incorporating basic **UI/UX design principles**.

### Key Features:
- **Frontend**: Built with **HTML**, **CSS**, and **JavaScript**, creating a clean, user-friendly interface.
- **Backend**: Utilized **PHP** for handling basic user interactions and server communication.
- **Basic Functionalities**: Users can browse the book catalog, search for specific titles, and add books to their cart.
- **UI/UX Design**: Focused on simple and intuitive navigation to enhance user experience.
  
This project laid the foundation for developing more advanced web applications and solidified my skills in **frontend** and **backend** development.
`;

const projectDescriptionHotelReservation = `
**Hotel Reservation System**

This project represents my **first venture** into web development, focusing on basic **UI** and **wireframe design**. It served as an introduction to the world of web applications and helped me familiarize myself with **Figma** for design purposes.

### Key Features:
- **UI Design**: Created a basic user interface that allows users to navigate effortlessly through the reservation process.
- **Wireframe**: Developed initial wireframes to visualize the application layout and flow.
- **Sample Client**: Designed specifically for **Ciyenra Hotel**, enhancing their online presence and reservation capabilities.
  
This project laid the groundwork for my journey into more complex web applications, providing valuable insights into the design and development process.
`;

const projectDescriptionCannyCube = `
**CannyCube Mobile Application**

Developed a **salary management** mobile application using **Kotlin** and **Android Studio**, designed to cater to the needs of both companies and employees.

### Key Features:
- **Fully Functional CRUD**: Implemented all essential operations for managing employee salaries, including Create, Read, Update, and Delete functionalities.
- **User Authentication**: Integrated **login** and **signup** functionalities to ensure secure access for both companies and employees.
- **User-Friendly Interface**: Designed a clean and intuitive interface that enhances the user experience, making it easy for users to navigate the app.

This project demonstrates my ability to create mobile applications that meet real-world needs while employing best practices in development and design.
`;

const projectDescriptionRescueMe = `
**RescueMe.com - Website Redesign**

Led the **redesign** of the **RescueMe.com** website, focusing on enhancing the user experience by adhering to **HCI standards**. Utilized **Figma** to implement various **UI/UX enhancements** aimed at improving usability and accessibility.

### Key Features:
- **User Experience Improvement**: Redesigned the website layout to make navigation more intuitive and user-friendly, ensuring that users can easily find the information they need.
- **Proper Fonts and Sizes**: Selected appropriate typography to enhance readability and create a visually appealing interface.
- **Decent Color Palette**: Implemented a well-thought-out color scheme that aligns with the brand identity while improving aesthetic appeal.

This project reflects my commitment to creating engaging and effective web experiences through thoughtful design.
`;


const projectDescriptionBookNest = `
**Book Nest - Book Recommendation Application**

Developed **Book Nest**, a book recommendation application leveraging **React**, **Express**, **MongoDB**, and **Node.js**. This application features a seamless integration with a **Discord bot** using **Discord.js**.

### Key Features:
- **Personalized Recommendations**: Users receive book recommendations based on their reading history, utilizing the **ChatGPT API** for intelligent suggestions.
- **User Authentication**: Implemented secure user authentication with **login** and **signup** functionalities, ensuring a personalized experience.
- **JWT Web Tokens**: Employed **JSON Web Tokens (JWT)** for secure session management, providing users with a reliable and safe access mechanism.

This project demonstrates my ability to integrate various technologies to deliver a comprehensive solution in the book recommendation domain.
`;


const projectDescriptionGuruGedara = `
**Guru Gedara (ගුරු ගෙදර)**

Currently developing **Guru Gedara**, a mobile application designed specifically for **Dyslexic children** using **Flutter** and **Dart**. This innovative application utilizes **Machine learning algorithms** to identify disabilities and assess their severity, providing tailored educational experiences.

### Key Features:
- **Adaptable Learning Methods**: Incorporates customizable learning methods that cater to the unique needs of each child, promoting effective learning.
- **Child-Friendly UI/UX**: Designed with appropriate UI/UX elements and colors to create an engaging and welcoming environment for children.
- **Localized Experience**: Specially designed in **Sinhala** language to ensure accessibility for Sri Lankan children, making learning easier and more relatable.

This project reflects my commitment to using technology for social impact, aiming to enhance learning experiences for children with disabilities.
`;


 

  const exampleProjects = [

    {
      title: 'Guru Gedara (Sinhala App)',
      images: [
        require('./images/Gurugedara/gg1.jpg'),
        require('./images/Gurugedara/gg3.jpg'),
        require('./images/Gurugedara/gg4.jpg'),
        require('./images/Gurugedara/gg2.jpg'),
        require('./images/Gurugedara/gg5.jpg'),

        
      ],
      date: '2024',
      description: <Typography variant="body1">
      <ReactMarkdown>{projectDescriptionGuruGedara}</ReactMarkdown>
    </Typography>
      
    },

    {
      title: 'Book Nest',
      images: [
        require('./images/Booknest/bn1.PNG'),    // Image 1
        require('./images/Booknest/bn2.PNG'),
        require('./images/Booknest/bn3.PNG'), 
        require('./images/Booknest/bn4.PNG'), 
        require('./images/Booknest/bn5.PNG'), 
        require('./images/Booknest/bn6.PNG'), 
        require('./images/Booknest/bn7.PNG'), 
        require('./images/Booknest/bn8.PNG'),    // Image 3
      ],
      date: '2024',
      description: <Typography variant="body1">
      <ReactMarkdown>{projectDescriptionBookNest}</ReactMarkdown>
    </Typography>
      
    },
    {
      title: 'Virtual Dressing Room',
      images: [
        require('./images/Virtualdressing/vr1.png'),    // Image 1
        require('./images/Virtualdressing/vr2.png'),   // Image 2
        require('./images/Virtualdressing/vr3.png'),
        require('./images/Virtualdressing/vr4.png')     // Image 3
      ],
      date: '2024',
      description: <Typography variant="body1">
      <ReactMarkdown>{projectDescriptionVr}</ReactMarkdown>
    </Typography>
      
    },

    {
      title: 'FitX Fitness Social Web Application',
      images: [
        require('./images/Fitx/fitx1.png'),    // Image 1
        require('./images/Fitx/fitx2.png'),   // Image 2
        require('./images/Fitx/fitx3.png')    // Image 3
      ],
      date: '2024',
      description: <Typography variant="body1">
      <ReactMarkdown>{projectDescriptionFitX}</ReactMarkdown>
    </Typography>
    
    },

    {
      title: 'RescueMe Web Application Redesign',
      images: [
        require('./images/Rescueme/rm1.jpg'),
        require('./images/Rescueme/rm2.jpg'),
        require('./images/Rescueme/rm3.jpg'),
        require('./images/Rescueme/rm4.jpg'),
        require('./images/Rescueme/rm5.jpg'),
        require('./images/Rescueme/rm6.jpg'),
        require('./images/Rescueme/rm7.jpg'),
        require('./images/Rescueme/rm8.jpg'),
        require('./images/Rescueme/rm9.jpg'),
        require('./images/Rescueme/rm10.jpg'),
        require('./images/Rescueme/rm11.jpg'),
        require('./images/Rescueme/rm12.jpg'),
        require('./images/Rescueme/rm13.jpg'),
        require('./images/Rescueme/rm14.jpg'),
      ],
      date: '2023',
      description: <Typography variant="body1">
      <ReactMarkdown>{projectDescriptionRescueMe}</ReactMarkdown>
    </Typography>
    
    },

    {
      title: 'CannyCube Mobile Application',
      images: [
        require('./images/Cannycube/cc4.jpg'),
        require('./images/Cannycube/cc5.jpg'),
        require('./images/Cannycube/cc3.jpg'),
        require('./images/Cannycube/cc1.jpg'),
        require('./images/Cannycube/cc2.jpg'),

      ],
      date: '2023',
      description: <Typography variant="body1">
      <ReactMarkdown>{projectDescriptionCannyCube}</ReactMarkdown>
    </Typography>
    
    },

    {
      title: 'LionTours (PVT)LTD Online System (Fuel Management)',
      images: [
        require('./images/Liontours/fuel3.jpg'),    // Image 1
        require('./images/Liontours/fuel1.jpg'),   // Image 2
        require('./images/Liontours/fuel5.jpg')    // Image 3
      ],
      date: '2023',
      description: <Typography variant="body1">
      <ReactMarkdown>{projectDescriptionLionTours}</ReactMarkdown>
    </Typography>
      
    },

    {
      title: 'ZUMA Online Book Store',
      images: [
        require('./images/Bookstore/Home.png'),    // Image 1
        require('./images/Bookstore/Login.png'),   // Image 2
        require('./images/Bookstore/Persona 1.png')    // Image 3
      ],
      date: '2022',
      description: <Typography variant="body1">
      <ReactMarkdown>{projectDescriptionZuma}</ReactMarkdown>
    </Typography>
      
    },

    {
      title: 'Hotel Reservation System',
      images: [
        require('./images/Hotelreservation/M640c40e6087ee807bdb1c185089119db1647588758136.png'),    // Image 1
        require('./images/Hotelreservation/persona 2.png')  // Image 2    // Image 3
      ],
      date: '2022',
      description: <Typography variant="body1">
      <ReactMarkdown>{projectDescriptionHotelReservation}</ReactMarkdown>
    </Typography>
      
    }
    
    // Add more projects as needed
  ];
  

  return (
    <div>
      <link href='https://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css' /> 

      <Container style={{ flexGrow: 1,  marginBlockEnd: '50px'}}>
        
     
      
            <Typography variant="h1" gutterBottom style={{ textAlign: 'center', fontFamily: '"Lato", sans-serif', fontWeight: 300, fontSize: 40, marginBlockStart: '80px' }}>
                <span style={{
                    background: '-webkit-linear-gradient(white, #38495a)',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    letterSpacing: '10px'
                }}>
                   STEP IN TO
                </span>
            </Typography>

            <Typography variant="h1" gutterBottom style={{ textAlign: 'center', fontFamily: '"Lato", sans-serif', fontWeight: 800, fontSize: 40, marginBlockStart: '20px' }}>
                <span style={{
                    background: '-webkit-linear-gradient(white, #38495a)',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    letterSpacing: '10px'
                }}>
                    COSMICCODE <RocketLaunchIcon style={{ fontSize: 30, color: 'white' }} /> 
                    
                </span>
            </Typography>
            <Typography variant="h1" gutterBottom style={{ textAlign: 'center', fontFamily: '"Lato", sans-serif', fontWeight: 300, fontSize: 20, marginBlockStart: '10px' }}>
                <span style={{
                    background: '-webkit-linear-gradient(white, #38495a)',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    letterSpacing: '10px'
                }}>
                      BY
                </span>
            </Typography>
            <Typography variant="h1" gutterBottom style={{ textAlign: 'center', fontFamily: '"Lato", sans-serif', fontWeight: 800, fontSize: 40, marginBlockStart: '20px' }}>
                <span style={{
                    background: '-webkit-linear-gradient(white, #38495a)',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    letterSpacing: '10px'
                }}>
                     HIRUSHA
                </span>
            </Typography>

      

            <Typography variant="h1" gutterBottom style={{ textAlign: 'center', fontFamily: '"Lato", sans-serif', fontWeight: 800, fontSize: 20, marginTop: '150px' }}>
                <span style={{
                    background: '-webkit-linear-gradient(white, #38495a)',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    letterSpacing: '10px'
                }}>
                  WHERE INNOVATION MEETS CREATIVITY, AND TECHNOLOGY PAVES THE WAY FOR ENDLESS POSSIBILITIES
                </span>
            </Typography>

    


            

            
          {/* Horizontal Button List */}
 <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10rem' }}>
  <Button
    variant="contained"
    style={{
      backgroundColor: '#808080',
      color: 'white',
      margin: '0 6px',
      padding: '12px 40px',
      fontSize: '14px',
      transition: 'background-color 0.3s ease',
    }}
    onClick={handleGithubOpen}
    startIcon={<GitHubIcon style={{ fontSize: 30 }} />}
    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#4a4a4a'}
    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#808080'}
  >
    GitHub
  </Button>

  <Button
    variant="contained"
    style={{
      backgroundColor: '#808080',
      color: 'white',
      margin: '0 6px',
      padding: '12px 45px',
      fontSize: '14px',
      transition: 'background-color 0.3s ease',
    }}
    onClick={handleBehanceOpen}
    startIcon={<FaBehance style={{ fontSize: 30 }} />}
    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#4a4a4a'}
    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#808080'}
  >
    Behance
  </Button>

  <Button
    variant="contained"
    style={{
      backgroundColor: '#808080',
      color: 'white',
      margin: '0 6px',
      padding: '12px 40px',
      fontSize: '14px',
      transition: 'background-color 0.3s ease',
    }}
    onClick={handleLinkedinOpen}
    startIcon={<LinkedInIcon style={{ fontSize: 30 }} />}
    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#4a4a4a'}
    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#808080'}
  >
    LinkedIn
    </Button>
</div>

            
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2.5rem' }}>
            <Button
        variant="contained"
        style={{
            backgroundColor: '#1B3B6F', // Original color for Projects
            color: 'white',
            margin: '0 10px',
            padding: '12px 24px',
            fontSize: '14px',
            transition: 'background-color 0.3s',
        }}
        onClick={handleProjectsOpen}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#153a60')}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#1B3B6F')}
        startIcon={<EmojiObjectsIcon style={{ fontSize: 20 }} />}
      >
        Projects
      </Button>

      <Button
        variant="contained"
        style={{
            backgroundColor: '#6C3483', // Original color for About
            color: 'white',
            margin: '0 10px',
            padding: '12px 24px',
            fontSize: '14px',
            transition: 'background-color 0.3s',
        }}
        onClick={handleAboutOpen}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#5B2C6F')}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#6C3483')}
        startIcon={<InfoIcon style={{ fontSize: 20 }} />}
      >
        About
      </Button>

      <Button
        variant="contained"
        style={{
            backgroundColor: '#2DCB73', // Original color for Contact
            color: 'white',
            margin: '0 10px',
            padding: '12px 24px',
            fontSize: '14px',
            transition: 'background-color 0.3s',
        }}
        onClick={handleContactOpen}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#27a65c')}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#2DCB73')}
        startIcon={<ContactPageIcon style={{ fontSize: 20 }} />}
      >
        Contact
      </Button>
          </div>
        
      </Container>

      {/* Contact Popup */}
      <Dialog open={openContact} onClose={handleContactClose}>
        <DialogTitle  sx={{ backgroundColor: '#202020' }} style={{ color: '#ffffff' }}>Contact Information 📞</DialogTitle>
        <DialogContent sx={{ backgroundColor: '#333333' }}>
        <Typography style={{ color: '#D3D3D3' }} variant="body1">
        <ReactMarkdown>{contactContent}</ReactMarkdown>
        </Typography>
        </DialogContent>
      </Dialog>

      {/* About Popup */}
      <Dialog open={openAbout} onClose={handleAboutClose}>
  <DialogTitle sx={{ backgroundColor: '#202020' }} style={{ color: '#ffffff' }} >About Me 👨‍💻</DialogTitle>
  <DialogContent sx={{ backgroundColor: '#333333' }}> {/* Light grey color */}
    <Typography style={{ color: '#D3D3D3' }} variant="body1">
      <ReactMarkdown>{aboutMeContent}</ReactMarkdown>
    </Typography>
  </DialogContent>
</Dialog>

      {/* Projects Popup */}
      <Dialog open={openProjects} onClose={handleProjectsClose} maxWidth="lg" fullWidth>
  <DialogTitle sx={{ backgroundColor: '#202020' }} style={{ color: '#ffffff' }}>
    My Projects 💻
  </DialogTitle>
  <DialogContent sx={{ backgroundColor: '#333333', display: 'flex', flexDirection: 'column' }}>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '16px' }}>
      {exampleProjects.map((project, index) => (
        <div key={index} style={{ flex: '1 1 calc(33% - 16px)', minWidth: '300px', maxWidth: '345px' }}>
          <Card sx={{ backgroundColor: '#696969', height: '100%' }}>
            <CardHeader
              title={project.title}
              subheader={project.date}
            />
            {/* Swiping images using react-swipeable-views */}
            <Swiper
              spaceBetween={10} // Space between slides
              slidesPerView={1}  // Number of slides to show
              pagination={{ clickable: true }}  // Enable pagination dots
              grabCursor={true}  // Enable mouse grabbing on desktop
            >
              {project.images.map((img, index) => (
                <SwiperSlide key={index}>
                  <CardMedia
                    component="img"
                    height="auto"
                    image={img}
                    alt={`${project.title} - image ${index + 1}`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="body2" sx={{ color: 'text.secondary', minHeight: '100px' }}>
                {project.description}
              </Typography>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  </DialogContent>
</Dialog>

    </div>
  );
};

export default WelcomePage;
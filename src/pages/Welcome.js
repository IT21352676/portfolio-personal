import React, { useState } from 'react';
import {
  Container, Button, Dialog, DialogTitle, DialogContent, Card, CardHeader, CardMedia, CardContent,
  CardActions,
  Avatar, IconButton, Typography, Collapse, Grid
} from '@mui/material';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import InfoIcon from '@mui/icons-material/Info';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import { FaBehance } from 'react-icons/fa'; // Import Behance icon from FontAwesome
import './style.css';

const WelcomePage = () => {

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
  const [expanded, setExpanded] = useState(false);

  const handleContactOpen = () => setOpenContact(true);
  const handleContactClose = () => setOpenContact(false);

  const handleAboutOpen = () => setOpenAbout(true);
  const handleAboutClose = () => setOpenAbout(false);

  const handleProjectsOpen = () => setOpenProjects(true);
  const handleProjectsClose = () => setOpenProjects(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const exampleProjects = [
    {
      title: 'Project 1',
      image: '/static/images/cards/paella.jpg', // Example image path
      date: 'September 14, 2016',
      description: 'This impressive project is a perfect example of modern technology integration...',
      detailedContent: 'Detailed description and method of development for Project 1...',
    },
    {
      title: 'Project 2',
      image: '/static/images/cards/paella.jpg',
      date: 'October 21, 2019',
      description: 'Project 2 is a powerful solution for dynamic environments...',
      detailedContent: 'Detailed description and method of development for Project 2...',
    },
    {
      title: 'Project 2',
      image: '/static/images/cards/paella.jpg',
      date: 'October 21, 2019',
      description: 'Project 2 is a powerful solution for dynamic environments...',
      detailedContent: 'Detailed description and method of development for Project 2...',
    },
    {
      title: 'Project 2',
      image: '/static/images/cards/paella.jpg',
      date: 'October 21, 2019',
      description: 'Project 2 is a powerful solution for dynamic environments...',
      detailedContent: 'Detailed description and method of development for Project 2...',
    },
    {
      title: 'Project 2',
      image: '/static/images/cards/paella.jpg',
      date: 'October 21, 2019',
      description: 'Project 2 is a powerful solution for dynamic environments...',
      detailedContent: 'Detailed description and method of development for Project 2...',
    },
    {
      title: 'Project 2',
      image: '/static/images/cards/paella.jpg',
      date: 'October 21, 2019',
      description: 'Project 2 is a powerful solution for dynamic environments...',
      detailedContent: 'Detailed description and method of development for Project 2...',
    },
    // Add more projects as needed
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <link href='https://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css' />

      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      <div id='rocket-icon'></div>

      <Container style={{ flexGrow: 1 }}>
        <div id='title' style={{ textAlign: 'center', marginTop: '2rem' }}>
          <span>WELCOME TO HIRUSHA'S</span>
          <br />
          <span style={{ fontSize: '3rem' }}>
            UNIVERSE <RocketLaunchIcon style={{ fontSize: 50, color: 'white' }} />
          </span>
          <br />
          <span style={{ fontSize: '2rem' }}>
            ALL OF THE TIME EXPLORE DEEPLY 
          </span>

          {/* Horizontal Button List */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5rem' }}>
  <Button
    variant="contained"
    style={{
      backgroundColor: '#808080',
      color: 'white',
      margin: '0 10px',
      padding: '12px 24px',
      fontSize: '16px',
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
      margin: '0 10px',
      padding: '12px 24px',
      fontSize: '16px',
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
      margin: '0 10px',
      padding: '12px 24px',
      fontSize: '16px',
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

            
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5rem' }}>
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
        </div>
      </Container>

      {/* Contact Popup */}
      <Dialog open={openContact} onClose={handleContactClose}>
        <DialogTitle>Contact Info</DialogTitle>
        <DialogContent>
          <Typography>Email: hirusha@example.com</Typography>
          <Typography>Phone: +123456789</Typography>
        </DialogContent>
      </Dialog>

      {/* About Popup */}
      <Dialog open={openAbout} onClose={handleAboutClose}>
        <DialogTitle>About Me</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            I am a passionate developer with experience in web development and IoT projects. I love to learn and build amazing things.
          </Typography>
        </DialogContent>
      </Dialog>

      {/* Projects Popup */}
      <Dialog open={openProjects} onClose={handleProjectsClose} maxWidth="lg" fullWidth>
        <DialogTitle>My Projects</DialogTitle>
        <DialogContent>
          <Grid container spacing={3} sx={{ maxHeight: '70vh', overflowY: 'auto' }}>
            {exampleProjects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {project.title.charAt(0)}
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title={project.title}
                    subheader={project.date}
                  />
                  <CardMedia
                    component="img"
                    height="194"
                    image={project.image}
                    alt={project.title}
                  />
                  <CardContent>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {project.description}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                    <IconButton
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </IconButton>
                  </CardActions>
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                      <Typography paragraph>{project.detailedContent}</Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              </Grid>
            ))}
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default WelcomePage;
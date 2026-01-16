import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';


const Item = styled(Paper)(({ theme }) => ({
    color: 'black',
    backgroundColor: '#fff',
    padding: theme.spacing(1),
    marginTop: '10px',
    borderRadius: '10px',
    border: 'black solid 1.5px',
}));

export default function Highlights() {
   return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={{'sm': 12}}>
          <Item>
            <Typography style={{fontWeight: 'bold', textAlign: 'center'}}>Background</Typography>
            <ul>
                <li>Software Developer with 2+ years of experience building and maintaining web applications.</li>
                <li>Software Developer Intern at 28East (Google Maps Partnered) contributing to web application development.</li>
                <li>Technical Mentor at We ThinkCode_ providing guidance in Python and Java.</li>
                <li>Software Engineering Graduate from We ThinkCode_, collaborating on team projects.</li>
            </ul>
          </Item>
        </Grid>
        <Grid size={{'sm': 12}}>
          <Item>
            <Typography style={{fontWeight: 'bold', textAlign: 'center'}}>Technical</Typography>
            <ul>
                <li>Proficient in Frontend development using React, Material UI, HTML, CSS, and TypeScript.</li>
                <li>Experienced with Git and GitHub for version control and collaborative workflows.</li>
                <li>Familiar with backend development using Node.js.</li>
                <li>Knowledgeable in Firebase for hosting and backend services.</li>
                <li>Experience with REST APIs and SQLite databases.</li>
            </ul>
          </Item>
        </Grid>
        <Grid size={{'sm': 12}}>
          <Item>
            <Typography style={{fontWeight: 'bold', textAlign: 'center'}}>Achievements</Typography>
            <ul>
                <li>Contributed to Line of Sight, a production web application using React and Material UI, taking ownership of state management and UI design.</li>
                <li>Designed and implemented the UI for a Leave Scheduler application hosted on Firebase.</li>
                <li>Developed a GUI-based Toy Robot game in Python using Tkinter.</li>
                <li>Collaborated on a multiplayer client-server shooting game using Java and Flutter, following the MVC architectural pattern.</li>
                <li>Built a Python CLI application integrating the Google Calendar API for event scheduling.</li>
            </ul>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
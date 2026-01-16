import profilePic from '../assets/Profile_picture.png';
import LinkedIn from '../assets/icons/linkedin.png';
import Github from '../assets/icons/github.png';
import CV from '../assets/icons/cv_icon.png';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  padding: theme.spacing(1),
  textAlign: 'center',
  fontWeight: 'bold',
  [theme.breakpoints.only('xs')]: {
    fontSize: '10px'
  }
}));

const User = styled('p')(({ theme }) => ({
    [theme.breakpoints.only('xs')]: {
        fontSize: '20px',
        marginTop: '0',
        marginBottom: '0',
    },
    
}));

const JobTitle = styled('p')(({ theme }) => ({
    [theme.breakpoints.only('xs')]: {
        fontSize: '15px',
        marginTop: '0',
    },
    
}));

const Header = styled('div')(({ theme}) => ({
    [theme.breakpoints.only('xs')]: {
        height: '450px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column-reverse',
        marginTop: '0',
    },
    
}));

const ProfilePic = styled('img')(({ theme}) => ({
    [theme.breakpoints.only('xs')]: {
        width: '150px',
        height: '100%',
        display: 'flex',
        justifyContent: 'center'
    },
}));

const Icons = styled('img')(({ theme}) => ({
    [theme.breakpoints.only('xs')]: {
        width: '20px',
        height: '100%',
    },
    cursor: 'pointer'
}));

const Icons2 = styled('img')(({ theme}) => ({
    [theme.breakpoints.only('xs')]: {
        width: '20px',
        height: '100%',
    },
    cursor: 'pointer'
}));



export default function SummaryHeader() {
    const skills = ['React', 'Material UI', 'JavaScript', 'HTML', 'CSS', 'TypeScript'];
    return (
        <Header className="header-container">
            <div className='detail-summary'>
                <div className='details'>
                    <User style={{color: 'black', fontWeight: 'bold'}}>Sipho Mciwa</User>
                    <JobTitle style={{color: 'black', fontWeight: 'lighter'}}>Junior JavaScript/TypeScript Software Developer</JobTitle>
                </div>

                <div className='links'>
                    <a href='https://www.linkedin.com/in/sipho-mciwa-1b92091ba/' target='_blank'>
                        <Icons src={LinkedIn} />
                    </a>
                    <a href='https://github.com/Sipho-Mciwa' target='_blank'>
                        <Icons src={Github} />
                    </a>
                    <a href='#' target='_blank'>
                        <Icons2 src={CV} />
                    </a>
                </div>

                <div className='skills-list'>
                    <Box sx={{flexGrow: 1}}>
                        <Grid container spacing={1} columns={4}>
                            {skills.map((skill, index) => (
                                <Grid key={index} size={2}>
                                    <Item>{skill}</Item>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </div>
            </div>
            <div className='profile-pic-container'>
                <ProfilePic className='profile-pic' src={profilePic} alt="Sipho Mciwa" />
            </div>
        </Header>
    );
}
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';



const Item = styled(Paper)(({ theme }) => ({
    color: 'black',
    backgroundColor: '#fff',
    padding: theme.spacing(1),
    marginTop: '10px',
    borderRadius: '10px',
    border: 'black solid 1.5px',
}));

const Container = styled('div')(({ theme}) => ({
    height: '100%',
    width: '100%',
    paddingBottom: '30px',
    [theme.breakpoints.only('xs')]: {
        // width: '100%',
        // display: 'flex',
        marginTop: '10px',
    },
    [theme.breakpoints.only('md')]: {
        // display: 'flex',
        marginTop: '10px',
    },
}));

export default function Experience() {
    return (
        <Container className="container">
            <p className='heading'>Experience</p>
            <Box sx={{ flexGrow: 1}}>
                <Grid container spacing={2} sx={{display: 'flex', justifyContent: 'center'}}>
                    <Grid size={{'xs': 10}}>
                        <Item>
                            <ul>
                                <li>Software Developer with 2+ years of experience building and maintaining web applications.</li>
                                <li>Software Developer Intern at 28East (Google Maps Partnered) contributing to web application development.</li>
                                <li>Technical Mentor at We ThinkCode_ providing guidance in Python and Java.</li>
                                <li>Software Engineering Graduate from We ThinkCode_, collaborating on team projects.</li>
                            </ul>
                        </Item>
                    </Grid>

                    <Grid size={{'xs': 10}}>
                        <Item>
                            <ul>
                                <li>Software Developer with 2+ years of experience building and maintaining web applications.</li>
                                <li>Software Developer Intern at 28East (Google Maps Partnered) contributing to web application development.</li>
                                <li>Technical Mentor at We ThinkCode_ providing guidance in Python and Java.</li>
                                <li>Software Engineering Graduate from We ThinkCode_, collaborating on team projects.</li>
                            </ul>
                        </Item>
                    </Grid>

                    <Grid size={{'xs': 10}}>
                        <Item>
                            <ul>
                                <li>Software Developer with 2+ years of experience building and maintaining web applications.</li>
                                <li>Software Developer Intern at 28East (Google Maps Partnered) contributing to web application development.</li>
                                <li>Technical Mentor at We ThinkCode_ providing guidance in Python and Java.</li>
                                <li>Software Engineering Graduate from We ThinkCode_, collaborating on team projects.</li>
                            </ul>
                        </Item>
                    </Grid>

                    <Grid size={{'xs': 10}}>
                        <Item>
                            <ul>
                                <li>Software Developer with 2+ years of experience building and maintaining web applications.</li>
                                <li>Software Developer Intern at 28East (Google Maps Partnered) contributing to web application development.</li>
                                <li>Technical Mentor at We ThinkCode_ providing guidance in Python and Java.</li>
                                <li>Software Engineering Graduate from We ThinkCode_, collaborating on team projects.</li>
                            </ul>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
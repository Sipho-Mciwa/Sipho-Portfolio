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

export default function AboutMe() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} alignItems='stretch' justifyContent='center'>
                <Grid size={{'sm': 12, 'md': 6, 'lg': 3.02}} >
                    <Item sx={{height: '95%'}}>
                        <Typography style={{fontWeight: 'bold', padding: '15px 15px 0px 15px'}}>About Me:</Typography>
                        <p className='para-text'>
                            I am a passionate web developer who believes in maintaining a healthy balance between coding, 
                            staying active, learning, and unwinding. When I'm not writing code, I enjoy fitness activities, 
                            currently focusing on running, with plans to incorporate gym workouts in the future, helping me 
                            stay disciplined and focused. I also enjoy playing online games like EAFC 26 and am a dedicated 
                            Arsenal fan, spending many weekends watching their games. In addition, I dedicate time to reading, 
                            particularly self-development books, to cultivate a positive mindset. Furthermore, I create 
                            self-improvement content, which has enhanced my skills in on-camera communication, consistency, 
                            and creative thinking. Weekends provide me with opportunities to reset, learn, and recharge, 
                            allowing me to approach the week with renewed motivation.
                        </p>
                    </Item>
                </Grid>
                
                <Grid size={{'sm': 12, 'md': 6, 'lg': 3.05}}>
                    <Item sx={{height: '95%'}}>
                        <Typography style={{fontWeight: 'bold', padding: '15px 15px 0px 15px'}}>My Future:</Typography>
                        <p className='para-text'>
                            In the next six weeks, my primary focus is to solidify my understanding of 
                            TypeScript as I transition from JavaScript. I aim to become more comfortable 
                            with typing, interfaces, and effectively using TypeScript in React applications. 
                            My goal is to write cleaner, more predictable code and gain confidence working in 
                            TypeScript-based codebases. Over the next six months, I plan to build discipline and 
                            consistency in my personal and professional life, improving my skills as a frontend 
                            developer, particularly in React and TypeScript, while also gaining experience with 
                            backend technologies. My long-term goal, spanning six years, is to evolve into a senior 
                            full-stack developer who writes clean, maintainable code and builds high-quality web 
                            applications that positively impact users.
                        </p>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}
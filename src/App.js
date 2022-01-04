import React, {useEffect,useState} from 'react'
import {Container, Typography,AppBar, Grow, Grid } from '@material-ui/core';
import blog from './images/blog2.png'
import Posts from './components/Posts/Posts.js'
import Form from './components/Form/Form.js'
import Menu from './components/Menu/Menu.js'
import useStyles from './styles.js'
import {useDispatch} from 'react-redux'
import {getPosts} from './actions/posts.js'
function App() {
  const [currentId, setCurrentId]= useState(null)
  const classes= useStyles()
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getPosts());
  },[currentId,dispatch])


  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading} variant='h2' align='center'> PostKeeper</Typography>
        <img className={classes.image} src={blog} alt='uploaded file' height='60'></img>
        <Menu />
      </AppBar>

      <Grow in>
        <Container>
          <Grid className={classes.mainContainer} container  justifyContent='space-between' alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>

            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId}/>
             
            </Grid>
          </Grid>
        </Container>
      
      </Grow>




    </Container>
 

  );
}

export default App;

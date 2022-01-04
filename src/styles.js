import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  img:{
    
  },

  heading: {
    color: 'rgba(0,183,255, 1)',
    marginLeft: 'auto',
    
  },


  [theme.breakpoints.down('sm')]:{
    mainContainer: {
      flexDirection: "column-reverse"
    },
    appBar: {
      borderRadius: 15,
      margin: '30px 0',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    heading: {
      color: 'rgba(0,183,255, 1)',
      fontSize: '2rem',
      
    },
    image: {
      height: '50px',
  
    }

  }

}));
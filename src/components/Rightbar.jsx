import { Avatar, Container, Divider, ImageList, ImageListItem, Link, makeStyles, Typography} from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
    container:{
        paddingTop: theme.spacing(10),
        position: "sticky",
        top: 0,
    },
    title:{
        fontSize:16,
        fontWeight:500,
        color:"#555",
    },
    link:{
        marginRight: theme.spacing(2),
        color: "#555",
        fontSize: 16
    }
}));

const Rightbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
        <Typography className={classes.title} gutterBottom>Online Friends</Typography>
        <AvatarGroup max={4} style={{marginBottom:20}}>
            <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
            <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
            <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg" />
            <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg" />
            <Avatar alt="Trevor Henderson" src="https://mui.comm/static/images/avatar/5.jpg" />
        </AvatarGroup>

        <Typography className={classes.title} gutterBottom>Gallery</Typography>
        <ImageList rowHeight={164} cols={2} style={{marginBottom:20}}>
            <ImageListItem>
                <img src="https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=164&h=164&fit=crop&auto=format"  />
            </ImageListItem>
            <ImageListItem>
                <img src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=164&h=164&fit=crop&auto=format"  />
            </ImageListItem>
            <ImageListItem>
                <img src="https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=164&h=164&fit=crop&auto=format"  />
            </ImageListItem>
            <ImageListItem>
                <img src="https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=164&h=164&fit=crop&auto=format"  />
            </ImageListItem>
            <ImageListItem>
                <img src="https://images.unsplash.com/photo-1597645587822-e99fa5d45d25?w=164&h=164&fit=crop&auto=format"  />
            </ImageListItem>
            <ImageListItem>
                <img src="https://images.unsplash.com/photo-1471357674240-e1a485acb3e1?w=164&h=164&fit=crop&auto=format"  />
            </ImageListItem>
        </ImageList>

        <Typography className={classes.title} gutterBottom>Categories</Typography>
        <Link href="#" className={classes.link} variant="body2">
            Sport
        </Link>
        <Link href="#" className={classes.link} variant="body2">
            Food
        </Link>
        <Divider flexItem style={{marginBottom:5}}/>
        <Link href="#" className={classes.link} variant="body2">
            Movies
        </Link>
        <Link href="#" className={classes.link} variant="body2">
            BUS
        </Link>
        <Link href="#" className={classes.link} variant="body2">
            GOGO
        </Link>
        <Link href="#" className={classes.link} variant="body2">
            Korean
        </Link>
    </Container>
  );
};

export default Rightbar;
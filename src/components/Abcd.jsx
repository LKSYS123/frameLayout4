import { Container, makeStyles} from "@material-ui/core";
// import Post from "./Post";

const useStyles = makeStyles((theme) => ({
    container:{
        paddingTop: theme.spacing(10),
    }
}));

const Abcd = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
abcd page
    </Container>
  );
};

export default Abcd;
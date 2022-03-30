import { Container, makeStyles} from "@material-ui/core";
import { Outlet } from "react-router";
// import Post from "./Post";

const useStyles = makeStyles((theme) => ({
    container:{
        paddingTop: theme.spacing(10),
    }
}));

const Sample2 = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
Sample 222222222222222
Sample 222222222222222
Sample 222222222222222
Sample 222222222222222
Sample 222222222222222
Sample 222222222222222

    </Container>
  );
};

export default Sample2;
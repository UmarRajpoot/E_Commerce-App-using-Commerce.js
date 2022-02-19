import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  card: {
    backgroundColor: "#04293A",
    color: "#ECB365",
    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.35)",
    borderRadius: "15px",
  },
  media: {
    height: 260,
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  cartActions: {
    display: "flex",
    justifyContent: "space-between",
  },
  buttons: {
    display: "flex",
    alignItems: "center",
    padding: "10px",
  },
}));

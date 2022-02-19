import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    maxWidth: "100%",
    borderRadius: "20px",
    backgroundColor: "#04293A",
    color: "#ECB365",
    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.35)",
    // box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  container: {
    background: "#ffffff",
    padding: "20px",
    height: "100vh",
    marginTop: "20px",
  },
  card: {
    textAlign: "center",
    padding: "20px",
    marginTop: "20px",
  },
  incomeCard: {
    background: "#e1e3e4",
    color: "#6a6c6e",
  },
  expenseCard: {
    background: "#cee0ff",
    color: "#4d52a3",
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
  },
  priceBadge: {
    marginTop: "-10px",
    marginRight: "20px",
  },
  formContainer: {
    width: "400px",
  },
  formInput: {
    marginTop: "20px",
  },
  mt10: {
    marginTop: "10px",
  },
}));
export default useStyles;

import { makeStyles } from "@material-ui/styles";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import clsx from "clsx";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import StyledTextField from "../../components/custom/StyledTextField";
import { login } from "../../redux/actions";
import bg from "./images/bg.jpg";
import logo from "./images/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import Message from "../../utils/Message";

const useStyles = makeStyles({
  login: {
    width: "100%",
    height: "100vh",
    backgroundImage: "url(" + bg + ")",
    backgroundSize: "100% 100%",
  },
  loginHeader: {
    display: "flex",
    height: "80px",
    backgroundColor: "rgba(21, 20, 13, 0.5)",
    alignItems: "center",

    "& img": {
      width: "40px",
      height: "40px",
      margin: "0 15px 0 50px",
    },

    "& h1": {
      fontSize: "x-large",
      color: "white",
    },
  },
  loginContent: {
    backgroundColor: "white",
    height: "300px",
    width: "400px",
    margin: "50px auto",
    borderRadius: "5px",
    padding: "20px 40px",
    "& h2": {
      fontSize: "30px",
      textAlign: "center",
      fontWeight: "bold",
      marginBottom: "20px",
    },
  },
  errorInput: {
    color: "#DB2F2F",
  },
  userInput: {
    margin: "auto",
  },
  inputCtn: {
    height: 70,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
});

function Login(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [values, setValues] = useState({
    username: "",
    password: "",
    showPassword: false,
  });

  //flag for setting password input type to text to avoid chrome add value auto
  const [firstLoadFlag, setFirstLoadFlag] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  // ????????????????????????, ???????????????????????????
  const user = useSelector((state) => {
    return state.loginReducer;
  });

  if (user && user.id) {
    return <Redirect to="/" />;
  }
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSubmit = (data) => {
    login(data.username, data.password)(dispatch);
  };

  const blurChange = (event) => {
    if(firstLoadFlag){
      setFirstLoadFlag(false);
    }
    
  };

  return (
    <div className={classes.login}>
      <header className={classes.loginHeader}>
        <img src={logo} alt="logo" />
        <h1>React??????: ??????????????????</h1>
      </header>
      <section className={classes.loginContent}>
        <h2>????????????</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={classes.inputCtn}>
            <StyledTextField
              id="outlined-UserName"
              label="UserName"
              type="text"
              value={values.username}
              inputRef={register("username", {
                required: "????????????????????????",
                maxLength: { value: 10, message: "???????????????12???" },
                minLength: { value: 3, message: "?????????????????????" },
                pattern: {
                  value: /^[a-zA-Z0-9_]+$/,
                  message: "????????????????????????,????????????????????????",
                },
              })}
              error={Boolean(errors.username)}
              onChange={handleChange("username")}
              helperText={errors.username ? errors.username.message : ""}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon
                      className={clsx({
                        [classes.errorInput]: errors.username,
                      })}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className={classes.inputCtn}>
            <StyledTextField
              id="outlined-password-input"
              label="Password"
              type={values.showPassword||firstLoadFlag ? "text" : "password"}
              value={values.password}
              inputRef={register("password", {
                required: "?????????????????????",
              })}
              onClick={blurChange}
              error={Boolean(errors.password)}
              onChange={handleChange("password")}
              helperText={errors.password ? errors.password.message : ""}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon
                      className={clsx({
                        [classes.errorInput]: errors.password,
                      })}
                    />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="start">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className={classes.inputCtn}>
            <Button type="submit" variant="contained" color="success">
              Login
            </Button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Login;

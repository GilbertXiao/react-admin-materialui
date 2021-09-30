import React, { Fragment, useEffect, useState } from "react";
import { Snackbar } from "@material-ui/core";
import Alert from "@mui/material/Alert";
import Message from "../../utils/Message";

const GlobalSnackbars = (props) => {
  const [openFlag, setOpenFlag] = useState(false);
  const [severity, setSeverity] = useState("info");
  const [content, setContent] = useState("");

  const handleClose = () => {
    setOpenFlag(false);
  };

  useEffect(() => {
    Message.info = (msg) => {
      setOpenFlag(true);
      setSeverity("info");
      setContent(msg);
    };
    Message.warn = (msg) => {
      setOpenFlag(true);
      setSeverity("warn");
      setContent(msg);
    };
    Message.success = (msg) => {
      setOpenFlag(true);
      setSeverity("success");
      setContent(msg);
    };
    Message.error = (msg) => {
      setOpenFlag(true);
      setSeverity("error");
      setContent(msg);
    };
  }, []);

  return (
    <Fragment>
      <Snackbar
        open={openFlag}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          elevation={6}
          variant={"filled"}
          onClose={handleClose}
          severity={severity}
        >
          {content}
        </Alert>
      </Snackbar>
    </Fragment>
  );
};

export default GlobalSnackbars;

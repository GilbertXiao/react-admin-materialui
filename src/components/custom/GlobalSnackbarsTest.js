import React, { Fragment, useEffect, useState } from "react";
import { Snackbar } from "@material-ui/core";
import Alert from "@mui/material/Alert";
import Message from "../../utils/Message";

const GlobalSnackbarsTest = (props) => {
  const {open,severity,content} = props;
  const [openFlag, setOpenFlag] = useState(open);
  

  const handleClose = () => {
    setOpenFlag(false);
  };

  

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

export default GlobalSnackbarsTest;

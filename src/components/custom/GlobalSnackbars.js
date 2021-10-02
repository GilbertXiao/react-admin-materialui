import React, { Fragment, useEffect, useState } from "react";
import { Snackbar } from "@material-ui/core";
import Alert from "@mui/material/Alert";

const GlobalSnackbars = (props) => {
  const { openCount, severity, content } = props;
  const [openFlag, setOpenFlag] = useState(false);

  useEffect(() => {
    setOpenFlag(true);
  }, [openCount]);

  const closeFunc = () => {
    setOpenFlag(false);
  };

  return (
    <Fragment>
      <Snackbar
        open={openFlag}
        autoHideDuration={2000}
        onClose={closeFunc}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          elevation={6}
          variant={"filled"}
          onClose={closeFunc}
          severity={severity}
        >
          {content}
        </Alert>
      </Snackbar>
    </Fragment>
  );
};

export default GlobalSnackbars;

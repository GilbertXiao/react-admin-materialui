import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

const CustomTextField = styled(TextField)(({ theme }) => ({
  width: 280,
  "& label.Mui-focused": {
    color: theme.palette.primary.main,
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: theme.palette.primary.main,
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.main,
    },
  },
  sx: {
    size: 'small'
  },
}));

export default function StyledTextField(props) {
  const { inputRef } = props;
  return <CustomTextField {...inputRef} {...props} size="small"/>;
}

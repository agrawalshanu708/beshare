import { createTheme } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#0a1647",
    },
    secondary: {
      main: "#e4e7e4",
    },
  },
  typography: {
    fontFamily: ['Nunito Sans', 'sans-serif'].join(',') ,
    fontSize:{},
  },

components :{
  MuiButtonBase:{
    styleOverrides:{
      root:{
   
  
  }
}
  }
}

});

export default theme;

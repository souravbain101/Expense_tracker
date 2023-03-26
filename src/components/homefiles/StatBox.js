import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "./theme";
import ProgressCircle from "./ProgressCircle";

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 40px">
      <Box sx={{
        justifyContent: 'space-between',
        width:{
        xs: 100,
        sm: 300,
        md: 400,
        lg: 500,
        xl: 600,},
      }}>
        <Box sx={{
          width: {justifyContent:'space-evenly',
            xs: 100,
            sm: 200,
            md: 300,
            lg: 400,
            xl: 500,
          },
        }}>
          {icon}
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ color: colors.orange,fontSize:24 }}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <ProgressCircle progress={progress} />
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h6" sx={{ color: colors.orangeAccent[500] }}>
          {subtitle}
        </Typography>
        <Typography
          variant="h6"
          fontStyle="italic"
          sx={{ color: colors.orangeAccent[600] }}
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "./homefiles/theme";
// import Header from "./homefiles/StatBox";
import StatBox from "./homefiles/StatBox";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import LineChart from "./homefiles/LineChart";
const Home = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="8px" sx={{ padding: 2, marginRight: 0 }}>
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography fontWeight={600} fontSize={24}sx={{color:colors.orangeAccent[500]}}
        >Welcome To Your Home</Typography>
        
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(9, 1fr)"
        gridAutoRows="135px"
        gap="18px"
      >
        {/* ROW 1 */}


        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"

        >
          <StatBox
            title="32,441"
            subtitle="Expenses"
            progress="0.30"
            increase="+5%"
            icon={
              <EqualizerIcon
                sx={{ color: colors.orangeAccent[600], fontSize: "20px" }}
              />
            }
          />
        </Box>

        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="431,225"
            subtitle="Income"
            progress="0.50"
            increase="+21%"
            icon={
              < AttachMoneyIcon
                sx={{ color: colors.orangeAccent[600], fontSize: "20px" }}
              />
            }
          />
        </Box>


        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="431,225"
            subtitle="Total"
            progress="0.50"
            increase="+21%"
            icon={
              < AddToPhotosIcon
                sx={{ color: colors.orangeAccent[600], fontSize: "20px" }}
              />
            }
          />
        </Box>


        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box >
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Last Month
              </Typography>
              <Typography
                variant="h5"
                fontWeight="bold"
                color={colors.orangeAccent[500]}
              >
                $59,342.32
              </Typography>
            </Box>
          </Box>
          <Box height="210px" m="-1px 0 0 0">
            <LineChart isHome={true} />
          </Box>
        </Box>



        {/* {Transation} */}
        <Box
          margin={1}
          gridColumn="span 7"
          gridRow="span 4"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
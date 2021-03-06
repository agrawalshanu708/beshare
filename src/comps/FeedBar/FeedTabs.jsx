import * as React from "react";
import { Typography, Box, PropTypes, Tabs, Tab } from "../../utils/MaterialUI";
import { TrendingBar } from "./TrendingBar";
import { FeedBar } from "./FeedBar";
import { ExploreOutlinedIcon, HomeOutlinedIcon } from "../../utils/MaterialUI";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function FeedTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx = {{marginLeft: '12rem'}}
        >
          <Tab  icon={<HomeOutlinedIcon sx={{fontSize:"2rem" }} />} {...a11yProps(0)} />
          <Tab icon={<ExploreOutlinedIcon  sx={{fontSize:"2rem" }} />} {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <FeedBar />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TrendingBar />
      </TabPanel>
    </Box>
  );
}
export { FeedTabs };

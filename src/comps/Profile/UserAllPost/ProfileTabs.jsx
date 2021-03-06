import * as React from "react";
import {
  Typography,
  Box,
  PropTypes,
  Tabs,
  Tab,
} from "../../../utils/MaterialUI";

import { UserAllPost } from "./UserAllPost";
import { BookmarkPost } from "./BookmarkPost";
import { useSelector } from "react-redux";

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

function ProfileTabs({ userId }) {
  const [value, setValue] = React.useState(0);
  const { foundUser, allUser } = useSelector((store) => store.users);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab className="cursor" label="Posts" {...a11yProps(0)} />
          {userId === foundUser._id && (
            <Tab className="cursor" label="Bookmarked" {...a11yProps(1)} />
          )}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <UserAllPost userId={userId} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <BookmarkPost userId={userId} />
      </TabPanel>
    </Box>
  );
}
export { ProfileTabs };

import React, { useState } from 'react'
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { Box, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { TopThreeIcon } from '../../../customIcons/topThree';
import { TopRatedIcon } from '../../../customIcons/topRated';
import { ShowCompIfExists } from './ShowCompIfExists';
import { ProfileAchieves } from './ProfileAchieves';
import { ProfileLevels } from './ProfileLevels';




function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `scrollable-force-tab-${index}`,
      'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
  }

export const ProfileTabs = () => {

    const [value, setValue] = useState(0);

    const showAchieves = true;
    const showLevels = true;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return (
        <div className="profile__tabs-container">
             <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          centered
        >
          <Tab label="Logros" icon={<TopThreeIcon />} {...a11yProps(0)} />
          <Tab label="Niveles Completados" icon={<TopRatedIcon />} {...a11yProps(1)} />
        </Tabs>
      <TabPanel value={value} index={0}>
        <ShowCompIfExists element={showAchieves} component={ProfileAchieves} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ShowCompIfExists element={showLevels} component={ProfileLevels} />
      </TabPanel>
        </div>
    )
}

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
// import MuiPicker from './components/MuiPicker';
// import MuiDateRangePicker from './components/MuiDateRangePicker';
// import MuiTabs from './components/MuiTabs';
// import MuiTimeline from './components/MuiTimeline';
// import MuiMasonry from './components/MuiMasonry';
import Responsiveness from './components/Responsiveness';
// import MuiCard from './components/MuiCard';
// import MuiAccordion from './components/MuiAccordion';
// import MuiImageList from './components/MuiImageList';
// import MuiNavbar from './components/MuiNavbar';
// import MuiLinks from './components/MuiLinks';
// import MuiBreadcrumbs from './components/MuiBreadcrumbs';
// import MuiDrawer from './components/MuiDrawer';
// import MuiSpeedDial from './components/MuiSpeedDial';
// import MuiBottomNavigation from './components/MuiBottomNavigation';
// import MuiAvatar from './components/MuiAvatar';
// import MuiList from './components/MuiList';
// import MuiBadge from './components/MuiBadge';
// import MuiChip from './components/MuiChip';
// import MuiTooltip from './components/MuiTooltip';
// import MuiTable from './components/MuiTable';
// import MuiAlert from './components/MuiAlert';
// import MuiSnackbar from './components/MuiSnackbar';
// import MuiProgress from './components/MuiProgress';
// import MuiDialog from './components/MuiDialog';
// import MuiSkeleton from './components/MuiSkeleton';
// import MuiLoadingButton from './components/MuiLoadingButton';
// import MuiRating from './components/MuiRating';
// import MuiAutoComplete from './components/MuiAutoComplete';
// import MuiBox from './components/MuiLayout';
// import MuiLayout from './components/MuiLayout';
// import MuiSwitch from './components/MuiSwitch';
// import MuiRadioButton from './components/MuiRadioButton';
// import MuiCheckBox from './components/MuiCheckBox';
// import MuiButton from './components/MuiButton';
// import MuiTextField from './components/MuiTextField';
// import MuiSelect from './components/MuiSelect';
// import MuiTypography from './components/MuiTypography';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <div className="App">
      {/* <MuiTypography/> */}
      {/* <MuiButton/> */}
      {/* <MuiTextField/> */}
      {/* <MuiSelect/> */}
      {/* <MuiRadioButton/> */}
      {/* <MuiCheckBox/> */}
      {/* <MuiSwitch/> */}
      {/* <MuiRating/> */}
      {/* <MuiAutoComplete/> */}
      {/* <MuiLayout/> */}
      {/* <MuiCard/> */}
      {/* <MuiAccordion/> */}
      {/* <MuiImageList/> */}
      {/* <MuiNavbar /> */}
      {/* <MuiLinks/> */}
      {/* <MuiBreadcrumbs/> */}
      {/* <MuiDrawer /> */}
      {/* <MuiSpeedDial/> */}
      {/* <MuiBottomNavigation/> */}
      {/* <MuiAvatar/> */}
      {/* <MuiList/> */}
      {/* <MuiBadge/> */}
      {/* <MuiChip/> */}
      {/* <MuiTooltip/> */}
      {/* <MuiTable/> */}
      {/* <MuiAlert/> */}
      {/* <MuiSnackbar/> */}
      {/* <MuiProgress/> */}
      {/* <MuiDialog/> */}
      {/* <MuiSkeleton/> */}
      {/* <MuiLoadingButton/> */}
      {/* <MuiPicker/> */}
       {/* <MuiDateRangePicker/> */}
      {/* <MuiTabs/> */}
      {/* <MuiTimeline/> */}
      {/* <MuiMasonry/> */}
      <Responsiveness/>
     
    </div>
    </LocalizationProvider>
  );
}

export default App;

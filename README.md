## React MUI Notes
Document used: https://mui.com/material-ui
Reference playlist: https://youtube.com/playlist?list=PLC3y8-rFHvwh-K9mDlrrcDywl7CeVL2rO&si=ILTUv9IuA_R0_wf3
1. How to install react Mui dependencies
2. Typography->headings, subtitles and body text, gutterBottom

### Inputs
3. Button -> different variants, colors, sizes, icons on different sides or normal icon, disable or with links, disableElevation and disableRipple. 
4. Button Group -> The ButtonGroup component can be used to group related buttons.ifferent variants, colors, sizes.
5. Toggle Group -> A Toggle Button can be used to group related options.
                ->Exclusive Selection (prop): With exclusive selection, selecting one option deselects any other.
6. TextField ->Text Fields let users enter and edit text.
             -> There are three variants in textfield: outline,standard, filled.
             -> Different Form Props: Required, Disable,ReadOnly, Search, Password, Number, HelperText.   
             -> Handling Errors. -> Use of InputAdornment. 
7. Select -> Select components are used for collecting user provided information from a list of options.
          -> select one option from different options or multiple options.
8. Radio Group -> The Radio Group allows the user to select one option from a set.(in row too)
9. CheckBox -> Checkboxes allow the user to select one or more items from a set.
          ->multi Select and single select checkbox. -> different shapes of checkbox using icons.
10. Switch ->Switches toggle the state of a single setting on or off.
11. Rating ->Ratings provide insight regarding others' opinions and experiences, and can allow the user to submit a rating of their own.
           -> Props: only highlight one, read only, use of icons like favorite, etc.
11. AutoComplete ->The autocomplete is a normal text input enhanced by a panel of suggested options.

# Layout and Surfaces
12. Layout -> 1. Box: The Box component is a generic, theme-aware container with access to CSS utilities from MUI System.
              2. Stack: Stack is a container component for arranging elements vertically or horizontally.
              3.Grid:->The Material Design responsive layout grid adapts to screen size and orientation, ensuring consistency across layouts. 
                    ->The Grid component under the hood uses the flexbox module.
                    -> The Grid consists of 12 columns
                    -> Each item in the grid can take up one or more columns as its width
                    -> There are five breakpoints each corresponding to a certain device width xs for mobile device size,sm for tablet, md for desktop, lg and xl for larger monitors.
                    -> We can assign integer values to each breakpoint which indicates how many of the 12 available columns are occupied by that item when the viewpoint satisfies that breakpoint constraints.
              4.Paper: The Paper component is a container for displaying content on an elevated surface.
13. Card ->Cards contain content and actions about a single subject.
          ->Card: a surface-level container for grouping related components.
          ->Card Media: an optional container for displaying background images and gradient layers behind the Card Content.
          ->Card Content: the wrapper for the Card content.Containing the headings and contents of the card
          ->Card Actions: an optional wrapper that groups a set of buttons. ex: share ,links etc.
14. Accordion ->The Accordion component lets users show and hide sections of related content on a page.
               -> in this only summarry section or brief description can be visible to user. for details user can expand the accordion. Using AccordionSummary and AccordionDetails
15. ImageList -> The Image List displays a collection of images in an organized grid.    
              ->two variants are there: woven and  masonry.     
16. Navbar ->   The App Bar displays information and actions relating to the current screen.     

### Navigation Components
17. Links -> The Link component allows you to easily customize anchor elements with your theme colors and typography styles.
18. Breadcrumbs ->A breadcrumbs is a list of links that help visualize a page's location within a site's hierarchical structure, it allows navigation up to any of the ancestors.
19. Drawer ->The navigation drawers (or "sidebars") provide ergonomic access to destinations in a site or app functionality such as switching accounts. ->  there are four anchor - left,right,top,bottom 
20. Speed Dial -> When pressed, a floating action button can display three to six related actions in the form of a Speed Dial.
21. Bottom Navigation -> The Bottom Navigation bar allows movement between primary destinations in an app.

### Data-Displays Components
22. Avatar ->Avatars are found throughout material design with uses in everything from tables to dialog menus.
            -> There are many different types of Avatar: Image Avatar, Letter Avatar,Sizes,Icon Avatar, Grouped.
23. List ->Lists are continuous, vertical indexes of text or images.
24. Badge ->Badge generates a small badge to the top-right of its child(ren).
25. Chip ->Chips are compact elements that represent an input, attribute, or action.
26. Tooltip ->Tooltips display informative text when users hover over, focus on, or tap an element.
            -> props: placement ->helps to place the title, arrow makes the arrow towards the icon, enterDelay and leaveDelay is used for delay of milliseconds during entering and leaving.
27. Table ->Tables display sets of data. They can be fully customized.
            ->stickyHeader prop helps to fixed the header.

### FeedBack Components
28. Alert -> Alerts display brief messages for the user without interrupting their use of the app.
            ->severity:seriousness, severity shows the seriousness of the Alert it is of four types: error, warning, info, success
            ->There are two types of variants : filled and outlined 
29. Snackbar ->Snackbars (also known as toasts) are used for brief notifications of processes that have been or will be performed.
            ->The Snackbar component appears temporarily and floats above the UI to provide users with (non-critical) updates on an app's processes.
30. Progress ->Progress indicators commonly known as spinners, express an unspecified wait time or display the length of a process.
            ->There two types of progress- Circular and Linear. can be customise them.
31. Dialog ->Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.
32. Skeleton ->Display a placeholder preview of your content before the data gets loaded to reduce load-time frustration.
33. LoadingButton -> Loading button offers loading buttons that can show loading state and disable interactions. 

34. Pickers : These react date picker and time picker components let users select date or time values.
            -> Three types: datepicker, timepicker, datetimepicker
35. DateRangePicker ->The Date Range Picker let the user select a range of dates.
36. Tabs  -> Tabs make it easy to explore and switch between different views.
          -> Props used in Tab component are: centered, icon, iconPosition,disable,variant,scrollable
37. Timeline ->The timeline displays a list of events in chronological order.
38. Masonry ->Masonry lays out contents of varying dimensions as blocks of the same width and different height with configurable gaps.

       

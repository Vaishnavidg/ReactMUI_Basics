import { Alert, AlertProps, Button, Snackbar } from '@mui/material'
import React, { forwardRef, useState } from 'react'

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
    function SnackbarAlert(props,ref){
        return <Alert elevation={6} ref={ref} {...props}/>
    }
)
export default function MuiSnackbar() {
    const [open, setOpen] = useState(false);
    const handleClose = (
        event?: React.SyntheticEvent | Event,
        reason?: string
    ) => {
        if (reason === 'clickaway') {
            return
        }
        setOpen(false)
    }
    return (
        <>
            <Button onClick={() => setOpen(true)}>Submit</Button>
            {/* <Snackbar message="Form submitted success fully"
             autoHideDuration={4000}
            open={open} 
            onClose={handleClose}
            // used anchorOrigin for setting the position 
            anchorOrigin={{
                vertical:'bottom',
                horizontal:'center'
            }}/> */}

{/* Customise Snackbar  */}
<Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
    <SnackbarAlert onClose={handleClose} severity='success'>
        Form submitted successfully!
    </SnackbarAlert>
</Snackbar>
        </>
    )
}

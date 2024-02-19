// import { } from '@mui/icons-material'
import { Bookmark, BookmarkAddOutlined } from '@mui/icons-material';
import { Box, FormControlLabel, Checkbox } from '@mui/material'
import React, { useState } from 'react'

export default function MuiCheckBox() {
    const [acceptTnC, setAcceptTnC] = useState(false);
    console.log(acceptTnC);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAcceptTnC(event.target.checked);
    }
    const [skills, setSkills] = useState<String[]>([]);
    console.log(skills);
    const handleSkills = (event: React.ChangeEvent<HTMLInputElement>) => {
        const index = skills.indexOf(event.target.value)
        if (index === -1) {
            setSkills([...skills, event.target.value])
        } else {
            setSkills(skills.filter((skill) => skill !== event.target.value));
        }

    }

    return (
        <Box>
            <Box>
                <FormControlLabel label="terms and conditions" control={<Checkbox checked={acceptTnC}
                    onChange={handleChange} inputProps={{ 'aria-label': 'controlled' }} />} />
            </Box>
            <Box>
                <Checkbox checked={acceptTnC} icon={<BookmarkAddOutlined />} checkedIcon={<Bookmark />}
                    onChange={handleChange} inputProps={{ 'aria-label': 'controlled' }} />
            </Box>
            <Box flexDirection={'row'}>
                <FormControlLabel label="html" value={'html'} control={<Checkbox checked={skills.includes('html')}
                    onChange={handleSkills} inputProps={{ 'aria-label': 'controlled' }} />} />
                <FormControlLabel label="css" value={'css'} control={<Checkbox checked={skills.includes('css')}
                    onChange={handleSkills} inputProps={{ 'aria-label': 'controlled' }} />} />
                <FormControlLabel label="javascript" value={'javascript'} control={<Checkbox checked={skills.includes('javascript')}
                    onChange={handleSkills} inputProps={{ 'aria-label': 'controlled' }} />} />
            </Box>
        </Box>
    )
}

import { Autocomplete, Box, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
type Skill={
    id:number
    label: string
}
export default function MuiAutoComplete() {
    const Skills = ['html', 'css', 'javscript', 'react', 'nodejs']
    const [value, setValue] = useState<string | null>(null);
    console.log(value);
    const handlechange = (event: any, newvalue: string | null) => {
        setValue(newvalue);
    }
   
   
    const SkillsOptions = Skills.map((skill, index) => ({
        id: index + 1,
        label: skill,
    }))
    const [skill, setSkill] = useState<Skill | null>(null);
    const handlechangeSkill = (event: any, newvalue: Skill | null) => {
        setSkill(newvalue);
    }
  
    return (
        <Stack spacing={2} width={'250px'}>
            <Autocomplete options={Skills}
                renderInput={(params) => <TextField {...params} label='Skills' />}
                value={value}
                onChange={handlechange}
            />
            <Autocomplete options={SkillsOptions}
                renderInput={(params) => <TextField {...params} label='Skills' />}
                value={skill}
                onChange={handlechangeSkill}
            />

        </Stack>
    )
}

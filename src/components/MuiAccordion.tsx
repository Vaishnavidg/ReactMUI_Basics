import { ExpandMore } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import React, { useState } from 'react'

export default function MuiAccordion() {
    const[expanded,setExpanded] =useState<string|false>(false);
    const handleChange=(isExpanded:boolean,panel:string)=>{
        setExpanded(isExpanded?panel:false)
    }
    return (
        <div>
            <Accordion expanded={expanded === 'panel1'}
            onChange={(event,isExpanded)=> handleChange(isExpanded,'panel1')}>
                <AccordionSummary id='panel1-header'
                    aria-controls='panel1-content'
                    expandIcon={<ExpandMore />}>
                    <Typography>Accordion1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, velit? Minima dolores eveniet itaque sapiente. Ducimus voluptate id quos recusandae architecto officia excepturi sit veniam, quia labore fuga aspernatur delectus!</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion  expanded={expanded === 'panel2'}
            onChange={(event,isExpanded)=> handleChange(isExpanded,'panel2')}>
                <AccordionSummary id='panel2-header'
                    aria-controls='panel2-content'
                    expandIcon={<ExpandMore />}>
                    <Typography>Accordion2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, velit? Minima dolores eveniet itaque sapiente. Ducimus voluptate id quos recusandae architecto officia excepturi sit veniam, quia labore fuga aspernatur delectus!</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion  expanded={expanded === 'panel3'}
            onChange={(event,isExpanded)=> handleChange(isExpanded,'panel3')}>
                <AccordionSummary id='panel3-header'
                    aria-controls='panel3-content'
                    expandIcon={<ExpandMore />}>
                    <Typography>Accordion3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, velit? Minima dolores eveniet itaque sapiente. Ducimus voluptate id quos recusandae architecto officia excepturi sit veniam, quia labore fuga aspernatur delectus!</Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

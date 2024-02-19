import { NavigateNext } from '@mui/icons-material'
import { Box, Breadcrumbs, Link, Typography } from '@mui/material'
import React from 'react'

export default function MuiBreadcrumbs() {
    return (
        <Box m={2}>
            {/* A breadcrumbs is a list of links that help visualize a page's location within a site's hierarchical structure,
 it allows navigation up to any of the ancestors. */}
            {/* 1. Basic Breadcrumbs */}
            <Breadcrumbs arial-label='breadcrumb'>
                <Link underline='hover' href='#'>Home</Link>
                <Link underline='hover' href='#'>Catalog</Link>
                <Link underline='hover' href='#'>Accessories</Link>
                <Typography color={'text.primary'}>Shoes</Typography>
            </Breadcrumbs>
            {/* 2.Custom Separator */}
            {/* Props: seperator prop used to make Custom separator */}
            <Breadcrumbs arial-label='breadcrumb' separator='-'>
                <Link underline='hover' href='#'>Home</Link>
                <Link underline='hover' href='#'>Catalog</Link>
                <Link underline='hover' href='#'>Accessories</Link>
                <Typography color={'text.primary'}>Shoes</Typography>
            </Breadcrumbs>
            {/* used of icons for separator props */}
            <Breadcrumbs arial-label='breadcrumb' separator={<NavigateNext />}>
                <Link underline='hover' href='#'>Home</Link>
                <Link underline='hover' href='#'>Catalog</Link>
                <Link underline='hover' href='#'>Accessories</Link>
                <Typography color={'text.primary'}>Shoes</Typography>
            </Breadcrumbs>
            {/* 3. Collapsed breadcrumbs */}
            {/* number of items to show */}
            <Breadcrumbs arial-label='breadcrumb' separator={<NavigateNext />} maxItems={2}>
                <Link underline='hover' href='#'>Home</Link>
                <Link underline='hover' href='#'>Catalog</Link>
                <Link underline='hover' href='#'>Accessories</Link>
                <Typography color={'text.primary'}>Shoes</Typography>
            </Breadcrumbs>
            {/* use of itemsAfterCollapse */}
            <Breadcrumbs arial-label='breadcrumb' separator={<NavigateNext />} maxItems={3} itemsAfterCollapse={2}>
                <Link underline='hover' href='#'>Home</Link>
                <Link underline='hover' href='#'>Catalog</Link>
                <Link underline='hover' href='#'>Accessories</Link>
                <Typography color={'text.primary'}>Shoes</Typography>
            </Breadcrumbs>
            {/* use of itemsBeforeCollapse */}
            <Breadcrumbs arial-label='breadcrumb' separator={<NavigateNext />} maxItems={3} itemsBeforeCollapse={2}>
                <Link underline='hover' href='#'>Home</Link>
                <Link underline='hover' href='#'>Catalog</Link>
                <Link underline='hover' href='#'>Accessories</Link>
                <Typography color={'text.primary'}>Shoes</Typography>
            </Breadcrumbs>
        </Box>
    )
}

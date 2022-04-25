import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label='basic tabs example'
                >
                    <Tab label='All' />
                    <Tab label='Vegan' />
                    <Tab label='Vegetarian' />
                    <Tab label='Pescatarian' />
                    <Button variant='contained' style={{ marginLeft: '1rem' }}>
                        Show my Favorite Recipes
                    </Button>
                </Tabs>
            </Box>
        </Box>
    );
}

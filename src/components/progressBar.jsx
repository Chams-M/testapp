import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import './Dashboard/cards_style.css';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';


export default function ProgressBar(props) {
    const BorderLinearProgress = styled(LinearProgress)(({theme}) => ({
        height: props.height,
        width:props.width,
        borderRadius: 8,
        [`&.${linearProgressClasses.colorPrimary}`]: {
          backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
          borderRadius: 8,
          backgroundColor: theme.palette.mode === 'light' ? props.color : '#308fe8',
        },
      }));
  return (
    <div className='properties-invested-card'>
    <div className='progressbar-data'>
    <div>{props.label}</div>
    <div>{props.number}</div>
    </div>
    <Box sx={{ flexGrow: 1 }}>
      <BorderLinearProgress variant="determinate" value={props.value}   />
    </Box>
    </div>
  );
}

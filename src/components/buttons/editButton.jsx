import React from "react";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
export const EditButton= () => {
return (
<Button
startIcon={<ModeEditIcon/>}
sx={{
    color:'#63A963'
}}
>
    Edit
</Button>
);

}
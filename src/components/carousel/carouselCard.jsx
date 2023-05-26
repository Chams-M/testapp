import React from 'react';
import img from "../../assets/images/signup.png"
import FavoriteIcon from '@mui/icons-material/Favorite';
import BathIcon from '../../assets/svg/carousel/Bath';
import BedIcon from '../../assets/svg/carousel/Bed';
import SqftIcon from '../../assets/svg/carousel/Sqft';

const CarouselCard = () => {
    return (
        <div className="carousel-card">
            <img src={img} id="my-svg"></img>
            <div className="card-data">
                <div className='favorite-icon-div'>
                <span>villa</span>
                <div><FavoriteIcon sx={{color:"#C44649" ,height:"30px", width:"30px"}}/></div>
                </div>
                <span>price</span>
                <span>loction</span>
                <div  className='property-specifities'>
                <div className='property-specifities-item'>
                    <BathIcon/>
                    <span>specifities</span>
                </div>
                <div className='property-specifities-item'>
                    <BedIcon/>
                    <span>specifities</span>
                </div>
                <div className='property-specifities-item'>
                    <SqftIcon/>
                    <span>specifities</span>
                </div>
               
               </div>
            </div>
        </div>
    );
};
export default CarouselCard;
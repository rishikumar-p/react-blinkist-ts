import React from 'react';
import blinkist from './blinkist.png';

export default function Logo(){
    return (
           <img className='logo' src={blinkist} alt='Blinklist' height='50' width='150' data-testid="blinkist-logo"/>
    );
}
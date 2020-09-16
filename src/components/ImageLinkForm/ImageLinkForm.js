import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ( {onInputChange, onButtonSubmit} ) => {
    return (
        <div>
            <p className='f3'>
                This magic brain will detect faces in your pictures. Give it a try.
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-3'>
                    <input 
                        type='text' 
                        aria-label="Image Url"
                        className='f4 pa2 w-70 center glow' 
                        onChange={onInputChange}
                    />
                    <button 
                        className='w-30 grow link pointer f4 white bg-light-purple fw5'
                        style={{backgroundColor: '#6B0FDB'}}
                        onClick={onButtonSubmit}
                    >
                    Detect
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;

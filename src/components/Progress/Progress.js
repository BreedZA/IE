import React from 'react';
import './Progress.css'
import ProgressBarColor from './ProgressColorBars/ProgressColorBars';


const progress = (props) => {
// way to transform objects of key value pairs into an array of bar colors
    const selectedBars = Object.keys(props.bars)
        .map(bKey => {
            return [...Array(props.bars[bKey])].map((_, i) => {
               return <ProgressBarColor key={bKey + i} type={bKey} />
            });
        })
        .reduce((arr,el)=>{
            return arr.concat(el)
        }, []);

   

    return(
        <div className="Bar">
               {/* <ProgressBarColor type="Phase-one" />
                <ProgressBarColor type="Phase-two" />

              <ProgressBarColor type="Phase-three" />
             <ProgressBarColor type="Phase-four" />*/}
            {selectedBars}
        </div>
    );
};

export default progress;

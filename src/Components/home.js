import React from 'react'
import Banner from './banner';
import Card from './card';
import Recentcard from './recentcard';
import Artist from './artist';


function Home() {
    return (
        <div className='lg:mt-16 lg:ml-64'>
            <Banner />
            <Card/>
            <Recentcard/>
            <Artist/>
        </div>
    )
}

export default Home;

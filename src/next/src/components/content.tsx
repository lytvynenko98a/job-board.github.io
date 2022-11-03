import React from 'react';
import JobDetailsName from './jobdetails';
import JobDetail from './jobdetail';
import Cardscontacts from './Cardscontacts.svg';
import AdditionalInfo from './additional';

const Content = () => {
    return (
        <div id="content">
            <img id="card-contact" src={Cardscontacts} />
            <JobDetailsName />
            <button id="btn-apply"><span>apply now</span></button>
            <JobDetail />
            <button id="btn-apply2"><span>apply now</span></button>
            <AdditionalInfo />
        </div>
    )
}
export default Content
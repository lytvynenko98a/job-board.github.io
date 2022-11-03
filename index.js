function JobBar(){
    return(
        <div id="job-bar">
            <div id="content">
                <img id="hospital-image" alt="hospital image" src="/export/Hospitalimage.svg"></img>
                <div id="content-text-margin">
                    <a href="next/src/App.tsx" id="job-ad-text"><span>Arbeitsmediziner/-in / Betriebsmediziner/-in (m/w/d) oder einen Arzt/eine Ärztin (m/w/d) für die Weiterbildung zum Facharzt/ zur Fachärztin für Arbeitsmedizin (m/w/d)</span></a>
                    <span id="hospital-name">
                    Department name •  Allgemeines Krankenhaus der Stadt Wien - AKH
                    </span>
                    <span id="location">
                        <img src="../export/Iconlocation.svg"></img>
                        <span>Vienna, Austria</span>
                    </span>
                </div>
                <img src="../export/5starrating.svg" id="star-rating"></img>
                <img src="../export/Frame.svg" id="frame"></img>
            </div>
        </div>
    )    
}

function FreeJobAds() {
    return (
        <div id="free-job-ads">
            <div id="job-bar-long"><JobBar/></div>
            <div id="job-bar-long"><JobBar/></div>
            <div id="job-bar-long"><JobBar/></div>
            <div id="job-bar-long"><JobBar/></div>
            <div id="job-bar-long"><JobBar/></div>
            <div id="job-bar-long"><JobBar/></div>
            <div id="job-bar-long"><JobBar/></div>
            <div id="job-bar-long"><JobBar/></div>
            <div id="job-bar-long"><JobBar/></div>
            <div id="job-bar-long"><JobBar/></div>
            <div id="job-bar-long"><JobBar/></div>
            <div id="job-bar-long"><JobBar/></div>
            <div id="job-bar-long"><JobBar/></div>
            <div id="job-bar-long"><JobBar/></div>
            <div id="job-bar-long"><JobBar/></div>
        </div>
)
}

function PageNumbers() {
    return (
        <div id="page">
            <div id="left-arrow"><img src="../export/Arrow.svg"></img></div>
            <div id="separator1"><img src="../export/Separator.svg"></img></div>
            <div id="pages-numbers"><img src="../export/Pagesnumbers.svg"></img></div>
            <div id="separator2"><img src="../export/Separator.svg"></img></div>
            <div id="right-arrow"><img src="../export/Arrow.svg"></img></div>
        </div>
    )
}

function Pagination() {
    return (
        <div id = "pagination">
            <FreeJobAds />
            <PageNumbers />
        </div>
    )
}

ReactDOM.render(       
    <Pagination />, 
document.getElementById('margin'))

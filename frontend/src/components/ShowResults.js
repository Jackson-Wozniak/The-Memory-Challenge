import { useEffect, useState } from "react";
import { callApiWithData } from "../classes/ApiCall";
import '../styles/components/ShowResults.css';

function callApiOnResultsStartup(props){
    try{
        return callApiWithData(props.name, props.score, props.grade, true)
    }catch (e){
        return null;
    }
}

function ShowResults(props) {
    const [apiData, setApiData] = useState(null);
    const [apiException, setApiException] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            let apiResponse = await callApiOnResultsStartup(props);
            if(apiResponse != null){
                setApiData(apiResponse);
            }else{
                setApiException(true);
            }
        }
        
        fetchData();
    }, [props]);

    

    if(apiException){
        return (
            <div className="results-container">
                <h1>Cannot Get Data</h1>
                <h2>{props.name}</h2>
                <h2>{props.score}</h2>
                <h2>{props.grade}</h2>
                <h2>{true}</h2>
            </div>
        );
    };

    if(apiData != null){
        return (  
            <div className="results-container">
                <h1>{apiData.name}</h1>
                <h1>{apiData.gameStats.totalAverage}</h1>
                <h1>{apiData.gameStats.timesPlayed}</h1>
            </div>
        );
    }

    return (  
        <div className="results-container">
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <h1>Fetching your results now...</h1>
        </div>
    );
}

export default ShowResults;
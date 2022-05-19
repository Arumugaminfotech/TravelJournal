import Data from "../Data"
export default function Travel(props){
    return(
        
            <div className="head">
            
            <img src={props.detail.imageUrl} alt="location" width="40%"/>
            <div className="body">
                <div className="bodyFirst">
                    <div>{props.detail.location}</div>
                    <div><a href={props.detail.googleMapsUrl}>view on google map </a></div>
                </div>
                <div className="bodySecond">
                        <div>{props.detail.title}</div>
                        <div>{props.detail.startDate} {props.endDate}</div>
                        <div>{props.detail.description}</div>
                </div>
            </div>
        </div>
        )

}
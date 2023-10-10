export default function History({history}){
    return (
        <div className="history">
            <br></br>
            <h2>Who have we seen so far?</h2>
            <br></br>
            { 
                history &&  
                history.map((catHistory, index) => (

                (catHistory.name && catHistory.imgSrc) ?
                (       
                    <div key={index}    className="cat-history">
                        <p>{catHistory.name} from {catHistory.origin}</p>
                        <img src={catHistory.imgSrc}/>
                    </div> 
                ) : ("")
                
                ))
            }
      </div>
    )
}
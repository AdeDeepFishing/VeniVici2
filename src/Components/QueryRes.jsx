export default function QueryRes({data, setBannedList, allCats, setAllCats}){

    
    const handleClick = (event) => {
        const {name, value} = event.target;

        setBannedList((prevState) => [...prevState, name+" : "+value]);

        const filteredCatData = allCats.filter((element) => element[name] != value);
        
        setAllCats(filteredCatData)
    }

    return (
        <div className="queryRes">
               <h2>{data.name}</h2>
                <div className="attributes">
                    <label>
                        Origin🌍
                        <button 
                            onClick={handleClick} value={data.origin}
                            name="origin"
                        >
                            {data.origin}
                        </button>
                    </label>
                    <label>
                         Intelligence🧠 
                        <button  
                            onClick={handleClick} value={data.intelligence}
                            name="intelligence"
                        >
                            {data.intelligence}
                        </button>
                    </label>
                    <label>
                         Affection Level🤩 
                        <button 
                            onClick={handleClick}
                            value={data.affectionLevel}
                            name="affection_level"
                            >
                                {data.affectionLevel}
                        </button>
                    </label>
                    <label>
                        Life Span👽
                        <button 
                            onClick={handleClick} value={data.lifeSpan}
                            name="life_span"
                        >
                            {data.lifeSpan}
                        </button>
                    </label>
                </div>
                <img src={data.imgSrc}/>
        </div> 
    )
}
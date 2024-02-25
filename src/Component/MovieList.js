import "./MovieList.css"
import { useState } from "react"
import MovieItem from "./MovieItem"

const MovieList=({dummy, year, setYear})=>{
    
    const [pickedYear, setPickedYear]=useState('all')

    const clickBtn=(yearName)=>{
        setPickedYear(yearName)
        setYear(yearName)
        console.log(yearName)
        console.log(setPickedYear)
        console.log(setYear)
    }

    const filterDummy=year==='all'
    ?dummy:dummy.filter(
        (it)=>(it.year===year)
        )

    return(
        <div className="MovieList">
            <h1>영화 리스트</h1>
            <div className="filters">
                <p>
                    연도 분류: 
                </p>
                <button onClick={()=>clickBtn('all')} 
                className={pickedYear==='all' ? 'active' : ''}>
                    전체
                </button>
                <button onClick={()=>clickBtn('2020')} 
                className={pickedYear==='2020' ? 'active' : ''}>
                    2020년
                </button>
                <button onClick={()=>clickBtn('2021')} 
                className={pickedYear==='2021' ?     'active' : ''}>
                    2021년
                </button>
                <button onClick={()=>clickBtn('2022')} 
                className={pickedYear==='2022' ? 'active' : ''}>
                    2022년
                </button>
                <button onClick={()=>clickBtn('2023')} 
                className={pickedYear==='2023' ? 'active' : ''}>
                    2023년
                </button>
            </div>
            <div className="filtered">
                <ul>
                    {filterDummy.map((it)=>
                    (<MovieItem 
                    key={it.id} 
                    {...it}
                    />))}
                </ul>
            </div>
        </div>
    )
}
export default MovieList
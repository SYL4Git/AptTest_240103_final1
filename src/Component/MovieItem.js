import './MovieItem.css'
import { useState } from "react"
import MovieModal from "./MovieModal"


const MovieItem=({id, poster, title, year, age, runtime, score, director, actor, synopsis})=>{
    const [isModal, setIsModal]=useState(false)

    const showModal=()=>{setIsModal(true)}
    const closeModal=(m)=>{setIsModal(false)}
    
    return(
        <li className="MovieItem">
            <div className='MovieItem_in'>
                <div className='item_poster'>
                    <img src={poster} />
                    <div className="mouseOver">
                        <button 
                        className='openModal'
                        onClick={showModal}>
                            상세보기
                        </button>
                    </div>
                </div>
                <div className='item_detail'>
                    <p className='item_title'>
                        <span>제목</span>: {title}
                    </p>
                    <p className='item_age'>
                        <span>시청등급</span>: {age}
                    </p>
                    <p className='item_runtime'>
                        <span>상영시간</span>: {runtime}
                    </p>
                    <p className='item_score'>
                        <span>평점</span>: {score}
                    </p>
                </div>
            </div>
            <div className={isModal ? 'modal show' : 'modal'}>
                <MovieModal
                id={id}
                poster={poster}
                title={title}
                year={year}
                age={age}
                runtime={runtime}
                score={score}
                director={director}
                actor={actor}
                synopsis={synopsis}
                closeModal={closeModal}
                />
            </div>
        </li>
    )
}
export default MovieItem
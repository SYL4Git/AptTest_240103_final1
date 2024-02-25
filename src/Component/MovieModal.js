

const MovieModal=({id, poster, title, year, age, runtime, score, director, actor, synopsis, closeModal})=>{
    
    const handleClose=()=>{
        closeModal(id)
        return
    }

    return(
        <div className="MovieModal">
            <div className="MovieModal_in">
                <div className="modal_poster">
                    <img src={poster} />
                </div>
                <div className="modal_detail">
                    <p className="modal_title">
                        <span>제목: </span>{title}
                    </p>
                    <p className="modal_year">
                        <span>개봉년도: </span>{year}
                    </p>
                    <p className="modal_age">
                        <span>시청등급: </span>{age}
                    </p>
                    <p className="modal_runtime">
                        <span>상영시간: </span>{runtime}
                    </p>
                    <p className="modal_score">
                        <span>평점: </span>{score}
                    </p>
                    <p className="modal_director">
                        <span>감독: </span>{director}
                    </p>
                    <p className="modal_actor">
                        <span>출연: </span>{actor}
                    </p>
                    <p className="modal_synopsis">
                        <span>줄거리: </span>
                        <br/>
                        <div>{synopsis}</div>
                    </p>
                    <div className="closeModal">
                        <button onClick={handleClose}>
                            닫기
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MovieModal
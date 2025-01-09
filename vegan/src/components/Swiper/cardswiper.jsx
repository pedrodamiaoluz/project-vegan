
import * as S from "./style"

function CardSwiper(prosp){

    return(
        <>
          <S.ContainerSwiper>
            <div className="swiper-container">
                <div className="card-swiper">
                    <img src={prosp.src} />
                    <a>{prosp.titulo}</a>
                </div>
            </div>
          </S.ContainerSwiper>
        </>
    )
}

export default CardSwiper
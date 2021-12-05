import React from 'react';
import './ProductItem.styles.scss';

const ProductItem = () => {
    return (
        <div className='productitem'>
                <header className='productitem__header'>
                    <div className='productitem__header_img'>
                        <img src='#' alt='logo-company'/>
                    </div>
                    <div className='productitem__header_cost'>
                        <h4>21049₽</h4>
                        <span>Стоимость для одного пассажира</span>
                    </div>
                </header>
                <div className='productitem__way'>
                    <p>Москва, ШЕРЕМЕТЬЕВО <span>(SVO) &#8594;</span>
                        ЛОНДОН, Лондон, Хитроу <span>(LHR)</span>
                    </p>
                </div> 
                <div className='productitem__time'>
                    <p>20:40 <span>18 авг. вт</span></p> 
                    <p><img src='#' alt='flytime'/> 14 ч 45 мин</p> 
                    <p><span>19 авг. ср</span> 09:25</p> 
                </div>
                <div className='productitem__transfer'>
                    <hr/>
                    <p>1 пересадка</p>
                </div>
                <p>Рейс выполняет: LOT Polish Airlines</p>
                <button>ВЫБРАТЬ</button>
        </div>
    )
}

export default ProductItem;

import React from 'react';
import './ProductItem.styles.scss';
import lotLogo from '../../assets/lot-logo.png';
import clock from '../../assets/clock.svg';

const ProductItem = () => {
    return (
        <div className='productitem'>
                <header className='productitem__header'>
                    <div className='productitem__header_img'>
                        <img src={lotLogo} alt='logo-company'/>
                    </div>
                    <div className='productitem__header_cost'>
                        <h2>21049₽</h2>
                        <span>Стоимость для одного взрослого пассажира</span>
                    </div>
                </header>
                <div className='productitem__body'>
                    <div className='productitem__way'>
                        <p>Москва, ШЕРЕМЕТЬЕВО <span>(SVO) &#8594; </span>
                            ЛОНДОН, Лондон, Хитроу <span> (LHR)</span>
                        </p>
                        <hr/>
                    </div> 
                    <div className='productitem__time'>
                        <p>20:40 <span>18 авг. вт</span></p> 
                        <p><img src={clock} alt='flytime'/> 14 ч 45 мин</p> 
                        <p><span>19 авг. ср</span> 09:25</p> 
                    </div>
                    <div className='productitem__transfer'>
                        <hr/>
                        <span>1 пересадка</span>
                    </div>
                    <p className='company'>Рейс выполняет: LOT Polish Airlines</p>
                </div>
                <hr className='path_separator'/>
                <div className='productitem__body'>
                    <div className='productitem__way'>
                        <p>ЛОНДОН, Лондон, Хитроу<span> (LHR) &#8594; </span>
                            Москва, ШЕРЕМЕТЬЕВО <span> (SVO)</span>
                        </p>
                        <hr/>
                    </div> 
                    <div className='productitem__time'>
                        <p>18:10 <span>19 авг. ср</span></p> 
                        <p><img src={clock} alt='flytime'/> 23 ч 35 мин</p> 
                        <p><span>20 авг. чт</span> 19:45</p> 
                    </div>
                    <div className='productitem__transfer'>
                        <hr/>
                        <span>1 пересадка</span>
                    </div>
                    <p className='company'>Рейс выполняет: LOT Polish Airlines</p>
                </div>
                <button>ВЫБРАТЬ</button>
        </div>
    );
}

export default ProductItem;

import React from 'react';
import './SideBar.styles.scss';

const SideBar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar__sort'>
                <span>Сортировать</span>
                <div className='sidebar__radio sidebar__radio_sort'>
                    <input type='radio' name='sort' value='ascending'/> - по возрастанию цены 
                    <input type='radio' name='sort' value='descending'/> - по убыванию цены 
                    <input type='radio' name='sort' value='waytime'/> - по времени в пути 
                </div>
            </div>
             <div className='sidebar__filter'>
                <span>Фильтровать</span>
                <div className='sidebar__radio sidebar__radio_filter'>
                    <input type='radio' name='filter' value='transfer' /> - 1 пересадка 
                    <input type='radio' name='filter' value='notransfer' /> - без пересадок 
                </div>
            </div>
            <div className='sidebar__cost'>
                <span>Цена</span>
                <div className='sidebar__input'>
                    От <input type='text' name='cost' value='from' /> 
                    До <input type='text' name='cost' value='to' />  
                </div>
            </div>
            <div className='sidebar__avia'>
                <span>Авикомпании</span>
                <div className='sidebar__checkbox'>
                    <input type='checkbox' name='avia' value='from' /> - LOT Polish Airlines 
                    <input type='checkbox' name='avia' value='to' /> - Аэрофлот
                </div>
            </div>
        </div>
    );
}

export default SideBar;

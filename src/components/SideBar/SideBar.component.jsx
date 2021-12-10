import React from 'react';
import './SideBar.styles.scss';

const SideBar = ({filterObj, setFilterObj, updateCompaniesChecked}) => {
    const [lotChecked, setLotChecked] = React.useState(false);
    const [aeroChecked, setAeroChecked] = React.useState(false);

    React.useEffect(() => {
        lotChecked && aeroChecked ?
            updateCompaniesChecked('default') :
            lotChecked ? 
                updateCompaniesChecked('LOT') :
                aeroChecked ? 
                    updateCompaniesChecked('Aero') :
                    updateCompaniesChecked('default');
    }, [lotChecked, aeroChecked, updateCompaniesChecked])

    return (
        <div className='sidebar'>
            <div className='sidebar__sort'>
                <span>Сортировать</span>
                <div className='sidebar__radio sidebar__radio_sort'>
                    <input type='radio' name='sort' value='ascending' onChange={() => setFilterObj({...filterObj, sort: 'ascen' })}/> - по возрастанию цены 
                    <input type='radio' name='sort' value='descending' onChange={() => setFilterObj({...filterObj, sort: 'desc' })}/> - по убыванию цены 
                    <input type='radio' name='sort' value='waytime' onChange={() => setFilterObj({...filterObj, sort: 'waytime' })}/> - по времени в пути 
                </div>
            </div>
             <div className='sidebar__filter'>
                <span>Фильтровать</span>
                <div className='sidebar__radio sidebar__radio_filter'>
                    <input type='radio' name='filter' value='transfer' onChange={() => setFilterObj({...filterObj, filter: 'one' })}/> - 1 пересадка 
                    <input type='radio' name='filter' value='notransfer' onChange={() => setFilterObj({...filterObj, filter: 'zero' })}/> - без пересадок 
                </div>
            </div>
            <div className='sidebar__cost'>
                <span>Цена</span>
                <div className='sidebar__input'>
                    От <input type='number' name='cost' onChange={(e) => setFilterObj({...filterObj, cost: {...filterObj.cost, from: +e.target.value}})}/> 
                    До <input type='text' name='cost' onChange={(e) => setFilterObj({...filterObj, cost: {...filterObj.cost, to: +e.target.value}})}/>  
                </div>
            </div>
            <div className='sidebar__avia'>
                <span>Авикомпании</span>
                <div className='sidebar__checkbox'>
                    <input type='checkbox' name='avia' value='from' onChange={(e) => {
                        setLotChecked(!lotChecked);
                        }
                    } /> - LOT Polish Airlines 
                    <input type='checkbox' name='avia' value='to' onChange={() => setAeroChecked(!aeroChecked)}/> - Аэрофлот
                </div>
            </div>
        </div>
    );
}

export default SideBar;

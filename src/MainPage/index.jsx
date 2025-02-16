import style from './style.module.scss'
import { Input } from '@mantine/core';
import { Button } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';
import { Pagination } from '@mantine/core';
import LocationItem from './Location.png'
import SearchItem from './Search.png'
import arrData from '../Storage/index'



function MainPage() {
    const VacancyItems = arrData.map((el) =>
        <div className={style.vacancyItem}>
            {console.log(el.city)}
            <h2>{el.title}</h2>
            <div>
                <p style={{ fontWeight: 600 }}>{el.salary}</p>
                <p>•</p>
                <p>{el.conditions}</p>
            </div>
            <div className={style.cityBlock}>
                <img src={`${LocationItem}`} style={{ width: '14px', height: '16px' }}></img>
                <p>{el.city}</p>
            </div>
        </div>
    )


    return (
        <section className={style.wrapper}>
            <div className={style.searchBlock}>
                <Input size="md" placeholder="Введите название вакансии" leftSection={<IconAt size={16} />} />
                <Button variant="filled" size="md">Button</Button>
            </div>
            <div className={style.vacancyBlocks}>
                {VacancyItems}
            </div>
            <div className={style.pagination}>
                <Pagination total={3} />
            </div>
        </section >
    )
}
export default MainPage
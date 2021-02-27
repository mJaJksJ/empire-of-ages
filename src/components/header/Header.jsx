import React from 'react'
import styleClasses from './Header.module.css'

const Header = function () {
    return (
        <header id={'header'} className={styleClasses.header}>
            <a href={'#'}>lng</a>
            <img
                src='https://downloader.disk.yandex.ru/preview/257fcabe0aa2d2744dbea3e857577ec2b721260e694c5a0c3c4725fd439814a8/602c397b/Cxca4tn3YWMUkTf-6F42ktRbnqp0ilgRv3vOnCsbBVJ-tbBLnbVcrmkaZEbxsybLLMb0qFfVZFYBCRkvQp6-hg%3D%3D?uid=0&filename=Profile.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=1311x658'
                alt={'profile'}/>
        </header>
    );
}

export default Header;
import './Menu.css';
import logo from '../../images/logo.png';
import React , {Component} from 'react';
import { NavLink } from 'react-router-dom';
class Menu extends Component{
    listItemsHandleClick(value){
        let elm = value;
        let allListItems = document.querySelectorAll('li.list-item');
        for(let i = 0 ; i < allListItems.length ; i++){
            allListItems[i].classList.remove('active');
        }
        elm.currentTarget.classList.add('active');
    }
    render() {
        return(
            <div className='menu text-center'>
            <NavLink className='link' href='https://behinava.net' >
                <img alt='hello' src={logo} className='w-75'/>
            </NavLink>
            <hr />
            <p>راهنمای هویت برند علی بابا </p>
            <ul>
                <li>
                    <span className='hidden-text'>
                        مقدمه
                    </span>
                </li>
                <li className='list-item' activeClassName="active"  >
                    <NavLink className='link' to={'/'}> در یک نگاه</NavLink>
                </li>
                <li className='list-item' >
                    <NavLink className='link' activeClassName="active" to={'/branding'}>بیانیه برندینگ</NavLink>
                </li>
                <li>
                    <span className='hidden-text'>
                        هویت مفهومی
                    </span>
                </li>
                <li className='list-item' >
                    <NavLink className='link' to={'/conceptual-identity'} activeClassName="active">هویت مفهومی علی بابا</NavLink>
                </li>
                <li>
                    <span className='hidden-text'>
                        هویت کلامی
                    </span>
                </li>
                <li className='list-item' >
                    <NavLink className='link' to={'/Tone'} activeClassName="active">لحن و ارزش های کلامی</NavLink>
                </li>
                <li className='list-item' >
                    <NavLink className='link' to={'/Tagline'} activeClassName="active">تگ لاین</NavLink>
                </li>
                <li>
                    <span className='hidden-text' >
                        هویت بصری
                    </span>
                </li>
                <li className='list-item' >
                    <NavLink className='link' activeClassName="active">اصول دیزاین</NavLink>
                </li>
                <li className='list-item' >
                    <NavLink className='link' activeClassName="active">لوگو</NavLink>
                </li>
                <li className='list-item' >
                    <NavLink className='link' activeClassName="active">مسکات</NavLink>
                </li>
                <li className='list-item' >
                    <NavLink className='link' activeClassName="active">رنگ</NavLink>
                </li>
                <li className='list-item' >
                    <NavLink className='link' activeClassName="active">تایپوگرافی</NavLink>
                </li>
                <li className='list-item' >
                    <NavLink className='link' activeClassName="active">هویت جدید در کاربرد</NavLink>
                </li>
            </ul>
        </div>
        )
    }
}

export default Menu;
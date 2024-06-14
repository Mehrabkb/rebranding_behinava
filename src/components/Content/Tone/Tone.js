import './Tone.css';
import React , {Component} from 'react';
import ToneImage from '../../../images/Tone.jpg';
import ToneSample from '../../../images/ToneSample.svg';
function Tone(){
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12'>
                    <div className='title'>
                        <div className='info'>
                            <h2 className='py-3'>لحن و ارزش‌های کلامی </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row bottom-box pt-5'>
                <div className='col-12 col-md-6'>
                    <span>لحن غالب</span>
                    <p>ما معتقد به «یکنواختی» لحن نیستیم. برند می‌تواند بسته به مختصات ارتباط، لحن‌های مختلفی را به‌کار گیرد؛ درست همان‌طور که یک انسان در موقعیت‌های مختلف، از لحن‌های متنوعی استفاده می‌کند. چیزی که ما در علی‌بابا به آن باور داریم «لحن یکپارچه» است</p>
                </div>
                <div className='col-12 col-md-6'>
                    <p>علی‌بابا شخصیتی دوستانه، اجتماعی و پشتیبان دارد؛ با این توصیف، «لحن غالب» علی‌بابا در رسانه‌های مرکزی مثل وب‌سایت و اپلیکیشن «دوستانه» است. همچنین براساس اصل یکپارچگی، لحن‌های دیگری هم در قالب یک طیف لحن برای علی‌بابا طراحی شده تا در رسانه‌های مختلف و متناسب با پیام و مخاطب، از آن‌ها استفاده شود.
                    </p>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <img className='w-100' src={ToneImage} />
                </div>
                <div className='col-12'>
                    <h2><b>ارزش های کلامی علی بابا</b></h2>
                    <p>
                    در مسیر ارتباطات کلامی، صفت‌هایی به کلام علی‌بابا اطلاق می‌شود که از شخصیت برند (هویت مفهومی) نشات گرفته است. این صفت‌ها در غالب ارزش‌های کلامی و درست مثل یک چک‌لیست، کلام برند را با هویت مفهومی آن در یک مسیر قرار می‌دهند.
                    با ارزش‌های کلامی علی‌بابا آشنا می‌شویم:
                    </p>
                </div>
                <div className='row svg-container'>
                    <div className='col-12 col-md-4 Tone-svg-contianer'>
                        <img src={ToneSample} className='w-100'/>
                    </div>
                    <div className='col-12 col-md-8 info'>
                        <h2>کلام صادقانه</h2>
                        <p>علی بابا احترام میگذارد و احترام میبیند .
                            علی بابا موجودیتی اجتماعی دارد و با طیفهای متوعی از مرد ارتباط دارد
                            لی بابا احترام میگذارد و احترام میبیند .
                            علی بابا موجودیتی اجتماعی دارد و با طیفهای متوعی از مرد ارتباط دارد
                            لی بابا احترام میگذارد و احترام میبیند .
                            علی بابا موجودیتی اجتماعی دارد و با طیفهای متوعی از مرد ارتباط دارد
                                                
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Tone;
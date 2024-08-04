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
                    <p>ما در «بهین آوا» معتقد به استفاده از یک لحن یکنواخت نیستیم. برند می‌تواند با توجه به نیازهای ارتباطی و مختصات مختلف، لحن‌های متنوعی را به‌کار گیرد، همان‌طور که یک انسان در موقعیت‌های مختلف از لحن‌های گوناگون استفاده می‌کند. چیزی که ما به آن باور داریم، «لحن یکپارچه» است که با انعطاف‌پذیری و هماهنگی با شرایط مختلف، تجربه‌ای متمایز و همگام با هویت برند را برای مخاطبان خلق می‌کند</p>
                </div>
                <div className='col-12 col-md-6'>
                    <p>بهین آوا دارای شخصیتی نوآور، پیشرو و همراه است؛ با این توصیف، «لحن غالب» بهین آوا در رسانه‌های اصلی مانند وب‌سایت و پلتفرم‌های دیجیتال، «خلاقانه و حرفه‌ای» است. همچنین، بر اساس اصل یکپارچگی و انعطاف‌پذیری، لحن‌های دیگری نیز در قالب یک طیف گسترده برای بهین آوا طراحی شده‌اند تا در رسانه‌های مختلف و متناسب با پیام و مخاطب مورد نظر، به کار گرفته شوند.</p>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <img className='w-100' src={ToneImage} />
                </div>
                <div className='col-12'>
                    <h2><b>ارزش های کلامی بهین آوا</b></h2>
                    <p>بهین آوا بر نوآوری و خلاقیت، پیشرو بودن، همراهی و پشتیبانی، تعهد به کیفیت و نتایج، و شخصی‌سازی و انعطاف‌پذیری تأکید دارد.</p>
                </div>
                {/* <div className='row svg-container'>
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
                </div> */}
            </div>
        </div>
    )
}
export default Tone;
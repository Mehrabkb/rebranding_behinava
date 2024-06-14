import './Logo.css';
import React , {Component} from 'react';
import image1 from '../../../images/branding_image_1.jpg';
import logo1 from '../../../images/logo1.svg';
import alibabaGif from '../../../images/alibaba.gif';
import alibaba2 from '../../../images/alibaba2.svg';
function Logo(){
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12'>
                    <div className='title'>
                        <div className='info'>
                            <h2 className='py-3'>لوگو</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row bottom-box pt-5'>
                <div className='col-12 col-md-6'>
                    <p>
                    لوگوی علی‌بابا مهم‌ترین عنصر بصری برند است که علی‌بابا را از رقبای خود و سایر شرکت‌ها متمایز می‌کند. این لوگو از دو بخش تشکیل شده است. بخش تصویری این لوگو را براساس حرف A به‌عنوان حرف اول نام برند دیزاین کرده‌ایم که به آن «مونوگرام» می‌گوییم. به بخش نوشتاری لوگو (شامل نام برند به زبان انگلیسی) «لوگوتایپ» گفته می‌شود. درنهایت از ترکیب این دو بخش در کنار هم «لوگو» ساخته می‌شود.
                    </p>
                </div>
                <div className='col-12 col-md-6 text-center logo-container'>
                    <img  src={logo1}/>
                </div>
            </div>
            <div className='row pt-4'>
                <div className='col-12'>
                    <h3>دیزاین مونوگرام</h3>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-6'>
                        <p>
                        در دیزاین مونوگرام علی‌بابا با توجه به هویت و استراتژی برند، یک فرم قاطع و محکم دیزاین کرده‌ایم که در عین استواری، به وسیله حرکت منحنی وسط حرف A از سکون و ایستایی فاصله گرفته و با فضای پرجنب‌وجوش سفر هماهنگ شده است.
                        این مونوگرام را به‌صورت پویا یا داینامیک دیزاین کرده‌ایم؛ به این معنی که یک DNA و آناتومی ثابت دارد؛
                        </p>
                    </div>
                    <div className='col-12 col-md-6'>
                        <p>
                            
اما فرم ظاهری آن متغیر است و در ارتباطات برند، بسته به اینکه قرار است چه پیامی به چه مخاطبی از طریق چه رسانه‌ای منتقل شود، تغییر می‌کند. این رویکرد، یک استراتژی جسورانه در دیزاین است و به برند این امکان را می‌دهد که به موقعیت‌های اجتماعی و نیازهای مخاطب به‌صورت هوشمندانه واکنش نشان دهد و در سطح ارتباطات، همیشه یک گام از انتظارات مشتری جلوتر باشد.
                        </p>
                    </div>
                    <div className='col-12 text-center mt-5 alibaba-gif-container'>
                        <img  src={alibabaGif}/>
                    </div>
                </div>
                <div className='row mt-5'>
                <div className='col-12 col-md-6'>
                    <h2>دیزاین لوگوتایپ</h2>
                </div>
                <div className='col-12 col-md-6'>
                    <p>
                    لوگوتایپ علی‌بابا را بر پایه لوگوتایپ قبلی دیزاین کرده‌ایم. لوگوتایپ جدید، در واقع نسخه‌ به‌روزشده لوگوتایپ قبلی است که فرم‌های آن پویاتر و سیال‌تر شده‌ و جزئیات اضافه از آن حذف شده است.
                    </p>
                </div>
                <div className='col-12 text-center mt-5'>
                        <img  src={alibaba2}/>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col-12 col-md-4 text-center logo-container'>
                        <img className='w-75' src={logo1}/>
                    </div>
                    <div className='col-12 col-md-8'>
                        <h3>نسخه های استاندارد</h3>
                        <p>
                        لوگوی علی‌بابا مهم‌ترین عنصر بصری برند است که علی‌بابا را از رقبای خود و سایر شرکت‌ها متمایز می‌کند. این لوگو از دو بخش تشکیل شده است. بخش تصویری این لوگو را براساس حرف A به‌عنوان حرف اول نام برند دیزاین کرده‌ایم که به آن «مونوگرام» می‌گوییم. به بخش نوشتاری لوگو (شامل نام برند به زبان انگلیسی) «لوگوتایپ» گفته می‌شود. درنهایت از ترکیب این دو بخش در کنار هم «لوگو» ساخته می‌شود.
                        </p>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col-12 col-md-8 background-text mt-5'>
                        <h3 className=''>پس زمینه ها</h3>
                        <p>
                        از لوگوی علی‌بابا روی پس‌زمینه سفید، تنها با رنگ اصلی استفاده می‌کنیم.
از لوگوی علی‌بابا روی پس‌زمینه مشکی، تنها با رنگ اصلی استفاده می‌کنیم.
از لوگوی علی‌بابا روی پس‌زمینه زرد، تنها به صورت تک‌رنگ مشکی استفاده می‌کنیم.
از لوگوی علی‌بابا روی پس‌زمینه‌های خاکستری (کدهای مجاز در پالت رنگ)، به صورت تک‌رنگ سیاه یا سفید استفاده می‌کنیم.
استفاده از لوگوی علی‌بابا روی پس‌زمینه‌های رنگی دیگر مجاز نیست.
از لوگوی علی‌بابا روی تصویر، در زمینه واضح و ساده با کنتراست زیاد و به صورت تک‌رنگ سفید یا مشکی استفاده می‌کنیم.
                        </p>
                    </div>
                    <div className='col-12 col-md-4'>
                        <div className='row mt-5'>
                            <div className='col-12 col-md-6 border p-5'>
                                <img className='w-100' src={logo1}/>
                            </div>
                            <div className='col-12 col-md-6 border p-5'>
                                <img className='w-100' src={logo1}/>
                            </div>
                            <div className='col-12 col-md-6 border p-5'>
                                <img className='w-100' src={logo1}/>
                            </div>
                            <div className='col-12 col-md-6 border p-5'>
                                <img className='w-100' src={logo1}/>
                            </div>
                            <div className='col-12 col-md-6 border p-5'>
                                <img className='w-100' src={logo1}/>
                            </div>
                            <div className='col-12 col-md-6 border p-5'>
                                <img className='w-100' src={logo1}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col-12 col-md-6 text-center logo-container'>
                        <img className='w-75' src={logo1}/>
                    </div>
                    <div className='col-12 col-md-6'>
                        <h3>استفاده در کنار لوگوی برندهای دیگر
                        </h3>
                        <p>برای استفاده از لوگوی علی‌بابا در کنار لوگوی برندهای دیگر، اگر لوگوی دوم به‌صورت عمودی باشد از نسخه عمودی لوگو و اگر افقی باشد از نسخه افقی لوگوی علی‌بابا استفاده می‌کنیم. برای حفظ تعادل وزنی، باید در هر دو حالت، ارتفاع مونوگرام علی‌بابا با بخش تصویری لوگوی دوم برابر باشد. در صورتی که لوگوی دوم، صرفا لوگوتایپ باشد، از نسخه افقی لوگوی علی‌بابا استفاده می‌کنیم. در این حالت باید ارتفاع هر دو لوگوتایپ با هم برابر باشد.
                        لوگوی علی‌بابا را همیشه سمت راست و بالای لوگوی دوم قرار می‌دهیم. استفاده از این لوگو در سمت چپ یا پایین لوگوهای دیگر مجاز نیست.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Logo;
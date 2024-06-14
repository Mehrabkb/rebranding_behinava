import './Designer.css';
import image1 from '../../../images/branding_image_1.jpg';
import React , {Component} from 'react';
function Designer(){
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12'>
                    <div className='title'>
                        <div className='info'>
                            <h2 className='py-3'>اصول دیزاین</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row bottom-box pt-5'>
            <div className='col-12 col-md-6'>
                    <img  src={image1}/>
                </div>
                <div className='col-12 col-md-6'>
                    <h2>چیستی و چرایی</h2>
                    <p>
                    اصول دیزاین علی‌بابا چارچوبی است که در هویت مفهومی برند ریشه دارد، به همه خروجی‌های دیزاین سروشکلی استراتژیک می‌دهد و آن‌ها را یکپارچه می‌کند تا مخاطب تجربه منسجمی از ارتباط با برند علی‌بابا داشته باشد. اگر بخواهیم تفاوت اصول دیزاین با گایدلاین‌های هویت بصری را شفاف‌تر کنیم، باید این نکته را در نظر داشته باشیم که تمرکز اصول دیزاین روی استراتژی‌های کلی است و نگاهی کلان به حوزه دیزاین برند دارد؛ در حالی که گایدلاین‌های هویت بصری از مصادیق کاربردی دیزاین در دنیای واقعی صحبت می‌کند. به‌عنوان مثال، موضوع پالت‌های رنگی برند در گایدلاین‌های هویت بصری تعریف می‌شود و کمینه‌گرایی یا خلاقیت، ارزش‌هایی هستند که اصول دیزاین به آن‌ها می‌پردازد. در ادامه می‌توانید با اصول دیزاین برند علی‌بابا بیشتر آشنا شوید.
                    </p>
                </div>
                <div className='col-12 mt-5'>
                <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">دیزاین استراتژیک</button>
                        <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">دیزاین خلاق</button>
                        <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">دیزاین کمینه گرا</button>
                        <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact1" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">دیزاین پویا</button>
                        <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact2" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">دیزاین متمایز</button>
                    </div>
                    </nav>
                    <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
                        <div className='row p-3'>
                            <div className='col-12 col-md-8'>
                                <h2>دیزاین کلاسیک</h2>
                                <p>علی‌بابا راهکار جامع سفر است؛ یعنی همیشه به‌دنبال آن است که راه‌حل‌های بهینه برای همه انواع سفر در تمام مراحل سفر ارائه کند. این مدل ذهنی در دیزاین علی‌بابا هم بروز و ظهور پیدا کرده است.
                                دیزاین علی‌بابا در خدمت حل مسائل ارتباطی و کسب‌وکاری این سازمان است. بریف دیزاین از استراتژی‌های بالادستی سرچشمه می‌گیرد و در یک مسیر رفت‌وبرگشتی، با استراتژی هم‌مسیر می‌شود تا یکدیگر را اصلاح و تکمیل کنند.</p>
                            </div>
                            <div className='col-12 col-md-4'>
                                <img className='w-100' src={image1}/>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                    <div className='row p-3'>
                            <div className='col-12 col-md-8'>
                                <h2>دیزاین خلاق</h2>
                                <p>علی‌بابا راهکار جامع سفر است؛ یعنی همیشه به‌دنبال آن است که راه‌حل‌های بهینه برای همه انواع سفر در تمام مراحل سفر ارائه کند. این مدل ذهنی در دیزاین علی‌بابا هم بروز و ظهور پیدا کرده است.
                                دیزاین علی‌بابا در خدمت حل مسائل ارتباطی و کسب‌وکاری این سازمان است. بریف دیزاین از استراتژی‌های بالادستی سرچشمه می‌گیرد و در یک مسیر رفت‌وبرگشتی، با استراتژی هم‌مسیر می‌شود تا یکدیگر را اصلاح و تکمیل کنند.</p>
                            </div>
                            <div className='col-12 col-md-4'>
                                <img className='w-100' src={image1}/>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
                    <div className='row p-3'>
                            <div className='col-12 col-md-8'>
                                <h2>دیزاین کمینه گرا</h2>
                                <p>علی‌بابا راهکار جامع سفر است؛ یعنی همیشه به‌دنبال آن است که راه‌حل‌های بهینه برای همه انواع سفر در تمام مراحل سفر ارائه کند. این مدل ذهنی در دیزاین علی‌بابا هم بروز و ظهور پیدا کرده است.
                                دیزاین علی‌بابا در خدمت حل مسائل ارتباطی و کسب‌وکاری این سازمان است. بریف دیزاین از استراتژی‌های بالادستی سرچشمه می‌گیرد و در یک مسیر رفت‌وبرگشتی، با استراتژی هم‌مسیر می‌شود تا یکدیگر را اصلاح و تکمیل کنند.</p>
                            </div>
                            <div className='col-12 col-md-4'>
                                <img className='w-100' src={image1}/>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="nav-contact1" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
                    <div className='row p-3'>
                            <div className='col-12 col-md-8'>
                                <h2>دیزاین پویا</h2>
                                <p>علی‌بابا راهکار جامع سفر است؛ یعنی همیشه به‌دنبال آن است که راه‌حل‌های بهینه برای همه انواع سفر در تمام مراحل سفر ارائه کند. این مدل ذهنی در دیزاین علی‌بابا هم بروز و ظهور پیدا کرده است.
                                دیزاین علی‌بابا در خدمت حل مسائل ارتباطی و کسب‌وکاری این سازمان است. بریف دیزاین از استراتژی‌های بالادستی سرچشمه می‌گیرد و در یک مسیر رفت‌وبرگشتی، با استراتژی هم‌مسیر می‌شود تا یکدیگر را اصلاح و تکمیل کنند.</p>
                            </div>
                            <div className='col-12 col-md-4'>
                                <img className='w-100' src={image1}/>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="nav-contact2" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
                    <div className='row p-3'>
                            <div className='col-12 col-md-8'>
                                <h2>دیزاین متمایز</h2>
                                <p>علی‌بابا راهکار جامع سفر است؛ یعنی همیشه به‌دنبال آن است که راه‌حل‌های بهینه برای همه انواع سفر در تمام مراحل سفر ارائه کند. این مدل ذهنی در دیزاین علی‌بابا هم بروز و ظهور پیدا کرده است.
                                دیزاین علی‌بابا در خدمت حل مسائل ارتباطی و کسب‌وکاری این سازمان است. بریف دیزاین از استراتژی‌های بالادستی سرچشمه می‌گیرد و در یک مسیر رفت‌وبرگشتی، با استراتژی هم‌مسیر می‌شود تا یکدیگر را اصلاح و تکمیل کنند.</p>
                            </div>
                            <div className='col-12 col-md-4'>
                                <img className='w-100' src={image1}/>
                            </div>
                        </div>
                    </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Designer;
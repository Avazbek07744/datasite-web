import React from 'react';
import Header from './Header';
import Footer from './Footer';
import logo from '../assets/logo.png';

const About = () => {
    return (
        <div className="text-white min-h-screen">
            <Header />

            <section className="pt-32 px-4 md:px-10">
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
                    <img src={logo} alt="Logo" className="h-32 md:h-40" />
                    <div className="tracking-wider">
                        <h2 className="text-5xl md:text-7xl font-bold">DataSite</h2>
                        <p className="text-yellow-400 text-3xl md:text-5xl font-semibold">Academy</p>
                    </div>
                </div>

                <p className="max-w-5xl mx-auto m-12 text-lg md:text-xl leading-relaxed text-center md:text-left">
                    DataSite zamonaviy IT ta'lim markazi bo‘lib, talabalarni bugungi texnologiya sanoatida talab qilinadigan ko‘nikmalar bilan ta’minlashga ixtisoslashgan.
                    Biz yuzlab o‘quvchilarga — yangi boshlanuvchilardan tortib tajribali dasturchilargacha — veb-ishlab chiqish, UI/UX dizayni va dasturiy injiniringda o‘z yo‘lini topishga yordam berdik.
                    <br /><br />
                    DataSite o‘z faoliyatini Namanganda boshlab, hozirgi kunda Frontend (HTML, CSS, JS, React), Backend (Node.js, PHP), Mobile (React Native, Flutter) va yangi boshlovchilar uchun kurslar orqali yuzlab talabalarni yetishtirdi.
                    <br /><br />
                    Bizda murabbiylar — tajribali mutaxassislar. O‘quvchilar real loyihalarda qatnashadilar va IT sohasida mustahkam karerani boshlash imkoniga ega bo‘ladilar.
                    <br /><br />
                    <span className="text-yellow-400 font-semibold">DataSite — O‘rganing. Qurilish. O'sish.</span>
                </p>
            </section>

            <Footer />
        </div>
    );
};

export default About;

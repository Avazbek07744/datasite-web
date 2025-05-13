import React from 'react';
import Header from './Header';
import Main from './Main';
import data from "../data.json";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../Components/ui/carousel";
import CountUp from "react-countup";
import Footer from './Footer';
import { Link } from 'react-router-dom';
import Swipper from './Swipper';

const Home = () => {
    const stats = [
        { value: 21, label: "IELTS natijalar 8+" },
        { value: 317, label: "IELTS natijalar 7+" },
        { value: 270, label: "IELTS natijalar 6+" },
    ];

    const info = [
        {
            id: "1",
            title: "Brain Train musobaqasining birinchi mavsumi boshlanish arafasida",
            description: "Bu yerda yangilikning to'liq tavsifi bo'ladi...",
            date: "24 May",
            image: "/images/braintrain.jpg",
        },
        {
            id: "2",
            title: "Start21 liga boshlanish arafasida",
            description: "Bu liga haqida batafsil ma'lumot shu yerda...",
            date: "25 May",
            image: "/images/startleague.jpg",
        },
    ];

    return (
        <div className=''>
            <Header />
            <Main />

            <section className='bace text-white text-center my-32'>
                <h2 className='text-6xl font-bold mb-10'>Nima uchun DataSite?</h2>
                <p className='text-2xl font-bold text-center max-w-[1090px] mx-auto px-2'>
                    Darslarimiz qiziqarli, foydali va hamyonbop. Biz har tomondan eng samarali o'qituvchilarni ish bilan ta'minlaganimiz uchun, siz darslarni tez va yaxshi o'zlashtirasiz. Zamonaviy uslublar va yuqori malakali o'qituvchilar bilan biz sizga o'z maqsadlaringizga yordam bera olamiz.
                </p>
                <div className="p-16 flex flex-wrap gap-6 items-center justify-center">
                    {
                        data.datasite.length && data.datasite.map((item, index) => (
                            <div key={index} className="bg-[#4F4851] w-[300px] p-5 rounded-xl shadow-lg hover:shadow-white hover:scale-105 transition-all duration-300">
                                <i className={`text-5xl mb-4 ${item.icon}`}></i>
                                <h2 className='text-xl font-bold'>{item.title}</h2>
                            </div>
                        ))
                    }
                </div>
            </section>

            <div className="">
                <div className="md:hidden">
                    <Swipper />
                </div>

                <section className="bace hidden md:block pb-20 px-4 md:px-10">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-white mb-12">
                        Bizning Jamoa
                    </h2>
                    <Carousel className="w-full max-w-screen-xl mx-auto">
                        <CarouselContent>
                            {data.team.map((person, index) => (
                                <CarouselItem
                                    key={index}
                                    className="basis-full sm:basis-1/2 lg:basis-1/4 px-2 md:px-4"
                                >
                                    <div className="bg-[#2C2C2C] text-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.03] border border-transparent hover:border-blue-600">
                                        <img
                                            src={person.image}
                                            alt={person.name}
                                            className="w-full h-56 sm:h-60 md:h-64 object-cover"
                                        />
                                        <div className="p-4">
                                            <p className="text-yellow-400 flex items-center gap-2 text-sm mb-2">
                                                <span role="img" aria-label="gear">⚙️</span> {person.experience} yillik tajriba
                                            </p>
                                            <h3 className="text-lg sm:text-xl font-bold mb-1">{person.name}</h3>
                                            <p className="text-sm text-gray-300 line-clamp-3">{person.description}</p>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </section>
            </div>

            <section className='bace px-4 sm:px-10'>
                <h2 className='text-6xl font-bold text-center text-white my-10'>So'nggi yangiliklar</h2>
                <div className="flex flex-wrap justify-center gap-6">
                    {
                        info.length > 0 && info.map((arr, index) => {
                            return <div key={index} className="max-w-[250px] bg-[#252525] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border-4 border-transparent hover:border-blue-700">
                                <img src={arr.image} alt={arr.title} className="w-full h-48 object-cover" />
                                <div className="p-4 flex flex-col justify-between h-40">
                                    <h3 className="text-lg font-semibold text-white mb-3 line-clamp-2">{arr.title}</h3>
                                    <Link
                                        to={`/news/${arr.id}`}
                                        className="border-b-2 border-transparent text-white text-lg w-max hover:border-blue-700 transition duration-300"
                                    >
                                        Batafsil
                                    </Link>
                                </div>
                            </div>
                        })
                    }
                </div>
            </section>

            <section className='bace'>
                <h2 className='md:text-6xl text-4xl font-bold text-center text-white my-10'>Bizning o'quvchilarning <span className='text-yellow-300'>Natijalari</span></h2>
                <div className="flex flex-wrap justify-center gap-20 py-12 text-white text-center">
                    {stats.map((stat, index) => (
                        <div key={index}>
                            <h2 className="text-7xl font-bold">
                                <CountUp end={stat.value} duration={8} />
                            </h2>
                            <p className="text-2xl mt-2 text-gray-300 font-semibold">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Home;

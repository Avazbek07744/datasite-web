import { Link, useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const NewsPage = () => {
    const { id } = useParams();
    const newsData = [
        {
            id:"1",
            title: "Brain Train musobaqasining birinchi mavsumi boshlanish arafasida",
            description: "Bu yerda yangilikning to'liq tavsifi bo'ladi...",
            date: "24 May",
            image: "",
        },
        {
            id:"2",
            title: "Start21 liga boshlanish arafasida",
            description: "Bu liga haqida batafsil ma'lumot shu yerda...",
            date: "25 May",
            image: "",
        },
    ];

    const news = newsData[id-1];

    if (!news) {
        return (
            <div className="text-center text-white mt-20 text-xl">
                Yangilik topilmadi 😕
            </div>
        );
    }

    return (
        <div>
            <Header />
            <section className="bace p-4 md:p-8 text-white mt-24">
                <h2 className="text-5xl md:text-6xl text-center font-bold mb-6">
                    So'nggi <span className="text-red-500">Yangiliklar</span>
                </h2>

                <div className="flex flex-col lg:flex-row gap-8 h-[430px]">
                    <img
                        src={news.image || "https://via.placeholder.com/600x300?text=News+Image"}
                        alt={news.title}
                        className="w-full lg:w-1/2 object-cover rounded-xl"
                    />

                    <div className="lg:w-1/2">
                        <p className="text-sm text-gray-300 mb-2">Chop etilgan sana: {news.date}</p>
                        <h3 className="text-2xl md:text-3xl font-bold mb-3">{news.title}</h3>
                        <p className="text-gray-300 mb-6">{news.description}</p>
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                    {
                        newsData.length > 0 && newsData.map((arr, index) => {
                            return <div key={index} className="max-w-[250px] bg-[#252525] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border-4 border-transparent hover:border-blue-700 hover:px-1">
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
            <Footer />
        </div>
    );
};

export default NewsPage;

'use client'
import { Navbar } from "../../components/navbar/Navbar";
import { FaCheckCircle } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const rooms = [
    {
        name: "Deluxe Room",
        image: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-mobile/tix-hotel/images-web/2020/10/30/5b409e27-268b-4943-9dc8-8b724a08207a-1604034589828-a94fd3b1bb1abc9883689a25b0311bb4.jpg",
    },
    {
        name: "Executive Suite",
        image: "https://ik.imagekit.io/tvlk/generic-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20007673-24279147080a3f895d60b1e3c44e3fff.jpeg?_src=imagekit&tr=c-at_max,f-jpg,h-720,pr-true,q-40,w-1280",
    },
    {
        name: "Presidential Suite",
        image: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/03/12/97693bad-f0cf-4cba-8dbb-baebcc351606-1615562660452-0a197b41f8dba7b22d60f665a7ec7916.jpg",
    },
    {
        name: "Kos kosan",
        image: "https://ik.imagekit.io/tvlk/generic-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20007673-8a58934f5e5e203f39d555eb89cdb65b.jpeg?_src=imagekit&tr=c-at_max,f-jpg,h-720,pr-true,q-40,w-1280",
    },
];

export default function Dashboard() {
    const scrollLeft = () => {
        const scrollContainer = document.getElementById("scroll-container");
        if (scrollContainer) {
            scrollContainer.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        const scrollContainer = document.getElementById("scroll-container");
        if (scrollContainer) {
            scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    return (
        <div>
            <Navbar currentUser={null} />
            <div className="min-h-screen bg-gradient-to-r from-blue-500 to-white-600 flex flex-col items-center p-6" style={{ backgroundColor: "#ddbf86" }}>
                {/* <header className="w-full bg-white bg-opacity-20 backdrop-blur-lg text-white py-4 text-center text-3xl font-bold shadow-md rounded-lg">
                    Welcome to DreamStay Hotels
                </header> */}

                <div className="max-w-5xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-10 flex flex-col justify-center">
                            <h1 className="text-5xl font-extrabold text-gray-800 mb-6">Wisma Rembulan</h1>
                            <p className="text-gray-600 text-lg mb-6">
                                Experience luxury and comfort at our world-class hotels. Get exclusive offers and the best rates for your stay.
                            </p>
                            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:opacity-90 transition transform hover:scale-105">
                                Book Now
                            </button>
                        </div>
                        <div className="relative h-72 md:h-auto">
                            <img
                                src="https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20007673-9896576628b000801a5f0345e47021ea.jpeg?tr=q-80,c-at_max,w-740,h-500&_src=imagekit"
                                alt="Hotel"
                                className="w-full h-full object-cover rounded-br-3xl"
                            />
                            <div className="absolute bottom-0 bg-black bg-opacity-50 text-white p-4 w-full text-center text-lg font-semibold rounded-br-3xl">
                                Limited-Time Offers Available
                            </div>
                        </div>
                    </div>
                </div>

                <button className="mt-10 px-10 py-4 bg-yellow-500 text-white text-2xl font-semibold rounded-full shadow-lg hover:bg-yellow-600 transition transform hover:scale-110">
                    Make a Reservation
                </button>
                <button className="mt-10 px-10 py-4 bg-blue-500 text-white text-xl font-semibold rounded-full shadow-lg hover:bg-yellow-600 transition transform hover:scale-110 flex">
                    <a href="https://www.google.com/maps?q=-6.2957995,106.8363537" target="_blank">Go to Location</a>
                    <FaLocationDot />
                </button>

                {/* <div className="bnl-widget-calendar-v1"></div>
                <div className="datepicker-widget-version1" data-months="12" data-url="bookandlink.com" data-arrow="false" data-rateplan="" data-roomtype="5169" data-property="1555" id="datepicker"></div>
                <script src="https://admin.bookandlink.com/public/js/widget/widget-calendar-v1.min.js"></script> */}


                <section className="mt-16 text-center max-w-4xl">
                    <h2 className="text-4xl font-extrabold text-white mb-6">Our Luxury Rooms</h2>
                    <div className="relative w-full flex items-center">
                        <button onClick={() => scrollLeft()} className="absolute left-0 z-10 bg-white p-2 rounded-full shadow-lg hover:scale-110">
                            <FaChevronLeft className="text-gray-800 text-2xl" />
                        </button>
                        <div id="scroll-container" className="flex overflow-x-scroll scroll-smooth space-x-6 p-4 no-scrollbar">
                            {rooms.map((room, index) => (
                                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden min-w-[300px] transform hover:scale-105 transition">
                                    <img src={room.image} alt={room.name} className="w-full h-48 object-cover" />
                                    <div className="p-4 text-gray-800 font-semibold text-lg text-center">{room.name}</div>
                                </div>
                            ))}
                        </div>
                        <button onClick={() => scrollRight()} className="absolute right-0 z-10 bg-white p-2 rounded-full shadow-lg hover:scale-110">
                            <FaChevronRight className="text-gray-800 text-2xl" />
                        </button>
                    </div>
                </section>

                <section className="mt-16 text-center max-w-3xl">
                    <h2 className="text-4xl font-extrabold text-white mb-6">Why Choose Us?</h2>
                    <div className="text-white space-y-4">
                        <p className="flex items-center justify-center gap-2 text-lg">
                            <FaCheckCircle className="text-green-300" /> Premium Services & Amenities
                        </p>
                        <p className="flex items-center justify-center gap-2 text-lg">
                            <FaCheckCircle className="text-green-300" /> Breathtaking Views & Locations
                        </p>
                        <p className="flex items-center justify-center gap-2 text-lg">
                            <FaCheckCircle className="text-green-300" /> Top-Notch Hospitality & Comfort
                        </p>
                    </div>
                </section>

                <footer className="w-full text-center py-6 mt-16 text-white text-lg bg-white bg-opacity-20 backdrop-blur-lg rounded-t-2xl">
                    &copy; 2025 Reza Tech. All Rights Reserved.
                </footer>
            </div>
        </div>
    )
}
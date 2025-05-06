import React, { useState, useCallback } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const BOT_TOKEN = "8031185324:AAGmZD4h_gdCsIlEmDMmTkDCHAffryzQ6jo";
const CHAT_ID = "@eslatmalr";

const Contact = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [agreed, setAgreed] = useState(false);

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        if (!agreed) return alert("Iltimos, rozilik belgilang.");

        const message = `📞 Yangi so'rov:\n👤 Ismi: ${name}\n📱 Telefon: +${phone}`;

        try {
            await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ chat_id: CHAT_ID, text: message }),
            });

            alert("So‘rovingiz muvaffaqiyatli yuborildi!");
            setName('');
            setPhone('');
            setAgreed(false);
        } catch (error) {
            console.error("Xatolik:", error);
            alert("Xatolik yuz berdi. Keyinroq urinib ko‘ring.");
        }
    }, [name, phone, agreed]);
    
    return (
        <div className='h-[100vh] flex items-center justify-center'>
            <div className="bace w-lg p-6 bg-white rounded-xl shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Bepul konsultatsiya</h2>
                <p className="text-sm text-gray-600 mb-5">
                    Telefon raqamingizni qoldiring, biz siz bilan bog‘lanamiz.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Ismingiz"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />

                    <PhoneInput
                        country="uz"
                        onlyCountries={['uz']}
                        value={phone}
                        onChange={setPhone}
                        inputClass="!w-full !py-2 px-3 !border !border-gray-300 !rounded-md focus:!border-blue-500"
                        containerClass="!w-full"
                        buttonClass="!border-none"
                        inputProps={{ name: 'phone', required: true }}
                    />

                    <label className="flex items-center gap-2 text-sm text-gray-600">
                        <input
                            type="checkbox"
                            checked={agreed}
                            onChange={(e) => setAgreed(e.target.checked)}
                            className="w-4 h-4"
                        />
                        Ma’lumotlarimni <a href="#" className="text-blue-600 underline">qayta ishlashga</a> roziman
                    </label>

                    <button
                        type="submit"
                        className="bg-green-500 hover:bg-green-600 text-white py-2 rounded-md font-semibold transition-all duration-300"
                    >
                        So‘rov yuborish
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact

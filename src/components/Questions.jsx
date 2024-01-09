import React, { useState } from 'react';

const faqs = [
    {
        question: 'What is Netflix?',
        answer: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.'
    },
    {
        question: 'How much dose Netflix cost?',
        answer: 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.'
    },
    {
        question: 'Where can i watch?',
        answer: 'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favourite shows with the iOS, Android, or Windows 10 app.Use downloads to watch while youre on the go and without an internet connection. Take Netflix with you anywhere.'
    },
    {
        question: 'How do i cancel?',
        answer: 'Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.'
    },
    {
        question: 'what can i watch on Netflix?',
        answer: 'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.'
    },
    {
        question: 'Is Netflix good for kids?',
        answer: 'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.'
    },


    // Add other questions and answers here...
];

function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (

        <div>
            <h2 className="text-3xl font-bold text-center text-white mb-6">Frequently Asked Questions</h2>

            {faqs.map((faq, index) => (
                <div key={index} className=" text-white bg-[#2d2d2d] hover:bg-[#414141] p-4 my-2">
                    <div
                        className="flex gap-4 justify-between items-center mb-2 cursor-pointer"
                        onClick={() => handleClick(index)}
                    >
                        <p className='text-2xl font-semibold '>{faq.question}</p>
                        <span className='text-5xl'>{activeIndex === index ? '-' : '+'}</span>
                    </div>
                    {activeIndex === index && <p className="mb-4 text-2xl font-semibold ">{faq.answer}</p>}
                </div>
            ))}

        </div>


    );
}

export default FAQ;

import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='p-16'>
            <div className='pt-5 mb-5'>
                <h1 className="text-4xl text-center font-bold text-primary ">My Protfolio</h1>
                <div className='border w-48 h-1 mx-auto mt-4 bg-amber-700'></div>
            </div>
            <div>
                <div className='text-center mb-5'>
                    <h1 className="text-3xl mb-2">Name: Md. Al Amin Islam</h1>
                    <p className="text-xl">Email: alamin.islambcpsc@gmail.com</p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 '>
                    <div>
                        <h1 className="text-2xl font-bold text-center mb-5">Educational Background</h1>

                        <div className='mb-5'>
                            <h1 className="text-2xl">Daffodil International University</h1>
                            <p>Dhaka,Bangladesh</p>
                            <h1 className="text-xl">Bachelor in Computer Science and Engineering</h1>
                            <p>2018-2022</p>
                            <p>Obtained CGPA 3.65(till 12th)</p>
                        </div>
                        <div className='mb-5'>
                            <h1 className="text-2xl">Bogura Cantonment Public School and College</h1>
                            <p>Bogura,Bangladesh</p>
                            <h1 className="text-xl">Higher School Certificate</h1>
                            <p>2017</p>
                            <p>Obtained GPA 5.00</p>


                        </div>
                        <div className='mb-5'>
                            <h1 className="text-2xl">Naogaon Govt. K.D. High School</h1>
                            <p>Naogaon,Bangladesh</p>
                            <h1 className="text-xl">Secondary School Certificate</h1>
                            <p>2015</p>
                            <p>Obtained GPA 5.00</p>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-center mb-5">Skills & Proficiencies</h1>
                        <div className='mb-5'>
                            <p><span className='text-2xl'>Comfortable: </span>C,HTML5,CSS3,Bootstrap5,Tailwindcss, JavaScript (ES6), React JS,Google,Firebase,React Router</p>
                            <p><span className='text-2xl'>Familiar: </span>C++, Python,Node,Express,MongoDB</p>
                            <p><span className='text-2xl'>Tools and Technologies: </span>GitHub,VS Code,Chrome Dev tools,Netlify, Figma,Firebase,Heroku</p>
                        </div>
                        <div>
                            <h2 className="text-2xl">Some Live Projects links</h2>
                            <p className='my-5'>Car House inventories website: <a className='text-blue-700' href="https://cars-house-bd.web.app/"> link</a></p>
                            <p className='my-5'>Single Service providing website: <a className='text-blue-700' href="https://consultant-point.web.app/"> link</a></p>
                            <p className='my-5'>Product Analysis website: <a className='text-blue-700' href="https://product-analysis-website-mohammad-al-amin-islam.netlify.app/"> link</a></p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;
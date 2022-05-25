import React from 'react';

const Blogs = () => {
    return (
        <div className='p-10 border-black'>
            <div className='pt-5 mb-5'>
                <h1 className="text-4xl text-center font-bold text-primary ">Blogs Area</h1>
                <div className='border w-56 h-1 mx-auto mt-4 bg-amber-700'></div>
            </div>
            <div className='bg-cyan-300 rounded-lg p-10 text-justify'>
                <div className='mb-5'>
                    <h1 className="text-xl font-bold">1. How will you improve the performance of a React Application?</h1>
                    <p>Ans: The way we improve the performance of a react application is we have to make sure that the components recieve only neccessary props.We have to prevent uneccessary re render.We have to avoid lazy loading images.Using local components we can imporve performance also.</p>
                </div>
                <div className='mb-5'>
                    <h1 className="text-xl font-bold">2. What are the different ways to manage a state in a React application?</h1>
                    <p>Ans:If we want to manage react app properly there is a four types of sate management in react.And that is Local state,global state,server state,url state.</p>
                </div>
                <div className='mb-5'>
                    <h1 className="text-xl font-bold">3. How does prototypical inheritance work?</h1>
                    <p>Ans:The way  Prototypal Inheritance work is that,it is a feature in javascript that is actually used for add methods and properties in objects. Using this method an object can get the properties and oder method from another object. Usually to get and set the properties  of an object, we use this.</p>
                </div>
                <div className='mb-5'>
                    <h1 className="text-xl font-bold">4. Why you do not set the state directly in React.?</h1>
                    <p>Ans: The reason we dont update the state is that if we update it directly it will not change the state immediately.Then it will create pending state and to access it later it will give only the present value.Thats why we dont set the data directly to a state.</p>
                </div>
                <div className='mb-5'>
                    <h1 className="text-xl font-bold">5. What is a unit test? Why should write unit tests?</h1>
                    <p>Ans: Unit testing  is a system of software testing where different types of unit, components from software or website are tested.And We should write unit tests because it isolates a section code and verify that it working properly or not.the unit can be separate function,object,method,procedure or module.It is done by the developers at the time of devloping any application. </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Clock, Star, User, BookOpen } from 'lucide-react';

export default function CourseDetails() {
    const { id } = useParams(); 
    const [course, setCourse] = useState(null);

    useEffect(() => {
        fetch('/hero.json')
            .then((res) => res.json())
            .then((data) => {
             
                const singleCourse = data.find((item) => item.id.toString() === id);
                setCourse(singleCourse);
            });
    }, [id]);

    if (!course) return <div className="text-center py-20">Loading...</div>;

    return (
        <div className="max-w-4xl mx-auto py-16 px-4">
            <img 
                src={course.image} 
                className="w-full h-96 object-cover rounded-3xl mb-8 shadow-lg" 
                alt={course.title} 
            />
            
            <div className="flex gap-4 mb-4">
                <span className="bg-orange-100 text-orange-700 px-4 py-1 rounded-full font-bold">
                    {course.level}
                </span>
                <div className="flex items-center text-yellow-500 font-bold">
                    <Star size={20} className="fill-current mr-1" />
                    {course.rating}
                </div>
            </div>

            <h1 className="text-4xl font-extrabold text-gray-900 mb-6">{course.title}</h1>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 p-6 bg-gray-50 rounded-2xl">
                <div className="flex flex-col items-center border-r">
                    <Clock className="text-blue-600 mb-2" />
                    <span className="text-xs text-gray-500">Duration</span>
                    <span className="font-bold">{course.duration}</span>
                </div>
                <div className="flex flex-col items-center border-r">
                    <User className="text-green-600 mb-2" />
                    <span className="text-xs text-gray-500">Instructor</span>
                    <span className="font-bold">{course.instructor}</span>
                </div>
                <div className="flex flex-col items-center border-r">
                    <BookOpen className="text-purple-600 mb-2" />
                    <span className="text-xs text-gray-500">Category</span>
                    <span className="font-bold">{course.category}</span>
                </div>
                <div className="flex flex-col items-center">
                    <Star className="text-yellow-600 mb-2" />
                    <span className="text-xs text-gray-500">Reviews</span>
                    <span className="font-bold">4.8k</span>
                </div>
            </div>

            <div className="prose max-w-none text-gray-700">
                <h2 className="text-2xl font-bold mb-4">Course Description</h2>
                <p className="leading-relaxed text-lg">{course.description}</p>
            </div>
            
            <button className="mt-10 w-full bg-red-700 text-white py-4 rounded-2xl text-xl font-bold hover:bg-red-800 transition-all">
                Enroll in this Course
            </button>
        </div>
    );
}
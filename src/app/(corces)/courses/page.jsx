'use client';

import React, { useEffect, useState } from 'react';
import { Clock, Users, Star } from 'lucide-react';
import Link from 'next/link'; 

export default function AllCourses() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
      
        fetch('/hero.json')
            .then((res) => res.json())
            .then((data) => setCourses(data))
            .catch((err) => console.error("Error fetching data:", err));
    }, []);

    return (
        <section className="py-16 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4">
              
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-gray-900">All Courses</h2>
                    <p className="text-gray-600 mt-2">Expand your knowledge with our expert-led courses</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course) => (
                        <div key={course.id} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
                        
                            <div className="h-56 w-full relative">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                        {course.level}
                                    </span>
                                    <div className="flex items-center text-yellow-500 font-bold">
                                        <Star size={14} className="fill-current mr-1" />
                                        <span>{course.rating}</span>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-gray-800 mb-2 leading-tight">
                                    {course.title}
                                </h3>
                                
                                <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                                    {course.description}
                                </p>

                               
                                <div className="mt-auto flex items-center justify-between text-gray-500 text-xs font-medium border-t pt-4">
                                    <div className="flex items-center gap-1">
                                        <Clock size={14} />
                                        <span>{course.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Users size={14} />
                                        <span>1,200 students</span>
                                    </div>
                                </div>

                               <Link href={`/courses/${course.id}`} className="mt-5 w-full bg-red-700 text-white py-3 rounded-xl font-bold hover:bg-red-800 transition-all text-center">
                                    View Details
                               </Link>
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
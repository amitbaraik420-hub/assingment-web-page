'use client'; 

import React, { useEffect, useState } from 'react';
import { Clock } from 'lucide-react'; 

export default function PopularCourses() {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        fetch('/hero.json')
            .then((res) => res.json())
            .then((data) => {
                console.log("Fetched Data:", data); 
                setCourses(data);
                setLoading(false);
            })
            .catch((err) => console.error("Fetch Error:", err));
    }, []);

    if (loading) return <div className="text-center py-10 text-xl font-bold">Loading Courses...</div>;

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-12">
                    Popular Courses
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.slice(0,6).map((course) => (
                        <div key={course.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
                        
                            <div className="relative h-48 w-full">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="p-5 text-center">
                                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-blue-100 text-blue-700">
                                    {course.level}
                                </span>

                                <h3 className="mt-3 text-lg font-bold text-gray-800 leading-tight">
                                    {course.title}
                                </h3>

                                <div className="mt-4 flex items-center justify-center text-gray-500 text-sm gap-2">
                                    <Clock size={16} />
                                    <span>{course.duration}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
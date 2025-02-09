import React from 'react'

export default function Footer() {
    return <>

        <footer className="bg-gray-900 text-white flex flex-col items-center py-8">
            <div className="flex justify-center w-full max-w-6xl">
                {/* العمود الأول */}
                <div className="w-1/3 text-center px-4">
                    <h4 className="font-bold">Location</h4>
                    <p>2215 John Daniel Drive</p>
                    <p>Clark, MO 65243</p>
                </div>

                {/* العمود الثاني */}
                <div className="w-1/3 text-center px-4">
                    <h4 className="font-bold">Around the Web</h4>
                </div>

                {/* العمود الثالث */}
                <div className="w-1/3 text-center px-4">
                    <h4 className="font-bold">About Freelancer</h4>
                    <p className="text-sm">
                        Freelance is a free to use, licensed Bootstrap theme created by Route.
                    </p>
                </div>
            </div>

            {/* حقوق الملكية */}
            <div className="mt-8 text-center w-full border-t border-gray-700 py-4">
                <p>Copyright © Your Website 2025</p>
            </div>
        </footer>


    </>
}

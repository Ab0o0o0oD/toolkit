// https://tailwind-starter-kit.vercel.app/docs/buttons
export const Buttons = () => {
    return (<>
        <button
            className="h-10 px-5 m-2 text-red-100 transition-colors duration-150 bg-red-700 rounded-lg focus:shadow-outline hover:bg-red-800">Danger
        </button>
        <button
            className="h-10 px-5 m-2 text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800">Success
        </button>
        <button
            className="h-10 px-5 m-2 text-blue-100 transition-colors duration-150 bg-blue-600 rounded-lg focus:shadow-outline hover:bg-blue-700">Info
        </button>
        <button
            className="h-10 px-5 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800">Secondary
        </button>
        <button
            className="h-10 px-5 m-2 text-pink-100 transition-colors duration-150 bg-pink-600 rounded-lg focus:shadow-outline hover:bg-pink-700">Pink
        </button>
        <button
            className="h-10 px-5 m-2 text-purple-100 transition-colors duration-150 bg-purple-600 rounded-lg focus:shadow-outline hover:bg-purple-700">Purple
        </button>
        <button
            className="h-10 px-5 text-gray-800 transition-colors duration-150 bg-white rounded-lg focus:shadow-outline hover:bg-gray-200">White
        </button>
    </>);
}


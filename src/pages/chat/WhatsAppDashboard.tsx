import React, {useEffect, useRef, useState} from 'react';
import './WhatsAppDashboard.css'; // Contains styles moved from <style> tag
import '@fortawesome/fontawesome-free/css/all.min.css';
import {Modal} from "../../component/ui/Modal.tsx";
import {ButtonOutline} from "../../component/ui/buttons/ButtonOutline.tsx";

export const WhatsAppDashboard: React.FC = () => {
    useEffect(() => {
        const floatingElements = document.querySelectorAll('.floating');
        floatingElements.forEach((el, index) => {
            (el as HTMLElement).style.animation = `float ${3 + index}s ease-in-out infinite`;
        });
    }, []);
    const [isOpenGoldModal, setIsOpenGoldModal] = useState(false)
    const [messages, setMessages] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const handleSend = () => {
        const trimmed = inputValue.trim();
        if (trimmed) {
            setMessages((prev) => [...prev, trimmed]);
            setInputValue('');
            setTimeout(() => {
                messagesEndRef.current?.scrollIntoView({behavior: 'smooth'});
            }, 100);
        }
    };


    return (
        <>
            <ButtonOutline text={'Chat with me'} onClick={() => setIsOpenGoldModal(true)}/>

            <Modal title={'Chat'} isOpen={isOpenGoldModal} setOpenModal={setIsOpenGoldModal}
                   className="w[600px] h-[800px]">
                <div className="bg-gray-900 text-white w[600px] h-[700px] overflow-hidden">
                    {/* Main Container */}
                    <div className="flex h-[700px] relative z-10">
                        {/* Sidebar */}
                        <div className="w-80 bg-gray-800 border-r border-gray-700 flex flex-col perspective-card">
                            <div className="card-3d h-full">
                                {/* Header */}
                                <div className="p-4 border-b border-gray-700 glass-effect">
                                    {/* User Info */}
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center space-x-3">
                                            <div className="relative">
                                                <img
                                                    src="https://lh3.googleusercontent.com/a/ACg8ocKglmNZhp-djrEiWhstceJqG7kyby7hUn0m3nix2w-WRmkjuTOH=s96-c"
                                                    alt="Profile"
                                                    className="w-10 h-10 rounded-full ring-2 ring-green-400 floating"
                                                />
                                                <div
                                                    className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-gray-800 online-indicator"></div>
                                            </div>
                                            <div>
                                                <h2 className="font-semibold text-white">Abdulrazak kanjo</h2>
                                                <p className="text-xs text-gray-400">Developer</p>
                                            </div>
                                        </div>
                                        <button className="p-2 hover:bg-gray-700 rounded-full transition-colors">
                                            <i className="fas fa-ellipsis-v text-gray-400"></i>
                                        </button>
                                    </div>
                                    {/* User Info */}
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center space-x-3">
                                            <div className="relative">
                                                <img
                                                    src="https://lh3.googleusercontent.com/a/ACg8ocKglmNZhp-djrEiWhstceJqG7kyby7hUn0m3nix2w-WRmkjuTOH=s96-c"
                                                    alt="Profile"
                                                    className="w-10 h-10 rounded-full ring-2 ring-green-400 floating"
                                                />
                                                <div
                                                    className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-gray-800 online-indicator"></div>
                                            </div>
                                            <div>
                                                <h2 className="font-semibold text-white">Ole Nordmann</h2>
                                                <p className="text-xs text-gray-400">Arkitekt</p>
                                            </div>
                                        </div>
                                        <button className="p-2 hover:bg-gray-700 rounded-full transition-colors">
                                            <i className="fas fa-ellipsis-v text-gray-400"></i>
                                        </button>
                                    </div>

                                    {/* Search Bar */}
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Search or start new chat"
                                            className="w-full bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
                                        />
                                        <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                                    </div>
                                </div>

                                {/* Chat List */}
                                <div className="flex-1 overflow-y-auto custom-scrollbar">
                                    {/* Chat Items can be abstracted to a component */}
                                    {/* ... */}
                                </div>
                            </div>
                        </div>

                        {/* Chat Area */}
                        <div className="flex-1 flex flex-col perspective-card">
                            <div className="card-3d flex flex-col h-full">
                                {/* Chat Header */}
                                <div className="p-4 border-b border-gray-700 glass-effect">
                                    {/* ... similar structure as sidebar header */}
                                </div>

                                {/* Messages Area */}
                                <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar"
                                     id="messagesArea">
                                    {messages.map((msg, idx) => (
                                        <div key={idx} className="text-right">
                                            <div
                                                className="bg-green-500 inline-block text-white py-2 px-4 rounded-lg shadow-md">
                                                {msg}
                                            </div>
                                        </div>
                                    ))}
                                    <div ref={messagesEndRef}/>
                                </div>

                                {/* Message Input */}
                                <div className="p-4 border-t border-gray-700 glass-effect">
                                    <div className="flex items-center space-x-3">
                                        <div className="flex-1 relative">
                                            <input
                                                type="text"
                                                placeholder="Type a message..."
                                                className="w-full bg-gray-700 text-white placeholder-gray-400 rounded-full pl-4 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
                                                value={inputValue}
                                                onChange={(e) => setInputValue(e.target.value)}
                                                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                            />
                                        </div>
                                        <button
                                            className="p-3 chat-gradient rounded-full hover:scale-105 transition-transform shadow-lg"
                                            onClick={handleSend}
                                        >
                                            <i className="fas fa-paper-plane text-white"></i>
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/*/!* Developer Credit *!/*/}
                    {/*<div className="fixed bottom-4 right-4 glass-effect rounded-lg p-3 floating">*/}
                    {/*    <div className="flex items-center space-x-2">*/}
                    {/*        <div className="w-8 h-8 chat-gradient rounded-full flex items-center justify-center">*/}
                    {/*            <i className="fas fa-code text-white text-xs"></i>*/}
                    {/*        </div>*/}
                    {/*        <div>*/}
                    {/*            <p className="text-xs text-white font-semibold">Developed by</p>*/}
                    {/*            <p className="text-xs text-green-400">Abdulrazak Kanjo</p>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </Modal>
        </>
    );
};


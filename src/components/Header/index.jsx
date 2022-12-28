import React from "react";
import { Link } from 'react-router-dom';
import payLogo from '../../assets/pay.svg'
export default function Sidebar() {
    
    return (
        <div className="flex">
            
            <div className="flex flex-col h-screen p-3 bg-blue-900 shadow w-30">
                <div className="space-y-3">
                    <div className="flex items-center">
                     <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M50 11.1111C73.6487 11.1111 92.5 29.9624 92.5 53.6111C92.5 77.2598 73.6487 96.1111 50 96.1111C26.3513 96.1111 7.5 77.2598 7.5 53.6111C7.5 29.9624 26.3513 11.1111 50 11.1111ZM50 13.8889C26.5019 13.8889 7.5 32.3898 7.5 53.6111C7.5 74.8323 26.5019 93.3333 50 93.3333C73.4981 93.3333 92.5 74.8323 92.5 53.6111C92.5 32.3898 73.4981 13.8889 50 13.8889Z" fill="#007AFF"/>
                            <path d="M38.3333 28.3333L61.6667 28.3333L61.6667 50L38.3333 50L38.3333 28.3333ZM45.8333 32.5L54.1667 32.5L54.1667 45.8333L45.8333 45.8333L45.8333 32.5Z" fill="#FFFFFF"/>
                            <path d="M38.3333 53.3333L61.6667 53.3333L61.6667 75L38.3333 75L38.3333 53.3333ZM45.8333 57.5L54.1667 57.5L54.1667 70.8333L45.8333 70.8333L45.8333 57.5Z" fill="#FFFFFF"/>
                            <text x="50" y="84" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#FFFFFF">Pagamentos</text>
                        </svg>
                    </div>
                    <div className="flex-1 text-white">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            <li className="rounded-sm">
                                <Link
                                    to="/Home"
                                    className="flex items-center p-2 space-x-3 rounded-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                    </svg>
    
                                    <span>Home</span>
                                </Link>
                            </li>
                            <li className="rounded-sm">
                                <Link
                                    to="/Payments"
                                    className="flex items-center p-2 space-x-3 rounded-md">

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>


                                    <span>Pacientes</span>
                                </Link>
                            </li>
                            <li className="rounded-sm">
                                
                            </li>
                            <li className="rounded-sm">
                                <Link
                                   to="/RegisterUser"
                                    className="flex items-center p-2 space-x-3 rounded-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                                    </svg>

                                    <span>Cadastrar Paciente</span>
                                </Link>
                            </li>
                            <li className="rounded-sm">
                                <Link
                                   to="/RegisterPayment"
                                    className="flex items-center p-2 space-x-3 rounded-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    <span>Cadastrar Pagamento</span>
                                </Link>
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
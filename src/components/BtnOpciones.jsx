"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";

const BtnOpciones = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between py-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute w-[80px] h-[80px] top-[63px] left-[78px] cursor-pointer bg-transparent border-none cursor-[5]"
        >
          <img src="@/public/img/menu/btn-opciones.png" alt="menu" />
        </button>

        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-start z-10">
            <div className="bg-gray-900 w-64 h-screen p-4">
              <button
                onClick={() => setIsOpen(false)}
                className="text-white text-lg mb-4"
              >
                ✖️
              </button>
              <nav className="space-y-4">
                <Link
                  href="/menu"
                  className="text-gray-300 hover:bg-gray-800 hover:border-l-4 hover:border-gray-300 hover:text-white block p-2 transition duration-200"
                >
                  <img
                    className="pl-[4px]"
                    src="/img/sidebar/casa-2.png"
                    alt=""
                  />
                  Menú
                </Link>
                <Link
                  href="/client/carrito"
                  className="text-gray-300 hover:bg-gray-800 hover:border-l-4 hover:border-gray-300 hover:text-white block p-2 transition duration-200"
                >
                  <img
                    className="pl-[4px]"
                    src="/img/sidebar/carrito-icon.png"
                    alt=""
                  />
                  Carrito
                </Link>
                <Link
                  href="/client/informacion"
                  className="text-gray-300 hover:bg-gray-800 hover:border-l-4 hover:border-gray-300 hover:text-white block p-2 transition duration-200"
                >
                  <img
                    className="pl-[4px]"
                    src="/img/sidebar/user-icon.png"
                    alt=""
                  />
                  Perfil
                </Link>
              </nav>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BtnOpciones;

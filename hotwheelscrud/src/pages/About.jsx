import React from "react";

export default function About() {
    return (
            <div className="flex flex-1 flex-col gap-4 p-8 pt-20">
                <h1 className="rounded-lg px-3 py-2 text-2xl font-bold">Sobre</h1>
                <p className="rounded-lg px-3 py-2">Aplicação construída para a matéria de <span className="font-bold text-[#d21601]">Desenvolvimento de Sistemas Front-end da PUCRS</span> para montagem de um CRUD com o foco principal no uso da bilioteca do <span className="font-bold text-[#d21601]">ReactJS <i class="fa-brands fa-react"></i></span>.</p>
            </div>
    );
    }

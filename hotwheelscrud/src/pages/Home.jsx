import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-8 pt-20">
      <h1 className='rounded-lg px-3 py-2 text-2xl font-bold'>Bem vindo ao <span className="font-bold text-[#d21601] ">Projeto CRUD de Hotwheels</span></h1>
      <p className='rounded-lg px-3 py-2'>Aqui você pode gerenciar seus carros</p>
      <div>
        <button className="btn bg-[#d21601] text-white">Github<a href='https://www.github.com/francatti'><i class="fa-brands fa-github"></i></a></button>
      </div>
      </div>
  );
}
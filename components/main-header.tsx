'use client';

import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import type { User } from 'next-auth';
import Image from 'next/image';
import { signOut } from 'next-auth/react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface HeaderProps {
  user: User | undefined;
}

const Header: React.FC<HeaderProps> = ({ user }) => {
  return (
    <header className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/images/wine_logo.png"
          alt="Wine Logo"
          width={40}
          height={40}
          className="mr-2"
        />
        <span className="text-2xl font-bold text-gray-800">Wine AI</span>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-6">
        {[
          "Início",
          "Serviços",
          "Comunidade",
          "Recursos",
          "Preços",
          "Contacto",
        ].map((link, index) => (
          <motion.a
            key={index}
            href="#"
            whileHover={{ scale: 1.1 }}
            className="text-gray-600 hover:text-gray-800"
          >
            {link}
          </motion.a>
        ))}
      </nav>

      {/* User Section */}
      <div className="flex items-center space-x-4">
        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-md hover:bg-gray-200">
                <Image
                  src={`https://avatar.vercel.sh/${user.email}`}
                  alt={user.email ?? 'User Avatar'}
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <span className="text-gray-800 font-medium truncate">
                  {user.email}
                </span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="top" className="w-48">
                {/* <DropdownMenuItem
                    className="cursor-pointer"
                    onSelect={() => {
                    console.log('Profile Clicked');
                    }}
                >
                    Profile
                </DropdownMenuItem> */}
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <button
                  type="button"
                  className="w-full text-left cursor-pointer"
                  onClick={() => signOut({ callbackUrl: '/' })}
                >
                  Sign out
                </button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <div className="flex items-center space-x-4">
            <button
              className={clsx(
                "border border-gray-400 text-gray-600 px-4 py-2 rounded-md",
                "hover:bg-gray-100"
              )}
            >
              Sign in
            </button>
            <button
              className={clsx(
                "bg-gray-800 text-white px-4 py-2 rounded-md",
                "hover:bg-gray-700"
              )}
            >
              Registrar
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

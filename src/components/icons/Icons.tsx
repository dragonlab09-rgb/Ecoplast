
import React from 'react';

export const IconWrapper: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = 'h-6 w-6' }) => (
  <div className={className}>{children}</div>
);

export const TargetIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const ShieldCheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" />
  </svg>
);

export const BookOpenIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
  </svg>
);

export const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962c.56-1.621 1.62-2.943 3-3.725C9.441 9.286 8.12 8 6.5 8c-1.15 0-2.16.6-2.78 1.575M15 14.5a3 3 0 01-3-3m5.5 0a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10.28 11.71a4.5 4.5 0 00-4.56 0" />
  </svg>
);

export const ChevronDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
);

export const ChevronUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
  </svg>
);

export const FireIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.622a8.987 8.987 0 013.362-3.884z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-5.18-4.32-9.45-9.75-9.45S0 6.82 0 12c0 5.18 4.32 9.45 9.75 9.45S19.5 17.18 19.5 12z" transform="translate(2.25, 1.5) scale(0.8)" />
  </svg>
);

export const GearIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-1.008 1.11-1.226.55-.218 1.19-.244 1.73.064l.08.068.082-.047c.27-.152.56-.25.86-.303.57-.1 1.16.14 1.58.58l.01.011.01-.01c.21-.21.48-.37.77-.47.57-.18 1.18.04 1.58.5l.01.01.01-.01c.42-.44.99-.68 1.58-.58.3.052.59.15.86.303l.082.047.08-.068c.54-.308 1.18-.282 1.73-.064.55.218 1.02.684 1.11 1.226l.004.026.01.004c.05.28.06.57.03.85l-.01.1-.03.1c-.2.6-.08 1.25.32 1.73l.01.01-.01.01c-.4.48-.52 1.13-.32 1.73l.03.1.01.1c-.03.28-.02.57.03.85l.01-.004.004.026c.09.542.56 1.008 1.11 1.226.55.218 1.19.244 1.73-.064l.08-.068.082.047c.27.152.56.25.86.303.57.1 1.16-.14 1.58-.58l.01-.011.01.01c.21.21.48.37.77.47.57.18 1.18-.04 1.58-.5l.01-.01.01.01c.42.44.99.68 1.58.58.3-.052.59-.15.86-.303l.082-.047.08.068c.54.308 1.18.282 1.73.064.55-.218 1.02-.684 1.11-1.226l.004-.026.01-.004c.05-.28.06-.57.03-.85l-.01-.1-.03-.1c-.2-.6-.08-1.25.32-1.73l.01-.01-.01-.01c-.4-.48-.52-1.13-.32-1.73l.03-.1.01-.1c-.03-.28-.02-.57.03-.85l.01.004-.004-.026zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" />
  </svg>
);
export const BeakerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.66.537-1.197 1.197-1.197h.006c.66 0 1.197.537 1.197 1.197v7.626c0 .66-.537 1.197-1.197 1.197h-.006a1.197 1.197 0 01-1.197-1.197V6.087zM6.75 6.087c0-.66.537-1.197 1.197-1.197h.006c.66 0 1.197.537 1.197 1.197v7.626c0 .66-.537 1.197-1.197 1.197H8.003a1.197 1.197 0 01-1.197-1.197V6.087z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12.25c0-4.142 3.358-7.5 7.5-7.5s7.5 3.358 7.5 7.5v.25h-15v-.25zM3.75 12.25h15" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 16h15" />
    </svg>
);
export const UserCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);
export const HardHatIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.235c.42.253.885.45 1.37.595C5.07 13.25 6.5 13.5 8 13.5h8c1.5 0 2.93-.25 4.38-.67.485-.145.95-.342 1.37-.595m-15.76 0c.42.253.885.45 1.37.595C5.07 13.25 6.5 13.5 8 13.5h8c1.5 0 2.93-.25 4.38-.67.485-.145.95-.342 1.37-.595m-15.76 0c.607.362 1.28.653 2.01.874C5.78 13.58 7.37 14 9.01 14h6.01c1.64 0 3.23-.42 4.63-.992.73-.22 1.403-.512 2.01-.874m-16.62 0c.607.362 1.28.653 2.01.874C5.78 13.58 7.37 14 9.01 14h6.01c1.64 0 3.23-.42 4.63-.992.73-.22 1.403-.512 2.01-.874m0 0a2.25 2.25 0 00-2.25-2.25H4.5A2.25 2.25 0 002.25 12" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

export const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const SendIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

export const BotIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6a2 2 0 100-4 2 2 0 000 4zM5 12a2 2 0 100-4 2 2 0 000 4zm14 0a2 2 0 100-4 2 2 0 000 4zM12 19a2 2 0 100-4 2 2 0 000 4z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14a8 8 0 00-8 8h16a8 8 0 00-8-8z" />
  </svg>
);

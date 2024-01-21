import { currentProfile } from '@/lib/current-profile'
import React from 'react'
import { ModeToggle } from '../mode-toggle';
import { UserButton } from '@clerk/nextjs';
import { NavigationAction } from './action-button';

const NavigationSidebar = async () => {

  const profile = await currentProfile();
  


  return (
    <div className="space-y-4 flex flex-col items-center h-full text-primary w-full dark:bg-[#1E1F22] bg-[#E3E5E8] py-3" >
      
      <NavigationAction />


      <div className="pb-3 mt-auto flex items-center flex-col gap-y-4">
        <ModeToggle />
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: "h-[48px] w-[48px]"
            }
          }}
        />
      </div>
    </div>
    
  )
}

export default NavigationSidebar
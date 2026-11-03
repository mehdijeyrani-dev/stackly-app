import { Calendar1, CalendarArrowUp, Heart, Inbox, Search } from 'lucide-react';
import { NavLink } from 'react-router';

const MobileBottomNav = () => {
  return (
   <div className="xs:hidden w-full h-16 bg-linear-to-t from-background to-background/0 fixed bottom-0 left-0 px-4 py-2">
        <div className="w-full h-full bg-[#ffffff01] backdrop-blur-xs rounded-full border border-surface-border/50 grid grid-cols-5 gap-0.5 p-1">
          <NavLink
            to="/inbox"
            className={({ isActive }) =>
              `h-full flex items-center justify-center rounded-full border ${isActive ? "bg-blue-500/5 text-blue-600 border-blue-500/10" : "bg-transparent hover:bg-surface border-transparent text-neutral-500"}`
            }
          >
            <Inbox size={20} />
          </NavLink>

          <NavLink
            to="/today"
            className={({ isActive }) =>
              `h-full flex items-center justify-center rounded-full border ${isActive ? "bg-blue-500/5 text-blue-600 border-blue-500/10" : "bg-transparent hover:bg-surface border-transparent text-neutral-500"}`
            }
          >
            <Calendar1 size={20} />
          </NavLink>
          <NavLink
            to="/search"
            className={({ isActive }) =>
              `h-full flex items-center justify-center rounded-full border ${isActive ? "bg-blue-500/5 text-blue-600 border-blue-500/10" : "bg-transparent hover:bg-surface border-transparent text-neutral-500"}`
            }
          >
            <Search size={20} />
          </NavLink>
          <NavLink
            to="/upcoming"
            className={({ isActive }) =>
              `h-full flex items-center justify-center rounded-full border ${isActive ? "bg-blue-500/5 text-blue-600 border-blue-500/10" : "bg-transparent hover:bg-surface border-transparent text-neutral-500"}`
            }
          >
            <CalendarArrowUp size={20} />
          </NavLink>
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              `h-full flex items-center justify-center rounded-full border ${isActive ? "bg-blue-500/5 text-blue-600 border-blue-500/10" : "bg-transparent hover:bg-surface border-transparent text-neutral-500"}`
            }
          >
            <Heart size={20} />
          </NavLink>
        </div>
      </div>
  )
}

export default MobileBottomNav
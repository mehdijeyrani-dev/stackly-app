// `import { Search } from "lucide-react";
// import { useState } from "react";
// import Button from "../ui/Button";

// const fakeTasks = [
//   {
//     id: "1",
//     title: "Learn React",
//     description: "Study React hooks and components",
//   },
//   {
//     id: "2",
//     title: "Build SearchBox",
//     description: "Create a reusable search component",
//   },
//   {
//     id: "3",
//     title: "Fix sidebar layout",
//     description: "Improve the responsive sidebar",
//   },
//   {
//     id: "4",
//     title: "Learn TypeScript",
//     description: "Practice interfaces and types",
//   },
//   {
//     id: "5",
//     title: "Build task modal",
//     description: "Implement the Add Task modal",
//   },
//   {
//     id: "56",
//     title: "Build task modal",
//     description: "Implement the Add Task modal",
//   },
//   {
//     id: "7",
//     title: "Build task modal",
//     description: "Implement the Add Task modal",
//   },
//   {
//     id: "8",
//     title: "Build task modal",
//     description: "Implement the Add Task modal",
//   },
// ];

// const SearchBox = () => {
//   const [showSearch, setShowSearch] = useState(false);
//   const [text, setText] = useState("");
//   const [showDropdown, setShowDropdown] = useState(false);

//   const filteredTasks = fakeTasks.filter((task) => {
//     const query = text.trim().toLowerCase();

//     return (
//       task.title.toLowerCase().includes(query) ||
//       task.description.toLowerCase().includes(query)
//     );
//   });

//   return (
//     <div
//       className={`relative flex items-center justify-center ${showSearch ? "w-80 h-7 focus-within:bg-neutral-200 dark:focus-within:bg-neutral-700/50" : "w-7 h-7"} transition-all duration-200 bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-md`}
//     >
//       {showSearch && (
//         <input
//           type="text"
//           value={text}
//           onChange={(e) => {
//             setText(e.target.value);
//             setShowDropdown(true);
//           }}
//           onFocus={() => {
//             if (text.trim()) setShowDropdown(true);
//           }}
//           placeholder="Search..."
//           className="w-full h-full pl-2 pr-8 outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
//           autoFocus
//         />
//       )}
//       <Button
//         onClick={() => {
//           if (text.trim()) return;
//           setShowSearch(!showSearch);
//         }}
//         className={`absolute top-1/2 -translate-y-1/2 bg-transparent hover:bg-surface-secondary text-neutral-400
//   transition-transform duration-200 ease-in-out
//   ${showSearch ? "translate-x-36" : "translate-x-0"}
// `}
//       >
//         <Search size={20} strokeWidth={1} />
//       </Button>

//       {showDropdown && text.trim() && (
//         <div className="w-full h-fit max-h-96 overflow-y-auto scrollbar-thin absolute top-full left-0 bg-neutral-200 dark:bg-neutral-800 z-50 mt-1 rounded-md border border-neutral-300 dark:border-neutral-700 p-1 flex flex-col gap-1">
//           {filteredTasks.length > 0 ? (
//             filteredTasks.map((task) => (
//               <button
//                 key={task.id}
//                 type="button"
//                 className="w-full rounded-md p-3 text-left bg-neutral-50 dark:bg-neutral-700/50 hover:bg-neutral-100 dark:hover:bg-neutral-700"
//                 onClick={() => {
//                   setText(task.title);
//                   setShowDropdown(false);
//                 }}
//               >
//                 <h2 className="text-sm text-neutral-800 dark:text-white">
//                   {task.title}
//                 </h2>
//                 <div className="mt-1 text-xs text-neutral-400">
//                   {task.description}
//                 </div>
//               </button>
//             ))
//           ) : (
//             <p className="p-3 text-sm text-neutral-400">No tasks found.</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchBox;

import Button from "../ui/Button";
import { Search } from "lucide-react";

const SearchBox = () => {
  return (
    <div className="">
      <Button
        variant="outline"
        color="secondary"
        iconSize="md"
        className="rounded-md"
      >
        <Search strokeWidth={1} />
      </Button>
    </div>
  );
};

export default SearchBox;

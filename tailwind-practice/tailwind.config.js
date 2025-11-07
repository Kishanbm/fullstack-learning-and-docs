module.exports = {
  // include both nested and top-level html files in src
  content: [
    "./src/**/*.{html,js,tsx}", 
    "./src/*.{html,js,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./component-showcase.html",
    "./index.html",
    "./main.jsx"
    
  ],
  // Updated safelist with all classes used in the new dashboard
  safelist: [
    // Layout & structure
    'flex','flex-col','flex-1','h-screen','bg-white','grid','grid-cols-2','w-64','w-72','w-96','block','relative',
    'grid-cols-1','md:grid-cols-2','lg:grid-cols-3','md:grid-cols-3','max-w-7xl','mx-auto','max-w-md','max-w-2xl',
    'min-h-screen','sticky','top-0','z-50','overflow-hidden','hidden','md:hidden','md:flex','sm:px-6','lg:px-8',
    
    // Spacing & sizing
    'p-2','p-4','p-5','p-6','p-8','px-3','py-1','py-2','pl-10','pr-4','mb-1','mb-2','mb-3','mb-6','mt-2','gap-4','gap-6','space-x-4','space-y-3',
    'px-4','px-6','py-3','px-2.5','py-0.5','space-x-3','space-x-8','ml-2','h-16','h-48','w-6','h-6','w-8','h-8','w-full','h-full',
    
    // Colors & backgrounds - Original
    'bg-gray-800','bg-gray-100','text-white','text-gray-200','text-gray-300','text-gray-500','text-gray-600','text-gray-700',
    'text-blue-300','text-blue-700','border-blue-200','bg-blue-600','bg-blue-700','text-blue-600','hover:bg-blue-700',
    'bg-gray-200','bg-gray-300','hover:bg-gray-300','hover:bg-gray-100','hover:bg-gray-50','text-gray-800','bg-gray-50',
    
    // Colors & backgrounds - Component specific
    'bg-green-100','text-green-700','bg-yellow-100','text-yellow-700','bg-red-100','text-red-700',
    'bg-blue-100','border-gray-200','border-gray-300','hover:border-gray-400','border-2',
    
    // Colors & backgrounds - New (Teal & Slate)
    'bg-slate-800','bg-slate-900','text-teal-400','text-teal-700','border-teal-200','border-t-teal-500',
    'text-green-600','text-red-600','placeholder-gray-500','from-teal-700','to-slate-800',
    
    // Gradients
    'bg-gradient-to-r','bg-gradient-to-b','bg-gradient-to-br','bg-gradient-to-t',
    'from-blue-500','from-blue-50','from-gray-800','from-blue-600','from-black/20',
    'to-blue-700','to-blue-100','to-gray-900','to-blue-600','to-transparent',
    
    // Border & rounded
    'rounded','rounded-lg','rounded-xl','rounded-sm','rounded-md','rounded-full','border','border-none','border-t-4',
    
    // Shadows & effects
    'shadow','shadow-md','shadow-lg','shadow-2xl','shadow-sm','hover:shadow-lg','hover:shadow-xl',
    
    // Typography
    'text-xs','text-sm','text-base','text-lg','text-xl','text-2xl','text-4xl',
    'font-bold','font-semibold','font-medium','font-extrabold','uppercase','tracking-wider','italic',
    'leading-relaxed','line-clamp-2',
    
    // Positioning & alignment
    'items-center','justify-between','justify-center','place-items-center','flex-shrink-0',
    'absolute','inset-0','object-cover','relative',
    
    // Interactive & Focus states
    'cursor-pointer','cursor-not-allowed','focus:outline-none','focus:ring-2','focus:ring-offset-2',
    'focus:ring-blue-500','focus:ring-gray-500','focus:ring-teal-500','disabled:opacity-50','disabled:cursor-not-allowed',
    
    // Transitions & animations
    'transition','transition-all','transition-colors','transition-transform','transition-opacity',
    'duration-200','duration-300','ease-in-out','transform',
    
    // Hover effects
    'hover:text-white','hover:text-gray-300','hover:text-blue-300','hover:text-teal-400','hover:text-gray-800',
    'hover:bg-white','hover:bg-blue-900','hover:bg-slate-800','hover:bg-opacity-20','hover:bg-opacity-30',
    'hover:shadow-lg','hover:shadow-2xl','hover:-translate-y-1','hover:-translate-y-0.5','hover:scale-105',
    'hover:border-gray-400','rotate-90',
    
    // Responsive utilities
    'max-h-96','max-h-0','opacity-100','opacity-0'
  ],
  theme: { extend: {} },
  plugins: [],
}


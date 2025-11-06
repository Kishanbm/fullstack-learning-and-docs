module.exports = {
  // include both nested and top-level html files in src
  content: ["./src/**/*.{html,js,tsx}", "./src/*.{html,js,tsx}"],
  // Updated safelist with all classes used in the new dashboard
  safelist: [
    // Layout & structure
    'flex','flex-col','flex-1','h-screen','bg-white','grid','grid-cols-2','w-64','w-72','w-96','block','relative',
    // Spacing & sizing
    'p-2','p-4','p-5','p-6','p-8','px-3','py-1','py-2','pl-10','pr-4','mb-1','mb-2','mb-3','mb-6','mt-2','gap-4','gap-6','space-x-4','space-y-3',
    // Colors & backgrounds - Original
    'bg-gray-800','bg-gray-100','text-white','text-gray-200','text-gray-300','text-gray-500','text-gray-600','text-gray-700',
    'text-blue-300','text-blue-700','border-blue-200',
    // Colors & backgrounds - New (Teal & Slate)
    'bg-slate-800','bg-slate-900','text-teal-400','text-teal-700','border-teal-200','border-t-teal-500',
    'text-green-600','text-red-600','placeholder-gray-500',
    // Gradients - Original
    'bg-gradient-to-r','bg-gradient-to-b','bg-gradient-to-br',
    'from-blue-500','from-blue-50','from-gray-800',
    'to-blue-700','to-blue-100','to-gray-900',
    // Gradients - New
    'from-teal-700','to-slate-800',
    // Border & rounded
    'rounded','rounded-lg','rounded-xl','rounded-sm','border','border-none','border-t-4',
    // Shadows & effects
    'shadow','shadow-md','shadow-lg','shadow-2xl',
    // Typography - Original
    'text-sm','text-lg','text-xl','text-2xl','font-bold','font-semibold',
    // Typography - New
    'text-xs','text-base','text-4xl','font-extrabold','uppercase','tracking-wider','italic',
    // Positioning & alignment
    'items-center','justify-between','justify-center','place-items-center',
    // Transitions & hover effects
    'transition','transition-all','duration-200',
    'hover:text-white','hover:text-gray-300','hover:text-blue-300','hover:text-teal-400',
    'hover:bg-white','hover:bg-blue-900','hover:bg-slate-800','hover:bg-opacity-20','hover:bg-opacity-30',
    'hover:shadow-lg','hover:shadow-2xl','hover:-translate-y-1',
    // Focus states
    'focus:outline-none','focus:ring-2','focus:ring-teal-500'
  ],
  theme: { extend: {} },
  plugins: [],
}


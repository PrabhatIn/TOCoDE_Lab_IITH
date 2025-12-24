export const MeshBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-0 left-0 w-full h-full gradient-mesh opacity-50" />
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="mesh-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 0 0 L 50 25 L 100 0 M 0 50 L 50 75 L 100 50 M 0 100 L 50 75 L 100 100" 
                  stroke="currentColor" 
                  strokeWidth="0.5" 
                  fill="none" 
                  className="text-primary/20" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#mesh-pattern)" />
      </svg>
    </div>
  );
};

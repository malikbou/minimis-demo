interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`w-full px-4 md:px-8 lg:px-16 ${className}`}>
      <div className="mx-auto w-full max-w-7xl">
        {children}
      </div>
    </div>
  );
}

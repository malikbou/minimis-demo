export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-screen-2xl px-4 md:px-8 lg:px-12">
      {children}
    </div>
  );
}

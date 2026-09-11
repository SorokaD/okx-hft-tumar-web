type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  wide?: boolean;
};

export function Container({
  children,
  className = "",
  wide = false,
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full ${wide ? "max-w-6xl" : "max-w-5xl"} px-6 md:px-8 ${className}`}
    >
      {children}
    </div>
  );
}

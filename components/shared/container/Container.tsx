const Container = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 w-full h-full">
      {children}
    </main>
  );
};

export default Container;

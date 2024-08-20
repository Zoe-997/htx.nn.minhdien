import "@/app/globals.css";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <main className="h-screen flex items-center justify-center bg-[#F8F8F8] p-5">
      <div className="bg-white p-10 rounded-xl overflow-hidden w-full max-w-[500px]">
        {children}
      </div>
    </main>
  );
}

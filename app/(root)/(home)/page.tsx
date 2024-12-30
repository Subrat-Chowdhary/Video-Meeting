'use client';
import { useUser } from "@clerk/nextjs";
import MeetingTypeList from '@/components/MeetingTypeList';

const Home = () => {
  const now = new Date();
  const { user } = useUser();

  // const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const date = (new Intl.DateTimeFormat('en-US', { dateStyle: 'full' })).format(now);

  return (
    <section className="flex size-full flex-col gap-5 text-white">
      <div className="h-[240px] md:h-[303px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-12 max-md:py-12 lg:p-11 rounded-full md:p-16">
          <h2 className="glassmorphism max-w-[273px] rounded-xl py-2 text-center text-2xl  text-gray-100 font-extrabold">
            Development Server
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-2xl">Hey <span className="text-yellow-400">{user?.firstName}!</span></h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;

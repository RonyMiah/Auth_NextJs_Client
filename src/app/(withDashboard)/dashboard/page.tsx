import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';
import Image from 'next/image';

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <div className="text-center ">
      {session?.user && (
        <>
          <h1 className="text-4xl text-center mt-10 my-4">
            Welcome To {session?.user?.name}
          </h1>
          <h2>And Your Email is {session?.user?.email}</h2>
          <Image
            src={
              session?.user?.image ||
              'https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg'
            }
            alt="User Images"
            width={200}
            height={200}
            className="mx-auto rounded-full my-5"
          />
        </>
      )}
    </div>
  );
};

export default DashboardPage;

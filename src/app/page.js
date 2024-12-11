import Link from "next/link";

export default function Home() {
  const routes = [
    {
      name: "login",
      route: "login",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4 bg-gray-900 min-h-screen">
      {routes.map((route, index) => (
        <Link
          href={route.route}
          key={index}
          className="bg-white rounded-lg h-fit w-full sm:w-64 md:w-80 lg:w-96 p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <h2 className="text-xl font-semibold text-gray-800">{route.name}</h2>
          <p className="text-gray-500">/{route.route}</p>
        </Link>
      ))}
    </div>
  );
}

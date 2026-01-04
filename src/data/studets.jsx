const students = [
  {
    id: 1,
    name: "Ali",
    surname: "Karimov",
    instagram: "https://instagram.com/ali_karimov",
    telegram: "https://t.me/ali_karimov",
    avatar: "https://i.pravatar.cc/150?img=20",
  },
  {
    id: 2,
    name: "Vali",
    surname: "Rasulov",
    instagram: "https://instagram.com/vali_rasulov",
    telegram: "https://t.me/vali_rasulov",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "Hasan",
    surname: "Shokirov",
    instagram: "https://instagram.com/hasan_shokirov",
    telegram: "https://t.me/hasan_shokirov",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 4,
    name: "Malika",
    surname: "Yusupova",
    instagram: "https://instagram.com/malika_yusupova",
    telegram: "https://t.me/malika_yusupova",
    avatar: "https://i.pravatar.cc/150?img=4",
  },
  {
    id: 5,
    name: "Nilufar",
    surname: "Eshmatova",
    instagram: "https://instagram.com/nilufar_eshmatova",
    telegram: "https://t.me/nilufar_eshmatova",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 6,
    name: "Jasur",
    surname: "Tursunov",
    instagram: "https://instagram.com/jasur_tursunov",
    telegram: "https://t.me/jasur_tursunov",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    id: 7,
    name: "Diyor",
    surname: "Abdullayev",
    instagram: "https://instagram.com/diyor_abdullayev",
    telegram: "https://t.me/diyor_abdullayev",
    avatar: "https://i.pravatar.cc/150?img=55",
  },
  {
    id: 8,
    name: "Saida",
    surname: "Rahmatova",
    instagram: "https://instagram.com/saida_rahmatova",
    telegram: "https://t.me/saida_rahmatova",
    avatar: "https://i.pravatar.cc/150?img=67",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-5">
      <h1 className="text-3xl font-bold mb-8">Bolalar Ro'yxati</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {students.map((student) => (
          <div
            key={student.id}
            className="bg-white shadow-lg rounded-xl p-5 flex flex-col items-center hover:scale-105 transition-transform"
          >
            <img
              src={student.avatar}
              alt={`${student.name} ${student.surname}`}
              className="rounded-full h-20 w-20 object-cover mb-4"
            />
            <h2 className="text-xl font-semibold">
              {student.name} {student.surname}
            </h2>
            <div className="flex flex-col mt-2 space-y-1">
              <a
                href={student.instagram}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:underline"
              >
                Instagram
              </a>
              <a
                href={student.telegram}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:underline"
              >
                Telegram
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default students;

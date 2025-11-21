export default function SeedCategoryCard({ seedCategory }) {
  return (
    <a href={seedCategory?.action?.link} className="block">
      <img
        className="w-32 h-32 rounded-full object-cover border-2 border-black shadow-md  "
        src={seedCategory?.image}
        alt={seedCategory?.title}
      />
      <h3 className="text-center mt-2 font-semibold">{seedCategory?.title}</h3>
    </a>
  );
}

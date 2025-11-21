import SeedCategoryCard from "./SeedCategoryCard";

const seedCategoriesData = [
  {
    // title: "Vegetable Seeds",
    image:"https://cdn.bazodo.com/images/c/11-category_default.jpg",
    action: {
      link: "/vegetable-seeds"
    }
  },
  {
    // title: "Flower Seeds",
    image:"https://cdn.bazodo.com/images/c/12-category_default.jpg" ,
    action: {
      link: "/flower-seeds"
    }
  },
  {
    // title: "Herbs & Medicinal Seeds",
    image: "https://cdn.bazodo.com/images/c/73-category_default.jpg",
    action: {
      link: "/herb-seeds"
    }
  },

{
    // title: "Aromatic Seeds",
    image:"https://cdn.bazodo.com/images/c/48-category_default.jpg",
    action: { link: "/aromatic-seeds" }
  },
  {
    // title: "Aquatic Plant Seeds",
    image: "https://cdn.bazodo.com/images/c/13-category_default.jpg",
    action: { link: "/aquatic-seeds" }
  },
  {
    // title: "Bonsai Seeds",
    image: "https://cdn.bazodo.com/images/c/13-category_default.jpg",
    action: { link: "/bonsai-seeds" }
  },
  {
    title: "Cactus & Succulent Seeds",
    image:"https://cdn.bazodo.com/images/c/76-category_default.jpg",
    action: { link: "/cactus-succulent-seeds" }
  },
  {
    title: "Hybrid Seeds Collection",
    image: "https://cdn.bazodo.com/images/c/39-category_default.jpg",
    action: { link: "/hybrid-seeds" }
  }




];

export default function SeedCategoryOption() {
  return (
    <div className="mt-20 w-[80%] container mx-auto">
      <h1 className="text-3xl font-bold text-center">
        Explore Seed Collection
      </h1>

      <div className="w-[80%] mx-auto flex flex-wrap mt-10 gap-5 justify-center">
        {seedCategoriesData.map((item) => (
          <SeedCategoryCard
            key={item.title}
            seedCategory={item}
          />
        ))}
      </div>
    </div>
  );
}

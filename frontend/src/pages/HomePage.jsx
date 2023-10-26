import { useAuth } from "../context/AuthContext";
import { Card } from "../components/ui";

function HomePage() {
  const data = useAuth();
  return (
    <div>
      <Card>

      <h1 className="text-3xl font-bold my-4">Home Page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aliquid omnis blanditiis distinctio consequatur, suscipit praesentium autem illo quam aperiam porro quae hic facilis, alias nisi voluptate rem illum ratione!</p>
      </Card>
    </div>
  );
}

export default HomePage;

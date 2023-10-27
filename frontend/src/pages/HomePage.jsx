import { useAuth } from "../context/AuthContext";
import { Card } from "../components/ui";
import { ItemsCard } from "../components/Home/ItemsCard";
import HomeInit from "../components/Home/homeInit/HomeInit";
import LoginRegister from "../components/Home/loginRegister/LoginRegister"
function HomePage() {
  const data = useAuth();
  return (
    <div>
      <Card>
        <HomeInit />
        <LoginRegister/>
        <ItemsCard />
      </Card>
    </div>
  );
}

export default HomePage;

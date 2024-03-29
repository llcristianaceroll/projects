import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    userName: "llcristianaceroll",
    name: "Cristian Acero",
    isFollowing: true,
  },
  {
    userName: "leidycristinahurtado",
    name: "Leidy Hurtado",
    isFollowing: true,
  },
  {
    userName: "drageloz",
    name: "Andres Suarez",
    isFollowing: false,
  },
  {
    userName: "drageloz",
    name: "Andres Suarez",
    isFollowing: false,
  },
];

export function App() {
  return (
    <section className="App">
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard key={userName} userName={userName} initIsFollowing={isFollowing}>
            {name}
          </TwitterFollowCard>
      ))
      }
    </section>
  );
}

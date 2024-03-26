import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    <section className="App">

      <TwitterFollowCard isFollowing userName="llcristianaceroll" >
      Cristian Acero
      </TwitterFollowCard>
      <TwitterFollowCard userName="leidycristinahurtado" >
       Leidy Hurtado
      </TwitterFollowCard>
      <TwitterFollowCard isFollowing={false} userName="drageloz" >
      Andres Suarez
      </TwitterFollowCard>
    </section>
  );
}

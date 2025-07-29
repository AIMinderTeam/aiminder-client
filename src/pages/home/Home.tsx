import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const handleGoal = () => {
    navigate('/goal');
  };
  const handleAiAssistant = () => {
    navigate('/ai-assistant');
  };
  const handleHome = () => {
    navigate('/');
  };
  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div>
      <button onClick={handleGoal}>Goal</button>
      <button onClick={handleAiAssistant}>AI Assistant</button>
      <button onClick={handleHome}>Home</button>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

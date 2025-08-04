import { Button } from "@/components/ui/button";

import Search from "./Components/ui/Search/Search"

import Header from "./Components/ui/Header";


function App() {
  return (
    <>
    <Header/>
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Search/>
    </div>
    </>
  );
}

export default App;
